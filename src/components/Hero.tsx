import { Instagram, Github, Linkedin, Send, ChevronDown, Mouse } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Social Links - Left Side */}
          <div className="hidden lg:flex flex-col gap-6 absolute left-8 top-1/2 -translate-y-1/2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Linkedin size={20} />
            </a>
          </div>

          {/* Content */}
          <div className="lg:pl-16 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4">
              Renan Ramos{' '}
              <span className="inline-block animate-pulse">👋</span>
            </h1>
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[2px] bg-primary"></span>
              <h2 className="text-lg md:text-xl text-muted-foreground font-medium">
                FullStack Developer
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md mb-8 leading-relaxed">
              Desenvolvedor de software apaixonado por tecnologia e pela criação de soluções inovadoras para desafios complexos.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:shadow-hover hover:scale-105 transition-all duration-300"
            >
              Say Hello
              <Send size={18} />
            </a>

            {/* Mobile Social Links */}
            <div className="flex lg:hidden gap-4 mt-8">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 blob-shape bg-gradient-to-br from-primary/30 to-primary/10 overflow-hidden">
                <img
                  src={profilePhoto}
                  alt="Renan Ramos - Desenvolvedor FullStack"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden md:flex items-center gap-2 mt-12 lg:mt-0 lg:absolute lg:bottom-12 lg:left-1/2 lg:-translate-x-1/2">
          <Mouse size={20} className="text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Scroll Down</span>
          <ChevronDown size={18} className="text-muted-foreground animate-scroll-bounce" />
        </div>
      </div>
    </section>
  );
};
