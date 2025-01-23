'use client';
import React, { useState } from 'react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simulação de requisição para o backend
    const response = await fetch('/api/auth/forgot-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      setSuccess(true);
      setError('');
    } else {
      setError('Ops! Não foi possível processar sua solicitação.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Esqueceu a Senha
        </h1>
        {success ? (
          <p className="text-center text-gray-800">
            Se o e-mail estiver cadastrado, você receberá um link para redefinir sua senha.
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700">
                Email:
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-gray-800 placeholder-gray-500"
                placeholder="Digite seu e-mail"
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
              Enviar
            </button>
          </form>
        )}
        <p className="mt-6 text-sm text-center text-gray-700">
          <a href="/login" className="text-blue-600 hover:underline">
            Voltar para o login
          </a>
        </p>
      </div>
    </div>
  );
}
