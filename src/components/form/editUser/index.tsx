"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { PasswordInput } from "@/components/password-input";
import { editUser } from "@/services/user";
import { toastify } from "@/lib/Toast";
import { redirect, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { AxiosError } from "axios";

import Image from "next/image";

import orangeDesktop from "../../../assets/shape/ellipse-orange-full.png";
import PhotoUser from "@/../public/photo-user.png";
import CameraIcone from "@/../public/camera.png";
import { ChangeEvent, useState } from "react";

export type DeafaultBackError = {
  statusCode: number;
  message: string;
};

export type UserProps = {
  user_id: string;
  token: string;
  id: string;
};

const formSchema = z
  .object({
    username: z
      .optional(z.literal(''))
      .or(z
        .string()
        .min(3, { message: "Nome de usuário precisa ter mais de 3 caracteres" })
      ),
    image: z
      .optional(z.literal(''))
      .or(z
        .any()
      ),
    email: z
      .optional(z.literal(''))
      .or(z
          .string()
          .email({ message: "Formato de e-mail inválido" })
      ),
    password: z
      .optional(z.literal(''))
      .or(z
        .string()
        .min(6, { message: "A senha precisa ter mais de 6 caracteres" })
        .max(12, { message: 'A senha não pode ultrapassar 12 caracteres' })
      ),
    confirmPassword: z
      .optional(z.literal(''))
      .or(z
        .string()
      ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas precisam combinar",
    path: ["confirmPassword"],
  });

export function ProfileForm( {handleRedirect}: any ) {
  type FormDataState = {
    username: string;
    email: string;
    image: File | null;
};
  const [selectedFile, setSelectedFile] = useState("");
  const initialFormData: FormDataState = {
    username: '',
    email: '',
    image: null
};
const [formData, setFormData] = useState<FormDataState>(initialFormData);
  const [imageMul, setImageMul] = useState<File | null>(null);
  const session = useSession();
  const userSession = session.data?.user as UserProps;
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    mode: "onBlur",
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      image: null,
    },
  });

  function handleImage(event: ChangeEvent<HTMLInputElement>) {
    const dataTransfer = new DataTransfer();
    Array.from(event.target.files!).forEach((image) =>
      dataTransfer.items.add(image)
    );

    const file = dataTransfer.files[0];
    const newFormData = new FormData();
    newFormData.append('imagem', file);
    const displayUrl = URL.createObjectURL(file);
    setSelectedFile(displayUrl)
    const imagem = newFormData.get('imagem');
if (imagem !== null && imagem instanceof File) {
  setFormData({ ...formData, image: imagem });
}
    return { formData, displayUrl };
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (
      !values.username && 
      !values.email && 
      !values.password && 
      !values.confirmPassword && 
      !values.image) {
        return
    };
    
    const { confirmPassword, ...data }  = values;
    data.image = imageMul
    setFormData(data)
    console.log(formData);
    
    
    return

    try {
      const editedUser = await editUser(`user/${userSession?.user_id}`, data);

      if (editedUser) {
        router.push("/dashboard");
      }
    } catch (error) {
      if ((error as AxiosError).response) {
        const errorMessage = (error as AxiosError).response;
        const errorBack = errorMessage?.data as DeafaultBackError;
        if (errorBack) {
          toastify.error(errorBack.message);
        } else {
          console.log(errorMessage?.data);
        }
      }
    } 
  }

  return (
    <Form {...form}>
      <Image
        src={orangeDesktop}
        alt="elípse laranja"
        className="absolute -top-28 right-0 translate-x-64 rotate-6 -translate-y-24 -z-10 max-w-md 
        laptop:translate-x-44 
        laptop:rotate-2 laptop:-translate-y-32
        desktop:translate-x-36 
        "
      />
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col">
        <div className="ml-auto mr-auto relative w-32">
          <Image
            width={120}
            height={120}
            className="rounded-full w-[120px] h-[120px] object-cover"
            src={selectedFile ? selectedFile : PhotoUser}
            alt="Foto do perfil do usuário"
          />
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="w-[42px] h-[42px] cursor-pointer">
                  <Image
                    className="absolute bottom-0 right-0"
                    width={42}
                    height={42}
                    src={CameraIcone}
                    alt="Ícone camera"
                  />
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="file"
                    className="hidden"
                    onChange={handleImage}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
        </div>
        <h1 className="text-center my-4">Edite seu cadastro</h1>
        <div className="flex flex-col gap-4 mb-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome de Usuário</FormLabel>
                <FormControl>
                  <Input placeholder="Insira seu novo nome de usuário" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input placeholder="Insira seu novo e-mail" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nova Senha</FormLabel>
                <FormControl>
                  <PasswordInput placeholder="insira sua nova senha" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirmar nova senha</FormLabel>
                <FormControl>
                  <PasswordInput placeholder="Insira sua nova senha" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" variant="purple">
          Confirmar
        </Button>
        <hr className="w-[180px] my-6 mx-auto" />
        <Button type="reset" variant="orangeSecond" onClick={handleRedirect}>
          Cancelar
        </Button>
      </form>
    </Form>
  );
}

export default ProfileForm;
