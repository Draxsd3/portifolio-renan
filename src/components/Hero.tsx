import { Instagram, Github, Linkedin, Send, ChevronDown, Mouse } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-12 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Social Links - Left Side */}
          <div className="hidden lg:flex flex-col gap-5 fixed left-8 top-1/2 -translate-y-1/2 z-40">
            <a
              href="https://instagram.com/mr.renan1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://github.com/Draxsd3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>

          {/* Content */}
          <div className="lg:pl-12 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4 tracking-tight">
              Renan Ramos{' '}
              <span className="inline-block wave-emoji">👋</span>
            </h1>
            <div className="flex items-center gap-4 mb-6">
              <span className="w-16 h-[2px] bg-foreground"></span>
              <h2 className="text-lg md:text-xl text-muted-foreground font-medium">
                FullStack Developer
              </h2>
            </div>
            <p className="text-muted-foreground max-w-lg mb-8 leading-relaxed text-base">
              Desenvolvedor de software apaixonado por tecnologia e pela criação de soluções inovadoras para desafios complexos. Especializado em criar experiências digitais de alta qualidade.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                Say Hello
                <Send size={18} />
              </a>
            </div>

            {/* Mobile Social Links */}
            <div className="flex lg:hidden gap-5 mt-8">
              <a
                href="https://instagram.com/mr.renan1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://github.com/Draxsd3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-[380px] lg:h-[380px] blob-shape bg-gradient-to-br from-muted to-secondary overflow-hidden shadow-lg">
                <img
                  src={profilePhoto}
                  alt="Renan Ramos - Desenvolvedor FullStack"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden md:flex items-center gap-2 absolute bottom-12 left-1/2 -translate-x-1/2">
          <Mouse size={18} className="text-muted-foreground" />
          <span className="text-sm text-muted-foreground font-medium">Scroll Down</span>
          <ChevronDown size={16} className="text-muted-foreground animate-scroll-bounce" />
        </div>
      </div>
    </section>
  );
};
