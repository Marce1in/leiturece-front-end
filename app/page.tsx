'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Cabeçalho */}
      <header className="fixed top-0 left-0 w-full bg-black text-white z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          {/* Logotipo */}
          <h1
            className="text-2xl font-bold cursor-pointer mr-6"
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
                onClick={() => router.push('/servicos')}
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
      {/* Hero Section */}
      <section id="home" className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20 mt-20">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-black">
            Trilhas de Conhecimento Personalizadas para o Sucesso da Sua Empresa
          </h1>
          <p className="text-lg text-gray-600">
            Uma plataforma para empresas que cria trilhas de desenvolvimento personalizadas usando os melhores livros. Ideal para equipes que buscam aprimorar habilidades e crescer de forma estruturada, conectando aprendizado teórico com resultados práticos.
          </p>
          <div className="space-x-4">
            <button
              onClick={() => handleNavigate('/register')}
              className="py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
            >
              Comece Agora
            </button>
          </div>
          <p className="text-sm text-gray-500">+5,000 pessoas como você já compraram este produto.</p>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center items-center">
          <div className="w-full max-w-md md:max-w-full aspect-w-16 aspect-h-9">
            <img
              src="/images/hero.jpg"
              alt="Trilhas de Conhecimento"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

{/* Benefícios */}
<section id="servicos" className="bg-gray-50 py-16 border-t border-gray-200">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-8">
      O Que Torna Nossa Solução Única e Inovadora
    </h2>
    <div className="grid md:grid-cols-3 gap-8">
      {/* Benefício 1 */}
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 bg-gray-800 text-white rounded-full flex items-center justify-center text-xl font-semibold">
          1
        </div>
        <h3 className="text-xl font-semibold text-gray-800">
          Aprendizado Estruturado e Personalizado
        </h3>
        <p className="text-gray-600">
          Organize o aprendizado em trilhas personalizadas que se alinham aos objetivos da sua equipe.
        </p>
      </div>

      {/* Benefício 2 */}
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 bg-gray-800 text-white rounded-full flex items-center justify-center text-xl font-semibold">
          2
        </div>
        <h3 className="text-xl font-semibold text-gray-800">
          Integração com as Necessidades do Negócio
        </h3>
        <p className="text-gray-600">
          Conecte o aprendizado aos desafios corporativos reais, capacitando as equipes a entregar resultados práticos.
        </p>
      </div>

      {/* Benefício 3 */}
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 bg-gray-800 text-white rounded-full flex items-center justify-center text-xl font-semibold">
          3
        </div>
        <h3 className="text-xl font-semibold text-gray-800">
          Alta Escalabilidade e Eficiência no Ensino
        </h3>
        <p className="text-gray-600"> Alcance toda a sua organização de forma escalável, reduzindo custos com treinamento.</p>
      </div>
    </div>
  </div>
</section>



      {/* Testemunhos */}
<section id="testemunhos" className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
      O Que Nossos Clientes Dizem
    </h2>
    <div className="grid md:grid-cols-3 gap-8">
      {/* Testemunho 1 */}
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
        <p className="text-gray-600 mb-4">
          "Com o Leiturece, conseguimos estruturar o aprendizado da nossa equipe de forma prática e eficaz. Resultados visíveis em poucas semanas!"
        </p>
        <div className="flex items-center mt-4">
          <img
            src="/images/testemunho1.jpg"
            alt="Foto de João Silva"
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <p className="text-gray-800 font-semibold">João Silva</p>
            <p className="text-gray-500 text-sm">Gerente de Projetos</p>
          </div>
        </div>
      </div>

      {/* Testemunho 2 */}
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
        <p className="text-gray-600 mb-4">
          "A personalização das trilhas de aprendizado foi um diferencial. Nossa equipe está mais alinhada e preparada para os desafios."
        </p>
        <div className="flex items-center mt-4">
          <img
            src="/images/testemunho2.jpg"
            alt="Foto de Maria Oliveira"
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <p className="text-gray-800 font-semibold">Maria Oliveira</p>
            <p className="text-gray-500 text-sm">Diretora de RH</p>
          </div>
        </div>
      </div>

      {/* Testemunho 3 */}
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
        <p className="text-gray-600 mb-4">
          "Nossa produtividade aumentou significativamente com a abordagem do Leiturece. Recomendo para todas as empresas."
        </p>
        <div className="flex items-center mt-4">
          <img
            src="/images/testemunho3.jpg"
            alt="Foto de Carlos Lima"
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <p className="text-gray-800 font-semibold">Carlos Lima</p>
            <p className="text-gray-500 text-sm">CEO, TechCorp</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* FAQ */}
