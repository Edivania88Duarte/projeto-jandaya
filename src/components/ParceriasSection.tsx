import React from 'react';
import { Handshake, Mail, ArrowRight } from 'lucide-react';

const ParceriasSection = () => {
  const CONTACT_EMAIL = 'jandayaprojeto@gmail.com';
  const gmailComposeHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    CONTACT_EMAIL
  )}`;
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // ignore
    }
  };

  const partners = [
    {
      name: 'Universidade Federal de São Paulo',
      type: 'Instituição de Ensino',
      logo: '/jandaya4.jpeg',
    },
    {
      name: 'Instituto Benjamin Constant',
      type: 'Organização Especializada',
      logo: '/jandaya5.jpeg',
    },
    {
      name: 'Secretaria Municipal de Educação',
      type: 'Poder Público',
      logo: '/image.png',
    },
    {
      name: 'Fundação Dorina Nowill',
      type: 'Organização Social',
      logo: '/jandaya1.jpeg',
    },
  ];

  return (
    <section id="parcerias" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-stone-800 mb-4">
            Nossas Parcerias
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Construímos uma rede colaborativa com instituições que compartilham 
            nosso compromisso com a educação inclusiva e acessível.
          </p>
        </div>

        {/* Grid de parceiros */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-beige-50 border border-stone-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden bg-white">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="font-semibold text-stone-800 mb-2">
                {partner.name}
              </h3>
              
              <p className="text-sm text-stone-600">
                {partner.type}
              </p>
            </div>
          ))}
        </div>

        {/* Seção de convite para novas parcerias */}
        <div className="bg-gradient-to-r from-olive-50 to-salmon-50 rounded-2xl p-8 md:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <Handshake className="h-16 w-16 text-olive-600 mx-auto mb-6" />
            
            <h3 className="text-3xl font-bold text-stone-800 mb-4">
              Seja Nosso Parceiro
            </h3>
            
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              Acreditamos que a transformação da educação acontece através da 
              colaboração. Se sua instituição compartilha nossos valores e tem 
              interesse em construir uma educação mais inclusiva, vamos conversar!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                onClick={async () => {
                  await copyToClipboard(CONTACT_EMAIL);
                  window.open(gmailComposeHref, '_blank', 'noopener,noreferrer');
                }}
                className="inline-flex items-center px-8 py-3 bg-stone-600 text-white font-medium rounded-full hover:bg-stone-700 transition-colors duration-200"
                aria-label="Enviar e-mail para o Projeto Jandaya (o endereço será copiado como alternativa)"
                title="Clique para enviar e-mail (o endereço também será copiado)"
              >
                <Mail className="mr-2 h-5 w-5" />
                Email
              </a>
              
              <a
                href="https://wa.me/5585985664001"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-olive-600 text-white font-medium rounded-full hover:bg-olive-700 transition-colors duration-200"
              >
                Iniciar Conversa
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Benefícios da parceria */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-salmon-100 text-salmon-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Handshake className="h-6 w-6" />
            </div>
            <h4 className="font-semibold text-stone-800 mb-2">Impacto Ampliado</h4>
            <p className="text-stone-600 text-sm">
              Juntos podemos alcançar mais educadores e estudantes
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-olive-100 text-olive-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <ArrowRight className="h-6 w-6" />
            </div>
            <h4 className="font-semibold text-stone-800 mb-2">Troca de Experiências</h4>
            <p className="text-stone-600 text-sm">
              Compartilhamento de conhecimentos e melhores práticas
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-brown-100 text-brown-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Mail className="h-6 w-6" />
            </div>
            <h4 className="font-semibold text-stone-800 mb-2">Rede Colaborativa</h4>
            <p className="text-stone-600 text-sm">
              Participação em uma comunidade de educação inclusiva
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParceriasSection;
