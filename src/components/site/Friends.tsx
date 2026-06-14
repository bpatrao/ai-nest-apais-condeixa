import { Award, Heart } from "lucide-react";

import { friends } from "./data";

export function Friends() {
  return (
    <section id="amigos" className="gradient-warm py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-secondary">
            <Award className="h-4 w-4" />
            Amigos da Escola Azul
          </span>
          <h2 className="mt-3 text-3xl text-foreground sm:text-4xl">
            Quem nos ajuda a fazer mais
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Um agradecimento especial às entidades e parceiros locais que
            apoiaram com doações os nossos eventos e iniciativas. O vosso apoio
            faz toda a diferença para as nossas crianças.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {friends.map((friend, i) => (
            <article
              key={friend.name}
              className="reveal flex flex-col items-center rounded-2xl bg-card p-5 text-center shadow-soft transition-transform hover:-translate-y-1"
              style={{ transitionDelay: `${(i % 5) * 0.06}s` }}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-soft text-primary">
                <Heart className="h-6 w-6 fill-secondary text-secondary" />
              </span>
              <p className="mt-3 font-display text-sm font-bold leading-tight text-foreground">
                {friend.name}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{friend.gift}</p>
            </article>
          ))}
        </div>

        <p className="reveal mt-10 text-center text-sm font-semibold text-muted-foreground">
          Quer tornar-se um Amigo da Escola Azul?{" "}
          <a href="#contactos" className="text-primary underline-offset-4 hover:underline">
            Fale connosco
          </a>
          .
        </p>
      </div>
    </section>
  );
}