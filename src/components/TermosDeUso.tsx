import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermosDeUso = () => {
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

          <h1 className="text-4xl font-bold text-stone-800 mb-4">Termos de Uso</h1>

          <p className="text-stone-600 text-lg">Última atualização: {lastUpdated}</p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="prose prose-stone max-w-none">
            <h2>1. Aceitação dos termos</h2>
            <p>
              Ao acessar este site, você concorda com estes Termos de Uso e com a legislação aplicável.
              Caso não concorde, recomendamos não utilizar os serviços e conteúdos disponibilizados.
            </p>

            <h2>2. Finalidade do site</h2>
            <p>
              O site do Projeto Jandaya disponibiliza conteúdos institucionais, materiais educativos,
              informações de eventos e canais de contato voltados à inclusão e acessibilidade.
            </p>

            <h2>3. Uso permitido</h2>
            <p>Você concorda em:</p>
            <ul>
              <li>Utilizar o site de forma ética, responsável e em conformidade com a lei.</li>
              <li>Não praticar ações que comprometam segurança, disponibilidade ou integridade do site.</li>
              <li>Não reproduzir conteúdo sem autorização quando houver restrição de direitos.</li>
            </ul>

            <h2>4. Propriedade intelectual</h2>
            <p>
              Textos, marcas, identidade visual e demais conteúdos do Projeto Jandaya estão protegidos por
              direitos autorais e de propriedade intelectual, salvo indicação em contrário.
            </p>

            <h2>5. Isenção de responsabilidade</h2>
            <p>
              Buscamos manter as informações corretas e atualizadas, mas não garantimos ausência total de
              erros, indisponibilidades temporárias ou interrupções por fatores técnicos externos.
            </p>

            <h2>6. Alterações destes termos</h2>
            <p>
              Este documento pode ser atualizado periodicamente. Recomendamos consulta regular para ciência
              de mudanças.
            </p>

            <h2>7. Contato</h2>
            <p>
              Para dúvidas sobre estes Termos de Uso, entre em contato:
              <br />
              <a href="mailto:jandayaprojeto@gmail.com">jandayaprojeto@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermosDeUso;
