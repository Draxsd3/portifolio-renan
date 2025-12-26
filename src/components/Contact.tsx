import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Instagram } from 'lucide-react';
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
    <section id="contact" className="py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title animate-fade-in-up">Get in touch</h2>
          <p className="section-subtitle animate-fade-in-up" style={{ animationDelay: '0.1s' }}>Contact Me</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="animate-slide-in-left">
            <h3 className="font-display text-xl font-semibold text-foreground mb-8 flex items-center gap-2">
              Talk to me
              <span className="inline-block animate-float">💬</span>
            </h3>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={info.label}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-5 bg-background border border-border rounded-xl hover:shadow-card hover:border-foreground/20 hover:-translate-y-1 hover:translate-x-1 transition-all duration-300 group animate-fade-in-up hover-glow"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="p-3 bg-secondary rounded-lg group-hover:bg-foreground group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <info.icon size={22} className="text-foreground group-hover:text-background transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground group-hover:translate-x-1 transition-transform duration-300">{info.label}</p>
                    <p className="text-sm text-muted-foreground">{info.value}</p>
                    <span className="text-xs text-muted-foreground group-hover:text-foreground mt-1 inline-flex items-center gap-1 transition-colors duration-300">
                      Write me 
                      <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <h3 className="font-display text-xl font-semibold text-foreground mb-8 flex items-center gap-3">
              <MessageSquare size={22} className="animate-pulse-soft" />
              Write me your project
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground focus:scale-[1.02] transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                  placeholder="Seu nome"
                />
              </div>

              <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground focus:scale-[1.02] transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                  placeholder="seu@email.com"
                />
              </div>

              <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Project
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground focus:scale-[1.01] transition-all duration-300 resize-none text-foreground placeholder:text-muted-foreground"
                  placeholder="Descreva seu projeto..."
                />
              </div>

              <button 
                type="submit" 
                className="btn-primary w-full justify-center group animate-fade-in-up"
                style={{ animationDelay: '0.6s' }}
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
