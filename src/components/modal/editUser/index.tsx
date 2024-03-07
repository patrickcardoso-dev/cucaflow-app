"use client";

import { useForm } from "react-hook-form";
import { z} from "zod";
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

import Image from "next/image";

import PhotoUser from "@/../public/photo-user.png";
import CameraIcone from "@/../public/camera.png";
import { ChangeEvent, useState } from "react";

const formSchema = z
  .object({
    nomeUsuario: z.string().min(3, {
      message: "Nome de usuário precisa ter mais de 3 caracteres",
    }),
    image: z.any().optional(),
    email: z.string().email({ message: "E-mail invalido" }),
    password: z.string().min(6, {
      message: "senha precisa ter mais de 6 caracteres",
    }),
    confirmPassword: z.string().min(6, {
      message: "senha precisa ter mais de 6 caracteres",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas precisam combinar",
    path: ["confirmPassword"],
  });


export function ProfileForm() {
  const [selectedFile, setSelectedFile] = useState('');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nomeUsuario: "",
    },
  });

  function handleImage(event : ChangeEvent<HTMLInputElement>) {
    const dataTransfer = new DataTransfer();
    Array.from(event.target.files!).forEach((image) =>
      dataTransfer.items.add(image)
    );
  
    const files = dataTransfer.files;
    const displayUrl = URL.createObjectURL(event.target.files![0]);
    setSelectedFile(displayUrl)
    
    return { files, displayUrl };
    }

  function onSubmit(values: z.infer<typeof formSchema>) {
      console.log(values);
      
  
  }
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col ">
        <div className="ml-auto mr-auto relative w-32">
          <Image width={120} height={120} className="rounded-full w-[120px] h-[120px]" src={selectedFile ? selectedFile : PhotoUser} alt="teste" />
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
                    alt="ìcone camera"
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
        <h1 className="text-center my-2">Edite seu cadastro</h1>
        <div className="mb-4">
          <FormField
            control={form.control}
            name="nomeUsuario"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome de Usuário</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
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
                  <Input placeholder="" {...field} />
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
                  <PasswordInput placeholder="" {...field} />
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
                <FormLabel>Comfirmar nova senha</FormLabel>
                <FormControl>
                  <PasswordInput placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" variant="purple">
          Comfirmar
        </Button>
        <Button className="mt-3" type="reset" variant="orangeSecond">
          Cancelar
        </Button>
      </form>
    </Form>
  );
}

export default ProfileForm;
