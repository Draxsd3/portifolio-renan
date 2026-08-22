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

// Plataforma Operacional screenshots
import plataformaOperacionalDashboard from '@/assets/plataforma-operacional-dashboard.webp.asset.json';
import plataformaOperacionalCedentes from '@/assets/plataforma-operacional-cedentes.webp.asset.json';
import plataformaOperacionalPipeline from '@/assets/plataforma-operacional-pipeline.webp.asset.json';
import plataformaOperacionalSacados from '@/assets/plataforma-operacional-sacados.webp.asset.json';
import plataformaOperacionalRelatorios from '@/assets/plataforma-operacional-relatorios.webp.asset.json';

// Plataforma Operacional screenshots
import operacionalDashboard from '@/assets/operacional-dashboard.webp';
import operacionalCrm from '@/assets/operacional-crm.webp';
import operacionalInvestigacao from '@/assets/operacional-investigacao.webp';
import operacionalCedentes from '@/assets/operacional-cedentes.webp';
import operacionalScore from '@/assets/operacional-score.webp';

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
  'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
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
    title: 'Plataforma Operacional',
    category: 'App',
    description: 'Plataforma operacional construída para uma securitizadora, gerenciando carteira, cedentes, sacados, pipeline de operações e relatórios financeiros em tempo real.',
    tags: ['React.js', 'Node.js', 'PostgreSQL', 'Redis'],
    image: plataformaOperacionalDashboard,
    demoUrl: '#',
    codeUrl: '#',
    screenshots: [
      plataformaOperacionalDashboard,
      plataformaOperacionalCedentes,
      plataformaOperacionalPipeline,
      plataformaOperacionalSacados,
      plataformaOperacionalRelatorios,
    ],
    development: {
      duration: '6 meses (evolução contínua)',
      team: 'Solo',
      year: '2025',
      challenges: [
        'Modelar domínio financeiro de securitizadora (cedentes, sacados, operações, recebíveis)',
        'Pipeline de operações com acompanhamento de status e formalização',
        'Gestão de risco com exposição, atrasos e concentração por sacado',
        'Relatórios operacionais e financeiros com exportação e histórico',
        'Integração de dados contábeis e conciliação de recebíveis',
      ],
      technologies: ['React 18', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Linux', 'n8n'],
      features: [
        'Dashboard operacional com saldo de carteira, inadimplência e volume',
        'Cadastro e gestão de cedentes com limites e documentação',
        'Pipeline de operações com acompanhamento de status e responsáveis',
        'Gestão de sacados com exposição, atrasos e concentração',
        'Relatórios financeiros por período com exportação',
        'Auditoria de movimentações e decisões',
      ],
      description: 'Plataforma operacional construída para uma securitizadora, responsável por acompanhar a carteira de recebíveis, gerenciar cedentes e sacados, conduzir operações de compra de crédito e gerar relatórios financeiros. O sistema centraliza o pipeline de operações (nova operação, análise, formalização, desembolso e liquidação), controla limites e documentação dos cedentes, monitora a exposição e atrasos dos sacados, e produz relatórios gerenciais com histórico. Back-end em Node.js com PostgreSQL, cache com Redis, contêineres Docker em ambiente Linux e automações de rotina em n8n. As telas exibidas são mockups ilustrativos, sem dados reais.',
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
  {
    title: 'Plataforma Pré-Operacional',
    category: 'App',
    description: 'Plataforma pré-operacional construída para uma securitizadora, unificando CRM comercial, entrada e análise de cedentes, investigação web com IA e score de crédito em um único fluxo de decisão.',
    tags: ['React.js', 'Node.js', 'PostgreSQL', 'OpenAI'],
    image: operacionalDashboard,
    demoUrl: '#',
    codeUrl: '#',
    screenshots: [
      operacionalDashboard,
      operacionalCrm,
      operacionalCedentes,
      operacionalInvestigacao,
      operacionalScore,
    ],
    development: {
      duration: '6 meses (evolução contínua)',
      team: 'Solo',
      year: '2025',
      challenges: [
        'Unificar CRM, onboarding de cedentes e análise de risco em um único fluxo',
        'Investigação web automatizada com IA e checagem de fontes públicas',
        'Motor de score de crédito com critérios ponderados e trilha de auditoria',
        'Orquestração de filas e webhooks para enriquecimento de dados assíncrono',
        'Controle de acesso por perfil e versionamento de regras de decisão',
      ],
      technologies: ['React 18', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'n8n', 'OpenAI', 'Embeddings/RAG', 'Docker', 'Linux'],
      features: [
        'Dashboard operacional com indicadores de volume, status e ticket médio',
        'CRM com funil kanban, atividades e histórico por empresa',
        'Entrada de cedentes em etapas com checklist e documentos obrigatórios',
        'Investigação web com IA: coleta de fontes públicas e resumo de riscos',
        'Score de crédito com pesos por critério, perfil de risco e recomendação',
        'Decisão registrada com justificativa, analista responsável e exportação em PDF',
      ],
      description: 'Plataforma pré-operacional construída para uma securitizadora, voltada ao processo de entrada e análise de clientes em uma operação financeira. Concentra o funil comercial (CRM), o cadastro e a validação documental de cedentes, uma camada de investigação web com IA sobre fontes públicas e um motor de score de crédito com critérios ponderados. Cada decisão fica registrada com justificativa e responsável, garantindo rastreabilidade. Back-end em Node.js com PostgreSQL, processamento assíncrono via filas e automações em n8n; a camada de IA usa LLMs com RAG apenas como apoio à decisão do analista — nunca como substituto. As telas exibidas são mockups ilustrativos, sem dados reais.',
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
                      className="inline-flex items-center gap-1.5 px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full font-medium transition-all duration-300 group-hover:bg-foreground group-hover:text-background"
                      style={{ transitionDelay: `${tagIndex * 50}ms` }}
                    >
                      {techIcons[tag] && (
                        <img src={techIcons[tag]} alt={tag} className="w-3.5 h-3.5" />
                      )}
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
