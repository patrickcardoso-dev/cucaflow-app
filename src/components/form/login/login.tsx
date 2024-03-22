"use client";
import { PasswordInput } from "@/components/password-input";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { manrope } from "../../../app/fonts";
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
import { useState, useEffect } from "react";
import formSchemaLogin from "./schemaLogin";
import { signIn } from "next-auth/react";
import { toastify } from "@/lib/Toast";

type formSchemaLoginData = z.infer<typeof formSchemaLogin>;

function LoginForm() {
  const [isFieldEdited, setIsFieldEdited] = useState(false);
  const form = useForm<formSchemaLoginData>({
    resolver: zodResolver(formSchemaLogin),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    setIsFieldEdited(form.formState.isValid);
  }, [form.formState.isValid]);

 async function onSubmit(values: formSchemaLoginData) {
  try {
    const user = await signIn('credentials', {
      ...values,
      redirect: false
    });
    
    if (user?.error) {
      toastify.error("Usuário não encontrado")
    }

  } catch (error) {
    console.log(error);
  }
    
  

  }
  return (
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
              <FormLabel className={` ${manrope.className} desktop:text-base`}>
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

        <p className={`cursor-pointer text-right text-xs ${manrope.className}`}>
          Esqueceu sua senha?
        </p>

        <Button
          type="submit"
          variant="purple"
          className={`mt-6 ${
            isFieldEdited
              ? "bg-secondary-orange100"
              : "bg-neutras-disable cursor-not-allowed"
          } `}
          disabled={!isFieldEdited}
        >
          Entrar
        </Button>
      </form>
    </Form>
  );
}

export default LoginForm;
