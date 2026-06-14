import { events } from "./data";
import { cn } from "@/lib/utils";

const toneStyles: Record<string, string> = {
  blue: "bg-blue-soft text-primary",
  green: "bg-green-soft text-secondary-foreground",
  yellow: "bg-yellow-soft text-accent-foreground",
};

export function Events() {
  return (
    <section id="agenda" className="bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-secondary">
            Agenda
          </span>
          <h2 className="mt-3 text-3xl text-foreground sm:text-4xl">
            Próximos Eventos
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Marque na agenda e participe! Cada momento é uma oportunidade de
            estarmos juntos.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, i) => (
            <article
              key={event.title}
              className="reveal flex flex-col rounded-[1.75rem] bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              style={{ transitionDelay: `${(i % 3) * 0.08}s` }}
            >
              <div className="flex items-start gap-4">
                <div
                  className={cn(
                    "flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-2xl",
                    toneStyles[event.tone],
                  )}
                >
                  <span className="font-display text-2xl font-extrabold leading-none">
                    {event.day}
                  </span>
                  <span className="text-xs font-bold">{event.month}</span>
                </div>
                <h3 className="pt-1 text-xl text-foreground">{event.title}</h3>
              </div>
              <p className="mt-4 flex-1 leading-relaxed text-muted-foreground">
                {event.description}
              </p>
              {event.cta && (
                <a
                  href="#participar"
                  className="mt-5 inline-flex w-fit items-center rounded-full bg-primary px-5 py-2 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  {event.cta}
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}