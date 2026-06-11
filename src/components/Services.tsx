const services = [
  {
    num: '01',
    title: 'Back-End Engineering',
    desc: 'Arquitetura e desenvolvimento de APIs REST, integrações com sistemas legados e ERPs, bancos relacionais e deploy em ambientes Linux de produção.',
  },
  {
    num: '02',
    title: 'IA Aplicada & LLMs',
    desc: 'Agentes RAG com embeddings e busca vetorial, prompt engineering versionado, pipelines de avaliação e integração de LLMs em motores de decisão.',
  },
  {
    num: '03',
    title: 'Automação & No-Code',
    desc: 'Workflows com n8n auto-hospedado, Make e Zapier, webhooks e orquestração assíncrona conectando CRMs, planilhas, WhatsApp e ERPs.',
  },
  {
    num: '04',
    title: 'Aplicações Web',
    desc: 'Painéis administrativos e dashboards operacionais em React, Next.js e TypeScript — performance, acessibilidade e SEO técnico.',
  },
];

export const Services = () => {
  return (
    <section id="services" className="px-6 py-24 md:py-32 bg-secondary/40">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="section-eyebrow">
          <span className="section-eyebrow-num">03</span>
          <h2 className="section-eyebrow-title">Services</h2>
        </div>

        <div className="border-t border-foreground/10">
          {services.map((s) => (
            <article
              key={s.num}
              className="group py-10 border-b border-foreground/10 grid md:grid-cols-[60px_1fr] gap-4 md:gap-12 hover:bg-background/40 transition-colors -mx-6 px-6"
            >
              <span className="font-display font-black text-xl text-foreground/30 group-hover:text-foreground transition-colors">
                {s.num}
              </span>
              <div className="space-y-3">
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground tracking-tight">
                  {s.title}
                </h3>
                <p className="text-sm md:text-base text-foreground/70 leading-relaxed font-light max-w-xl">
                  {s.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
