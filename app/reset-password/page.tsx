'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('As senhas não coincidem');
      return;
    }

    // Simulação de envio ao backend
    const response = await fetch('/api/auth/reset-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password }),
    });

    if (response.ok) {
      setSuccess(true);
      setError('');
      setTimeout(() => router.push('/login'), 3000); // Redireciona após 3 segundos
    } else {
      setError('Ops! Algo deu errado.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Redefinir Senha
        </h1>
        {success ? (
          <p className="text-center text-gray-800">
            Sua senha foi redefinida com sucesso! Redirecionando para o login...
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">
                Nova Senha:
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-gray-800 placeholder-gray-500"
                placeholder="Digite sua nova senha"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">
                Confirmar Nova Senha:
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-2 w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-gray-800 placeholder-gray-500"
                placeholder="Confirme sua nova senha"
                required
              />
            </div>
            {error && (
              <p className="text-red-500 text-sm mb-4 text-center font-semibold">
                {error}
              </p>
            )}
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow-md transition duration-300"
            >
              Redefinir Senha
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
