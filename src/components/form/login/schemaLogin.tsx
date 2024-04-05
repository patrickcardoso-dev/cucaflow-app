import { z } from "zod";
const schemaLogin = z.object({
  email: z.string().email({ message: "E-mail inválido" }),
  password: z
    .string({
      required_error: "Senha é requerido",
    })
    .min(6, { message: "Sua senha precisa ter mais de 6 caracteres" })
    .max(12, { message: "Sua senha não pode ter mais de 12 caracteres" })
});

export default schemaLogin;
