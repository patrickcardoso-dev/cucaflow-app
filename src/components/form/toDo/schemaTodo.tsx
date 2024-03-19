import {z} from 'zod'

const schemaToDo = z.object({
  time: z.string(),
  title: z.string(),
  description: z.string(),
})

export default schemaToDo