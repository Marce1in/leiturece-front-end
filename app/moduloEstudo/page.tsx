'use client';
import React from 'react';
import '../home/App.css';
import { useState } from "react";
import { ChevronDown, ChevronUp, Circle } from "lucide-react";

const doc = '/documents/aula1.pdf';

const Header = () => (
  <header className="header">
        <img src="image" className="logo" alt="LeitureCe"/>
        <div className="posidi">
          <nav className="nav-bar">
            <button className="nav-button">Home</button>
            <button className="nav-button">Login</button>
            <button className="nav-button">Cadastro</button>
          </nav>
          {/* MENU DO CABEÇALHO - TROCAR PARA 3 LISTRAS DEPOIS DO ESBOÇO */}
          <div className="user-info">
            <div className="dropdown">
              <button className="dropdown-button">Opções</button>
              <div className="dropdown-content">
                <button>Perfil</button>
                <button>Configurações</button>
                <button>Logout</button>
              </div>
            </div>
          </div>
        </div>  
      </header>
);

const Footer = () => (
  <footer className="footer">
    <img src="COLOCAR IMAGEM DA LOGO" className="logo" alt="LeitureCe"/>
      <nav className="footer-nav">
        <button className="footer-button">Política de Privacidade</button>
        <button className="footer-button">Termos de Uso</button>
        <button className="footer-button">Suporte</button>
      </nav>
  </footer>
);


const MainContent = ({ contentTracks, openTracks, toggleTrack }) => (
  <main className="relative flex-grow flex justify-between items-start p-6 bg-white">
  {/* O conteúdo principal */}
  <div className="w-full sm:w-3/5 md:w-2/3 lg:w-1/2 xl:w-2/5 bg-gray-200 p-6 rounded-lg shadow mt-8 mr-6 mb-12 sm:mt-12 sm:mr-8 ml-[80px]">
  <section className="video-section text-center">
    <h1 className="text-xl font-bold mb-4">Liderança Aula 1</h1>
    <iframe 
      width="100%" 
      height="400" 
      src="https://www.youtube.com/embed/yntso82TPO8" 
      title="YouTube Video Player" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen
    ></iframe>
  </section>
  <section className="intro-section mt-6">
    <h3 className="text-lg font-semibold">Resumo</h3>
    <p className="text-gray-700 text-center">
      Somos o que somos porque nos conectamos. A conexão é a essência de quem somos... Somos o que somos porque nos conectamos. A conexão é a essência de quem somos... Somos o que somos porque nos conectamos. A conexão é a essência de quem somos... Somos o que somos porque nos conectamos. A conexão é a essência de quem somos... Somos o que somos porque nos conectamos. A conexão é a essência de quem somos... Somos o que somos porque nos conectamos. A conexão é a essência de quem somos... Somos o que somos porque nos conectamos. A conexão é a essência de quem somos...Somos o que somos porque nos conectamos. A conexão é a essência de quem somos...
    </p>
  </section>
  <section className="download-section mt-6 flex flex-col items-center justify-center text-center">
    <h3 className="text-lg font-semibold mb-4">Baixe o Documento de Apoio</h3>
    <a href={doc} download className="inline-block bg-black text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-800 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-black">
      Download
    </a>
  </section>
</div>




  {/* Menu de trilhas */}
  <div className="w-full sm:w-2/5 md:w-3/10 lg:w-2/5 bg-gray-100 rounded-lg shadow-lg mt-8 sm:mt-12 mr-[120px]">
    <div className="bg-gray-200 text-black p-6 rounded-t-lg shadow">
      <h2 className="text-xl font-semibold text-center">Trilhas de Liderança</h2>
    </div>

    {/* Lista de trilhas */}
    <div className="overflow-y-auto max-h-[74vh]">
      {contentTracks.map((track, index) => (
        <div key={index} className="border-b border-gray-300">
          <div
            className="flex items-center justify-between p-5 hover:bg-gray-300 transition cursor-pointer"
            onClick={() => toggleTrack(index)}
          >
            <div className="flex items-center gap-3">
              <Circle size={20} className="text-gray-600" />
              <span className="text-black text-lg">{track.title}</span>
            </div>
            {openTracks[index] ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </div>

          {openTracks[index] && (
            <div className="bg-gray-200 p-4 rounded-b-lg">
              {track.subItems.map((subItem, subIndex) => (
                <div
                  key={subIndex}
                  className="text-gray-700 pl-10 py-2 text-md hover:text-black cursor-pointer"
                >
                  - {subItem}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</main>
);



const HomePage = () => {
  const [openTracks, setOpenTracks] = useState({});

  const contentTracks = [
    {
      title: "Feedback Diário",
      subItems: ["O que fiz para melhorar minha Liderança hoje?"],
    },
    {
      title: "Comunicação",
      subItems: ["Seja claro e objetivo", "Escute ativamente", "Tarefa 1","Tenha empatia", "Seja receptivo ao feedback", "Tarefa 2", "Linguagem corporal adequadamente", "Linguagem corporal adequadamente", "Tarefa 3", "Questionario", "COMENTÁRIOS"],
    },
    {
      title: "Delegação",
      subItems: ["Escolha a pessoa certa", "Seja claro e específico", "Tarefa 1","Defina prazos e marcos", "Ofereça os recursos necessários", "Tarefa 2", "Dê autonomia, mas mantenha-se disponível", "Estabeleça formas de acompanhamento", "Tarefa 3", "Questionario"],
    },
    {
      title: "Inteligência emocional",
      subItems: ["Dieta equilibrada", "Suplementação", "Receitas saudáveis"],
    },
    {
      title: "Motivação",
      subItems: ["Relacionamentos", "Autoestima", "Comunicação"],
    },
    {
      title: "Autoconhecimento",
      subItems: ["Mindfulness", "Terapia", "Journaling"],
    },
    {
      title: "Flexibilidade",
      subItems: ["Técnicas de corrida", "Melhoria do desempenho", "Equipamentos"],
    },
    {
      title: "Autoconhecimento",
      subItems: ["Uso medicinal", "Legalização", "Impactos sociais"],
    },
    {
      title: "Empatia",
      subItems: ["Investimentos", "Economia pessoal", "Planejamento financeiro"],
    },
    {
      title: "Intuição",
      subItems: ["Rotinas eficazes", "Gestão do tempo", "Hábitos produtivos"],
    },
    {
      title: "Metas",
      subItems: ["Regulação emocional", "Inteligência emocional", "Autocontrole"],
    },
    {
      title: "Disciplina",
      subItems: ["Mercado de trabalho", "Habilidades essenciais", "Networking"],
    },
    {
      title: "Autoconhecimento",
      subItems: ["Uso medicinal", "Legalização", "Impactos sociais"],
    },
    {
      title: "Empatia",
      subItems: ["Investimentos", "Economia pessoal", "Planejamento financeiro"],
    },
    {
      title: "Intuição",
      subItems: ["Rotinas eficazes", "Gestão do tempo", "Hábitos produtivos"],
    },
    {
      title: "Metas",
      subItems: ["Regulação emocional", "Inteligência emocional", "Autocontrole"],
    },
    {
      title: "Disciplina",
      subItems: ["Mercado de trabalho", "Habilidades essenciais", "Networking"],
    },
  ];

  const toggleTrack = (index) => {
    setOpenTracks((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <MainContent contentTracks={contentTracks} openTracks={openTracks} toggleTrack={toggleTrack} />
      <Footer  />
    </div>
  );
  
  
};

export default HomePage;