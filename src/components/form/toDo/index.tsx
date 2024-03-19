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
import { manrope } from "../../../app/fonts";
import { useForm } from "react-hook-form";
import formSchemaTodo from "../toDo/schemaTodo";
import { zodResolver } from "@hookform/resolvers/zod";

type  formSchemaTodoData= z.infer<typeof formSchemaTodo>;

function CreatToDo() {
  const form = useForm<formSchemaTodoData>({
    resolver: zodResolver(formSchemaTodo), 
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
          <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
              <FormItem className="flex items-center">
                <FormLabel
                  className={`text-sm ${manrope.className} desktop:text-base`}
                >
                  Horário
                </FormLabel>
                <FormControl>
                  <Input type="time"  className="w-28  flex flex-col justify-center p-2" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </div>
    </Form>
  )
}

export default CreatToDo