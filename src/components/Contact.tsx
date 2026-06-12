import { useState } from 'react';
import { Mail, Phone, Instagram, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  { icon: Mail, label: 'E-mail', value: 'devrenan2004@gmail.com', link: 'mailto:devrenan2004@gmail.com' },
  { icon: Phone, label: 'WhatsApp', value: '(13) 99626-3376', link: 'https://wa.me/5513996263376' },
  { icon: Instagram, label: 'Instagram', value: '@mr.renan1', link: 'https://instagram.com/mr.renan1' },
];

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Mensagem enviada!',
      description: 'Obrigado pelo contato. Responderei em breve!',
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title animate-fade-in-up">Get in touch</h2>
          <p className="section-subtitle animate-fade-in-up" style={{ animationDelay: '0.1s' }}>Contact Me</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto">
          {/* Contact Channels */}
          <section className="flex flex-col gap-8 animate-slide-in-left">
            <div className="flex flex-col gap-2">
              <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
                Fale comigo
              </h3>
              <div className="h-px w-12 bg-foreground" />
            </div>

            <div className="flex flex-col gap-4">
              {contactInfo.map((info, index) => (
                <a
                  key={info.label}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 border border-border rounded-xl hover:border-foreground transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-foreground group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                    <info.icon size={20} strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col flex-1 min-w-0">
                    <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-[0.2em]">
                      {info.label}
                    </span>
                    <span className="text-sm font-medium text-foreground truncate">
                      {info.value}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Form */}
          <section className="flex flex-col gap-8 animate-slide-in-right">
            <div className="flex flex-col gap-2">
              <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
                Seu projeto
              </h3>
              <div className="h-px w-12 bg-foreground" />
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-1.5 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <label htmlFor="name" className="text-[10px] uppercase tracking-[0.2em] font-semibold text-muted-foreground ml-1">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="Como posso te chamar?"
                  className="w-full bg-secondary/60 border-b border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-foreground focus:bg-background outline-none transition-all duration-300 rounded-t-lg"
                />
              </div>

              <div className="flex flex-col gap-1.5 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] font-semibold text-muted-foreground ml-1">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  placeholder="seu@email.com"
                  className="w-full bg-secondary/60 border-b border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-foreground focus:bg-background outline-none transition-all duration-300 rounded-t-lg"
                />
              </div>

              <div className="flex flex-col gap-1.5 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <label htmlFor="message" className="text-[10px] uppercase tracking-[0.2em] font-semibold text-muted-foreground ml-1">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  placeholder="Me conte sobre seu projeto..."
                  className="w-full bg-secondary/60 border-b border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-foreground focus:bg-background outline-none transition-all duration-300 rounded-t-lg resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-2 w-full bg-foreground text-background py-4 px-6 rounded-xl font-display font-semibold text-sm tracking-wide hover:bg-foreground/90 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 animate-fade-in-up"
                style={{ animationDelay: '0.6s' }}
              >
                Enviar Mensagem
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </section>
        </div>
      </div>
    </section>
  );
};
