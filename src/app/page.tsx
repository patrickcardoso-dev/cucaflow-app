"use client";

import Image from "next/image";
import logo from "../assets/logo-cuca.png";
import orange from "../assets/elipse-orange.png";
import purple from "../assets/elipse-purple.png";
import { manrope } from "./fonts";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/components/password-input";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ProfileForm } from "@/components/modal/editUser";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchemaLogin = z.object({
  email: z.string().email({ message: "E-mail inválido" }),
  password: z
    .string({
      required_error: "Senha é requerido",
    })
    .min(4, { message: "Sua senha precisa ter mais de 4 caracteres" }),
});

export default function Home() {
  const form = useForm<z.infer<typeof formSchemaLogin>>({
    resolver: zodResolver(formSchemaLogin),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchemaLogin>) {
    console.log(values);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-6 relative laptop:flex-row">
      <Image
        src={orange}
        alt="elípse laranja"
        width={290}
        className="absolute top-0 right-0 -z-10 w-56"
      />
      <div className="flex flex-col items-center justify-center ">
        <Image src={logo} alt="logo de um jacaré" />
        <p
          className={`${manrope.className} text-base text-[#211D28] font-medium text-center w-[235px] mt-2`}
        >
          Entre e comece a transformar suas metas em realidade.
        </p>
      </div>

      <div className=" flex flex-col items-center">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col h-full gap-3 "
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    className={`text-sm ${manrope.className} desktop:text-base`}
                  >
                    E-mail
                  </FormLabel>
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
                  <FormLabel
                    className={` ${manrope.className} desktop:text-base`}
                  >
                    Senha:
                  </FormLabel>
                  <FormControl>
                    <PasswordInput
                      placeholder=""
                      {...field}
                      className="bg-neutras-neutra"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <p
              className={`cursor-pointer text-right text-xs ${manrope.className}`}
            >
              Esqueceu sua senha?
            </p>

            <Button type="submit" variant="purple" className="mt-6">
              Entrar
            </Button>
          </form>
        </Form>

        <hr className="w-[180px] my-6 mx-auto" />
        <p
          className={`text-center font-bold mt-1 text-sm text-[#49484D] ${manrope.className}`}
        >
          Não possui conta?{" "}
          <strong className="cursor-pointer text-primary-purple100 font-bold">
            Cadastre-se
          </strong>
        </p>
      </div>

      <Image
        src={purple}
        alt="elipse roxa"
        width={290}
        className="absolute bottom-0 left-0 -z-10 w-48"
      />
      {/* <ProfileForm/> */}
    </main>
  );
}
