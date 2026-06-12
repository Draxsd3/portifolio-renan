import { Instagram, Github, Linkedin, Send } from 'lucide-react';
import profilePhotoAsset from '@/assets/profile-photo.png.asset.json';

const profilePhoto = profilePhotoAsset.url;

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-20 pb-8 md:pb-12 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-48 md:w-72 h-48 md:h-72 bg-foreground/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-64 md:w-96 h-64 md:h-96 bg-foreground/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative flex-1 flex flex-col justify-center">
        <div className="flex flex-col items-center text-center">
          {/* Social Links - Left Side (Desktop only) */}
          <div className="hidden lg:flex flex-col gap-5 fixed left-8 top-1/2 -translate-y-1/2 z-40">
            {[
              { href: 'https://instagram.com/mr.renan1', icon: Instagram, label: 'Instagram', delay: '0.1s' },
              { href: 'https://github.com/Draxsd3', icon: Github, label: 'GitHub', delay: '0.2s' },
              { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn', delay: '0.3s' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground hover:scale-125 hover:-translate-x-1 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: social.delay }}
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>

          {/* Profile Image */}
          <div className="animate-bounce-in mb-6 md:mb-8">
            <div className="relative group">
              <div className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 blob-shape bg-gradient-to-br from-muted to-secondary overflow-hidden shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105 animate-glow">
                <img
                  src={profilePhoto}
                  alt="Renan Ramos - Software Engineer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 blob-shape border-2 border-foreground/20 scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500" />
            </div>
          </div>

          {/* Content */}
          <div className="animate-blur-in" style={{ animationDelay: '0.3s' }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-3 md:mb-4 tracking-tight">
              Renan Ramos
            </h1>
            <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 md:mb-6">
              <span className="w-8 sm:w-12 md:w-16 h-[2px] bg-foreground origin-right animate-slide-in-left" style={{ animationDelay: '0.5s' }}></span>
              <h2 className="text-base sm:text-lg md:text-xl text-muted-foreground font-medium animate-fade-in" style={{ animationDelay: '0.6s' }}>
                Software Engineer · Back-End & IA Aplicada
              </h2>
              <span className="w-8 sm:w-12 md:w-16 h-[2px] bg-foreground origin-left animate-slide-in-right" style={{ animationDelay: '0.5s' }}></span>
            </div>
            <p className="text-muted-foreground max-w-md md:max-w-lg mx-auto mb-6 md:mb-8 leading-relaxed text-sm sm:text-base px-2 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
              Engenheiro de software especializado em back-end, automação de processos e aplicação de inteligência artificial em operações financeiras e de negócio.
            </p>

            <div className="flex justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
              <a href="#contact" className="btn-primary group">
                Say Hello
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </a>
            </div>

            {/* Mobile Social Links */}
            <div className="flex lg:hidden justify-center gap-5 mt-6 md:mt-8">
              {[
                { href: 'https://instagram.com/mr.renan1', icon: Instagram, delay: '1s' },
                { href: 'https://github.com/Draxsd3', icon: Github, delay: '1.1s' },
                { href: 'https://linkedin.com', icon: Linkedin, delay: '1.2s' },
              ].map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground hover:scale-125 transition-all duration-300 animate-bounce-in"
                  style={{ animationDelay: social.delay }}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Positioned at bottom of section */}
      <a 
        href="#about" 
        className="hidden md:flex flex-col items-center gap-2 mt-8 group cursor-pointer animate-fade-in self-center"
        style={{ animationDelay: '1.2s' }}
      >
        <span className="text-xs text-muted-foreground font-medium tracking-widest uppercase group-hover:text-foreground transition-colors duration-300">
          Scroll
        </span>
        <div className="relative w-5 h-8 border-2 border-muted-foreground/50 rounded-full group-hover:border-foreground/70 transition-colors duration-300">
          <div className="absolute left-1/2 -translate-x-1/2 top-1.5 w-1 h-1.5 bg-muted-foreground rounded-full animate-scroll-bounce group-hover:bg-foreground transition-colors duration-300" />
        </div>
      </a>
    </section>
  );
};
