export const About = () => {
  return (
    <section id="about" className="px-6 py-24 md:py-32">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="section-eyebrow">
          <span className="section-eyebrow-num">01</span>
          <h2 className="section-eyebrow-title">About</h2>
        </div>

        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-3 space-y-6">
            <p className="text-lg leading-relaxed text-foreground/90 font-light">
              Engenheiro de software responsável pela área de tecnologia de uma securitizadora, desenvolvendo sistemas internos em PHP e Node.js, integrações via APIs REST e ambientes Linux em produção.
            </p>
            <p className="text-base leading-relaxed text-foreground/70 font-light">
              Construo um motor de crédito próprio que combina regras de negócio, pipelines de dados e modelos de linguagem (GPT, Claude e Gemini) com técnicas de RAG e embeddings para apoiar a decisão dos analistas. Também desenho automações ponta a ponta com n8n auto-hospedado — código versionado, observabilidade e arquitetura sustentável.
            </p>
            <div className="pt-4">
              <a href="/Curriculo_Renan_Ramos.pdf" download className="btn-primary">
                Download CV
              </a>
            </div>
          </div>

          <div className="md:col-span-2 grid grid-cols-1 gap-4">
            <div className="p-6 bg-secondary border border-foreground/5">
              <span className="block font-display text-3xl font-black text-foreground">3+</span>
              <span className="text-[10px] uppercase tracking-widest text-foreground/60 mt-1 block">
                Anos de experiência
              </span>
            </div>
            <div className="p-6 bg-secondary border border-foreground/5">
              <span className="block font-display text-3xl font-black text-foreground">15+</span>
              <span className="text-[10px] uppercase tracking-widest text-foreground/60 mt-1 block">
                Projetos entregues
              </span>
            </div>
            <div className="p-6 bg-secondary border border-foreground/5">
              <span className="block font-display text-3xl font-black text-foreground">∞</span>
              <span className="text-[10px] uppercase tracking-widest text-foreground/60 mt-1 block">
                Disponível para projetos
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
