'use client';
import React from 'react';
import Header from '../../components/Header';

export default function ServicosPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Header />
      <div className="max-w-7xl mx-auto px-6 py-16 pt-32">
        <h1 className="text-4xl font-bold text-center text-black mb-8">
          Nossos Serviços
        </h1>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
          No Leiturece, oferecemos serviços personalizados para ajudar sua empresa a alcançar o máximo de desempenho.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-black mb-4">Consultoria Educacional</h2>
            <p className="text-gray-600">
              Criamos trilhas de aprendizado personalizadas para sua equipe, utilizando os melhores livros para promover conhecimento e resultados.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-black mb-4">Workshops e Treinamentos</h2>
            <p className="text-gray-600">
              Organizamos sessões práticas que combinam teoria e prática para capacitar sua equipe em habilidades específicas.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-black mb-4">Plataforma Digital</h2>
            <p className="text-gray-600">
              Oferecemos uma plataforma intuitiva para acessar trilhas de conhecimento personalizadas e acompanhar o progresso de sua equipe.
            </p>
          </div>
        </div>
      

        {/* Mais serviços ou CTA */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-black mb-6">
            Pronto para transformar sua equipe?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Entre em contato conosco e descubra como nossas soluções podem atender às suas necessidades.
          </p>
          <button
            onClick={() => window.open('https://wa.me/5553999467169', '_blank')}
            className="py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 transition transform hover:scale-105"
          >
            Entre em Contato
          </button>
        </div>
      </div>
    </div>
  );
}
