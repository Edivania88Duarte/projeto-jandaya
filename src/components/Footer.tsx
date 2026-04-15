import React, { useId, useMemo, useState } from 'react';
import { Mail, Instagram, BookOpen, Heart } from 'lucide-react';

const Footer = () => {
  const CONTACT_EMAIL = 'jandayaprojeto@gmail.com';
  const newsletterEndpoint = import.meta.env.VITE_NEWSLETTER_ENDPOINT as string | undefined;
  const emailInputId = useId();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<
    { type: 'idle' } | { type: 'success'; message: string } | { type: 'error'; message: string } | { type: 'loading' }
  >({ type: 'idle' });

  const mailtoHref = useMemo(() => `mailto:${CONTACT_EMAIL}`, [CONTACT_EMAIL]);
  const gmailComposeHref = useMemo(
    () => `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT_EMAIL)}`,
    [CONTACT_EMAIL]
  );

  const copyEmailToClipboard = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      return true;
    } catch {
      return false;
    }
  };

  const handleContactEmailClick: React.MouseEventHandler<HTMLAnchorElement> = async () => {
    // Some environments (no default mail app) make mailto appear to "do nothing".
    // We copy the email and also open Gmail compose as a reliable web fallback.
    await copyEmailToClipboard(CONTACT_EMAIL);
    window.open(gmailComposeHref, '_blank', 'noopener,noreferrer');
  };

  const validateEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

  const handleNewsletterSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const email = newsletterEmail.trim();

    if (!validateEmail(email)) {
      setNewsletterStatus({ type: 'error', message: 'Digite um e-mail válido.' });
      return;
    }

    setNewsletterStatus({ type: 'loading' });

    // If a backend endpoint is configured (e.g. Formspree / your API), use it.
    if (newsletterEndpoint) {
      try {
        const res = await fetch(newsletterEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        });

        if (!res.ok) {
          throw new Error(`newsletter endpoint returned ${res.status}`);
        }

        setNewsletterEmail('');
        setNewsletterStatus({ type: 'success', message: 'Inscrição realizada! Obrigado.' });
        return;
      } catch {
        // Fall through to mailto fallback
      }
    }

    // Fallback: open mail client with the request and copy email.
    await copyEmailToClipboard(email);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      'Inscrição na newsletter'
    )}&body=${encodeURIComponent(`Quero receber as novidades do Projeto Jandaya.\n\nE-mail: ${email}`)}`;
    setNewsletterStatus({
      type: 'success',
      message: 'Abrimos seu app de e-mail. Se não abrir, o e-mail foi copiado.',
    });
  };

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
                href={mailtoHref}
                onClick={handleContactEmailClick}
                className="flex items-center text-stone-300 hover:text-salmon-400 transition-colors duration-200"
                aria-label="Enviar e-mail para o Projeto Jandaya (o endereço será copiado como alternativa)"
                title="Clique para enviar e-mail (o endereço também será copiado)"
              >
                <Mail className="h-5 w-5 mr-3" />
                {CONTACT_EMAIL}
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
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
                <label htmlFor={emailInputId} className="sr-only">
                  E-mail para receber novidades
                </label>
                <input
                  id={emailInputId}
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Seu e-mail"
                  className="flex-1 px-4 py-2 bg-stone-700 border border-stone-600 rounded-lg text-white placeholder-stone-400 focus:outline-none focus:border-salmon-400"
                  required
                />
                <button
                  type="submit"
                  disabled={newsletterStatus.type === 'loading'}
                  className="px-4 py-2 bg-salmon-500 text-white rounded-lg hover:bg-salmon-600 disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200 font-medium"
                >
                  {newsletterStatus.type === 'loading' ? 'Enviando...' : 'Assinar'}
                </button>
              </form>

              {newsletterStatus.type !== 'idle' && (
                <p
                  className={`mt-2 text-sm ${
                    newsletterStatus.type === 'error' ? 'text-salmon-300' : 'text-stone-300'
                  }`}
                  role={newsletterStatus.type === 'error' ? 'alert' : 'status'}
                >
                  {newsletterStatus.message}
                </p>
              )}
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