import React from 'react';
import { Calendar, Clock, MapPin, ExternalLink, ArrowRight } from 'lucide-react';

const EventosSection = () => {
  const upcomingEvents = [
    {
      title: 'Workshop: Tecnologias Assistivas na Educação',
      date: '15 de Março, 2024',
      time: '14:00 - 17:00',
      location: 'São Paulo, SP',
      type: 'Presencial',
      description: 'Aprenda sobre ferramentas e recursos tecnológicos que facilitam o aprendizado de estudantes com deficiência.',
      status: 'open',
      formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/viewform',
    },
    {
      title: 'Webinar: Práticas Inclusivas em Sala de Aula',
      date: '22 de Março, 2024',
      time: '19:00 - 21:00',
      location: 'Online',
      type: 'Virtual',
      description: 'Estratégias práticas para criar um ambiente de aprendizagem verdadeiramente inclusivo.',
      status: 'open',
      formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY/viewform',
    },
  ];

  const pastEvents = [
    {
      title: 'Seminário Nacional de Educação Inclusiva',
      date: '10 de Dezembro, 2023',
      participants: 450,
      hasRecording: true,
    },
    {
      title: 'Oficina de Materiais Didáticos Adaptados',
      date: '25 de Novembro, 2023',
      participants: 120,
      hasRecording: true,
    },
    {
      title: 'Mesa Redonda: Políticas Públicas e Inclusão',
      date: '15 de Outubro, 2023',
      participants: 280,
      hasRecording: false,
    },
  ];

  return (
    <section id="eventos" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-stone-800 mb-4">
            Eventos
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Participe de nossos encontros, workshops e seminários para construir 
            uma rede colaborativa de educação inclusiva.
          </p>
        </div>

        {/* Próximos Eventos */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-stone-800 mb-6 flex items-center">
            <Calendar className="h-6 w-6 text-olive-600 mr-2" />
            Próximos Eventos
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="border border-stone-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      event.type === 'Virtual' 
                        ? 'bg-olive-100 text-olive-700' 
                        : 'bg-salmon-100 text-salmon-700'
                    }`}>
                      {event.type}
                    </span>
                  </div>
                  
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    Inscrições Abertas
                  </span>
                </div>
                
                <h4 className="text-xl font-semibold text-stone-800 mb-3">
                  {event.title}
                </h4>
                
                <p className="text-stone-600 mb-4 leading-relaxed">
                  {event.description}
                </p>
                
                <div className="space-y-2 mb-4 text-sm text-stone-500">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {event.time}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {event.location}
                  </div>
                </div>
                
                <button 
                  onClick={() => window.open(event.formLink, '_blank')}
                  className="w-full bg-olive-600 text-white py-3 rounded-lg font-medium hover:bg-olive-700 transition-colors duration-200 flex items-center justify-center">
                  Inscrever-se
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Eventos Passados - Oculto por enquanto */}
        {/* <div>
          <h3 className="text-2xl font-semibold text-stone-800 mb-6">
            Eventos Realizados
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <div
                key={index}
                className="bg-beige-50 border border-stone-200 rounded-xl p-6"
              >
                <h4 className="font-semibold text-stone-800 mb-2">
                  {event.title}
                </h4>
                
                <p className="text-stone-600 text-sm mb-3">
                  {event.date}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-stone-500">
                    {event.participants} participantes
                  </span>
                  
                  {event.hasRecording && (
                    <button className="flex items-center text-olive-600 hover:text-olive-700 text-sm font-medium transition-colors duration-200">
                      Ver gravação
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default EventosSection;