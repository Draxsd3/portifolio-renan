import { useState } from 'react';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

const education = [
  {
    title: 'Técnico em Informática',
    institution: 'Senac - Presencial',
    period: '2022 - 2024',
  },
  {
    title: 'MERN Stack',
    institution: 'DankiCode - Online',
    period: '2024 - 6 Meses',
  },
  {
    title: 'Web Development',
    institution: 'Alura - Online',
    period: '2024 - 4 Meses',
  },
  {
    title: 'Desenvolvimento de Softwares',
    institution: 'Fatec - Presencial',
    period: '2024 - Presente',
  },
];

const experience = [
  {
    title: 'Software Engineer',
    institution: 'Gold Credit Securitizadora S/A',
    period: '2024 - Presente',
  },
  {
    title: 'Desenvolvedor Freelance',
    institution: 'Autônomo',
    period: '2022 - Presente',
  },
  {
    title: 'Suporte Técnico',
    institution: 'EasySoft Sistemas',
    period: '2022 - 2024',
  },
];

type TabType = 'education' | 'experience';

export const Qualifications = () => {
  const [activeTab, setActiveTab] = useState<TabType>('education');

  const currentData = activeTab === 'education' ? education : experience;

  return (
    <section id="qualifications" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="section-title">Qualification</h2>
          <p className="section-subtitle">My personal journey</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 sm:gap-8 mb-8 md:mb-12">
          <button
            onClick={() => setActiveTab('education')}
            className={`flex items-center gap-2 text-sm sm:text-base md:text-lg font-medium transition-all duration-200 pb-2 border-b-2 ${
              activeTab === 'education'
                ? 'text-foreground border-foreground'
                : 'text-muted-foreground border-transparent hover:text-foreground'
            }`}
          >
            <GraduationCap size={18} className="sm:w-5 sm:h-5 md:w-[22px] md:h-[22px]" />
            Education
          </button>
          <button
            onClick={() => setActiveTab('experience')}
            className={`flex items-center gap-2 text-sm sm:text-base md:text-lg font-medium transition-all duration-200 pb-2 border-b-2 ${
              activeTab === 'experience'
                ? 'text-foreground border-foreground'
                : 'text-muted-foreground border-transparent hover:text-foreground'
            }`}
          >
            <Briefcase size={18} className="sm:w-5 sm:h-5 md:w-[22px] md:h-[22px]" />
            Experience
          </button>
        </div>

        {/* Timeline */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {currentData.map((item, index) => (
              <div
                key={item.title}
                className={`flex gap-3 sm:gap-6 mb-6 md:mb-8 last:mb-0 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse text-right'
                }`}
              >
                {/* Content */}
                <div className="flex-1 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="bg-background border border-border rounded-xl p-4 md:p-5 hover:shadow-card hover:border-foreground/20 transition-all duration-300">
                    <h3 className="font-display font-semibold text-foreground mb-1 text-sm md:text-base">{item.title}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground mb-2">{item.institution}</p>
                    <div className={`flex items-center gap-2 text-[10px] md:text-xs text-muted-foreground ${index % 2 !== 0 ? 'justify-end' : ''}`}>
                      <Calendar size={12} className="md:w-[14px] md:h-[14px]" />
                      {item.period}
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="flex flex-col items-center">
                  <div className="timeline-dot"></div>
                  {index < currentData.length - 1 && (
                    <div className="w-[2px] flex-1 bg-border mt-2"></div>
                  )}
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden sm:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
