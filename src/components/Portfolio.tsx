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

// Biocode screenshots
import biocodeHome from '@/assets/biocode-home.png';
import biocodeSobre from '@/assets/biocode-sobre.png';
import biocodeTime from '@/assets/biocode-time.png';
import biocodeExibicoes from '@/assets/biocode-exibicoes.png';
import biocodeContato from '@/assets/biocode-contato.png';

// Gold Credit screenshots
import goldcreditHome from '@/assets/goldcredit-home.png';
import goldcreditSolucoes from '@/assets/goldcredit-solucoes.png';
import goldcreditSobre from '@/assets/goldcredit-sobre.png';
import goldcreditAtuacao from '@/assets/goldcredit-atuacao.png';
import goldcreditDiferenciais from '@/assets/goldcredit-diferenciais.png';
import goldcreditFooter from '@/assets/goldcredit-footer.png';

// CRM Gold Credit screenshots
import crmLogin from '@/assets/crm-login.png';
import crmDashboard from '@/assets/crm-dashboard.png';
import crmLeads from '@/assets/crm-leads.png';
import crmVideoIA from '@/assets/crm-video-ia.png';
import crmMetricas from '@/assets/crm-metricas.png';
import crmAgenda from '@/assets/crm-agenda.png';
import crmPipeline from '@/assets/crm-pipeline.png';

// Sistema de Análise de Crédito com IA screenshots
import creditoIAFluxo from '@/assets/credito-ia-fluxo.png';
import creditoIAAnalise from '@/assets/credito-ia-analise.png';
import creditoIAValores from '@/assets/credito-ia-valores.png';
import creditoIAFeedback from '@/assets/credito-ia-feedback.png';
import creditoIAResultado from '@/assets/credito-ia-resultado.jpg';

