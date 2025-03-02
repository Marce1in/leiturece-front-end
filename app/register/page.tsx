"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import {
  RegisterUserType,
  registerUserSchema,
} from "@/lib/fetchApi/zodTypesSchemas/auth";
import { useMutation } from "@tanstack/react-query";
import { postRegister } from "@/lib/fetchApi/fetchAuth";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function RegisterPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterUserType>({
    resolver: zodResolver(registerUserSchema),
  });

  const createAccount = useMutation({
    mutationFn: (data: RegisterUserType) => postRegister(data),
  });

  function handleRegister(data: RegisterUserType) {
    createAccount.mutate(data);
  }

  if (createAccount.isSuccess) {
    router.push("/login");
    toast.success("Conta criada com sucesso");
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
            disabled={createAccount.isPending}
          >
            {createAccount.isPending ? (
              <div className="w-6 h-6 border-2 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
            ) : (
              "Registrar"
            )}
          </button>

          {createAccount.isError && (
            <p className="text-red-500 text-sm font-semibold">
              {createAccount.error.message}
            </p>
          )}
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
