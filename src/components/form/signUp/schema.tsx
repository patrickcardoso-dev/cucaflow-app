import { z } from "zod";

const formSchema = z.object({
    username: z
        .string()
        .min(3, {
    message: "O nome precisa ter pelo menos 3 caracteres",
  }),
    email: z
        .string()
        .email({ message: 'E-mail inválido' }),
    password: z
        .string({
    required_error: 'Senha é obrigatória'
        })
        .min(6, { message: 'A senha precisa ter pelo menos 6 caracteres' })
        .max(10, { message: 'A senha não pode ultrapassar 10 caracteres' })
    ,
    confirmPassword: z
        .string({
    required_error: 'Confirmação da senha é obrigatória'
        }),
}).refine(data => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword']
});

export default formSchema