import { z } from "zod";

const formSchema = z.object({
    email: z
        .string().min(1, {message: 'Insira seu email para recupar sua senha.'})
});

export default formSchema