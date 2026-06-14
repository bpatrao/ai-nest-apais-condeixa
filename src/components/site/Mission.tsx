import { Target, ListChecks, Heart } from "lucide-react";

import { objectives, values } from "./data";

export function Mission() {
  return (
    <section id="missao" className="gradient-warm py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-secondary">
            O Que Nos Move
          </span>
          <h2 className="mt-3 text-3xl text-foreground sm:text-4xl">
            Missão, Objetivos e Valores
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Princípios que orientam tudo o que fazemos pela nossa comunidade
            escolar.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <article className="reveal rounded-[1.75rem] bg-card p-8 shadow-soft">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-soft text-primary">
              <Target className="h-7 w-7" />
            </div>
            <h3 className="mt-6 text-2xl text-foreground">Missão</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Representar e apoiar as famílias da comunidade escolar, promovendo
              uma escola mais próxima, inclusiva e centrada nas crianças.
            </p>
          </article>

          <article
            className="reveal rounded-[1.75rem] bg-card p-8 shadow-soft"
            style={{ transitionDelay: "0.1s" }}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-soft text-secondary-foreground">
              <ListChecks className="h-7 w-7" />
            </div>
            <h3 className="mt-6 text-2xl text-foreground">Objetivos</h3>
            <ul className="mt-4 space-y-3">
              {objectives.map((obj) => (
                <li key={obj} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                  <span className="text-muted-foreground">{obj}</span>
                </li>
              ))}
            </ul>
          </article>

          <article
            className="reveal rounded-[1.75rem] bg-card p-8 shadow-soft"
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-soft text-accent-foreground">
              <Heart className="h-7 w-7" />
            </div>
            <h3 className="mt-6 text-2xl text-foreground">Valores</h3>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {values.map((value) => (
                <span
                  key={value.label}
                  className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm font-semibold text-foreground"
                >
                  <value.icon className="h-4 w-4 text-primary" />
                  {value.label}
                </span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}