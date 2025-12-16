import { Heart, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-border bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <a href="#home" className="font-display text-2xl font-bold text-foreground">
            Renan<span className="text-muted-foreground">.</span>
          </a>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">Skills</a>
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
            <a href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors">Portfolio</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center gap-2 text-sm text-muted-foreground">
            <p>© 2024 Renan Ramos. All rights reserved.</p>
            <span className="hidden md:block">•</span>
            <p className="flex items-center gap-1">
              Made with <Heart size={14} className="text-foreground fill-foreground" /> using React + TypeScript
            </p>
          </div>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            className="p-3 bg-foreground text-background rounded-full hover:shadow-hover hover:scale-110 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};
