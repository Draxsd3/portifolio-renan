import { Award, Briefcase, Headphones, Download } from 'lucide-react';
import aboutPhoto from '@/assets/about-photo.webp';

const stats = [
  { icon: Award, label: 'Experience', value: '4+', sublabel: 'Years Working' },
  { icon: Briefcase, label: 'Completed', value: '48+', sublabel: 'Projects' },
  { icon: Headphones, label: 'Support', value: '24/7', sublabel: 'Online' },
];

export const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="section-title animate-fade-in-up">About Me</h2>
          <p className="section-subtitle animate-fade-in-up" style={{ animationDelay: '0.1s' }}>My introduction</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="flex justify-center animate-slide-in-left">
            <div className="relative group">
              <div className="w-56 h-64 sm:w-64 sm:h-72 md:w-72 md:h-80 lg:w-80 lg:h-[420px] rounded-2xl overflow-hidden shadow-hover transition-all duration-500 group-hover:shadow-2xl group-hover:scale-[1.02]">
                <img
                  src={aboutPhoto}
                  alt="Sobre mim"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 w-16 h-16 md:w-24 md:h-24 bg-foreground rounded-2xl -z-10 transition-all duration-500 group-hover:-bottom-5 group-hover:-right-5 md:group-hover:-bottom-6 md:group-hover:-right-6"></div>
              {/* Floating decorative elements */}
              <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-6 h-6 md:w-8 md:h-8 border-2 border-foreground/30 rounded-lg animate-float" style={{ animationDelay: '0.5s' }} />
              <div className="absolute -bottom-6 left-1/2 w-4 h-4 md:w-6 md:h-6 bg-foreground/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
            </div>
          </div>

          {/* Content */}
          <div className="animate-slide-in-right">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8 md:mb-10">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-background border border-border rounded-xl p-3 sm:p-4 md:p-5 text-center hover:shadow-card hover:border-foreground/20 hover:-translate-y-2 transition-all duration-300 group animate-fade-in-up hover-glow"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <stat.icon size={18} className="mx-auto mb-2 md:mb-3 text-foreground group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 sm:w-5 sm:h-5 md:w-[22px] md:h-[22px]" />
                  <p className="font-display font-bold text-lg sm:text-xl md:text-2xl text-foreground group-hover:scale-110 transition-transform duration-300">{stat.value}</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5 sm:mt-1">{stat.sublabel}</p>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6 md:mb-8 text-sm md:text-base animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              Sou um desenvolvedor de software fullstack com especialização em desenvolvimento front-end e experiência sólida em tecnologias como JavaScript, TypeScript, ReactJS, React Native, NodeJS, Styled-Components e Vue. Também possuo habilidades de desenvolvimento back-end, o que me permite criar aplicações completas, escaláveis e de alta performance que proporcionam experiências excepcionais aos usuários.
            </p>

            <a 
              href="/Curriculo_Renan_Ramos.pdf" 
              download 
              className="btn-primary group animate-fade-in-up"
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
