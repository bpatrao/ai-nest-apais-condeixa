import { features, featureIconMap } from "./data";

export function WhatWeDo() {
  return (
    <section id="o-que-fazemos" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-secondary">
            O Que Fazemos
          </span>
          <h2 className="mt-3 text-3xl text-foreground sm:text-4xl">
            Iniciativas que aproximam toda a comunidade
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ao longo do ano organizamos atividades que enriquecem a vida escolar
            e criam memórias para as famílias.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = featureIconMap[feature.emoji];
            return (
              <article
                key={feature.title}
                className="reveal group rounded-[1.75rem] border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
                style={{ transitionDelay: `${(i % 3) * 0.08}s` }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-soft text-2xl text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  {Icon ? <Icon className="h-7 w-7" /> : feature.emoji}
                </div>
                <h3 className="mt-5 text-xl text-foreground">{feature.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}