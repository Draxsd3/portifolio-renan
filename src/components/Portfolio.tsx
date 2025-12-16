import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const filters = ['All', 'Web', 'App', 'Design'];

const projects = [
  {
    title: 'WebSite Biocode',
    category: 'Web',
    description: 'BioCode desenvolve software sustentável, combinando tecnologia e responsabilidade ambiental para soluções inovadoras e eficientes.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80',
    demoUrl: 'https://draxsd3.github.io/biocode/',
    codeUrl: 'https://github.com/Draxsd3/biocode',
  },
  {
    title: 'Website Gold Credit',
    category: 'Web',
    description: 'Website corporativo para Gold Credit, projetado com minimalismo e profissionalismo, garantindo uma experiência intuitiva e sofisticada.',
    tags: ['React.js', 'TypeScript', 'Vite'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80',
    demoUrl: 'https://goldcreditsa.com.br/',
    codeUrl: '#',
  },
  {
    title: 'CRM Gold Credit',
    category: 'App',
    description: 'Sistema de CRM personalizado e exclusivo, desenvolvido sob medida para integrar, gerenciar e otimizar o relacionamento com clientes.',
    tags: ['Node.js', 'React.js', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop&q=80',
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    title: 'Meu Portfólio',
    category: 'Web',
    description: 'Portfólio pessoal destacando projetos, habilidades e experiências profissionais com design moderno e responsivo.',
    tags: ['React.js', 'TypeScript', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop&q=80',
    demoUrl: 'https://draxsd3.github.io/portifolio/',
    codeUrl: 'https://github.com/Draxsd3/portifolio',
  },
];

export const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">Portfolio</h2>
          <p className="section-subtitle">My Recent Work</p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-foreground text-background'
                  : 'bg-background border border-border text-muted-foreground hover:border-foreground hover:text-foreground'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="bg-background border border-border rounded-2xl overflow-hidden hover:shadow-hover transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden bg-secondary">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
              </div>

              <div className="p-6">
                <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="font-display text-xl font-semibold text-foreground mt-2 mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:underline"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
