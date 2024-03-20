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
import ContainerTask from "../container";

type  formSchemaTodoData= z.infer<typeof schemaToDo>;

function EditTask({setShowEditTasks}: {setShowEditTasks: Dispatch<SetStateAction<Boolean>>} ) {
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
    <ContainerTask>
    <Form {...form}>
      <div>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col h-full"
        >
          <h1 className="text-center text-xl text-neutras-bgBlack">Editar Tarefa</h1>
          <div className="flex justify-between py-5">
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="">
                    <FormMessage />
                    <FormControl>
                      <Input   type="date" className="w-36 text-sm border-neutras-gray200 text-center flex flex-col justify-center p-2 cursor-pointer" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem className="flex items-center justify-between">
                    <FormMessage />
                    <FormControl>
                      <Input   type="time" className="w-24  border-neutras-gray200 text-center flex flex-col justify-center p-1 cursor-pointer" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              
            </div>
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
          <Button type="submit"  variant='purple' className="mb-3">Editar</Button>
          <Button onClick={() => setShowEditTasks(false)} variant='purpleSecond' type="submit">Cancelar</Button>
        </form>
      </div>
    </Form>
    </ContainerTask>
  )
}

export default EditTask