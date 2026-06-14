import { board } from "./data";
import aboutImg from "@/assets/about.jpg";

export function About() {
  return (
    <section id="quem-somos" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal relative">
            <div className="overflow-hidden rounded-[2rem] shadow-card">
              <img
                src={aboutImg}
                alt="Direção e famílias da APAIS reunidas na escola"
                width={1024}
                height={1024}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-accent px-6 py-4 text-accent-foreground shadow-card sm:block">
              <p className="font-display text-3xl font-extrabold leading-none">
                427+
              </p>
              <p className="text-sm font-semibold">famílias na comunidade</p>
            </div>
          </div>

          <div className="reveal">
            <span className="text-sm font-bold uppercase tracking-wider text-secondary">
              Quem Somos
            </span>
            <h2 className="mt-3 text-3xl text-foreground sm:text-4xl">
              Uma associação feita por famílias, para as crianças
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              A Associação de Pais e Encarregados de Educação trabalha em
              colaboração com a escola, famílias e comunidade para promover
              iniciativas que contribuam para o bem-estar, desenvolvimento e
              felicidade das nossas crianças.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Somos voluntários que acreditam que uma escola mais participativa
              começa com pais presentes. Damos voz às famílias, organizamos
              momentos de convívio e apoiamos os projetos que fazem da EB N.º1 de
              Condeixa-a-Nova um lugar mais feliz para aprender e crescer.
            </p>

            <h3 className="mt-9 text-xl text-foreground">A nossa Direção</h3>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {board.map((member, i) => (
                <div
                  key={`${member.role}-${i}`}
                  className="rounded-2xl border border-border bg-card p-4 transition-shadow hover:shadow-soft"
                >
                  <p className="font-display text-sm font-bold text-primary">
                    {member.name}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}