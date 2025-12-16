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
}

const SkillCard = ({ title, icon: Icon, skills, defaultOpen = false }: SkillCardProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-background border border-border rounded-2xl overflow-hidden hover:shadow-card transition-shadow duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 hover:bg-secondary/50 transition-colors duration-200"
      >
        <div className="flex items-center gap-3">
          <Icon size={22} className="text-foreground" />
          <h3 className="font-display text-lg font-semibold text-foreground">{title}</h3>
        </div>
        {isOpen ? (
          <ChevronUp size={20} className="text-foreground" />
        ) : (
          <ChevronDown size={20} className="text-muted-foreground" />
        )}
      </button>

      <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <div className="px-6 pb-6 space-y-5">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">{skill.name}</span>
                  <span className="text-xs text-muted-foreground font-medium">{skill.percentage}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-foreground rounded-full transition-all duration-700 ease-out"
                    style={{ width: isOpen ? `${skill.percentage}%` : '0%' }}
                  />
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
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">My technical level</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <SkillCard title="Frontend Developer" icon={Code} skills={frontendSkills} defaultOpen={true} />
          <SkillCard title="Backend Developer" icon={Server} skills={backendSkills} defaultOpen={true} />
        </div>
      </div>
    </section>
  );
};
