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
import biocodeHome from '@/assets/biocode-home.webp';
import biocodeSobre from '@/assets/biocode-sobre.webp';
import biocodeTime from '@/assets/biocode-time.webp';
import biocodeExibicoes from '@/assets/biocode-exibicoes.webp';
import biocodeContato from '@/assets/biocode-contato.webp';

// Gold Credit screenshots
import goldcreditHome from '@/assets/goldcredit-home.webp';
import goldcreditSolucoes from '@/assets/goldcredit-solucoes.webp';
import goldcreditSobre from '@/assets/goldcredit-sobre.webp';
import goldcreditAtuacao from '@/assets/goldcredit-atuacao.webp';
import goldcreditDiferenciais from '@/assets/goldcredit-diferenciais.webp';
import goldcreditFooter from '@/assets/goldcredit-footer.webp';

// CRM Leads screenshots
import crmLogin from '@/assets/crm-login.webp';
import crmDashboard from '@/assets/crm-dashboard.webp';
import crmLeads from '@/assets/crm-leads.webp';
import crmMetricas from '@/assets/crm-metricas.webp';
import crmAgenda from '@/assets/crm-agenda.webp';
import crmPipeline from '@/assets/crm-pipeline.webp';

// Babel - Gestão Escolar screenshots
import babelHome from '@/assets/babel-home.webp';
import babelLogin from '@/assets/babel-login.webp';
import babelDashboard from '@/assets/babel-dashboard.webp';
import babelGestao from '@/assets/babel-gestao.webp';
import babelAlunos from '@/assets/babel-alunos.webp';
import babelMensagens from '@/assets/babel-mensagens.webp';
import babelFinanceiro from '@/assets/babel-financeiro.webp';

// Sistema de Análise de Crédito com IA screenshots
import creditoIAFluxo from '@/assets/credito-ia-fluxo.webp';
import creditoIAAnalise from '@/assets/credito-ia-analise.webp';
import creditoIAValores from '@/assets/credito-ia-valores.webp';
import creditoIAFeedback from '@/assets/credito-ia-feedback.webp';
import creditoIAResultado from '@/assets/credito-ia-resultado.webp';

const filters = ['All', 'App', 'Automações', 'Websites'];

