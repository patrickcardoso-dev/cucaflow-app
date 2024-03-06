"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
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

const formSchema = z.object({
  nomeUsuario: z.string().min(4, {
    message: "Nome de usuário precisa ter mais de 4 caracteres",
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

 const error = 'text-tertiary-error'
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="nomeUsuario"
          render={({ field }) => (
            <FormItem>
              <FormLabel >Nome de Usuário</FormLabel>
              <FormControl>
                <Input  placeholder="oi" {...field} />
              </FormControl>
              <FormMessage className="text-tertiary-error" />
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
