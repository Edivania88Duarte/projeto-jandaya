import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';

type Category = 'Formação' | 'Produção' | 'Evento' | 'Audiovisual';

interface Project {
  title: string;
  description: string;
  image: string;
  date: string;
  location: string;
  participants: number;
  category: Category;
}

const PortfolioSection = () => {
  const projects: Project[] = [
    {
      title: 'Workshop de Produção de Materiais Táteis',
      description: 'Capacitação para educadores na criação de recursos didáticos acessíveis para estudantes com deficiência visual.',
      image: 'https://images.pexels.com/photos/8349165/pexels-photo-8349165.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2024',
      location: 'Fortaleza, CE',
      participants: 85,
      category: 'Formação',
    },
    {
      title: 'Adaptação de Livros Didáticos',
      description: 'Projeto de conversão de materiais tradicionais em formatos acessíveis: braille, audiolivros e ilustrações táteis.',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2023-2024',
      location: 'Nacional',
      participants: 200,
      category: 'Produção',
    },
    {
      title: 'Seminário Educação Inclusiva',
      description: 'Evento nacional reunindo educadores, famílias e especialistas para discussão de práticas inclusivas.',
      image: 'https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2023',
      location: 'Fortaleza, CE',
      participants: 350,
      category: 'Evento',
    },
    {
      title: 'Produção de Vídeos em Libras',
      description: 'Série de videoaulas com interpretação em Libras para conteúdos de ciências e matemática.',
      image: '/foto-video-jandaya.png',
      date: '2023',
      location: 'Digital',
      participants: 500,
      category: 'Audiovisual',
    },
  ];

  const categoryColors: Record<Category, string> = {
    'Formação': 'bg-olive-100 text-olive-700',
    'Produção': 'bg-salmon-100 text-salmon-700',
    'Evento': 'bg-brown-100 text-brown-700',
    'Audiovisual': 'bg-beige-200 text-stone-700',
  };

  return (
    <section id="portfolio" className="py-16 bg-beige-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-stone-800 mb-4">
            Nosso Portfólio
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Conheça algumas das ações que já realizamos para tornar a educação 
            mais acessível e inclusiva em todo o Brasil.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[project.category]}`}>
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-stone-800 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-stone-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-stone-500">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {project.date}
                  </div>
                  
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {project.location}
                  </div>
                  
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {project.participants}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;