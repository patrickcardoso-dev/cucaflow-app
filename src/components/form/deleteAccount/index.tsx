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
import { useEffect, useState } from "react";

function onSubmit(password: z.infer<typeof formSchema>) {
  console.log(password);
}

export function DeleteForm() {

  const [isFieldEdited, setIsFieldEdited] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        passwordToDelete: "",
    },
  });

  useEffect(() => {
    setIsFieldEdited(form.formState.isValid);
  }, [form.formState.isValid]);

  return (
    <Form {...form}>
        <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col justify-center items-center gap-3">
        <FormField
          control={form.control}
          name="passwordToDelete"
          render={({ field }) => (
            <FormItem>
              <FormLabel >Senha</FormLabel>
                  <FormControl>
                  <PasswordInput
                            id="passwordToDelete"
                            placeholder="Insira sua senha"
                            className="bg-neutra-bgWhite"
                            {...field}
                        />
                </FormControl>
              <FormMessage  />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          variant="purple"
          size="default"
          className={` rounded-lg mt-4 w-80 lg:w-96 ${
            isFieldEdited
              ? "bg-primary-purple100"
              : "bg-neutras-disable cursor-not-allowed"
          } `}
          disabled={!isFieldEdited}
          >
          
            <p className="text-bold text-sm">Excluir Conta</p>
              </Button>
      </form>
    </Form>
  );
}

export default DeleteForm;
