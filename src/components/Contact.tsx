import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const channels = [
  { label: 'E-mail', value: 'devrenan2004@gmail.com', link: 'mailto:devrenan2004@gmail.com' },
  { label: 'WhatsApp', value: '(13) 99626-3376', link: 'https://wa.me/5513996263376' },
  { label: 'GitHub', value: '@Draxsd3', link: 'https://github.com/Draxsd3' },
  { label: 'Instagram', value: '@mr.renan1', link: 'https://instagram.com/mr.renan1' },
];

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Mensagem enviada',
      description: 'Obrigado pelo contato — responderei em breve.',
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="px-6 py-24 md:py-32">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="section-eyebrow">
          <span className="section-eyebrow-num">06</span>
          <h2 className="section-eyebrow-title">Contact</h2>
        </div>

        <p className="font-display text-3xl md:text-4xl font-light text-foreground leading-tight max-w-2xl">
          Vamos construir algo <span className="italic font-semibold">inteligente</span> juntos?
        </p>

        {/* Channels */}
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6 border-y border-foreground/10 py-8">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-baseline justify-between gap-4 border-b border-dashed border-foreground/10 pb-3"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/40">
                {c.label}
              </span>
              <span className="text-sm md:text-base text-foreground group-hover:underline underline-offset-4 decoration-1">
                {c.value}
              </span>
            </a>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-secondary p-8 md:p-12 space-y-8 border border-foreground/5">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/60">
                Nome
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-transparent border-b border-foreground/20 py-2 focus:border-foreground outline-none transition-colors text-foreground"
                placeholder="Seu nome completo"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/60">
                E-mail
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-transparent border-b border-foreground/20 py-2 focus:border-foreground outline-none transition-colors text-foreground"
                placeholder="voce@email.com"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/60">
              Projeto
            </label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-transparent border-b border-foreground/20 py-2 focus:border-foreground outline-none transition-colors resize-none text-foreground"
              placeholder="Descreva brevemente seu projeto ou desafio"
            />
          </div>
          <button type="submit" className="btn-primary w-full justify-center">
            Enviar mensagem
          </button>
        </form>
      </div>
    </section>
  );
};
