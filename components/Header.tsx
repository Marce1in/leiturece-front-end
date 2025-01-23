'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logotipo */}
        <h1
          className="text-2xl font-bold cursor-pointer"
          onClick={() => handleNavigate('/')}
        >
          Leiturece
        </h1>

        {/* Navegação */}
        <nav className="hidden md:flex space-x-6">
          <button
            onClick={() => handleNavigate('/sobre')}
            className="hover:underline text-gray-300 bg-transparent border-none cursor-pointer"
          >
            Sobre
          </button>
          <button
            onClick={() => handleNavigate('/servicos')}
            className="hover:underline text-gray-300 bg-transparent border-none cursor-pointer"
          >
            Serviços
          </button>
          <button
              onClick={() => window.open('https://wa.me/5553999467169', '_blank')}
              className="hover:underline text-gray-300 bg-transparent border-none cursor-pointer"
            >
              Fale Conosco
            </button>
        </nav>

        {/* Botões de Ação */}
        <div className="hidden md:flex space-x-4">
          <button
            onClick={() => handleNavigate('/login')}
            className="py-2 px-4 border border-white rounded-lg hover:bg-gray-800 transition"
          >
            Login
          </button>
          <button
            onClick={() => handleNavigate('/register')}
            className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
          >
            Registrar
          </button>
        </div>

        {/* Menu Mobile */}
        <button
          className="block md:hidden py-2 px-4 bg-blue-600 text-white rounded-lg"
          onClick={() => alert('Menu em desenvolvimento!')}
        >
          ☰
        </button>
      </div>
    </header>
  );
}
