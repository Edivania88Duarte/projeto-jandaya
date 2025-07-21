import React from 'react';
import { ArrowLeft, Eye, Ear, Hand } from 'lucide-react';

const Acessibilidade = () => {
  return (
    <div className="min-h-screen bg-beige-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <a
            href="/"
            className="inline-flex items-center text-olive-600 hover:text-olive-700 transition-colors duration-200 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao início
          </a>
          
          <h1 className="text-4xl font-bold text-stone-800 mb-4">
            Acessibilidade
          </h1>
          
          <p className="text-stone-600 text-lg">
            Nosso compromisso com a inclusão digital
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="prose prose-stone max-w-none">
            <div className="text-center py-8 mb-8">
              <div className="flex justify-center space-x-4 mb-6">
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
              
              <h2 className="text-2xl font-semibold text-stone-800 mb-4">
                Página em Construção
              </h2>
              
              <p className="text-stone-600 mb-6">
                Estamos desenvolvendo uma página completa sobre nossas práticas de 
                acessibilidade digital. Em breve, você encontrará aqui informações 
                detalhadas sobre como tornamos nosso site acessível para todos.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-4 bg-beige-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">Nosso Compromisso</h3>
                <p className="text-stone-600 text-sm">
                  O Projeto Jandaya está comprometido em garantir que nosso site seja 
                  acessível a pessoas com deficiência.
                </p>
              </div>
              
              <div className="p-4 bg-beige-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">Melhorias Contínuas</h3>
                <p className="text-stone-600 text-sm">
                  Trabalhamos constantemente para melhorar a acessibilidade de nossos 
                  conteúdos e funcionalidades.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-stone-500 text-sm">
                Para sugestões de acessibilidade ou relatar problemas:{' '}
                <a 
                  href="mailto:jandayaprojeto@gmail.com"
                  className="text-olive-600 hover:text-olive-700 font-medium"
                >
                  jandayaprojeto@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Acessibilidade;