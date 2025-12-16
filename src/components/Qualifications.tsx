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
    title: 'Desenvolvimento de Sistemas',
    institution: 'Gold Credit',
    period: '2024 - Presente',
  },
  {
    title: 'Software Development',
    institution: 'Autônomo',
    period: '2025 - Presente',
  },
  {
    title: 'Web Development',
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
            className={`flex items-center gap-1.5 sm:gap-2 text-base sm:text-lg font-medium transition-all duration-200 pb-2 border-b-2 ${
              activeTab === 'education'
                ? 'text-foreground border-foreground'
                : 'text-muted-foreground border-transparent hover:text-foreground'
            }`}
          >
            <GraduationCap size={20} className="sm:w-[22px] sm:h-[22px]" />
            Education
          </button>
          <button
            onClick={() => setActiveTab('experience')}
            className={`flex items-center gap-1.5 sm:gap-2 text-base sm:text-lg font-medium transition-all duration-200 pb-2 border-b-2 ${
              activeTab === 'experience'
                ? 'text-foreground border-foreground'
                : 'text-muted-foreground border-transparent hover:text-foreground'
            }`}
          >
            <Briefcase size={20} className="sm:w-[22px] sm:h-[22px]" />
            Experience
          </button>
        </div>

        {/* Timeline */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {currentData.map((item, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={item.title}
                  className="flex gap-4 sm:gap-6 mb-6 sm:mb-8 last:mb-0"
                >
                  {/* Left content - visible on desktop for even items */}
                  <div className={`hidden md:block flex-1 ${isEven ? '' : 'order-3'}`}>
                    {isEven && (
                      <div 
                        className="animate-fade-in-up"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="bg-background border border-border rounded-xl p-5 hover:shadow-card hover:border-foreground/20 transition-all duration-300">
                          <h3 className="font-display font-semibold text-foreground mb-1">{item.title}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{item.institution}</p>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Calendar size={14} />
                            {item.period}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Timeline dot - center */}
                  <div className={`flex flex-col items-center ${isEven ? 'md:order-2' : 'md:order-2'}`}>
                    <div className="timeline-dot"></div>
                    {index < currentData.length - 1 && (
                      <div className="w-[2px] flex-1 bg-border mt-2"></div>
                    )}
                  </div>

                  {/* Right content - visible on desktop for odd items, always visible on mobile */}
                  <div className={`flex-1 ${isEven ? 'md:order-3' : 'md:order-1'}`}>
                    {/* Mobile view - always show */}
                    <div 
                      className="md:hidden animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="bg-background border border-border rounded-xl p-4 hover:shadow-card hover:border-foreground/20 transition-all duration-300">
                        <h3 className="font-display font-semibold text-foreground mb-1 text-sm">{item.title}</h3>
                        <p className="text-xs text-muted-foreground mb-2">{item.institution}</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Calendar size={12} />
                          {item.period}
                        </div>
                      </div>
                    </div>
                    
                    {/* Desktop view - only show for odd items */}
                    {!isEven && (
                      <div 
                        className="hidden md:block animate-fade-in-up text-right"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="bg-background border border-border rounded-xl p-5 hover:shadow-card hover:border-foreground/20 transition-all duration-300">
                          <h3 className="font-display font-semibold text-foreground mb-1">{item.title}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{item.institution}</p>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground justify-end">
                            <Calendar size={14} />
                            {item.period}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Spacer for even items on desktop */}
                  {isEven && <div className="hidden md:block flex-1 order-3"></div>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
