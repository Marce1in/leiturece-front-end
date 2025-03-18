"use client";
import Spinner from "@/components/Spinner";
import { postLogin } from "@/lib/fetchApi/fetchAuth";
import {
  loginUserSchema,
  LoginUserType,
} from "@/lib/fetchApi/zodTypesSchemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function LoginPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUserType>({
    resolver: zodResolver(loginUserSchema),
  });

  const loginUser = useMutation({
    mutationFn: (data: LoginUserType) => postLogin(data),
    onSuccess: () => {
      router.push("/sobre");
      toast.success("Usuário autenticado com sucesso!");
    },
  });

  function handleLogin(data: LoginUserType) {
    loginUser.mutate(data);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Login
        </h1>

        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700">
              Email
              <input
                {...register("email")}
                type="email"
                className={`mt-2 w-full px-4 py-3 border-2 ${errors.email ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-gray-800 placeholder-gray-500`}
                placeholder="Digite seu email"
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
              Senha
              <input
                {...register("password")}
                type="password"
                placeholder="Digite sua senha"
                className={`mt-2 w-full px-4 py-3 border-2 ${errors.password ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-gray-800 placeholder-gray-500`}
              />
            </label>

            {errors.password && (
              <p className="text-red-500 text-sm font-semibold">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className={`flex justify-center items-center w-full py-3 ${loginUser.isError ? "bg-red-500 hover:bg-red-600" : "bg-blue-600 hover:bg-blue-700"} text-white rounded-lg font-semibold shadow-md transition duration-300`}
            disabled={loginUser.isPending}
          >
            {loginUser.isPending ? <Spinner /> : "Entrar"}
          </button>

          {loginUser.isError && (
            <p className="text-red-500 text-sm font-semibold text-center pt-3">
              {loginUser.error.message}
            </p>
          )}
        </form>

        <p className="mt-6 text-sm text-center text-gray-700">
          Não tem conta?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Crie uma aqui!
          </a>
        </p>

        <p className="mt-2 text-sm text-center text-gray-700">
          <a href="/forgot-password" className="text-blue-600 hover:underline">
            Esqueceu sua senha?
          </a>
        </p>
      </div>
    </div>
  );
}
