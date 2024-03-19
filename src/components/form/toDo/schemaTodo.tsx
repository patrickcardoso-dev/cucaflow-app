import {z} from 'zod'

const formSchema = z.object({
  time: z.string(),
  title: z.string(),
  description: z.string(),
})

export default formSchema