import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'O que é o Projeto Jandaya?',
      answer: 'O Projeto Jandaya é uma iniciativa dedicada à educação inclusiva, focada na produção de materiais pedagógicos acessíveis e na formação de educadores para práticas inclusivas. Nosso objetivo é tornar a educação verdadeiramente democrática e acessível para todos.',
    },
    {
      question: 'Os materiais da biblioteca são gratuitos?',
      answer: 'Sim! Todos os materiais disponibilizados em nossa biblioteca digital são gratuitos e podem ser baixados livremente. Acreditamos que o conhecimento e os recursos educacionais devem ser acessíveis a todos os educadores e estudantes.',
    },
    {
      question: 'Como posso participar dos eventos?',
      answer: 'Para participar de nossos eventos, basta acessar a seção "Eventos" e clicar em "Inscrever-se" no evento desejado. Oferecemos tanto eventos presenciais quanto virtuais, sempre com foco na acessibilidade.',
    },
    {
      question: 'Posso contribuir com materiais para o projeto?',
      answer: 'Claro! Ficamos muito felizes em receber contribuições da comunidade. Você pode entrar em contato conosco através do email ou redes sociais para saber como contribuir com materiais, ideias ou experiências.',
    },
    {
      question: 'O projeto oferece consultorias para instituições?',
      answer: 'Sim, oferecemos consultorias e assessorias para instituições educacionais que desejam implementar práticas mais inclusivas. Entre em contato conosco para conhecer nossos serviços personalizados.',
    },
    {
      question: 'Como posso me tornar parceiro do projeto?',
      answer: 'Valorizamos muito as parcerias! Se sua instituição tem interesse em colaborar conosco, acesse a seção "Parcerias" ou entre em contato diretamente. Juntos podemos ampliar o impacto da educação inclusiva.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-beige-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-stone-800 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-stone-600">
            Encontre respostas para as dúvidas mais comuns sobre o Projeto Jandaya
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-olive-500 focus:ring-inset"
              >
                <span className="font-semibold text-stone-800 pr-4">
                  {faq.question}
                </span>
                
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="h-5 w-5 text-olive-600" />
                  ) : (
                    <Plus className="h-5 w-5 text-stone-400" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-stone-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-stone-600 mb-4">
            Não encontrou a resposta que procurava?
          </p>
          <a
            href="mailto:jandayaprojeto@gmail.com"
            className="inline-flex items-center px-6 py-3 bg-olive-600 text-white font-medium rounded-full hover:bg-olive-700 transition-colors duration-200"
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;