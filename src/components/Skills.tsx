interface Skill {
  name: string;
  level: 'Avançado' | 'Intermediário' | 'Básico';
}

const groups: { title: string; skills: Skill[] }[] = [
  {
    title: 'Back-End',
    skills: [
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
    ],
  },
  {
    title: 'IA Aplicada & LLMs',
    skills: [
      { name: 'OpenAI (GPT)', level: 'Avançado' },
      { name: 'Anthropic (Claude)', level: 'Avançado' },
      { name: 'Prompt Engineering', level: 'Avançado' },
      { name: 'RAG / Embeddings', level: 'Intermediário' },
      { name: 'Google Gemini', level: 'Intermediário' },
      { name: 'LangChain', level: 'Intermediário' },
      { name: 'pgvector', level: 'Intermediário' },
      { name: 'Fine-tuning', level: 'Básico' },
    ],
  },
  {
    title: 'Automação & No-Code',
    skills: [
      { name: 'n8n (self-hosted)', level: 'Avançado' },
      { name: 'Webhooks & APIs', level: 'Avançado' },
      { name: 'Make (Integromat)', level: 'Intermediário' },
      { name: 'Zapier', level: 'Intermediário' },
      { name: 'Lovable / No-Code', level: 'Intermediário' },
      { name: 'Supabase Edge Functions', level: 'Intermediário' },
    ],
  },
  {
    title: 'Front-End',
    skills: [
      { name: 'Next.js', level: 'Avançado' },
      { name: 'Tailwind CSS', level: 'Avançado' },
      { name: 'React', level: 'Intermediário' },
      { name: 'TypeScript', level: 'Intermediário' },
      { name: 'JavaScript', level: 'Intermediário' },
      { name: 'Vue', level: 'Básico' },
    ],
  },
];

const levelMark: Record<Skill['level'], string> = {
  Avançado: '●●●',
  Intermediário: '●●○',
  Básico: '●○○',
};

export const Skills = () => {
  return (
    <section id="skills" className="px-6 py-24 md:py-32">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="section-eyebrow">
          <span className="section-eyebrow-num">02</span>
          <h2 className="section-eyebrow-title">Technical Stack</h2>
        </div>

        <div className="border-t border-foreground/10">
          {groups.map((group) => (
            <div
              key={group.title}
              className="py-10 grid md:grid-cols-[200px_1fr] gap-6 md:gap-12 border-b border-foreground/10"
            >
              <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground pt-1">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.skills.map((s) => (
                  <li
                    key={s.name}
                    className="flex items-baseline justify-between gap-4 border-b border-dashed border-foreground/10 pb-2"
                  >
                    <span className="text-base font-light text-foreground/90">{s.name}</span>
                    <span className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-foreground/60 font-semibold">
                      <span className="font-mono text-foreground/40 text-xs leading-none">
                        {levelMark[s.level]}
                      </span>
                      <span className="hidden sm:inline">{s.level}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
