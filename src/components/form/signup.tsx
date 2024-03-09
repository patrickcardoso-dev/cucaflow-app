"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { PasswordInput } from "@/components/password-input";
import formSchema from "./schema";
import { Label } from "@/components/ui/label";

function onSubmit(values: z.infer<typeof formSchema>) {
  const {confirmPassword, ...data} = values
  console.log(data);
}

export function SignUpForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        username: "",
    },
  });

  return (
    <Form {...form}>
          <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col justify-center items-center gap-3">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <Label >Nome de Usuário</Label>
                <FormControl>
                    <Input
                        id="username"
                        type="text"
                        placeholder="Ex. cucaflow"
                        className="bg-neutra-bgWhite"
                        {...field}
                    />
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
              <Label >E-mail</Label>
                <FormControl>
                    <Input
                        id="name"
                        type="email"
                        placeholder="Ex: cucaflow@gmail.com"
                        className="bg-neutra-bgWhite"
                        {...field}
                    />
                </FormControl>
              <FormMessage  />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <Label >Senha</Label>
                  <FormControl>
                  <PasswordInput
                            id="password"
                            placeholder="Insira sua senha"
                            className="bg-neutra-bgWhite"
                            {...field}
                        />
                </FormControl>
              <FormMessage  />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <Label >Confirmar senha</Label>
                  <FormControl>
                  <PasswordInput
                            id="confirmPassword"
                            placeholder="Insira sua senha"
                            className="bg-neutra-bgWhite"
                          {...field}
                        />
              </FormControl>
              <FormMessage  />
            </FormItem>
          )}
        />

            <div className="flex items-center">
                <p className="text-primary-purple300 text-xs w-64 py-1 text-center">Ao realizar o cadastro você aceita os nossos <strong>Termos e Política de privacidade</strong></p>
            </div>
                <Button type="submit" variant="purple" size="default" className="w-80 lg:w-96">
                    <p className="text-bold text-sm">Cadastrar</p>
                </Button>
      </form>
    </Form>
  );
}

export default SignUpForm;
