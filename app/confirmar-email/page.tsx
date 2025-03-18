"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ConfirmEmailPage() {
  const router = useRouter();

  //This make that when the user reload the page, he's transported to the login page
  useEffect(() => {
    const key = "mail_verification_page_reload";
    const hasReloaded = sessionStorage.getItem(key);

    if (hasReloaded) {
      router.push("/login");
      sessionStorage.removeItem(key);
    } else {
      sessionStorage.setItem(key, "1");
    }

    return () => {
      sessionStorage.removeItem(key);
    };
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Confirmação de E-mail
        </h1>

        <p className="block font-medium text-gray-700">
          Enviamos um E-mail de verificação para você! Abra o E-mail e verifique
          a sua conta.
        </p>

        <br />

        <p className="block font-medium text-gray-700">
          Após verificar, por favor recarregue esta página ou vá para{" "}
          <a className="text-blue-600 hover:underline" href="/login">
            Página de Login
          </a>
          .
        </p>

        <br />

        <p className="block font-medium text-gray-700">
          Não recebeu o E-mail?{" "}
          <span className="underline">
            Não esqueça de verificar a caixa de spam!
          </span>{" "}
          Ou tente registrar-se novamente.
        </p>
      </div>
    </div>
  );
}
