import { Award, Briefcase, Headphones, Download } from 'lucide-react';

const stats = [
  { icon: Award, label: 'Experience', value: '3+', sublabel: 'Years Working' },
  { icon: Briefcase, label: 'Completed', value: '15+', sublabel: 'Projects' },
  { icon: Headphones, label: 'Support', value: '✓', sublabel: 'Disponível' },
];

export const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="section-title animate-fade-in-up">About Me</h2>
          <p className="section-subtitle animate-fade-in-up" style={{ animationDelay: '0.1s' }}>My introduction</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="animate-fade-in-up text-center">
            <div className="flex justify-center items-start gap-8 sm:gap-16 md:gap-24 mb-10 md:mb-12">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center group animate-fade-in-up"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <stat.icon size={22} className="mx-auto mb-2 md:mb-3 text-foreground group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300" strokeWidth={1.5} />
                  <p className="font-display font-bold text-xl sm:text-2xl md:text-3xl text-foreground">{stat.value}</p>
                  <p className="text-[10px] sm:text-xs uppercase tracking-[0.18em] text-muted-foreground mt-1">{stat.sublabel}</p>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6 md:mb-8 text-sm md:text-base animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              Atuo como engenheiro de software responsável pela área de tecnologia de uma securitizadora, desenvolvendo sistemas internos em PHP e Node.js, integrações via APIs REST, bancos de dados relacionais e ambientes Linux em produção. Construo um motor de crédito próprio que combina regras de negócio, pipelines de dados e modelos de linguagem (GPT, Claude e Gemini) com técnicas de RAG e embeddings para apoiar a tomada de decisão dos analistas. Também desenho automações ponta a ponta com n8n auto-hospedado, webhooks e integrações com ferramentas de mercado, sempre priorizando código versionado, observabilidade e arquitetura sustentável — não improviso disfarçado de IA.
            </p>

            <a
              href="/Curriculo_Renan_Ramos.pdf"
              download
              className="btn-primary group animate-fade-in-up inline-flex"
              style={{ animationDelay: '0.6s' }}
            >
              Download CV
              <Download size={18} className="group-hover:translate-y-1 group-hover:animate-bounce transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
