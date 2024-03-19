import { z } from "zod";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { manrope } from "../../../../app/fonts";
import { useForm } from "react-hook-form";
import schemaToDo from "../schemaTodo";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction } from "react";

type  formSchemaTodoData= z.infer<typeof schemaToDo>;

function CreateTask({setShowModal}: {setShowModal: Dispatch<SetStateAction<Boolean>>} ) {
  const form = useForm<formSchemaTodoData>({
    resolver: zodResolver(schemaToDo), 
    defaultValues: {
      time: "",
      title: "",
      description: ''
    },
  })

  function onSubmit(values: formSchemaTodoData) {
    console.log(values);
    ;
  }

  return (
    <Form {...form}>
      <div>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col h-full"
        >
          <h1 className="text-center text-xl text-neutras-bgBlack">Adicionar Tarefa</h1>
          <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
              <FormItem className="flex items-center justify-between py-5">
                <FormLabel
                  className={`text-sm ${manrope.className} desktop:text-base`}
                >
                  Horário
                </FormLabel>
                <FormMessage />
                <FormControl>
                  <Input   type="time" className="w-24  border-neutras-gray200 text-center flex flex-col justify-center p-1 cursor-pointer" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="flex flex-col gap-5 mb-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="items-center justify-between">
                  <FormLabel
                    className={`text-sm ${manrope.className} desktop:text-base`}
                  >
                    Título
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="nome da sua tarefa" className="w-full text-sm" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="items-center justify-between">
                  <FormLabel
                    className={`text-sm ${manrope.className} desktop:text-base`}
                  >
                    Descrição
                  </FormLabel>
                  <FormControl>
                    <Textarea placeholder="descreva sua tarefa" className="w-full text-sm" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="mb-3">Comfirmar</Button>
          <Button onClick={() => setShowModal(false)} variant='orangeSecond' type="submit">Cancelar</Button>
        </form>
      </div>
    </Form>
  )
}

export default CreateTask