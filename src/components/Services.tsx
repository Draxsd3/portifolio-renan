import { useState } from 'react';
import { Code, Server, Bot, ArrowRight, X } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Web Developer',
    shortDesc: 'Desenvolvimento de websites e aplicações web de alta qualidade',
    fullDesc: 'Serviço com mais de 3 anos de experiência no desenvolvimento de websites e aplicações web de alta qualidade.',
    features: [
      'Desenvolvimento de websites e aplicações web responsivas',
      'Criação de soluções web customizadas com frameworks modernos',
      'Integração com serviços backend e APIs',
      'Otimização de performance e SEO',
    ],
  },
  {
    icon: Server,
    title: 'Back-End Developer',
    shortDesc: 'Desenvolvimento de sistemas backend robustos e escaláveis',
    fullDesc: 'Expertise em tecnologias server-side, criando sistemas back-end robustos e escaláveis para aplicações web.',
    features: [
      'Desenvolvimento e manutenção de lógica server-side',
      'Trabalho com bancos de dados relacionais e NoSQL',
      'Criação e documentação de APIs RESTful',
      'Garantia de alta performance e escalabilidade',
    ],
  },
  {
    icon: Bot,
    title: 'IA & Automação',
    shortDesc: 'Integração de modelos de linguagem, automação de processos e fluxos inteligentes com n8n e APIs',
    fullDesc: 'Desenvolvimento de soluções inteligentes integrando modelos de IA, automação de fluxos de trabalho e processos de negócio.',
    features: [
      'Integração de modelos de linguagem (LLMs) em sistemas',
      'Automação de processos com n8n e APIs REST',
      'Criação de agentes RAG para análise de dados',
      'Fluxos inteligentes para operações financeiras',
    ],
  },
];

export const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <section id="services" className="py-16 md:py-24 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="section-title animate-fade-in-up">Services</h2>
          <p className="section-subtitle animate-fade-in-up" style={{ animationDelay: '0.1s' }}>What I offer</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-background border border-border rounded-2xl p-5 md:p-8 hover:shadow-hover hover:-translate-y-3 hover:border-foreground/20 transition-all duration-500 group animate-fade-in-up hover-glow relative overflow-hidden"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 via-transparent to-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <service.icon
                size={28}
                className="text-foreground mb-4 md:mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 relative z-10 md:w-9 md:h-9"
                strokeWidth={1.5}
              />
              <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3 group-hover:translate-x-1 transition-transform duration-300 relative z-10">
                {service.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground mb-4 md:mb-6 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300 relative z-10">{service.shortDesc}</p>
              <button
                onClick={() => setSelectedService(index)}
                className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-foreground transition-all duration-200 group/btn relative z-10"
              >
                <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-foreground group-hover/btn:after:w-full after:transition-all after:duration-300">
                  View More
                </span>
                <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform duration-300 md:w-4 md:h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedService !== null && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/40 backdrop-blur-sm animate-fade-in"
            onClick={() => setSelectedService(null)}
          >
            <div 
              className="bg-background rounded-2xl p-6 md:p-8 max-w-md w-full shadow-hover relative animate-bounce-in max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-3 right-3 md:top-4 md:right-4 p-2 text-muted-foreground hover:text-foreground hover:bg-secondary hover:rotate-90 rounded-full transition-all duration-300"
              >
                <X size={18} className="md:w-5 md:h-5" />
              </button>

              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                {(() => {
                  const Icon = services[selectedService].icon;
                  return <Icon size={28} className="text-foreground animate-rotate-in md:w-8 md:h-8" strokeWidth={1.5} />;
                })()}
                <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground animate-fade-in" style={{ animationDelay: '0.1s' }}>
                  {services[selectedService].title}
                </h3>
              </div>

              <p className="text-muted-foreground mb-4 md:mb-6 leading-relaxed text-sm md:text-base animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                {services[selectedService].fullDesc}
              </p>

              <ul className="space-y-3 md:space-y-4">
                {services[selectedService].features.map((feature, i) => (
                  <li 
                    key={i} 
                    className="flex items-start gap-3 text-xs md:text-sm text-foreground animate-fade-in-up"
                    style={{ animationDelay: `${0.3 + i * 0.1}s` }}
                  >
                    <span className="w-2 h-2 rounded-full bg-foreground mt-1 md:mt-1.5 flex-shrink-0 animate-pulse-soft" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
