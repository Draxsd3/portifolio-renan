import { useState } from 'react';
import { ExternalLink, Github, X, ChevronLeft, ChevronRight, Calendar, Clock, Users } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const filters = ['All', 'Web', 'App', 'Design'];

interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  demoUrl: string;
  codeUrl: string;
  screenshots: string[];
  development: {
    duration: string;
    team: string;
    year: string;
    challenges: string[];
    technologies: string[];
    features: string[];
    description: string;
  };
}

const projects: Project[] = [
  {
    title: 'WebSite Biocode',
    category: 'Web',
    description: 'BioCode desenvolve software sustentável, combinando tecnologia e responsabilidade ambiental para soluções inovadoras e eficientes.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80',
    demoUrl: 'https://draxsd3.github.io/biocode/',
    codeUrl: 'https://github.com/Draxsd3/biocode',
    screenshots: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&h=800&fit=crop&q=80',
    ],
    development: {
      duration: '2 semanas',
      team: 'Solo',
      year: '2024',
      challenges: [
        'Criar design responsivo para todos os dispositivos',
        'Implementar animações suaves de scroll',
        'Otimizar performance do site',
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript ES6', 'Git'],
      features: [
        'Design responsivo',
        'Animações CSS customizadas',
        'Formulário de contato',
        'SEO otimizado',
      ],
      description: 'Este projeto foi desenvolvido para a BioCode com foco em sustentabilidade e tecnologia. O desafio principal foi criar uma identidade visual que transmitisse os valores da empresa enquanto mantinha uma experiência de usuário fluida e moderna.',
    },
  },
  {
    title: 'Website Gold Credit',
    category: 'Web',
    description: 'Website corporativo para Gold Credit, projetado com minimalismo e profissionalismo, garantindo uma experiência intuitiva e sofisticada.',
    tags: ['React.js', 'TypeScript', 'Vite'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80',
    demoUrl: 'https://goldcreditsa.com.br/',
    codeUrl: '#',
    screenshots: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&h=800&fit=crop&q=80',
    ],
    development: {
      duration: '4 semanas',
      team: 'Solo',
      year: '2024',
      challenges: [
        'Integração com sistemas de CRM existentes',
        'Implementação de formulários complexos',
        'Garantir segurança dos dados financeiros',
      ],
      technologies: ['React.js', 'TypeScript', 'Vite', 'Tailwind CSS', 'Node.js'],
      features: [
        'Sistema de simulação de crédito',
        'Dashboard administrativo',
        'Integração com APIs bancárias',
        'Área do cliente',
      ],
      description: 'Projeto desenvolvido para a Gold Credit, uma empresa de crédito consignado. O foco foi criar uma plataforma confiável e profissional que transmitisse segurança aos clientes, com formulários de simulação de crédito e área administrativa completa.',
    },
  },
  {
    title: 'CRM Gold Credit',
    category: 'App',
    description: 'Sistema de CRM personalizado e exclusivo, desenvolvido sob medida para integrar, gerenciar e otimizar o relacionamento com clientes.',
    tags: ['Node.js', 'React.js', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop&q=80',
    demoUrl: '#',
    codeUrl: '#',
    screenshots: [
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=800&fit=crop&q=80',
    ],
    development: {
      duration: '3 meses',
      team: '2 desenvolvedores',
      year: '2024',
      challenges: [
        'Modelagem de banco de dados complexa',
        'Sistema de permissões por níveis',
        'Relatórios em tempo real',
      ],
      technologies: ['Node.js', 'Express', 'React.js', 'MySQL', 'Redis', 'Docker'],
      features: [
        'Gestão completa de clientes',
        'Pipeline de vendas',
        'Relatórios automatizados',
        'Integração com WhatsApp',
        'Sistema de notificações',
      ],
      description: 'Sistema CRM completo desenvolvido especificamente para as necessidades da Gold Credit. Inclui gestão de leads, acompanhamento de propostas, integração com sistemas bancários e relatórios detalhados de performance da equipe comercial.',
    },
  },
  {
    title: 'Meu Portfólio',
    category: 'Web',
    description: 'Portfólio pessoal destacando projetos, habilidades e experiências profissionais com design moderno e responsivo.',
    tags: ['React.js', 'TypeScript', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop&q=80',
    demoUrl: 'https://draxsd3.github.io/portifolio/',
    codeUrl: 'https://github.com/Draxsd3/portifolio',
    screenshots: [
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=800&fit=crop&q=80',
    ],
    development: {
      duration: '1 semana',
      team: 'Solo',
      year: '2024',
      challenges: [
        'Design minimalista e impactante',
        'Animações de scroll suaves',
        'Otimização de imagens',
      ],
      technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      features: [
        'Design responsivo',
        'Tema dark/light',
        'Animações interativas',
        'Formulário de contato',
      ],
      description: 'Portfólio pessoal desenvolvido para apresentar meus projetos e habilidades. O objetivo foi criar uma experiência visual impactante com design minimalista, mantendo foco na usabilidade e performance.',
    },
  },
];

export const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:underline"
                  >
                    <ExternalLink size={16} />
                    Ver Demo
                  </button>
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

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 gap-0">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="font-display text-2xl font-bold">
              {selectedProject?.title}
            </DialogTitle>
          </DialogHeader>

          {selectedProject && (
            <div className="p-6 pt-4 space-y-6">
              {/* Carousel */}
              <div className="relative">
                <Carousel className="w-full">
                  <CarouselContent>
                    {selectedProject.screenshots.map((screenshot, index) => (
                      <CarouselItem key={index}>
                        <div className="aspect-video rounded-xl overflow-hidden bg-secondary">
                          <img
                            src={screenshot}
                            alt={`${selectedProject.title} - Tela ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
              </div>

              {/* Project Info */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock size={16} />
                  <span>{selectedProject.development.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users size={16} />
                  <span>{selectedProject.development.team}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar size={16} />
                  <span>{selectedProject.development.year}</span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="font-display font-semibold text-foreground mb-2">Sobre o Projeto</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {selectedProject.development.description}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="font-display font-semibold text-foreground mb-3">Tecnologias Utilizadas</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.development.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs bg-foreground text-background rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h4 className="font-display font-semibold text-foreground mb-3">Principais Funcionalidades</h4>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {selectedProject.development.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-foreground rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges */}
              <div>
                <h4 className="font-display font-semibold text-foreground mb-3">Desafios Enfrentados</h4>
                <ul className="space-y-2">
                  {selectedProject.development.challenges.map((challenge) => (
                    <li key={challenge} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-1.5 flex-shrink-0" />
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="flex gap-4 pt-4 border-t border-border">
                {selectedProject.demoUrl !== '#' && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink size={16} />
                    Acessar Site
                  </a>
                )}
                {selectedProject.codeUrl !== '#' && (
                  <a
                    href={selectedProject.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full text-sm font-medium text-foreground hover:bg-secondary transition-colors"
                  >
                    <Github size={16} />
                    Ver Código
                  </a>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
