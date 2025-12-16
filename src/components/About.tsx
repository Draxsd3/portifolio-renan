import { Award, Briefcase, Headphones, Download } from 'lucide-react';
import aboutPhoto from '@/assets/about-photo.jpg';

const stats = [
  { icon: Award, label: 'Experience', value: '4 Years', sublabel: 'Working' },
  { icon: Briefcase, label: 'Completed', value: '48+', sublabel: 'Projects' },
  { icon: Headphones, label: 'Support', value: 'Online', sublabel: '24/7' },
];

export const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">My introduction</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <div className="w-72 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden shadow-card">
              <img
                src={aboutPhoto}
                alt="Sobre mim"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card border border-border rounded-2xl p-4 text-center hover:shadow-card transition-shadow duration-300"
                >
                  <stat.icon size={24} className="mx-auto mb-2 text-primary" />
                  <p className="font-semibold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.sublabel}</p>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Sou um desenvolvedor de software fullstack com especialização em desenvolvimento front-end e experiência sólida em tecnologias como JavaScript, TypeScript, ReactJS, React Native, NodeJS, Styled-Components e Vue. Também possuo habilidades de desenvolvimento back-end, o que me permite criar aplicações completas, escaláveis e de alta performance que proporcionam experiências excepcionais aos usuários.
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:shadow-hover hover:scale-105 transition-all duration-300"
            >
              Download CV
              <Download size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
