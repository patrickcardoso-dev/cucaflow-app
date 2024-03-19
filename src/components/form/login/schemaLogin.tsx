import { z } from "zod";
const formSchemaTodo = z.object({
  email: z.string().email({ message: "E-mail inválido" }),
  password: z
    .string({
      required_error: "Senha é requerido",
    })
    .min(4, { message: "Sua senha precisa ter mais de 4 caracteres" }),
});

export default formSchemaTodo;
