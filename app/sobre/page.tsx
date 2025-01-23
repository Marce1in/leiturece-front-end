'use client';
import React from 'react';
import Header from '../../components/Header';

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Header />
      <div className="max-w-7xl mx-auto px-6 py-16 pt-32">
        <h1 className="text-4xl font-bold text-center text-black mb-8">
          Sobre o Leiturece
        </h1>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
          O Leiturece é uma plataforma que transforma o aprendizado corporativo através de trilhas de conhecimento personalizadas. 
          Usando os melhores livros, conectamos teoria à prática, ajudando empresas e equipes a alcançar seus objetivos de forma eficiente e estruturada.
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-black mb-4">Nossa Missão</h2>
            <p className="text-gray-600">
              Capacitar equipes e organizações através de trilhas de conhecimento que combinam aprendizado prático e teórico, promovendo crescimento sustentável e resultados tangíveis.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-black mb-4">Nossa Visão</h2>
            <p className="text-gray-600">
              Ser a plataforma número um em aprendizado corporativo, ajudando empresas a desenvolver talentos e alcançar excelência organizacional.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-black mb-4">Nossos Valores</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Aprendizado contínuo</li>
              <li>Inovação</li>
              <li>Empatia e colaboração</li>
              <li>Foco em resultados</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-black mb-4">Por que escolher o Leiturece?</h2>
            <p className="text-gray-600">
              Porque acreditamos que o aprendizado é a chave para o sucesso. Nossa plataforma torna o aprendizado acessível, eficiente e relevante, conectando sua equipe ao conhecimento necessário para prosperar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
