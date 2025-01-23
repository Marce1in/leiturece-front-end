'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      router.push('/home');
    } else {
      setError('Ops! Email ou senha incorretos');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Login
        </h1>
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
              placeholder="Digite seu email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700">
              Senha:
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-gray-800 placeholder-gray-500"
              placeholder="Digite sua senha"
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
            Entrar
          </button>
        </form>
        <p className="mt-6 text-sm text-center text-gray-700">
          Não tem conta?{' '}
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
