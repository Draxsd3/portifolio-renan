import { useState } from 'react';
import { Code, Server, Palette, ArrowRight, X } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Web Developer',
    shortDesc: 'Desenvolvimento de websites e aplicações web',
    fullDesc: 'Serviço com mais de 3 anos de experiência no desenvolvimento de websites e aplicações web de alta qualidade.',
    features: [
      'Desenvolvimento de websites e aplicações web responsivas',
      'Criação de soluções web customizadas com frameworks modernos',
      'Integração com serviços backend e APIs',
    ],
  },
  {
    icon: Server,
    title: 'Back-End Developer',
    shortDesc: 'Desenvolvimento de sistemas backend robustos',
    fullDesc: 'Expertise em tecnologias server-side, criando sistemas back-end robustos e escaláveis para aplicações web.',
    features: [
      'Desenvolvimento e manutenção de lógica server-side',
      'Trabalho com bancos de dados e APIs',
      'Garantia de alta performance e escalabilidade',
    ],
  },
  {
    icon: Palette,
    title: 'UI/UX Designer',
    shortDesc: 'Design de interfaces intuitivas e modernas',
    fullDesc: 'Serviço com um olhar atento para design, criando experiências visualmente atraentes e amigáveis ao usuário.',
    features: [
      'Design de elementos UI e layouts',
      'Criação de identidades visuais e conceitos',
      'Garantia de consistência no design visual',
      'Design de mockups e protótipos',
    ],
  },
];

export const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle">What I offer</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-hover hover:-translate-y-1 transition-all duration-300 group"
            >
              <service.icon
                size={32}
                className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300"
              />
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{service.shortDesc}</p>
              <button
                onClick={() => setSelectedService(index)}
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all duration-200"
              >
                View More
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedService !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/20 backdrop-blur-sm">
            <div className="bg-card rounded-2xl p-8 max-w-md w-full shadow-hover relative animate-fade-in">
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={24} />
              </button>

              <div className="flex items-center gap-3 mb-4">
                {(() => {
                  const Icon = services[selectedService].icon;
                  return <Icon size={28} className="text-primary" />;
                })()}
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {services[selectedService].title}
                </h3>
              </div>

              <p className="text-muted-foreground mb-6">
                {services[selectedService].fullDesc}
              </p>

              <ul className="space-y-3">
                {services[selectedService].features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
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
