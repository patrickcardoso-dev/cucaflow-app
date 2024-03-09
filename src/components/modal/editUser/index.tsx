"use client";

import { useForm } from "react-hook-form";
import { string, z } from "zod";
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

const formSchema = z.object({
  nomeUsuario: z.string().min(4, {
    message: "Nome de usuário precisa ter mais de 4 caracteres",
  }),
  email: z.string().email({ message: "E-mail invalido" }),
  password: z
    .string({
      required_error: "Senha é requerido",
    })
    .min(4, { message: "Sua senha precisa ter mais de 4 caracteres" }),
  comfirmatPassword: z.string({
    required_error: "Comfirmação de senha é requerido",
  }),
});

function onSubmit(values: z.infer<typeof formSchema>) {
  console.log(values);
}

export function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nomeUsuario: "",
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-3"
      >
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
          name="comfirmatPassword"
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
        <Button type="submit" variant="purple">
          Comfirmar
        </Button>
      </form>
    </Form>
  );
}

export default ProfileForm;
