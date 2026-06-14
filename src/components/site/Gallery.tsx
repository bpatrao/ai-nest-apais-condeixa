import { gallery } from "./data";
import { cn } from "@/lib/utils";

export function Gallery() {
  return (
    <section id="galeria" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-secondary">
            Galeria
          </span>
          <h2 className="mt-3 text-3xl text-foreground sm:text-4xl">
            Momentos da nossa comunidade
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Atividades, festas, workshops e projetos que enchem a escola de
            alegria.
          </p>
        </div>

        <div className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-4 sm:auto-rows-[220px] md:grid-cols-3">
          {gallery.map((image) => (
            <figure
              key={image.src}
              className={cn(
                "group reveal relative overflow-hidden rounded-[1.5rem] shadow-soft",
                image.span,
              )}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-primary/90 to-transparent p-4 text-sm font-semibold text-primary-foreground transition-transform duration-300 group-hover:translate-y-0">
                {image.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}