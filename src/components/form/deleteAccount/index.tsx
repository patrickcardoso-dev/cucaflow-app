"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import formSchema from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormLabel,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { PasswordInput } from "@/components/password-input";

function onSubmit(password: z.infer<typeof formSchema>) {
  console.log(password);
}

export function DeleteForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        password: "",
    },
  });

  return (
    <Form {...form}>
          <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col justify-center items-center gap-3">
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel >Senha</FormLabel>
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

        <Button type="submit" variant="purple" size="default" className="rounded-lg mt-4 w-80 lg:w-96">
            <p className="text-bold text-sm">Excluir Conta</p>
              </Button>
              
              <div>
              <hr className="bg-black-500" />
              </div>
        <Button type="submit" variant="orangeSecond" size="default" className="rounded-lg mt-4 w-80 lg:w-96">
            <p className="text-bold text-sm">Cancelar</p>
        </Button>
      </form>
    </Form>
  );
}

export default DeleteForm;
