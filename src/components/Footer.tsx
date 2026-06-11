export const Footer = () => {
  return (
    <footer className="px-6 pt-16 pb-12 border-t border-foreground/10">
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/40">
        <span>© {new Date().getFullYear()} Renan Ramos</span>
        <span>Back-End & IA Aplicada</span>
      </div>
    </footer>
  );
};
