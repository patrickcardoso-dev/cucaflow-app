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

type  formSchemaTodoData= z.infer<typeof schemaToDo>;

function CreatToDo() {
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
  }

  return (
    <Form {...form}>
      <div>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col h-full gap-3 "
        >
          <h1 className="text-center text-xl text-neutras-bgBlack">Adicionar Tarefa</h1>
          <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
              <FormItem className="flex items-center justify-between">
                <FormLabel
                  className={`text-sm ${manrope.className} desktop:text-base`}
                >
                  Horário
                </FormLabel>
                <FormControl>
                  <Input type="time" className="w-24  border-neutras-gray200 text-center flex flex-col justify-center p-2 cursor-pointer" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
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
                  <Input className="w-full text-sm" {...field} />
                </FormControl>
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
                  <Textarea className="w-full text-sm" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </form>
      </div>
    </Form>
  )
}

export default CreatToDo