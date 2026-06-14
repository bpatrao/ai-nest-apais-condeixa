import { ArrowRight, Heart } from "lucide-react";

import heroImg from "@/assets/hero-new.jpg";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Crianças e famílias da comunidade escolar de Condeixa-a-Nova"
          width={1920}
          height={1080}
          fetchPriority="high"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="animate-fade-up inline-flex items-center gap-2 rounded-full bg-background/90 px-4 py-2 text-sm font-bold text-primary shadow-soft">
            <Heart className="h-4 w-4 fill-secondary text-secondary" />
            EB N.º1 de Condeixa-a-Nova
          </span>

          <h1
            className="animate-fade-up mt-6 text-4xl leading-[1.05] text-primary-foreground sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "0.1s" }}
          >
            Associação de Pais e Encarregados de Educação
          </h1>

          <p
            className="animate-fade-up mt-6 max-w-xl text-lg font-medium text-primary-foreground/90 sm:text-xl"
            style={{ animationDelay: "0.2s" }}
          >
            Juntos construímos uma escola mais participativa, acolhedora e
            enriquecedora para as nossas crianças.
          </p>

          <div
            className="animate-fade-up mt-9 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="#participar"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-bold text-accent-foreground shadow-card transition-transform hover:-translate-y-0.5"
            >
              Tornar-me Associado
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#quem-somos"
              className="inline-flex items-center justify-center rounded-full bg-background/95 px-7 py-3.5 text-base font-bold text-primary shadow-soft transition-transform hover:-translate-y-0.5"
            >
              Conhecer a Associação
            </a>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-px left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="h-[60px] w-full sm:h-[100px]"
          aria-hidden="true"
        >
          <path
            d="M0,64 C240,120 480,120 720,90 C960,60 1200,0 1440,40 L1440,120 L0,120 Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
}