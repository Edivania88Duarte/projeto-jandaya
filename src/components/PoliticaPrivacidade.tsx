import React from 'react';
import { ArrowLeft } from 'lucide-react';

const PoliticaPrivacidade = () => {
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
            Política de Privacidade
          </h1>
          
          <p className="text-stone-600 text-lg">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="prose prose-stone max-w-none">
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-salmon-100 text-salmon-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              
              <h2 className="text-2xl font-semibold text-stone-800 mb-4">
                Página em Construção
              </h2>
              
              <p className="text-stone-600 mb-6">
                Estamos elaborando nossa política de privacidade completa para garantir 
                total transparência sobre como tratamos seus dados pessoais. Em breve, 
                você encontrará aqui todas as informações detalhadas.
              </p>
              
              <p className="text-stone-500 text-sm">
                Para esclarecimentos sobre privacidade, entre em contato:{' '}
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

export default PoliticaPrivacidade;