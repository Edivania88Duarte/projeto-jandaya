import React, { useState } from 'react';
import { Download, BookOpen, FileText, Video, Users, ArrowLeft, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Material {
  title: string;
  category: string;
  description: string;
  date: string;
  driveLink: string;
  downloadLink: string;
}

const Biblioteca = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    {
      title: 'Provas Adaptadas',
      icon: FileText,
      description: 'Avaliações inclusivas e acessíveis para diferentes necessidades',
      count: 45,
      color: 'bg-salmon-100 text-salmon-700',
      borderColor: 'border-salmon-300',
    },
    {
      title: 'Materiais Didáticos',
      icon: BookOpen,
      description: 'Recursos pedagógicos adaptados para ensino inclusivo',
      count: 128,
      color: 'bg-olive-100 text-olive-700',
      borderColor: 'border-olive-300',
    },
    {
      title: 'Formações',
      icon: Users,
      description: 'Conteúdos para capacitação de educadores',
      count: 32,
      color: 'bg-brown-100 text-brown-700',
      borderColor: 'border-brown-300',
    },
    {
      title: 'Vídeos Educativos',
      icon: Video,
      description: 'Materiais audiovisuais com legendas e libras',
      count: 67,
      color: 'bg-beige-200 text-stone-700',
      borderColor: 'border-beige-300',
    },
  ];

  const materials: Material[] = [
    // Provas Adaptadas
    {
      title: 'Prova de Português Adaptada - 6º Ano',
      category: 'Provas Adaptadas',
      description: 'Avaliação inclusiva com letras maiores, linguagem simplificada e imagens de apoio',
      date: '2024',
      driveLink: 'https://drive.google.com/file/d/1eXZ9mK2pQ5vL8nR3sT6wX9yB0cD4eF7gH/view?usp=sharing',
      downloadLink: 'https://drive.google.com/uc?export=download&id=1eXZ9mK2pQ5vL8nR3sT6wX9yB0cD4eF7gH',
    },
    {
      title: 'Prova de Matemática em Braille',
      category: 'Provas Adaptadas',
      description: 'Avaliação em braille com símbolos matemáticos adaptados',
      date: '2024',
      driveLink: 'https://drive.google.com/file/d/1aB2cD3eF4gH5iJ6kL7mN8oP9qR0sT1uV/view?usp=sharing',
      downloadLink: 'https://drive.google.com/uc?export=download&id=1aB2cD3eF4gH5iJ6kL7mN8oP9qR0sT1uV',
    },
    {
      title: 'Guia para Elaboração de Provas Acessíveis',
      category: 'Provas Adaptadas',
      description: 'Documento com orientações e boas práticas para criar avaliações inclusivas',
      date: '2023',
      driveLink: 'https://drive.google.com/file/d/1wX9yZ2aB3cD4eF5gH6iJ7kL8mN9oP0qR/view?usp=sharing',
      downloadLink: 'https://drive.google.com/uc?export=download&id=1wX9yZ2aB3cD4eF5gH6iJ7kL8mN9oP0qR',
    },
    // Materiais Didáticos
    {
      title: 'Manual de Confecção de Materiais Táteis',
      category: 'Materiais Didáticos',
      description: 'Passo a passo para criar materiais pedagógicos táteis para alunos com deficiência visual',
      date: '2024',
      driveLink: 'https://drive.google.com/file/d/1s2tU3vW4xY5zA6bC7dE8fG9hI0jK1lM/view?usp=sharing',
      downloadLink: 'https://drive.google.com/uc?export=download&id=1s2tU3vW4xY5zA6bC7dE8fG9hI0jK1lM',
    },
    {
      title: 'Plano de Aula - Inclusão em Matemática',
      category: 'Materiais Didáticos',
      description: 'Estratégias e atividades práticas para ensino de matemática inclusivo',
      date: '2023',
      driveLink: 'https://drive.google.com/file/d/1n2oP3qR4sT5uV6wX7yZ8aA9bB0cC1dD/view?usp=sharing',
      downloadLink: 'https://drive.google.com/uc?export=download&id=1n2oP3qR4sT5uV6wX7yZ8aA9bB0cC1dD',
    },
    {
      title: 'Recursos para Alunos com TDAH',
      category: 'Materiais Didáticos',
      description: 'Coletânea de recursos, estratégias e jogos para apoiar alunos com TDAH em sala de aula',
      date: '2024',
      driveLink: 'https://drive.google.com/file/d/1i2jK3lM4nO5pQ6rS7tU8vW9xX0yY1zZ/view?usp=sharing',
      downloadLink: 'https://drive.google.com/uc?export=download&id=1i2jK3lM4nO5pQ6rS7tU8vW9xX0yY1zZ',
    },
    {
      title: 'Adaptação de Livros - Materiais Visuais',
      category: 'Materiais Didáticos',
      description: 'Exemplos de adaptações de livros didáticos com descrições visuais detalhadas',
      date: '2023',
      driveLink: 'https://drive.google.com/file/d/1d2eF3gH4iJ5kK6lL7mM8nN9oO0pP1qQ/view?usp=sharing',
      downloadLink: 'https://drive.google.com/uc?export=download&id=1d2eF3gH4iJ5kK6lL7mM8nN9oO0pP1qQ',
    },
    // Formações
    {
      title: 'Curso Básico de Libras para Educadores',
      category: 'Formações',
      description: 'Material completo com vocabulário e frases essenciais em Libras para uso escolar',
      date: '2024',
      driveLink: 'https://drive.google.com/file/d/1a2bC3dE4fF5gG6hH7iI8jJ9kK0lL1mM/view?usp=sharing',
      downloadLink: 'https://drive.google.com/uc?export=download&id=1a2bC3dE4fF5gG6hH7iI8jJ9kK0lL1mM',
    },
    {
      title: 'Formação: Altas Habilidades/Superdotação',
      category: 'Formações',
      description: 'Capacitação sobre identificação e atendimento de alunos com altas habilidades',
      date: '2023',
      driveLink: 'https://drive.google.com/file/d/1x2yZ3aA4bB5cC6dD7eE8fF9gG0hH1iI/view?usp=sharing',
      downloadLink: 'https://drive.google.com/uc?export=download&id=1x2yZ3aA4bB5cC6dD7eE8fF9gG0hH1iI',
    },
    {
      title: 'Acessibilidade Digital - Para Educadores',
      category: 'Formações',
      description: 'Guia prático sobre como tornar conteúdos digitais acessíveis para alunos com deficiência',
      date: '2024',
      driveLink: 'https://drive.google.com/file/d/1s2tU3vV4wW5xX6yY7zZ8aA9bB0cC1dD/view?usp=sharing',
      downloadLink: 'https://drive.google.com/uc?export=download&id=1s2tU3vV4wW5xX6yY7zZ8aA9bB0cC1dD',
    },
    {
      title: 'Educação Inclusiva: Conceitos e Práticas',
      category: 'Formações',
      description: 'Material teórico sobre educação inclusiva com estudos de caso e exemplos práticos',
      date: '2023',
      driveLink: 'https://drive.google.com/file/d/1n2oO3pP4qQ5rR6sS7tT8uU9vV0wW1xX/view?usp=sharing',
      downloadLink: 'https://drive.google.com/uc?export=download&id=1n2oO3pP4qQ5rR6sS7tT8uU9vV0wW1xX',
    },
    // Vídeos Educativos
    {
      title: 'Videoaula: Histórico da Educação Inclusiva em Libras',
      category: 'Vídeos Educativos',
      description: 'Videoaula com legendas e interpretação completa em Libras (15 min)',
      date: '2024',
      driveLink: 'https://drive.google.com/file/d/1i2jJ3kK4lL5mM6nN7oO8pP9qQ0rR1sS/view?usp=sharing',
      downloadLink: 'https://drive.google.com/uc?export=download&id=1i2jJ3kK4lL5mM6nN7oO8pP9qQ0rR1sS',
    },
    {
      title: 'Documentário: Inclusão na Prática',
      category: 'Vídeos Educativos',
      description: 'Documentário mostrando casos de sucesso de educação inclusiva em escolas brasileiras',
      date: '2024',
      driveLink: 'https://drive.google.com/file/d/1d2eE3fF4gG5hH6iI7jJ8kK9lL0mM1nN/view?usp=sharing',
      downloadLink: 'https://drive.google.com/uc?export=download&id=1d2eE3fF4gG5hH6iI7jJ8kK9lL0mM1nN',
    },
    {
      title: 'Série: Metodologias Ativas na Educação Inclusiva',
      category: 'Vídeos Educativos',
      description: '5 vídeos sobre metodologias ativas adaptadas para uso com alunos diversos',
      date: '2023',
      driveLink: 'https://drive.google.com/file/d/1y2zA3bB4cC5dD6eE7fF8gG9hH0iI1jJ/view?usp=sharing',
      downloadLink: 'https://drive.google.com/uc?export=download&id=1y2zA3bB4cC5dD6eE7fF8gG9hH0iI1jJ',
    },
  ];

  const filteredMaterials = materials.filter((material) => {
    const matchesCategory = !selectedCategory || material.category === selectedCategory;
    const matchesSearch = material.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         material.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-beige-50">
      {/* Header com botão voltar */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center text-olive-600 hover:text-olive-700 font-medium transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Voltar
          </button>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-stone-800 mb-4">Biblioteca Digital</h1>
        <p className="text-xl text-stone-600 mb-8">
          Acesse nosso acervo completo de materiais pedagógicos acessíveis
        </p>

        {/* Barra de Pesquisa */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-stone-400" />
            <input
              type="text"
              placeholder="Pesquisar materiais..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:border-olive-600"
            />
          </div>
        </div>

        {/* Categorias */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-stone-800 mb-6">Categorias</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon;
              const isSelected = selectedCategory === category.title;
              return (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(isSelected ? null : category.title)}
                  className={`text-left bg-white border-2 rounded-2xl p-6 transition-all duration-300 transform hover:-translate-y-1 ${
                    isSelected
                      ? `${category.borderColor} border-2 shadow-lg`
                      : 'border-stone-200 hover:shadow-lg'
                  }`}
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

                  <span className="text-sm font-medium text-stone-500">
                    {category.count} materiais
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Lista de Materiais */}
        <div>
          <h2 className="text-2xl font-semibold text-stone-800 mb-6">
            {selectedCategory ? `${selectedCategory} (${filteredMaterials.length})` : `Todos os Materiais (${filteredMaterials.length})`}
          </h2>

          {filteredMaterials.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {filteredMaterials.map((material, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="bg-olive-100 text-olive-700 px-3 py-1 rounded-full text-sm font-medium">
                      {material.category}
                    </span>
                    <a
                      href={material.downloadLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-5 w-5 text-stone-400 hover:text-stone-600 cursor-pointer transition-colors duration-200"
                    >
                      <Download className="h-5 w-5" />
                    </a>
                  </div>

                  <h3 className="text-lg font-semibold text-stone-800 mb-2">
                    {material.title}
                  </h3>

                  <p className="text-stone-600 mb-4">
                    {material.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-stone-200">
                    <span className="text-sm text-stone-500">{material.date}</span>
                    <a
                      href={material.driveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-olive-600 hover:text-olive-700 font-medium text-sm transition-colors duration-200"
                    >
                      Acessar
                      <Download className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-stone-600 text-lg">Nenhum material encontrado.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Biblioteca;