const filters = ['All', 'App', 'Automações', 'Websites'];

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
    category: 'Websites',
    description: 'BioCode desenvolve software sustentável, combinando tecnologia e responsabilidade ambiental para soluções inovadoras e eficientes.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: biocodeHome,
    demoUrl: 'https://draxsd3.github.io/biocode/',
    codeUrl: 'https://github.com/Draxsd3/biocode',
    screenshots: [
      biocodeHome,
      biocodeSobre,
      biocodeTime,
      biocodeExibicoes,
      biocodeContato,
    ],
    development: {
      duration: '2 semanas',
      team: '6 integrantes',
      year: '2024',
      challenges: [
        'Criar design responsivo para todos os dispositivos',
        'Implementar animações suaves de scroll',
        'Integração das artes com a estrutura do site',
        'Coordenação do trabalho em equipe do TCC',
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript ES6', 'Git', 'GitHub Pages'],
      features: [
        'Design responsivo',
        'Seção Home com hero impactante',
        'Sobre Nós com história da empresa',
        'Nosso Time com cards dos integrantes',
        'Seção de Exibições e Eventos',
        'Página de Contato com redes sociais',
      ],
      description: 'Projeto de TCC desenvolvido em grupo para a faculdade. O Biocode é uma empresa fictícia de tecnologia voltada para agricultura inteligente, combinando inovação e sustentabilidade. O site foi criado com HTML, CSS e JavaScript puro, apresentando um design moderno com tema escuro e detalhes em dourado.',
    },
  },
  {
    title: 'Website Gold Credit',
    category: 'Websites',
    description: 'Website corporativo para Gold Credit, empresa de antecipação de recebíveis, projetado com elegância e profissionalismo.',
    tags: ['React.js', 'TypeScript', 'Vite'],
    image: goldcreditHome,
    demoUrl: 'https://goldcreditsa.com.br/',
    codeUrl: '#',
    screenshots: [
      goldcreditHome,
      goldcreditSolucoes,
      goldcreditSobre,
      goldcreditAtuacao,
      goldcreditDiferenciais,
      goldcreditFooter,
    ],
    development: {
      duration: '4 semanas',
      team: 'Solo',
      year: '2024',
      challenges: [
        'Criar identidade visual premium e confiável',
        'Implementar seções informativas sobre soluções financeiras',
        'Desenvolver layout responsivo e acessível',
        'Integração com WhatsApp para atendimento',
      ],
      technologies: ['React.js', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion'],
      features: [
        'Hero section impactante',
        'Seção de Soluções (Antecipação, Crédito Agro, Investimentos)',
        'Quem Somos com valores da empresa',
        'Mapa de atuação nacional',
        'Diferenciais competitivos',
        'Footer com informações de contato',
      ],
      description: 'Website institucional desenvolvido para a Gold Credit, securitizadora especializada em antecipação de recebíveis. O projeto apresenta um design elegante com tema escuro e detalhes dourados, transmitindo confiança e profissionalismo para o mercado financeiro.',
    },
  },
  {
    title: 'CRM Gold Credit',
    category: 'App',
    description: 'Sistema CRM sob medida com integração de IA, Google Agenda e gestão completa de leads e pipeline de vendas.',
    tags: ['React.js', 'Node.js', 'MongoDB'],
    image: crmLogin,
    demoUrl: '#',
    codeUrl: '#',
    screenshots: [
      crmLogin,
      crmDashboard,
      crmPipeline,
      crmLeads,
      crmAgenda,
      crmMetricas,
      crmVideoIA,
    ],
    development: {
      duration: '6 meses',
      team: 'Solo',
      year: '2024',
      challenges: [
        'Integração com Google Calendar API',
        'Implementação de IA para resumo de vídeos',
        'Sistema de pipeline visual estilo Kanban',
        'Gestão de permissões por departamento',
        'Relatórios e métricas em tempo real',
      ],
      technologies: ['React.js', 'Vite', 'Node.js', 'MongoDB Atlas', 'Vercel', 'Hostinger', 'OpenAI API', 'Google Calendar API'],
      features: [
        'Login seguro com autenticação',
        'Dashboard com métricas de conversão',
        'Pipeline visual de vendas (Kanban)',
        'Gestão de leads frios com calendário',
        'Agenda integrada com Google Calendar',
        'Relatórios de conversão e desempenho',
        'Resumo de vídeo com IA (Whisper + GPT)',
      ],
      description: 'CRM completo desenvolvido sob medida para a Gold Credit. O sistema oferece gestão inteligente de relacionamento com clientes, incluindo pipeline visual de vendas, integração com Google Agenda para reuniões, e funcionalidade de IA para transcrição e resumo automático de vídeos de reuniões. Hospedado na Vercel (frontend), Hostinger (backend) e MongoDB Atlas (database).',
    },
  },
  {
    title: 'Análise de Crédito com IA',
    category: 'Automações',
    description: 'Sistema inteligente de análise de crédito utilizando agente RAG que aprende continuamente com feedbacks dos analistas.',
    tags: ['React.js', 'Node.js', 'OpenAI', 'RAG'],
    image: creditoIAFluxo,
    demoUrl: '#',
    codeUrl: '#',
    screenshots: [
      creditoIAResultado,
      creditoIAAnalise,
      creditoIAValores,
      creditoIAFeedback,
      creditoIAFluxo,
    ],
    development: {
      duration: '3 meses',
      team: 'Solo',
      year: '2025',
      challenges: [
        'Implementação de agente RAG com memória vetorial',
        'Sistema de aprendizado contínuo via feedback',
        'Extração automática de dados de documentos',
        'Análise de risco com múltiplos critérios',
        'Integração com Supabase Vector Store',
      ],
      technologies: ['React.js', 'Node.js', 'n8n', 'OpenAI GPT-4', 'Supabase', 'PostgreSQL', 'Embeddings', 'RAG'],
      features: [
        'Análise automática de NF-e, Duplicatas e Boletos',
        'Extração de dados de cedente e sacados',
        'Parecer com IA baseado em perfil de risco',
        'Scores de segurança (Cedente, Sacado, Operação)',
        'Sistema de feedback para aprendizado contínuo',
        'Histórico de análises realizadas',
        'Gráfico radar de perfil de risco',
      ],
      description: 'Sistema de análise de crédito inteligente desenvolvido para a Gold Credit. Utiliza um agente RAG (Retrieval Augmented Generation) que analisa documentos financeiros e gera pareceres automáticos. O diferencial é o sistema de aprendizado contínuo: cada feedback dos analistas é armazenado como embedding no Supabase Vector Store, permitindo que a IA aprenda com decisões passadas e melhore suas análises futuras.',
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
    <section id="portfolio" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="section-title">Portfolio</h2>
          <p className="section-subtitle">My Recent Work</p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-8 md:mb-12 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-foreground text-background'
                  : 'bg-background border border-border text-muted-foreground hover:border-foreground hover:text-foreground'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="bg-background border border-border rounded-2xl overflow-hidden group animate-fade-in-up relative transition-all duration-500 hover:shadow-2xl hover:shadow-foreground/10 hover:-translate-y-2 hover:border-foreground/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 via-transparent to-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
              
              <div className="aspect-video overflow-hidden bg-secondary relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
                />
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Category badge floating on hover */}
                <div className="absolute top-4 left-4 transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <span className="px-3 py-1.5 text-xs bg-background/90 backdrop-blur-sm text-foreground rounded-full font-semibold uppercase tracking-wider shadow-lg">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6 relative">
                <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider group-hover:text-foreground transition-colors duration-300">
                  {project.category}
                </span>
                <h3 className="font-display text-xl font-semibold text-foreground mt-2 mb-3 group-hover:translate-x-1 transition-transform duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2 group-hover:text-foreground/80 transition-colors duration-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full font-medium transition-all duration-300 group-hover:bg-foreground group-hover:text-background"
                      style={{ transitionDelay: `${tagIndex * 50}ms` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-foreground relative overflow-hidden group/btn"
                  >
                    <ExternalLink size={16} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                    <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-foreground group-hover/btn:after:w-full after:transition-all after:duration-300">
                      Ver Demo
                    </span>
                  </button>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group/code"
                  >
                    <Github size={16} className="group-hover/code:rotate-12 transition-transform duration-300" />
                    <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-foreground group-hover/code:after:w-full after:transition-all after:duration-300">
                      Code
                    </span>
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
