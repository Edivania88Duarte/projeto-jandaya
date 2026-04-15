import { ArrowLeft, Ear, Eye, Hand } from 'lucide-react';
import { Link } from 'react-router-dom';

const Acessibilidade = () => {
  return (
    <div className="min-h-screen bg-beige-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-olive-600 hover:text-olive-700 transition-colors duration-200 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao início
          </Link>

          <h1 className="text-4xl font-bold text-stone-800 mb-4">Acessibilidade</h1>

          <p className="text-stone-600 text-lg">Nosso compromisso com a inclusão digital</p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="prose prose-stone max-w-none">
            <div className="flex justify-center space-x-4 mb-6 not-prose">
              <div className="w-12 h-12 bg-olive-100 text-olive-600 rounded-full flex items-center justify-center">
                <Eye className="h-6 w-6" />
              </div>
              <div className="w-12 h-12 bg-salmon-100 text-salmon-600 rounded-full flex items-center justify-center">
                <Ear className="h-6 w-6" />
              </div>
              <div className="w-12 h-12 bg-brown-100 text-brown-600 rounded-full flex items-center justify-center">
                <Hand className="h-6 w-6" />
              </div>
            </div>

            <h2>1. Compromisso de acessibilidade</h2>
            <p>
              O Projeto Jandaya trabalha para garantir que pessoas com diferentes perfis e necessidades
              possam navegar e acessar os conteúdos do site com autonomia.
            </p>

            <h2>2. Medidas adotadas</h2>
            <ul>
              <li>Estrutura com hierarquia clara de títulos e conteúdo.</li>
              <li>Textos com linguagem simples e boa legibilidade.</li>
              <li>Contrastes visuais e elementos interativos identificáveis.</li>
              <li>Compatibilidade progressiva com navegação por teclado e leitores de tela.</li>
            </ul>

            <h2>3. Melhoria contínua</h2>
            <p>
              Estamos em evolução constante para ampliar padrões de acessibilidade, corrigir barreiras
              identificadas e aprimorar a experiência de uso em diferentes dispositivos.
            </p>

            <h2>4. Precisa de ajuda?</h2>
            <p>
              Se você encontrou qualquer barreira de acesso, envie sua sugestão ou relato para:
              <br />
              <a href="mailto:jandayaprojeto@gmail.com">jandayaprojeto@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Acessibilidade;
