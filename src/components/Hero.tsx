export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-24"
    >
      <span className="block text-[10px] md:text-xs uppercase tracking-[0.3em] mb-8 text-foreground/60 font-semibold">
        Portfólio — 2026
      </span>

      <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-foreground leading-[0.85] tracking-tight mb-10">
        RENAN
        <br />
        RAMOS
      </h1>

      <p className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto font-light text-foreground/80">
        Software Engineer especializado em{' '}
        <span className="text-foreground font-semibold underline underline-offset-4 decoration-1">
          Back-End
        </span>{' '}
        e{' '}
        <span className="text-foreground font-semibold underline underline-offset-4 decoration-1">
          IA Aplicada
        </span>{' '}
        em operações financeiras.
      </p>

      <a
        href="#about"
        className="mt-20 flex flex-col items-center gap-4 group"
        aria-label="Scroll to explore"
      >
        <div className="w-px h-24 bg-gradient-to-b from-foreground to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/40 group-hover:text-foreground transition-colors">
          Scroll to explore
        </span>
      </a>
    </section>
  );
};
