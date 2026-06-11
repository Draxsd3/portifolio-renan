import { useState } from 'react';
import { ChevronDown, Code, Server, Bot, Workflow } from 'lucide-react';

interface Skill {
  name: string;
  level: 'Avançado' | 'Intermediário' | 'Básico';
}

const backendSkills: Skill[] = [
  { name: 'PHP', level: 'Avançado' },
  { name: 'Node.js', level: 'Avançado' },
  { name: 'APIs REST', level: 'Avançado' },
  { name: 'MySQL', level: 'Avançado' },
  { name: 'Linux / Shell', level: 'Intermediário' },
  { name: 'Python', level: 'Intermediário' },
  { name: 'PostgreSQL', level: 'Intermediário' },
  { name: 'Docker', level: 'Intermediário' },
  { name: 'Redis', level: 'Básico' },
  { name: 'MongoDB', level: 'Básico' },
];

const aiSkills: Skill[] = [
  { name: 'OpenAI (GPT)', level: 'Avançado' },
  { name: 'Anthropic (Claude)', level: 'Avançado' },
  { name: 'Prompt Engineering', level: 'Avançado' },
  { name: 'RAG / Embeddings', level: 'Intermediário' },
  { name: 'Google Gemini', level: 'Intermediário' },
  { name: 'LangChain', level: 'Intermediário' },
  { name: 'Vector DBs (pgvector)', level: 'Intermediário' },
  { name: 'Fine-tuning', level: 'Básico' },
];

const automationSkills: Skill[] = [
  { name: 'n8n (self-hosted)', level: 'Avançado' },
  { name: 'Webhooks & APIs', level: 'Avançado' },
  { name: 'Make (Integromat)', level: 'Intermediário' },
  { name: 'Zapier', level: 'Intermediário' },
  { name: 'Lovable / No-Code', level: 'Intermediário' },
  { name: 'Supabase Edge Functions', level: 'Intermediário' },
];

const frontendSkills: Skill[] = [
  { name: 'Next.js', level: 'Avançado' },
  { name: 'CSS / Tailwind', level: 'Avançado' },
  { name: 'React', level: 'Intermediário' },
  { name: 'TypeScript', level: 'Intermediário' },
  { name: 'JavaScript', level: 'Intermediário' },
  { name: 'Vue', level: 'Básico' },
];

const levelColors: Record<string, string> = {
  'Avançado': 'bg-foreground text-background',
  'Intermediário': 'bg-foreground/70 text-background',
  'Básico': 'bg-foreground/40 text-background',
};

interface SkillCardProps {
  title: string;
  icon: React.ElementType;
  skills: Skill[];
  defaultOpen?: boolean;
  delay?: string;
}

const SkillCard = ({ title, icon: Icon, skills, defaultOpen = false, delay = '0s' }: SkillCardProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const grouped = {
    'Avançado': skills.filter(s => s.level === 'Avançado'),
    'Intermediário': skills.filter(s => s.level === 'Intermediário'),
    'Básico': skills.filter(s => s.level === 'Básico'),
  };

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
            {Object.entries(grouped).map(([level, items]) => 
              items.length > 0 && (
                <div key={level}>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">{level}</p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill.name}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium ${levelColors[skill.level]} transition-transform duration-300 hover:scale-105`}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              )
            )}
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
