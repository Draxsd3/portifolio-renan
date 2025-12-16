import { useState } from 'react';
import { Code, Server, Palette, ArrowRight, X } from 'lucide-react';

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
    icon: Palette,
    title: 'UI/UX Designer',
    shortDesc: 'Design de interfaces intuitivas, modernas e acessíveis',
    fullDesc: 'Serviço com um olhar atento para design, criando experiências visualmente atraentes e amigáveis ao usuário.',
    features: [
      'Design de elementos UI e layouts responsivos',
      'Criação de identidades visuais e conceitos',
      'Garantia de consistência no design visual',
      'Design de mockups e protótipos interativos',
    ],
  },
];

export const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle">What I offer</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-background border border-border rounded-2xl p-8 hover:shadow-hover hover:-translate-y-2 transition-all duration-300 group"
            >
              <service.icon
                size={36}
                className="text-foreground mb-6 group-hover:scale-110 transition-transform duration-300"
                strokeWidth={1.5}
              />
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{service.shortDesc}</p>
              <button
                onClick={() => setSelectedService(index)}
                className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:gap-3 transition-all duration-200 group/btn"
              >
                View More
                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedService !== null && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/40 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          >
            <div 
              className="bg-background rounded-2xl p-8 max-w-md w-full shadow-hover relative animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-full transition-all"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-4 mb-6">
                {(() => {
                  const Icon = services[selectedService].icon;
                  return <Icon size={32} className="text-foreground" strokeWidth={1.5} />;
                })()}
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  {services[selectedService].title}
                </h3>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {services[selectedService].fullDesc}
              </p>

              <ul className="space-y-4">
                {services[selectedService].features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                    <span className="w-2 h-2 rounded-full bg-foreground mt-1.5 flex-shrink-0" />
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
