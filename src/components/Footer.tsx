import React from 'react';
import { Mail, Instagram, BookOpen, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contato" className="bg-stone-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo e missão */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/jandaya-bird.png" 
                alt="Projeto Jandaya" 
                className="h-8 w-8 object-contain"
              />
              <span className="font-bold text-xl">Projeto Jandaya</span>
            </div>
            <p className="text-stone-300 leading-relaxed mb-4">
              Construindo pontes para uma educação verdadeiramente inclusiva, 
              acessível e transformadora para todos.
            </p>
            <div className="flex items-center text-stone-300">
              <Heart className="h-4 w-4 mr-2 text-salmon-400" />
              <span className="text-sm">Feito com amor pela educação</span>
            </div>
          </div>

          {/* Navegação */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Navegação</h3>
            <nav className="space-y-2">
              {[
                { name: 'Biblioteca', href: '#biblioteca' },
                { name: 'Portfólio', href: '#portfolio' },
                { name: 'Eventos', href: '#eventos' },
                { name: 'FAQ', href: '#faq' },
                { name: 'Parcerias', href: '#parcerias' },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-stone-300 hover:text-salmon-400 transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contato */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <div className="space-y-4">
              <a
                href="mailto:jandayaprojeto@gmail.com"
                className="flex items-center text-stone-300 hover:text-salmon-400 transition-colors duration-200"
              >
                <Mail className="h-5 w-5 mr-3" />
                jandayaprojeto@gmail.com
              </a>
              
              <a
                href="https://www.instagram.com/jandayaprojeto"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-stone-300 hover:text-salmon-400 transition-colors duration-200"
              >
                <Instagram className="h-5 w-5 mr-3" />
                @jandayaprojeto
              </a>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="font-medium mb-3">Receba nossas novidades</h4>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="flex-1 px-4 py-2 bg-stone-700 border border-stone-600 rounded-lg text-white placeholder-stone-400 focus:outline-none focus:border-salmon-400"
                />
                <button className="px-4 py-2 bg-salmon-500 text-white rounded-lg hover:bg-salmon-600 transition-colors duration-200 font-medium">
                  Assinar
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-stone-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-stone-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Projeto Jandaya. Todos os direitos reservados.
            </p>
            
            <div className="flex space-x-6 text-sm text-stone-400">
              <a href="/termos-de-uso" className="hover:text-salmon-400 transition-colors duration-200">
                Termos de Uso
              </a>
              <a href="/politica-de-privacidade" className="hover:text-salmon-400 transition-colors duration-200">
                Política de Privacidade
              </a>
              <a href="/acessibilidade" className="hover:text-salmon-400 transition-colors duration-200">
                Acessibilidade
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;