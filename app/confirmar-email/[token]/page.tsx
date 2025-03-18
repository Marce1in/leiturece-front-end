"use client";

import { postConfirmMail } from "@/lib/fetchApi/fetchAuth";
import { useMutation } from "@tanstack/react-query";
import { use, useEffect } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface PageProps {
  params: Promise<{ token: string }>;
}

export default function ConfirmEmailPage({ params }: PageProps) {
  const { token } = use(params);
  const router = useRouter();

  const createAccount = useMutation({
    mutationFn: (token: string) => postConfirmMail(token),
    onSuccess: () => {
      router.push("/login");
      toast.success("E-mail verificado com sucesso!");
    },
  });

  useEffect(() => createAccount.mutate(token), []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {createAccount.isError && (
        <div className="text-center max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
          <p className="text-red-500 pb-5">{createAccount.error.message}</p>
          <p className="text-black">
            Ops! algo deu errado, tente{" "}
            <a href="/register" className="text-blue-600 hover:underline">
              registrar-se
            </a>{" "}
            novamente!
          </p>
        </div>
      )}
    </div>
  );
}
