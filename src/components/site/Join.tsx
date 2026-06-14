import { useState, type FormEvent } from "react";
import { Check, Send } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import bgImage from "@/assets/gallery-outdoor.jpg";

const benefits = [
  "Apoiar projetos para as crianças",
  "Participar ativamente na comunidade escolar",
  "Receber informação relevante",
  "Contribuir para melhorar a experiência educativa",
];

const schema = z.object({
  nome: z.string().trim().min(2, "Indique o seu nome").max(120),
  email: z.string().trim().email("Email inválido").max(160),
  telefone: z
    .string()
    .trim()
    .min(9, "Telefone inválido")
    .max(20)
    .regex(/^[0-9+\s]+$/, "Telefone inválido"),
  aluno: z.string().trim().min(2, "Indique o nome do aluno").max(120),
  ano: z.string().trim().min(1, "Selecione o ano escolar"),
  mensagem: z.string().trim().max(800).optional(),
});

const anos = ["Pré-Escolar", "1.º ano", "2.º ano", "3.º ano", "4.º ano"];

export function Join() {
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
      toast.success(
        "Pedido enviado! Vamos entrar em contacto consigo em breve. 💙",
      );
    }, 600);
  }

  return (
    <section id="participar" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/85" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="reveal">
            <span className="text-sm font-bold uppercase tracking-wider text-primary-foreground/80">
              Participar
            </span>
            <h2 className="mt-3 text-3xl text-primary-foreground sm:text-4xl">
              Porque Fazer Parte da Associação?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90">
              Quanto mais famílias participam, mais conseguimos fazer pelas
              nossas crianças. Junte-se a nós.
            </p>

            <ul className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/20 text-primary-foreground">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-base font-medium text-primary-foreground/95">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <form
            onSubmit={onSubmit}
            noValidate
            className="reveal rounded-[2rem] border border-white/20 bg-white/95 p-6 shadow-card backdrop-blur-sm sm:p-8"
          >
            <h3 className="text-xl text-foreground">Quero ser Associado</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="Nome" name="nome" placeholder="O seu nome" />
              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="nome@email.com"
              />
              <Field
                label="Telefone"
                name="telefone"
                type="tel"
                placeholder="9XX XXX XXX"
              />
              <Field label="Nome do aluno" name="aluno" placeholder="Nome do aluno" />
              <div className="sm:col-span-2">
                <label
                  htmlFor="ano"
                  className="mb-1.5 block text-sm font-semibold text-foreground"
                >
                  Ano escolar
                </label>
                <select
                  id="ano"
                  name="ano"
                  defaultValue=""
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/30"
                >
                  <option value="" disabled>
                    Selecione o ano
                  </option>
                  {anos.map((ano) => (
                    <option key={ano} value={ano}>
                      {ano}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="mensagem"
                  className="mb-1.5 block text-sm font-semibold text-foreground"
                >
                  Mensagem (opcional)
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={3}
                  placeholder="Como gostaria de participar?"
                  className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/30"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full gradient-cta px-6 py-3.5 text-base font-bold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5 disabled:opacity-70"
            >
              <Send className="h-5 w-5" />
              {submitting ? "A enviar..." : "Quero Tornar-me Associado"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-sm font-semibold text-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-ring/30"
      />
    </div>
  );
}