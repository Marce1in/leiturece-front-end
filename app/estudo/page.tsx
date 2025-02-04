import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './styles/App.css';
import React from 'react';
import doc from '../../public/documents/aula1.pdf';

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

      <div className="app-container2">
      {/* Introdução */}
      {/* Vídeo */}
      <section className="video-section">
        <h1>Lideraça Aula 1</h1>
        <iframe 
          width="50%" 
          height="310" 
          src="https://www.youtube.com/embed/yntso82TPO8" 
          title="YouTube Video Player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          ></iframe>
      </section>
      <section className="intro-section">
        <h3>Resumo</h3>
        <p>Somos o que somos porque nos conectamos
          <br></br>A conexão é a essência de quem somos. É no encontro com o outro 
          <br></br>— e com nós mesmos — que encontramos força, propósito e compreensão.
          <br></br> Para nos conectarmos de verdade, precisamos nos permitir ser vulneráveis,
          <br></br> pois é nesse espaço de autenticidade que as relações mais profundas nascem.
          <br></br>
          <br></br> Nesta etapa, vamos mergulhar em nossa comunicação: como nos expressamos,
          <br></br> como ouvimos, como construímos pontes ou erguemos muros. Ao entender nosso 
          <br></br>estilo comunicativo e abraçar a vulnerabilidade, damos o primeiro passo para uma 
          <br></br>comunicação mais empática, clara e transformadora.
          <br></br>
          <br></br>Lembre-se: conectar-se é ter coragem de ser visto, e isso começa agora.
        </p>
      </section>

      {/* Documento para Download */}
      <section className="download-section">
        <h3>Baixe o Documento</h3>
        <a href={doc} download className="download-link">
          Download
        </a>
      </section>
    </div>

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