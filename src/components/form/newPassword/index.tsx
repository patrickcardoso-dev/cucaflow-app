"use client";
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
import formSchema from "./schema";
import { PasswordInput } from "@/components/password-input";
import { Label } from "@radix-ui/react-label";

function NewPasswordForm() {

    type formSchemaRecovery = z.infer<typeof formSchema>;

    const [isFieldEdited, setIsFieldEdited] = useState(false);

    const form = useForm<formSchemaRecovery>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        newPassword: "",
        confirmPassword: ""
    },
    });

    useEffect(() => {
    setIsFieldEdited(form.formState.isValid);
    }, [form.formState.isValid]);

    function onSubmit(values: formSchemaRecovery) {
    console.log("newPassword: ", values.newPassword);
    }

    return (
        <>
            <Form {...form}>
                <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col h-full gap-3 "
                >
                <FormField
                    control={form.control}
                    name="newPassword"
                    render={({ field }) => (
                        <FormItem>
                        <p className="w-72 m-4 text-center">
                            Digite sua nova senha de acesso.
                        </p>
                        <FormLabel
                        className={`text-sm ${manrope.className} desktop:text-base`}
                        >
                        Nova Senha
                        </FormLabel>
                        <FormControl>
                        <PasswordInput {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                    />
                    
                    <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <Label>Confirmar senha</Label>
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

                    <hr className="text-primary-purple100 w-56 m-auto mt-8 mb-4" />
                    
                <Button
                    type="submit"
                    variant="purple"
                    className={`mt-6 ${
                    isFieldEdited
                        ? "bg-primary-purple100"
                        : "bg-neutras-disable cursor-not-allowed"
                    } `}
                    disabled={!isFieldEdited}
                >
                    Confirmar alteração
                </Button>
                </form>
            </Form>
        </>
    );
    }

export default NewPasswordForm;
