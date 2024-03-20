import {z} from 'zod'

const schemaToDo = z.object({
  time: z.string(),
  date: z.string(),
  title: z.string().min(4, {message: 'Sua tarefa não pode ficar sem título'}),
  description: z.string(),
})

export default schemaToDo