import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'WebSite Biocode',
    category: 'Front-End Development',
    description: 'BioCode desenvolve software sustentável, combinando tecnologia e responsabilidade ambiental para soluções inovadoras e eficientes.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    title: 'Website Gold Credit',
    category: 'Front-End Development',
    description: 'Um website corporativo para Gold Credit, projetado com minimalismo e profissionalismo, garantindo uma experiência intuitiva e sofisticada.',
    tags: ['React.js', 'TypeScript', 'Vite'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    title: 'CRM Gold Credit',
    category: 'Sistema CRM Corporativo',
    description: 'Sistema de CRM personalizado e exclusivo, desenvolvido sob medida para integrar, gerenciar e otimizar o relacionamento com clientes.',
    tags: ['Node.js', 'React.js', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop',
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    title: 'Meu Portfólio',
    category: 'Front-End Development',
    description: 'Portfólio pessoal destacando projetos, habilidades e experiências profissionais.',
    tags: ['React.js', 'TypeScript', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
    demoUrl: '#',
    codeUrl: '#',
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">Portfolio</h2>
          <p className="section-subtitle">My Recent Work</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-hover transition-all duration-300 group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <span className="text-xs text-primary font-medium uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="font-display text-lg font-semibold text-foreground mt-2 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.demoUrl}
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                  <a
                    href={project.codeUrl}
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
