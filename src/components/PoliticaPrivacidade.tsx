import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PoliticaPrivacidade = () => {
  const lastUpdated = '14/04/2026';

  return (
    <div className="min-h-screen bg-beige-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-olive-600 hover:text-olive-700 transition-colors duration-200 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao início
          </Link>

          <h1 className="text-4xl font-bold text-stone-800 mb-4">Política de Privacidade</h1>

          <p className="text-stone-600 text-lg">Última atualização: {lastUpdated}</p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="prose prose-stone max-w-none">
            <h2>1. Introdução</h2>
            <p>
              O Projeto Jandaya valoriza sua privacidade e se compromete a proteger os dados pessoais
              coletados por meio deste site. Esta Política descreve como coletamos, utilizamos e
              armazenamos suas informações.
            </p>

            <h2>2. Dados que coletamos</h2>
            <p>Podemos coletar as seguintes informações:</p>
            <ul>
              <li>Dados de contato fornecidos voluntariamente, como nome e e-mail.</li>
              <li>Informações enviadas em formulários de inscrição, contato ou parceria.</li>
              <li>Dados de navegação, como páginas acessadas e tempo de visita.</li>
            </ul>

            <h2>3. Como usamos seus dados</h2>
            <p>Os dados coletados podem ser utilizados para:</p>
            <ul>
              <li>Responder mensagens e solicitações enviadas pelo site.</li>
              <li>Organizar inscrições em eventos, oficinas e atividades do projeto.</li>
              <li>Enviar comunicações institucionais relacionadas ao Projeto Jandaya.</li>
              <li>Melhorar a experiência de navegação e acessibilidade do site.</li>
            </ul>

            <h2>4. Compartilhamento de informações</h2>
            <p>
              Não comercializamos dados pessoais. O compartilhamento pode ocorrer apenas quando
              necessário para execução de atividades do projeto, cumprimento de obrigação legal ou com
              consentimento do titular.
            </p>

            <h2>5. Armazenamento e segurança</h2>
            <p>
              Adotamos medidas técnicas e organizacionais para proteger as informações contra acesso não
              autorizado, perda, alteração ou divulgação indevida.
            </p>

            <h2>6. Seus direitos</h2>
            <p>
              Você pode solicitar confirmação do tratamento, acesso, correção, anonimização, exclusão e
              portabilidade de dados, além de revogar consentimentos, conforme a legislação aplicável.
            </p>

            <h2>7. Contato</h2>
            <p>
              Para solicitações relacionadas à privacidade e proteção de dados, entre em contato:
              <br />
              <a href="mailto:jandayaprojeto@gmail.com">jandayaprojeto@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliticaPrivacidade;
