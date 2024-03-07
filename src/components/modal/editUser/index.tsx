"use client";

import { useForm } from "react-hook-form";
import { z, ZodIssue, ZodError } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
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
import { useState } from "react";



const formSchema = z.object({
  nomeUsuario: z.string().min(4, {
    message: "Nome de usuário precisa ter mais de 4 caracteres",
  }),
  email: z.string().email({ message: "E-mail invalido" }),
  password: z.string().min(4, {
    message: "senha precisa ter mais de 4 caracteres",
  }),
  comfirmPassword: z.string().min(4, {
    message: "senha precisa ter mais de 4 caracteres",
  }),
}); /* .refine((data) => data.password === data.comfirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
}); */



export function ProfileForm() {
  const [errorPassword, setErrorPassword] = useState<string>('')
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nomeUsuario: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    
    const { password, comfirmPassword } = values;
    if (password !== comfirmPassword) {
      setErrorPassword('as senhas precisam combinar');
    }
    
   /*  const passwordValidation = z
      .object({
        password: z.string(),
        comfirmPassword: z.string(),
      })
      .refine(
        (values) => {
          return values.password === values.comfirmPassword;
        },
        {
          message: "As senhas devem corresponder!",
          path: ["confirmPassword"],
        }
      );
    try {
      passwordValidation.parse({ password, comfirmPassword });
    } catch (error) {
      if (error instanceof ZodError) {
        const dataErro = JSON.parse(error.message)[0].message;
       console.log(dataErro);
       
  
      } else {
        console.error("Unknown error:", error);
      }
    } */
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col ">
        <div className="ml-auto mr-auto relative">
          <Image width={120} height={120} src={PhotoUser} alt="teste" />
          {/* <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="w-[42px] h-[42px] cursor-pointer">
                  <Image className="absolute bottom-0 right-0" width={42} height={42} src={CameraIcone} alt="ìcone camera" />
                  </FormLabel>
                <FormControl>
                  <Input type="file" className="hidden" placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          >
          
          </FormField> */}
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
                  <PasswordInput className={errorPassword && `border-tertiary-error`} placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="comfirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Comfirmar nova senha</FormLabel>
                <FormControl>
                  <PasswordInput className={errorPassword && `border-tertiary-error`}  placeholder="" {...field} />
                </FormControl>
                <FormMessage />
                {errorPassword ? (<p>{errorPassword}</p>) : ''}
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
