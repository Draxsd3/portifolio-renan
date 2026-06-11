import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Sobre', href: '#about', num: '01' },
  { label: 'Stack', href: '#skills', num: '02' },
  { label: 'Serviços', href: '#services', num: '03' },
  { label: 'Trajetória', href: '#qualifications', num: '04' },
  { label: 'Projetos', href: '#portfolio', num: '05' },
  { label: 'Contato', href: '#contact', num: '06' },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-3xl mx-auto px-6 py-6 flex items-center justify-between">
        <a href="#home" className="font-display font-black text-lg tracking-tighter text-foreground">
          RR<span className="text-foreground/40">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="group inline-flex items-baseline gap-1.5 text-[11px] uppercase tracking-[0.2em] font-semibold text-foreground/60 hover:text-foreground transition-colors"
              >
                <span className="text-foreground/30 group-hover:text-foreground/60 transition-colors">{item.num}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground p-1"
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-foreground/10 bg-background">
          <ul className="max-w-3xl mx-auto px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-3 text-sm uppercase tracking-[0.2em] font-semibold text-foreground/70 hover:text-foreground"
                >
                  <span className="text-foreground/30">{item.num}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};