const techIcons: Record<string, string> = {
  'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'Express': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'PHP/Laravel': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',
  'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'Vite': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg',
  'OpenAI': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openai/openai-original.svg',
  'RAG': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openai/openai-original.svg',
};

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
    title: 'CRM Leads',
    category: 'App',
    description: 'CRM full stack para gestão de leads, pipeline comercial com drag and drop, agenda de reuniões e relatórios operacionais com controle por perfil (RBAC).',
    tags: ['React.js', 'Node.js', 'MongoDB'],
    image: crmLogin,
    demoUrl: '#',
    codeUrl: 'https://github.com/Draxsd3/crm-fullstack',
    screenshots: [
      crmLogin,
      crmDashboard,
      crmPipeline,
      crmLeads,
      crmAgenda,
      crmMetricas,
    ],
    development: {
      duration: '3 meses',
      team: 'Solo',
      year: '2026',
      challenges: [
        'Pipeline visual com drag and drop (@hello-pangea/dnd)',
        'Autenticação JWT com controle por papéis (ADM, SDR, Closer, Supervisor)',
        'Integração externa para consulta de CNPJ com fallback de provedores (BrasilAPI + ReceitaWS)',
        'Exportação de relatórios em PDF (PDFKit) e Excel (ExcelJS)',
        'Arquitetura em camadas no backend (routes → controllers → services → models)',
      ],
      technologies: ['React 18', 'Material UI', 'Chart.js', 'React Big Calendar', 'Node.js', 'Express', 'Mongoose', 'MongoDB', 'JWT', 'PDFKit', 'ExcelJS'],
      features: [
        'Login com sessão JWT e controle por perfil (RBAC)',
        'Dashboard com indicadores e gráfico de pipeline',
        'Gestão de empresas (CRUD) com consulta automática de CNPJ',
        'Pipeline de vendas com mudança de status por arrastar e soltar',
        'Agenda de reuniões com visualização em calendário',
        'KYC e histórico de movimentações por empresa',
        'Relatórios com filtros e exportação em PDF/Excel',
        'Perfil de usuário com upload de foto',
      ],
      description: 'CRM full stack para times comerciais que precisam centralizar cadastro de empresas e contatos, controlar o funil de vendas com pipeline visual (drag and drop), gerenciar agenda de reuniões e acompanhar conversão com dashboards e relatórios. Arquitetura em camadas no backend com Express e Mongoose, frontend modular com React + Context API para autenticação e notificações. Inclui integração externa para consulta de CNPJ, exportação de relatórios em PDF/Excel e controle de acesso por 4 perfis diferentes.',
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
  {
    title: 'Babel — Gestão Escolar',
    category: 'App',
    description: 'Sistema completo de gestão escolar fullstack com controle de alunos, turmas, notas, frequência, financeiro e painel administrativo.',
    tags: ['PHP/Laravel', 'React.js', 'MySQL'],
    image: babelLogin,
    demoUrl: '#',
    codeUrl: 'https://github.com/Draxsd3/gestao-escolar-fullstack',
    screenshots: [
      babelHome,
      babelLogin,
      babelDashboard,
      babelGestao,
      babelAlunos,
      babelMensagens,
      babelFinanceiro,
    ],
    development: {
      duration: '3 semanas',
      team: 'Solo',
      year: '2026',
      challenges: [
        'Implementar controle de acesso por 6 perfis diferentes',
        'Integração completa entre API Laravel e frontend React',
        'Sistema de mensagens internas em tempo real entre perfis',
        'Controle financeiro com registro de pagamentos e inadimplentes',
        'Testes automatizados para autenticação e permissões',
      ],
      technologies: ['PHP 8.2', 'Laravel 11', 'Laravel Sanctum', 'React 18', 'Vite 5', 'MySQL 8', 'Axios', 'Recharts', 'React Router DOM'],
      features: [
        'Login com autenticação por token (Sanctum)',
        'Dashboard personalizado por perfil de usuário',
        'Gestão de alunos com histórico escolar e boletim',
        'Controle de turmas com associação de alunos e professores',
        'Sistema de mensagens internas com chat em tempo real',
        'Registro de frequência com relatórios',
        'Controle financeiro de mensalidades e inadimplentes',
        'Sistema de comunicados por perfil',
      ],
      description: 'Sistema de gestão escolar fullstack desenvolvido com Laravel 11 no backend, React + Vite no frontend e MySQL 8 como banco de dados. O projeto simula um sistema real utilizado por escolas, com 6 perfis de acesso (Administrador, Secretaria, Coordenação, Professor, Responsável e Aluno), cada um com permissões específicas. Destaque para o sistema de mensagens internas com chat entre perfis e o módulo financeiro completo com controle de mensalidades. Inclui testes automatizados para validar autenticação e operações principais.',
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
    <section id="portfolio" className="px-6 py-24 md:py-32">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="section-eyebrow">
          <span className="section-eyebrow-num">05</span>
          <h2 className="section-eyebrow-title">Projects</h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-6 border-b border-foreground/10 pb-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`text-[11px] uppercase tracking-[0.2em] font-semibold transition-colors ${
                activeFilter === filter
                  ? 'text-foreground'
                  : 'text-foreground/40 hover:text-foreground'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project list */}
        <div className="space-y-20">
          {filteredProjects.map((project, index) => (
            <article
              key={project.title}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-[16/9] bg-secondary overflow-hidden mb-6 relative border border-foreground/5">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-foreground/5 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              <div className="flex justify-between items-start gap-6">
                <div className="space-y-3 flex-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-foreground/40">
                    {String(index + 1).padStart(2, '0')} / {project.category}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-foreground/70 leading-relaxed font-light max-w-xl">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] uppercase tracking-widest text-foreground/50 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="shrink-0 text-[10px] uppercase tracking-widest font-bold border border-foreground/20 px-2 py-1 text-foreground/60">
                  {project.development.year}
                </span>
              </div>

              <div className="mt-6 flex gap-6 text-[11px] uppercase tracking-[0.2em] font-semibold">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(project);
                  }}
                  className="text-foreground border-b border-foreground pb-0.5 hover:opacity-60 transition-opacity"
                >
                  View case →
                </button>
                {project.codeUrl !== '#' && (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-foreground/50 hover:text-foreground transition-colors"
                  >
                    Source
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 gap-0 bg-background border border-foreground/10 rounded-none">
          <DialogHeader className="p-8 pb-0">
            <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-foreground/40">
              {selectedProject?.category} · {selectedProject?.development.year}
            </span>
            <DialogTitle className="font-display text-3xl font-black tracking-tight mt-2">
              {selectedProject?.title}
            </DialogTitle>
          </DialogHeader>

          {selectedProject && (
            <div className="p-8 pt-6 space-y-10">
              <Carousel className="w-full">
                <CarouselContent>
                  {selectedProject.screenshots.map((screenshot, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-video overflow-hidden bg-secondary border border-foreground/5">
                        <img
                          src={screenshot}
                          alt={`${selectedProject.title} — Tela ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2 rounded-none border-foreground/20" />
                <CarouselNext className="right-2 rounded-none border-foreground/20" />
              </Carousel>

              <div className="grid grid-cols-3 gap-4 border-y border-foreground/10 py-6">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-foreground/40 font-semibold block mb-1">Duração</span>
                  <span className="text-sm text-foreground font-medium">{selectedProject.development.duration}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-foreground/40 font-semibold block mb-1">Time</span>
                  <span className="text-sm text-foreground font-medium">{selectedProject.development.team}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-foreground/40 font-semibold block mb-1">Ano</span>
                  <span className="text-sm text-foreground font-medium">{selectedProject.development.year}</span>
                </div>
              </div>

              <div>
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/60 mb-3">Sobre o projeto</h4>
                <p className="text-sm md:text-base text-foreground/80 leading-relaxed font-light">
                  {selectedProject.development.description}
                </p>
              </div>

              <div>
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/60 mb-3">Stack técnico</h4>
                <p className="text-sm leading-loose text-foreground/80">
                  {selectedProject.development.technologies.join(' • ')}
                </p>
              </div>

              <div>
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/60 mb-3">Principais funcionalidades</h4>
                <ul className="space-y-2">
                  {selectedProject.development.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-foreground/80 font-light">
                      <span className="text-foreground/30 mt-1">—</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/60 mb-3">Desafios</h4>
                <ul className="space-y-2">
                  {selectedProject.development.challenges.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-sm text-foreground/80 font-light">
                      <span className="text-foreground/30 mt-1">—</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4 pt-6 border-t border-foreground/10">
                {selectedProject.demoUrl !== '#' && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Acessar site →
                  </a>
                )}
                {selectedProject.codeUrl !== '#' && (
                  <a
                    href={selectedProject.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 border border-foreground/20 text-foreground text-xs uppercase tracking-[0.2em] font-semibold hover:bg-foreground hover:text-background transition-colors"
                  >
                    Ver código
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

