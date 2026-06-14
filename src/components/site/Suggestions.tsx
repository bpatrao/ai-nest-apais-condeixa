import { useState, type FormEvent } from "react";
import { Lightbulb, Send } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  nome: z.string().trim().min(2, "Indique o seu nome").max(120),
  email: z.string().trim().email("Email inválido").max(160),
  sugestao: z
    .string()
    .trim()
    .min(5, "Escreva a sua sugestão")
    .max(1000),
});

export function Suggestions() {
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
      toast.success("Obrigada pela sua sugestão! Vamos analisá-la com carinho.");
    }, 600);
  }

  return (
    <section id="sugestoes" className="bg-primary py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <span className="reveal mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
          <Lightbulb className="h-7 w-7" />
        </span>
        <h2 className="reveal mt-6 text-3xl text-primary-foreground sm:text-4xl">
          Tem uma ideia para melhorar a vida escolar das nossas crianças?
        </h2>
        <p className="reveal mt-4 text-lg text-primary-foreground/85">
          As melhores ideias nascem da comunidade. Partilhe a sua sugestão
          connosco — toda a participação conta!
        </p>

        <form
          onSubmit={onSubmit}
          noValidate
          className="reveal mt-10 rounded-[2rem] bg-card p-6 text-left shadow-card sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="s-nome"
                className="mb-1.5 block text-sm font-semibold text-foreground"
              >
                Nome
              </label>
              <input
                id="s-nome"
                name="nome"
                placeholder="O seu nome"
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/30"
              />
            </div>
            <div>
              <label
                htmlFor="s-email"
                className="mb-1.5 block text-sm font-semibold text-foreground"
              >
                Email
              </label>
              <input
                id="s-email"
                name="email"
                type="email"
                placeholder="nome@email.com"
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/30"
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="s-sugestao"
              className="mb-1.5 block text-sm font-semibold text-foreground"
            >
              Sugestão
            </label>
            <textarea
              id="s-sugestao"
              name="sugestao"
              rows={4}
              placeholder="A sua ideia..."
              className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/30"
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-base font-bold text-accent-foreground shadow-soft transition-transform hover:-translate-y-0.5 disabled:opacity-70 sm:w-auto"
          >
            <Send className="h-5 w-5" />
            {submitting ? "A enviar..." : "Enviar Sugestão"}
          </button>
        </form>
      </div>
    </section>
  );
}