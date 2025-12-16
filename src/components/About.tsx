import { Award, Briefcase, Headphones, Download } from 'lucide-react';
import aboutPhoto from '@/assets/about-photo.jpg';

const stats = [
  { icon: Award, label: 'Experience', value: '4+', sublabel: 'Years Working' },
  { icon: Briefcase, label: 'Completed', value: '48+', sublabel: 'Projects' },
  { icon: Headphones, label: 'Support', value: '24/7', sublabel: 'Online' },
];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">My introduction</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-72 h-80 md:w-80 md:h-[420px] rounded-2xl overflow-hidden shadow-hover">
                <img
                  src={aboutPhoto}
                  alt="Sobre mim"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-foreground rounded-2xl -z-10"></div>
            </div>
          </div>

          {/* Content */}
          <div>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-background border border-border rounded-xl p-5 text-center hover:shadow-card hover:border-foreground/20 transition-all duration-300"
                >
                  <stat.icon size={22} className="mx-auto mb-3 text-foreground" />
                  <p className="font-display font-bold text-2xl text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.sublabel}</p>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground leading-relaxed mb-8 text-base">
              Sou um desenvolvedor de software fullstack com especialização em desenvolvimento front-end e experiência sólida em tecnologias como JavaScript, TypeScript, ReactJS, React Native, NodeJS, Styled-Components e Vue. Também possuo habilidades de desenvolvimento back-end, o que me permite criar aplicações completas, escaláveis e de alta performance que proporcionam experiências excepcionais aos usuários.
            </p>

            <a href="#" className="btn-primary">
              Download CV
              <Download size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
