import { z } from "zod";

const formSchema = z.object({
    password: z
        .string({
            required_error: 'Senha é obrigatória'
        })
});

export default formSchema