<section id="faq" className="py-16 bg-gray-50 border-t border-gray-200">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
      Perguntas Frequentes
    </h2>
    <div className="space-y-6">
      {/* Pergunta 1 */}
      <details className="bg-white p-4 rounded-lg shadow-md">
        <summary className="font-semibold cursor-pointer text-gray-800 focus:outline-none">
          Como as trilhas de aprendizado são personalizadas?
        </summary>
        <p className="mt-2 text-gray-600">
          As trilhas são criadas com base nos objetivos da equipe e no segmento da empresa, utilizando os melhores livros e práticas de desenvolvimento.
        </p>
      </details>

      {/* Pergunta 2 */}
      <details className="bg-white p-4 rounded-lg shadow-md">
        <summary className="font-semibold cursor-pointer text-gray-800 focus:outline-none">
          Qual é o custo da plataforma?
        </summary>
        <p className="mt-2 text-gray-600">
          Oferecemos planos acessíveis e escaláveis para empresas de todos os tamanhos. Entre em contato para receber uma proposta personalizada.
        </p>
      </details>

      {/* Pergunta 3 */}
      <details className="bg-white p-4 rounded-lg shadow-md">
        <summary className="font-semibold cursor-pointer text-gray-800 focus:outline-none">
          Como é feita a medição de resultados?
        </summary>
        <p className="mt-2 text-gray-600">
          Acompanhamos o progresso de cada colaborador com relatórios claros e objetivos, mostrando o impacto direto no desempenho da equipe.
        </p>
      </details>

      {/* Pergunta 4 */}
      <details className="bg-white p-4 rounded-lg shadow-md">
        <summary className="font-semibold cursor-pointer text-gray-800 focus:outline-none">
          É possível integrar com outras ferramentas?
        </summary>
        <p className="mt-2 text-gray-600">
          Sim, nossa plataforma permite integração com sistemas como Slack, Trello, e outros, facilitando a comunicação e o acompanhamento.
        </p>
      </details>

      {/* Pergunta 5 */}
      <details className="bg-white p-4 rounded-lg shadow-md">
        <summary className="font-semibold cursor-pointer text-gray-800 focus:outline-none">
          Quais são os benefícios principais da plataforma?
        </summary>
        <p className="mt-2 text-gray-600">
          Personalização das trilhas, escalabilidade, medição de resultados e acesso aos melhores conteúdos para desenvolvimento pessoal e profissional.
        </p>
      </details>
    </div>
  </div>
</section>

 {/* CTA Final */}
<section id="cta" className="bg-gray-900 text-gray-100 py-16 text-center">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-4xl font-bold mb-4">Pronto para Transformar o Conhecimento em Resultados?</h2>
    <p className="text-lg mb-8 text-gray-300">
      Descubra como as trilhas de aprendizado personalizadas podem organizar o desenvolvimento da sua equipe, 
      alinhando objetivos às metas da empresa. Capacite seus colaboradores com os melhores conteúdos e veja o impacto direto no desempenho.
    </p>
    <p className="text-lg mb-8 text-gray-300">
      Ao começar agora, você economiza tempo, reduz custos com treinamentos e garante um diferencial competitivo para sua empresa.
    </p>
    <div className="space-x-4">
      <button
        onClick={() => handleNavigate('/register')}
        className="py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 transition transform hover:scale-105"
      >
        Comece Agora
      </button>
      <button
  onClick={() =>
    window.open('https://wa.me/5553999467169', '_blank')
  }
  className="py-3 px-6 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition transform hover:scale-105"
>
  Entre em Contato
</button>

    </div>
  </div>
</section>



{/* Rodapé */}
<footer className="bg-gray-100 text-gray-800 py-10 border-t border-gray-200">
  <div className="max-w-7xl mx-auto px-6">
    {/* Grid de Colunas */}
    <div className="grid md:grid-cols-4 gap-8">
      {/* Leiturece e Introdução */}
    </div>

    {/* Linha de Direitos Autorais */}
    <div className="mt-10 border-t border-gray-300 pt-6 text-center">
      <p className="text-sm text-gray-600">
        © 2023 Leiturece. Todos os direitos reservados.{' '}
        <a href="#" className="hover:underline">Política de Privacidade</a>,{' '}
        <a href="#" className="hover:underline">Termos e Condições</a>,{' '}
        <a href="#" className="hover:underline">Política de Cookies</a>.
      </p>
    </div>
  </div>
</footer>

    </div>
  );
}
