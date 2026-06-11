import { useState } from 'react';

const education = [
  { title: 'Desenvolvimento de Softwares', institution: 'Fatec — Presencial', period: '2024 — Presente' },
  { title: 'Técnico em Informática', institution: 'Senac — Presencial', period: '2022 — 2024' },
  { title: 'MERN Stack', institution: 'DankiCode — Online', period: '2024 — 6 meses' },
  { title: 'Web Development', institution: 'Alura — Online', period: '2024 — 4 meses' },
];

const experience = [
  { title: 'Software Engineer', institution: 'Gold Credit Securitizadora S/A', period: '2024 — Presente' },
  { title: 'Desenvolvedor Freelance', institution: 'Autônomo', period: '2022 — Presente' },
  { title: 'Suporte Técnico', institution: 'EasySoft Sistemas', period: '2022 — 2024' },
];

type Tab = 'education' | 'experience';

export const Qualifications = () => {
  const [tab, setTab] = useState<Tab>('experience');
  const data = tab === 'education' ? education : experience;

  return (
    <section id="qualifications" className="px-6 py-24 md:py-32">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="section-eyebrow">
          <span className="section-eyebrow-num">04</span>
          <h2 className="section-eyebrow-title">Path</h2>
        </div>

        <div className="flex gap-8 border-b border-foreground/10">
          {(['experience', 'education'] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`pb-3 text-[11px] uppercase tracking-[0.2em] font-semibold transition-colors ${
                tab === t
                  ? 'text-foreground border-b-2 border-foreground -mb-px'
                  : 'text-foreground/40 hover:text-foreground'
              }`}
            >
              {t === 'experience' ? 'Experiência' : 'Educação'}
            </button>
          ))}
        </div>

        <div className="space-y-8">
          {data.map((item, i) => (
            <div
              key={`${tab}-${item.title}`}
              className="relative border-l border-foreground/10 pl-8"
            >
              <div
                className={`absolute w-2 h-2 rounded-full left-[-4.5px] top-2 ${
                  i === 0 ? 'bg-foreground' : 'bg-foreground/20'
                }`}
              />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40">
                {item.period}
              </span>
              <h4 className="font-display text-lg font-bold text-foreground mt-1">{item.title}</h4>
              <p className="text-sm text-foreground/60 font-light">{item.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
