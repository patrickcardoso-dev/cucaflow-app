"use client";
import { PasswordInput } from "@/components/password-input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { manrope } from "../fonts";

const formSchema = z.object({
  email: z.string().email({ message: "E-mail inválido" }).max(50),
  password: z
    .string()
    .min(6, {
      message: "A senha deve conter no mínimo 6 caracteres.",
    })
    .max(12),
});

// username: z.string().min(2, {
//   message: "Username must be at least 2 characters.",
// }),

export default function Teste() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <Label
                  className={`text-[#201F25] text-sm ${manrope.className} desktop:text-base mt-5`}
                >
                  E-mail
                </Label>
                <FormControl>
                  <Input className="bg-neutras-neutra" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <Label
                  className={`text-[#201F25] text-sm ${manrope.className} desktop:text-base mt-5 `}
                >
                  Senha
                </Label>
                <FormControl>
                  <PasswordInput className="bg-neutras-neutra" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
