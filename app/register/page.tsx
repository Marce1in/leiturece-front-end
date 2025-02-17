"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const registerUserSchema = z
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

type RegisterUserSchema = z.infer<typeof registerUserSchema>;

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterUserSchema>({
    resolver: zodResolver(registerUserSchema),
  });

  function handleRegister(data: RegisterUserSchema) {
    console.log(data);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Registro
        </h1>
        <form onSubmit={handleSubmit(handleRegister)}>
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700">
              Nome:
              <input
                {...register("name")}
                type="text"
                className={`mt-2 w-full px-4 py-3 border-2 ${errors.name ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-gray-800 placeholder-gray-500`}
                placeholder="Digite seu nome"
              />
            </label>
            {errors.name && (
              <p className="text-red-500 text-sm font-semibold">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700">
              Email:
              <input
                {...register("email")}
                type="email"
                className={`mt-2 w-full px-4 py-3 border-2 ${errors.email ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-gray-800 placeholder-gray-500`}
                placeholder="Digite seu e-mail"
              />
            </label>
            {errors.email && (
              <p className="text-red-500 text-sm font-semibold">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700">
              Senha:
              <input
                {...register("password")}
                type="password"
                className={`mt-2 w-full px-4 py-3 border-2 ${errors.password ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-gray-800 placeholder-gray-500`}
                placeholder="Digite sua senha"
              />
            </label>
            {errors.password && (
              <p className="text-red-500 text-sm font-semibold">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700">
              Confirmar Senha:
              <input
                {...register("passconf")}
                type="password"
                className={`mt-2 w-full px-4 py-3 border-2 ${errors.passconf ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-gray-800 placeholder-gray-500`}
                placeholder="Confirme sua senha"
              />
            </label>
            {errors.passconf && (
              <p className="text-red-500 text-sm font-semibold">
                {errors.passconf.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow-md transition duration-300"
          >
            Registrar
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-700">
          Já tem uma conta?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Faça login
          </a>
        </p>
      </div>
    </div>
  );
}
