import { useState } from 'react';
import { ChevronDown, ChevronUp, Code, Server } from 'lucide-react';

const frontendSkills = [
  { name: 'Next.js', level: 'Advanced', percentage: 90 },
  { name: 'CSS', level: 'Advanced', percentage: 90 },
  { name: 'JavaScript', level: 'Intermediate', percentage: 80 },
  { name: 'React', level: 'Intermediate', percentage: 75 },
  { name: 'TypeScript', level: 'Intermediate', percentage: 70 },
  { name: 'Vue', level: 'Basic', percentage: 55 },
];

const backendSkills = [
  { name: 'Node.js', level: 'Intermediate', percentage: 75 },
  { name: 'PHP', level: 'Intermediate', percentage: 70 },
  { name: 'Python', level: 'Intermediate', percentage: 65 },
  { name: 'MySQL', level: 'Intermediate', percentage: 75 },
  { name: 'Firebase', level: 'Intermediate', percentage: 70 },
  { name: 'MongoDB', level: 'Basic', percentage: 55 },
];

interface SkillCardProps {
  title: string;
  icon: React.ElementType;
  skills: typeof frontendSkills;
  defaultOpen?: boolean;
  delay?: string;
}

const SkillCard = ({ title, icon: Icon, skills, defaultOpen = false, delay = '0s' }: SkillCardProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div 
      className="bg-background border border-border rounded-2xl overflow-hidden hover:shadow-card hover-glow transition-all duration-300 animate-fade-in-up"
      style={{ animationDelay: delay }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 hover:bg-secondary/50 transition-colors duration-200 group"
      >
        <div className="flex items-center gap-3">
          <Icon size={22} className="text-foreground group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
          <h3 className="font-display text-lg font-semibold text-foreground">{title}</h3>
        </div>
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown size={20} className={isOpen ? 'text-foreground' : 'text-muted-foreground'} />
        </div>
      </button>

      <div className={`grid transition-all duration-500 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <div className="px-6 pb-6 space-y-5">
            {skills.map((skill, index) => (
              <div key={skill.name} className="group/skill">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-foreground group-hover/skill:translate-x-1 transition-transform duration-300">{skill.name}</span>
                  <span className="text-xs text-muted-foreground font-medium group-hover/skill:text-foreground transition-colors duration-300">{skill.percentage}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden relative">
                  <div
                    className="h-full bg-foreground rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                    style={{ 
                      width: isOpen ? `${skill.percentage}%` : '0%',
                      transitionDelay: isOpen ? `${index * 100}ms` : '0ms'
                    }}
                  >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 animate-shimmer" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="section-title animate-fade-in-up">Skills</h2>
          <p className="section-subtitle animate-fade-in-up" style={{ animationDelay: '0.1s' }}>My technical level</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          <SkillCard title="Frontend Developer" icon={Code} skills={frontendSkills} defaultOpen={true} delay="0.2s" />
          <SkillCard title="Backend Developer" icon={Server} skills={backendSkills} defaultOpen={true} delay="0.3s" />
        </div>
      </div>
    </section>
  );
};
