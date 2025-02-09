'use client'

import  {Carousel}  from 'react-responsive-carousel'; // Biblioteca para carrosel
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './App.css';
import img1 from '../../public/images/img1.jpeg';
import img2 from '../../public/images/img2.jpeg';
import img3 from '../../public/images/img3.jpeg';
import img4 from '../../public/images/img4.jpeg';
import img5 from '../../public/images/img5.jpeg';
import img6 from '../../public/images/img12.jpeg';
import img7 from '../../public/images/img7.jpeg';
import img8 from '../../public/images/img8.jpeg';
import img9 from '../../public/images/img9.jpeg';
import img10 from '../../public/images/img10.jpeg';
import React from 'react';
import Image from 'next/image';

function App() {
  return (
    <div className="app-container">
      {/* CABEÇALHO*/}
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

      {/* Conteúdo Principal */}
      <main className="main-content" >
        {/* Primeira Parte: Carrossel - Trilhas adiquiridas
        Usar imagens ilustrativas */}
         <section className="carousel-section">
          <h2>Trilhas Adiquiridas</h2>
          <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} centerMode centerSlidePercentage={25} emulateTouch swipeable>
            <div>
              <Image src={img1} alt="Livro 1" />
              <p className="legend">Comunicação Assertiva</p>
              <button>Entar</button>
            </div>
            <div>
              <Image src={img2} alt="Livro 2" />
              <p className="legend">Resiliência</p>
              <button>Entrar</button>
            </div>
            <div>
              <Image src={img3} alt="Livro 3" />
              <p className="legend">Inteligência Emocional</p>
              <button>Entrar</button>
            </div>
            <div>
              <Image src={img4} alt="Livro 4" />
              <p className="legend">Ética De Trabalho</p>
              <button>Entrar</button>
            </div>
            <div>
              <Image src={img5} alt="Livro 5" />
              <p className="legend">Trabalho Em Equipe</p>
              <button>Entrar</button>
            </div>
          </Carousel>
        </section>
        {/* Segunda divisão: Carrossel de Opções */}
        <section className="carousel-section">
          <h2>Adquira Novas Trilhas</h2>
          <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} centerMode centerSlidePercentage={25} emulateTouch swipeable>
            <div>
              <Image src={img6} alt="Objetivo 1" />
              <p className="legend">Gerenciamento De Tempo</p>
              <button>Entar</button>
            </div>
            <div>
              <Image src={img7} alt="Objetivo 2" />
              <p className="legend">Liderança</p>
              <button>Entar</button>
            </div>
            <div>
              <Image src={img8} alt="Objetivo 3" />
              <p className="legend">Negociação</p>
              <button>Entar</button>
            </div>
            <div>
              <Image src={img9} alt="Objetivo 4" />
              <p className="legend">Pensamento Crítico</p>
              <button>Entar</button>
            </div>
            <div>
              <Image src={img10} alt="Objetivo 5" />
              <p className="legend">Pensamento Criativo</p>
              <button>Entar</button>
            </div>
          </Carousel>
        </section>


        {/* Segunda parte: Seleção de Opções */}
        {/* <section className="options-section">
          <h2>Escolha seu Objetivo</h2>
          <div className="options-buttons">
            <button className="option-button">Aprender Comunicação</button>
            <button className="option-button">Fortalecer Liderança</button>
            <button className="option-button">Melhorar Colaboração</button>
          </div>
        </section> */}
      </main>

      {/* Rodapé */}
      <footer className="footer">
        <img src="COLOCAR IMAGEM DA LOGO" className="logo" alt="LeitureCe"/>
        <nav className="footer-nav">
          <button className="footer-button">Política de Privacidade</button>
          <button className="footer-button">Termos de Uso</button>
          <button className="footer-button">Suporte</button>
        </nav>
      </footer>
    </div>
  );
}

export default App;
