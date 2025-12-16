import { useState } from 'react';
import { GraduationCap, Briefcase, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    title: 'Desenvolvimento de Softwares',
    institution: 'Fatec',
    location: 'Presencial',
    period: '2024 - Presente',
    highlight: true,
  },
  {
    title: 'MERN Stack',
    institution: 'DankiCode',
    location: 'Online',
    period: '2024 - 6 Meses',
    highlight: false,
  },
  {
    title: 'Web Development',
    institution: 'Alura',
    location: 'Online',
    period: '2024 - 4 Meses',
    highlight: false,
  },
  {
    title: 'Técnico em Informática',
    institution: 'Senac',
    location: 'Presencial',
    period: '2022 - 2024',
    highlight: false,
  },
];

const experience = [
  {
    title: 'Desenvolvimento de Sistemas',
    institution: 'Gold Credit',
    location: 'Empresa',
    period: '2024 - Presente',
    highlight: true,
  },
  {
    title: 'Software Development',
    institution: 'Autônomo',
    location: 'Freelancer',
    period: '2025 - Presente',
    highlight: true,
  },
  {
    title: 'Web Development',
    institution: 'Autônomo',
    location: 'Freelancer',
    period: '2022 - Presente',
    highlight: false,
  },
  {
    title: 'Suporte Técnico',
    institution: 'EasySoft Sistemas',
    location: 'Empresa',
    period: '2022 - 2024',
    highlight: false,
  },
];

type TabType = 'education' | 'experience';

export const Qualifications = () => {
  const [activeTab, setActiveTab] = useState<TabType>('education');

  const currentData = activeTab === 'education' ? education : experience;

  return (
    <section id="qualifications" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Qualification</h2>
          <p className="section-subtitle">My personal journey</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-background border border-border rounded-full p-1.5 shadow-sm">
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'education'
                  ? 'bg-foreground text-background shadow-md'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <GraduationCap size={18} />
              Education
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'experience'
                  ? 'bg-foreground text-background shadow-md'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Briefcase size={18} />
              Experience
            </button>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {currentData.map((item, index) => (
              <div
                key={`${activeTab}-${item.title}`}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div 
                  className={`group relative bg-background border rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                    item.highlight 
                      ? 'border-foreground/30 shadow-md' 
                      : 'border-border hover:border-foreground/20'
                  }`}
                >
                  {/* Highlight badge */}
                  {item.highlight && (
                    <div className="absolute -top-3 right-4">
                      <span className="bg-foreground text-background text-xs font-medium px-3 py-1 rounded-full">
                        Current
                      </span>
                    </div>
                  )}

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 ${
                    item.highlight 
                      ? 'bg-foreground text-background' 
                      : 'bg-secondary group-hover:bg-foreground group-hover:text-background'
                  }`}>
                    {activeTab === 'education' ? (
                      <GraduationCap size={22} />
                    ) : (
                      <Briefcase size={22} />
                    )}
                  </div>

                  {/* Content */}
                  <h3 className="font-display font-semibold text-foreground text-lg mb-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-muted-foreground font-medium mb-3">
                    {item.institution}
                  </p>

                  {/* Meta info */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} />
                      {item.location}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      {item.period}
                    </div>
                  </div>

                  {/* Decorative line */}
                  <div className={`absolute bottom-0 left-6 right-6 h-0.5 rounded-full transition-all duration-300 ${
                    item.highlight 
                      ? 'bg-foreground/20' 
                      : 'bg-transparent group-hover:bg-foreground/10'
                  }`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
