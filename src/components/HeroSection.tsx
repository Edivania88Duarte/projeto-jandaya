import React from 'react';
import { ArrowRight, Heart } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-beige-50 to-salmon-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="text-olive-600 font-medium text-lg">Educação Inclusiva</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-stone-800 mb-6 leading-tight">
            Educação acessível,{' '}
            <span className="text-olive-600">viva e possível</span>{' '}
            para todos
          </h1>
          
          <p className="text-xl text-stone-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            O Projeto Jandaya desenvolve materiais pedagógicos acessíveis, promove 
            formações inclusivas e constrói pontes para uma educação verdadeiramente 
            democrática e transformadora.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#biblioteca"
              className="inline-flex items-center px-8 py-4 bg-olive-600 text-white font-medium rounded-full hover:bg-olive-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Acesse a Biblioteca
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            
            <a
              href="#portfolio"
              className="inline-flex items-center px-8 py-4 border-2 border-olive-600 text-olive-600 font-medium rounded-full hover:bg-olive-600 hover:text-white transition-all duration-200"
            >
              Conheça o Projeto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;