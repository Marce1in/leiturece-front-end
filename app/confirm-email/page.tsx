'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ConfirmEmailPage() {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/auth/confirm-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code }),
    });

    if (response.ok) {
      alert('E-mail confirmado com sucesso!');
      router.push('/login');
    } else {
      setError('Ops! Código inválido');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Confirmação de E-mail
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700">
              Código de Verificação:
            </label>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="mt-2 w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-gray-800 placeholder-gray-500"
              placeholder="Digite o código"
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
            Verificar
          </button>
        </form>
      </div>
    </div>
  );
}
