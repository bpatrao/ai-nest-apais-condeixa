import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import logo from "@/assets/apais-logo.png";
import logoWhite from "@/assets/apais-logo-white.png";
import { cn } from "@/lib/utils";

const links = [
  { href: "#quem-somos", label: "Quem Somos" },
  { href: "#avisos", label: "Avisos" },
  { href: "#agenda", label: "Agenda" },
  { href: "#galeria", label: "Galeria" },
  { href: "#amigos", label: "Amigos da Escola" },
  { href: "#contactos", label: "Contactos" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/85 shadow-soft backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3">
          <img
            src={scrolled ? logo : logoWhite}
            alt="APAIS — Associação de Pais de Condeixa-a-Nova"
            width={192}
            height={80}
            className="h-20 w-auto transition-all duration-300"
          />
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                scrolled
                  ? "text-foreground/80 hover:bg-blue-soft hover:text-primary"
                  : "text-primary-foreground/90 hover:bg-background/15 hover:text-primary-foreground",
              )}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#participar"
            className="ml-2 inline-flex items-center rounded-full gradient-cta px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Tornar-me Associado
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "inline-flex items-center justify-center rounded-full p-2 transition-colors lg:hidden",
            scrolled ? "text-foreground" : "text-primary-foreground",
          )}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 px-4 pb-6 pt-2 backdrop-blur-md lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-semibold text-foreground/85 transition-colors hover:bg-blue-soft hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#participar"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full gradient-cta px-5 py-3 text-base font-bold text-primary-foreground shadow-soft"
            >
              Tornar-me Associado
            </a>
          </div>
        </div>
      )}
    </header>
  );
}