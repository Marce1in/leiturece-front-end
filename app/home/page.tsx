'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import '../home/App.css';

const Carousel = ({ images }) => {
  return (
    <div className="w-full max-w-full mt-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="rounded-lg shadow-xl"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index} className="flex flex-col items-center">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              <img
                src={item.src}
                alt={item.title}
                className="w-48 h-48 flex items-center justify-center overflow-hidden rounded-full mx-auto mb-4"
              />
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

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

const HomePage = () => {
  const carouselAdiquirido = [
    { src: '/images/img1.jpeg', title: 'Comunicação Assertiva', description: 'Comunicação Assertiva' },
    { src: '/images/img2.jpeg', title: 'Resiliência', description: 'Resiliência' },
    { src: '/images/img3.jpeg', title: 'Inteligência Emocional', description: 'Inteligência Emocional' },
    { src: '/images/img4.jpeg', title: 'Comunicação Assertiva', description: 'Comunicação Assertiva' },
    { src: '/images/img5.jpeg', title: 'Resiliência', description: 'Resiliência' },
    { src: '/images/img6.jpeg', title: 'Inteligência Emocional', description: 'Inteligência Emocional' },
    { src: '/images/img7.jpeg', title: 'Comunicação Assertiva', description: 'Comunicação Assertiva' },
    { src: '/images/img8.jpeg', title: 'Resiliência', description: 'Resiliência' }
  ];

  const carouselSugestao = [
    { src: '/images/img1.jpeg', title: 'Liderança', description: 'Habilidades de Liderança' },
    { src: '/images/img2.jpeg', title: 'Criatividade', description: 'Criatividade no Trabalho' },
    { src: '/images/img3.jpeg', title: 'Adaptação', description: 'Adaptação a Mudanças' },
    { src: '/images/img4.jpeg', title: 'Comunicação Assertiva', description: 'Comunicação Assertiva' },
    { src: '/images/img5.jpeg', title: 'Resiliência', description: 'Resiliência' },
    { src: '/images/img6.jpeg', title: 'Inteligência Emocional', description: 'Inteligência Emocional' },
    { src: '/images/img7.jpeg', title: 'Comunicação Assertiva', description: 'Comunicação Assertiva' },
    { src: '/images/img8.jpeg', title: 'Resiliência', description: 'Resiliência' }
  ];

  const carousel3 = [
    { src: '/images/img9.jpeg', title: 'Empatia', description: 'Empatia no Trabalho' },
    { src: '/images/img10.jpeg', title: 'Autoconhecimento', description: 'Desenvolvimento Pessoal' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col items-center bg-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-800">Adquirido</h3>
        <Carousel images={carouselAdiquirido} />
        <h3 className="text-lg font-semibold text-gray-800">Sugestão</h3>
        <Carousel images={carouselSugestao} />
        <h3 className="text-lg font-semibold text-gray-800">Sugestão</h3>
        <Carousel images={carousel3} />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;