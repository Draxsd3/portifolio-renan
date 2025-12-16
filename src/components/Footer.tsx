import logo from '@/assets/logo.png';

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="flex justify-center">
          <a href="#home" className="flex items-center gap-3">
            <img src={logo} alt="Renan Logo" className="h-10 w-auto" />
            <span className="font-display text-xl font-bold text-foreground tracking-tight">Renan Ramos</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
