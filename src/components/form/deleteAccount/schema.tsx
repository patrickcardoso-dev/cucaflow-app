import { z } from "zod";

const formSchema = z.object({
    passwordToDelete: z
        .string().min(1, {message: 'Senha é obrigatória'})
});

export default formSchema