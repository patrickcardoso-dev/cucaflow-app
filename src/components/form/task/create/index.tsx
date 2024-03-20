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
import {formStyle, DateHoraDiv, formTitle, formItemInputDate, formItemDefault, formItemOptional, inputTime, containerField} from '../style'

type  formSchemaTodoData= z.infer<typeof schemaToDo>;


function CreateTask({setShowAddTasks}: {setShowAddTasks: Dispatch<SetStateAction<Boolean>>} ) {
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
            className={formStyle}
          >
            <h1 className={formTitle}>Adicionar Tarefa</h1>
            <div className={DateHoraDiv}>
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormMessage />
                    <FormControl>
                      <Input type="date" className={formItemInputDate} {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem className={formItemDefault}>
                    <FormMessage />
                    <FormControl>
                      <Input   type="time" className={inputTime} {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              
            </div>
            <div className={containerField}>
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className={formItemOptional}>
                    <FormLabel
                      className={`text-sm ${manrope.className} desktop:text-base`}
                    >
                      Título
                    </FormLabel>
                    <FormControl>
                      <Input  className="w-full text-sm" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className={formItemOptional}>
                    <FormLabel
                      className={`text-sm ${manrope.className} desktop:text-base`}
                    >
                      Descrição
                    </FormLabel>
                    <FormControl>
                      <Textarea  className="w-full text-sm" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className="mt-5 mb-3">Comfirmar</Button>
            <Button onClick={() => setShowAddTasks(false)} variant='orangeSecond'>Cancelar</Button>
          </form>
        </div>
      </Form>
    </ContainerTask>
  )
}

export default CreateTask