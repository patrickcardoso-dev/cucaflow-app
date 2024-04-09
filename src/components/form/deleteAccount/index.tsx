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
import { toastify } from "@/lib/Toast";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { AxiosError } from "axios";
import { deleteUser } from "@/services/user";

export type DeafaultBackError = {
  statusCode: number;
  message: string;
};

export type UserProps = {
  user_id: string;
  token: string;
  id: string;
};

export function DeleteForm() {
  const [isFieldEdited, setIsFieldEdited] = useState(false);
  const router = useRouter();
  const session = useSession();
  const userSession = session.data?.user as UserProps;

  const form = useForm<z.infer<typeof formSchema>>({
    mode: "onBlur",
    resolver: zodResolver(formSchema),
    defaultValues: {
        passwordToDelete: "",
    },
  });

  async function onSubmit(password: z.infer<typeof formSchema>) {
    try {
      const deletedUser = await deleteUser(`user/${userSession?.user_id}`, password.passwordToDelete);
      router.push("/");
    } catch (error) {
      if ((error as AxiosError).response) {
        const errorMessage = (error as AxiosError).response;
        const errorBack = errorMessage?.data as DeafaultBackError;
        if (errorBack) {
          toastify.error(errorBack.message);
        } else {
          console.log(errorMessage?.data);
        }
      }
    } 
  }

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
