import { useState, type FormEvent } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Send,
} from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  nome: z.string().trim().min(2, "Indique o seu nome").max(120),
  email: z.string().trim().email("Email inválido").max(160),
  mensagem: z.string().trim().min(5, "Escreva a sua mensagem").max(1000),
});

export function Contacts() {
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const result = schema.safeParse(data);
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? "Verifique os dados.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      form.reset();
      toast.success("Mensagem enviada! Responderemos com a maior brevidade.");
    }, 600);
  }

  return (
    <section id="contactos" className="bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-secondary">
            Contactos
          </span>
          <h2 className="mt-3 text-3xl text-foreground sm:text-4xl">
            Fale connosco
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Estamos sempre disponíveis para ouvir as famílias da nossa
            comunidade.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="reveal space-y-4">
            <ContactRow
              icon={Mail}
              label="Email"
              value="apais.condeixa@gmail.com"
              href="mailto:apais.condeixa@gmail.com"
            />
            <ContactRow
              icon={Phone}
              label="Telefone"
              value="239 940 200"
              href="tel:+351239940200"
            />
            <ContactRow
              icon={MapPin}
              label="Morada"
              value="EB N.º1 de Condeixa-a-Nova · Rua Longjumeau, 3150-122 Condeixa-a-Nova"
            />

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook da APAIS"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da APAIS"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>

            <div className="overflow-hidden rounded-[1.5rem] border border-border shadow-soft">
              <iframe
                title="Mapa da EB N.º1 de Condeixa-a-Nova"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-8.51%2C40.10%2C-8.49%2C40.12&layer=mapnik&marker=40.1119%2C-8.5005"
                className="h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            noValidate
            className="reveal rounded-[2rem] border border-border bg-card p-6 shadow-card sm:p-8"
          >
            <h3 className="text-xl text-foreground">Envie-nos uma mensagem</h3>
            <div className="mt-6 space-y-4">
              <div>
                <label
                  htmlFor="c-nome"
                  className="mb-1.5 block text-sm font-semibold text-foreground"
                >
                  Nome
                </label>
                <input
                  id="c-nome"
                  name="nome"
                  placeholder="O seu nome"
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/30"
                />
              </div>
              <div>
                <label
                  htmlFor="c-email"
                  className="mb-1.5 block text-sm font-semibold text-foreground"
                >
                  Email
                </label>
                <input
                  id="c-email"
                  name="email"
                  type="email"
                  placeholder="nome@email.com"
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/30"
                />
              </div>
              <div>
                <label
                  htmlFor="c-mensagem"
                  className="mb-1.5 block text-sm font-semibold text-foreground"
                >
                  Mensagem
                </label>
                <textarea
                  id="c-mensagem"
                  name="mensagem"
                  rows={4}
                  placeholder="Como podemos ajudar?"
                  className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/30"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full gradient-cta px-6 py-3.5 text-base font-bold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5 disabled:opacity-70"
              >
                <Send className="h-5 w-5" />
                {submitting ? "A enviar..." : "Enviar Mensagem"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-soft">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-soft text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-sm font-bold text-foreground">{label}</p>
        <p className="mt-0.5 text-sm text-muted-foreground">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block">
      {content}
    </a>
  ) : (
    content
  );
}