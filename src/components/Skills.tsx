import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const frontendSkills = [
  { name: 'HTML', level: 'Advanced', percentage: 90 },
  { name: 'CSS', level: 'Advanced', percentage: 85 },
  { name: 'JavaScript', level: 'Intermediate', percentage: 75 },
  { name: 'React', level: 'Intermediate', percentage: 70 },
  { name: 'TypeScript', level: 'Intermediate', percentage: 65 },
  { name: 'Vue', level: 'Basic', percentage: 50 },
];

const backendSkills = [
  { name: 'Node.js', level: 'Intermediate', percentage: 70 },
  { name: 'PHP', level: 'Intermediate', percentage: 65 },
  { name: 'Python', level: 'Intermediate', percentage: 60 },
  { name: 'MySQL', level: 'Intermediate', percentage: 70 },
  { name: 'Firebase', level: 'Intermediate', percentage: 65 },
  { name: 'MongoDB', level: 'Basic', percentage: 50 },
];

interface SkillCardProps {
  title: string;
  skills: typeof frontendSkills;
  defaultOpen?: boolean;
}

const SkillCard = ({ title, skills, defaultOpen = false }: SkillCardProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 hover:bg-secondary/50 transition-colors duration-200"
      >
        <h3 className="font-display text-lg font-semibold text-foreground">{title}</h3>
        {isOpen ? (
          <ChevronUp size={20} className="text-primary" />
        ) : (
          <ChevronDown size={20} className="text-muted-foreground" />
        )}
      </button>

      {isOpen && (
        <div className="px-6 pb-6 space-y-4">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-foreground">{skill.name}</span>
                <span className="text-xs text-muted-foreground">{skill.level}</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-500"
                  style={{ width: `${skill.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">My technical level</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <SkillCard title="Frontend Developer" skills={frontendSkills} defaultOpen={true} />
          <SkillCard title="Backend Developer" skills={backendSkills} />
        </div>
      </div>
    </section>
  );
};
