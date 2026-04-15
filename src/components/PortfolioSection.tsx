import { useEffect, useState } from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';

type Category = 'Formação' | 'Produção' | 'Evento' | 'Audiovisual';

interface MediaItem {
  src: string;
  type: 'image' | 'video';
  objectPosition?: string;
}

interface Project {
  title: string;
  description: string;
  mediaItems: MediaItem[];
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
      mediaItems: [
        { src: '/jandaya2.jpeg', type: 'image', objectPosition: 'center' },
        { src: '/jandaya3.jpeg', type: 'image', objectPosition: 'center' },
        { src: '/jandaya4.jpeg', type: 'image', objectPosition: 'center' },
        { src: '/jandaya8.jpeg', type: 'image', objectPosition: 'center' },
        { src: '/jandaya9.jpeg', type: 'image', objectPosition: 'center' },
      
      ],
      date: '2025',
      location: 'Umirim, CE',
      participants: 85,
      category: 'Formação',
    },
    {
      title: 'Adaptação de Livros e Materiais Didáticos',
      description: 'Projeto de conversão de materiais tradicionais em formatos acessíveis: braille, audiolivros e ilustrações táteis.',
      mediaItems: [
        { src: '/jandaya7.jpeg', type: 'image', objectPosition: 'center' },
        { src: '/jandaya14.jpeg', type: 'image', objectPosition: 'center' },
        { src: '/jandaya10.jpeg', type: 'image', objectPosition: 'center' },
        { src: '/jandaya15.jpeg', type: 'image', objectPosition: 'center' },      
      ],
      date: '2025',
      location: 'Nacional',
      participants: 200,
      category: 'Produção',
    },
    {
      title: 'Seminário Educação Inclusiva',
      description: 'Evento nacional reunindo educadores, famílias e especialistas para discussão de práticas inclusivas.',
      mediaItems: [
        { src: '/jandaya13.jpeg', type: 'image', objectPosition: 'top' },
        { src: '/jandaya11.jpeg', type: 'image', objectPosition: 'top' },
        { src: '/jandaya12.jpeg', type: 'image', objectPosition: 'top' },
        { src: '/jandaya1.jpeg', type: 'image', objectPosition: 'top' },
        { src: '/jandaya17.jpeg', type: 'image', objectPosition: 'top' },
      ],
      date: '2025',
      location: 'Umirim, CE',
      participants: 350,
      category: 'Evento',
    },
    {
      title: 'Produção de Vídeos em Libras',
      description: 'Série de videoaulas com interpretação em Libras, tornando o conhecimento mais acessível para todos.',
      mediaItems: [
        { src: '/jandaya6.mp4', type: 'video', objectPosition: 'top' },
      ],
      date: '2026',
      location: 'Digital',
      participants: 500,
      category: 'Audiovisual',
    },
  ];

  const categoryColors: Record<Category, string> = {
    Formação: 'bg-olive-100 text-olive-700',
    Produção: 'bg-salmon-100 text-salmon-700',
    Evento: 'bg-brown-100 text-brown-700',
    Audiovisual: 'bg-beige-200 text-stone-700',
  };

  const [carouselIndices, setCarouselIndices] = useState<Record<number, number>>({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
  });

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCarouselIndices((prevIndices) =>
        Object.keys(prevIndices).reduce((acc, key) => {
          const keyNum = parseInt(key);
          acc[keyNum] = (prevIndices[keyNum] + 1) % projects[keyNum].mediaItems.length;
          return acc;
        }, {} as Record<number, number>)
      );
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, []);

  const handleNextMedia = (projectIndex: number) => {
    setCarouselIndices((prevIndices) => ({
      ...prevIndices,
      [projectIndex]: (prevIndices[projectIndex] + 1) % projects[projectIndex].mediaItems.length,
    }));
  };

  const handlePrevMedia = (projectIndex: number) => {
    setCarouselIndices((prevIndices) => ({
      ...prevIndices,
      [projectIndex]:
        (prevIndices[projectIndex] - 1 + projects[projectIndex].mediaItems.length) %
        projects[projectIndex].mediaItems.length,
    }));
  };

  return (
    <section id="portfolio" className="py-16 bg-beige-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-stone-800 mb-4">Nosso Portfólio</h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Conheça algumas das ações que já realizamos para tornar a educação mais acessível e inclusiva
            em todo o Brasil.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const activeMediaIndex = carouselIndices[index] ?? 0;
            const activeMedia = project.mediaItems[activeMediaIndex];

            return (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-80 md:h-96 overflow-hidden bg-stone-100 group">
                  {activeMedia.type === 'video' ? (
                    <video
                      src={activeMedia.src}
                      className="w-full h-full object-contain"
                      style={{ objectPosition: activeMedia.objectPosition ?? 'center' }}
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <img
                      src={activeMedia.src}
                      alt={project.title}
                      className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                      style={{ objectPosition: activeMedia.objectPosition ?? 'center' }}
                    />
                  )}

                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[project.category]}`}
                    >
                      {project.category}
                    </span>
                  </div>

                  {project.mediaItems.length > 1 && (
                    <>
                      <button
                        onClick={() => handlePrevMedia(index)}
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/95 text-stone-800 hover:text-stone-900 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
                        aria-label="Foto anterior"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>

                      <button
                        onClick={() => handleNextMedia(index)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/95 text-stone-800 hover:text-stone-900 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
                        aria-label="Próxima foto"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>

                      <div className="absolute bottom-3 right-3 flex gap-1.5 bg-white/75 backdrop-blur-sm rounded-full px-2 py-1">
                        {project.mediaItems.map((_, mediaIndex) => (
                          <span
                            key={mediaIndex}
                            className={`h-1.5 w-1.5 rounded-full ${
                              mediaIndex === activeMediaIndex ? 'bg-stone-700' : 'bg-stone-400'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-stone-800 mb-3">{project.title}</h3>

                  <p className="text-stone-600 mb-4 leading-relaxed">{project.description}</p>

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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
