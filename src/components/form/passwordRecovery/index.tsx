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

function RecoveryForm() {

    type formSchemaRecovery = z.infer<typeof formSchema>;
    
    const [isFieldEdited, setIsFieldEdited] = useState(false);
    const form = useForm<formSchemaRecovery>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        email: ""
    },
    });

    useEffect(() => {
    setIsFieldEdited(form.formState.isValid);
    }, [form.formState.isValid]);

    function onSubmit(values: formSchemaRecovery) {
    console.log("valores: ", values.email);
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
                    <Input placeholder="Ex: cucaflow@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />

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
                Enviar
            </Button>
            </form>
        </Form>
    );
    }

export default RecoveryForm;
