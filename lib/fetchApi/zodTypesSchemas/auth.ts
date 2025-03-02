import { z } from "zod";

export const registerUserSchema = z
  .object({
    name: z
      .string()
      .min(1, "Nome é obrigatório")
      .max(64, "Nome não pode ser maior que 64 caracteres"),
    email: z
      .string()
      .email("E-mail Inválido")
      .min(1, "E-mail é obrigatório")
      .max(255, "E-mail não pode ser maior que 255 caracteres"),
    password: z
      .string()
      .min(4, "A senha deve ser maior que 4 caracteres")
      .max(1024, "Senha MUITO longa"),
    passconf: z.string().min(1, "A confirmação de senha é obrigatória"),
  })
  .refine(({ password, passconf }) => password === passconf, {
    message: "Senhas não são iguais",
    path: ["passconf"],
  });

export type RegisterUserType = z.infer<typeof registerUserSchema>;
