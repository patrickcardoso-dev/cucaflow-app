import {z} from 'zod'

const schemaToDo = z.object({
  time: z.string(),
  date: z.string().transform((value, ctx) => new Date(value).getTime()),
  title: z.string().min(4, {message: 'Sua tarefa não pode ficar sem título'}),
  description: z.string(),
}).refine((data) => {
  const year = new Date(data.date).getFullYear();
  return year >= 1900 && year <= 2100;
}, {
  message: "Ano inválido",
  path: ["date"],
});

export default schemaToDo