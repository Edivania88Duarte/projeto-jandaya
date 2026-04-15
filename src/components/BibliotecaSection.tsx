import React from 'react';
import { Download, BookOpen, FileText, Video, Users, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BibliotecaSection = () => {
  const navigate = useNavigate();
  const categories = [
    {
      title: 'Provas Adaptadas',
      icon: FileText,
      description: 'Avaliações inclusivas e acessíveis para diferentes necessidades',
      count: 45,
      color: 'bg-salmon-100 text-salmon-700',
    },
    {
      title: 'Materiais Didáticos',
      icon: BookOpen,
      description: 'Recursos pedagógicos adaptados para ensino inclusivo',
      count: 128,
      color: 'bg-olive-100 text-olive-700',
    },
    {
      title: 'Formações',
      icon: Users,
      description: 'Conteúdos para capacitação de educadores',
      count: 32,
      color: 'bg-brown-100 text-brown-700',
    },
    {
      title: 'Vídeos Educativos',
      icon: Video,
      description: 'Materiais audiovisuais com legendas e libras',
      count: 67,
      color: 'bg-beige-200 text-stone-700',
    },
  ];

  return (
    <section id="biblioteca" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-stone-800 mb-4">
            Biblioteca Digital
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Acervo completo de materiais pedagógicos acessíveis, organizados 
            por categoria para facilitar sua busca por recursos inclusivos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white border border-stone-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${category.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
                
                <h3 className="text-xl font-semibold text-stone-800 mb-2">
                  {category.title}
                </h3>
                
                <p className="text-stone-600 mb-4 text-sm leading-relaxed">
                  {category.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-stone-500">
                    {category.count} materiais
                  </span>
                  
                  <button 
                    onClick={() => navigate('/biblioteca')}
                    className="inline-flex items-center text-olive-600 hover:text-olive-700 font-medium text-sm transition-colors duration-200">
                    Acessar
                    <Download className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <button 
            onClick={() => navigate('/biblioteca')}
            className="inline-flex items-center px-8 py-3 bg-olive-600 text-white font-medium rounded-full hover:bg-olive-700 transition-colors duration-200">
            Ver Todos os Materiais
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BibliotecaSection;