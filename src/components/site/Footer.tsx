import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";

import logo from "@/assets/apais-logo.png";

const nav = [
  { href: "#quem-somos", label: "Quem Somos" },
  { href: "#avisos", label: "Avisos" },
  { href: "#agenda", label: "Agenda" },
  { href: "#galeria", label: "Galeria" },
  { href: "#amigos", label: "Amigos da Escola" },
  { href: "#participar", label: "Participar" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <img
              src={logo}
              alt="APAIS — Associação de Pais de Condeixa-a-Nova"
              width={150}
              height={64}
              className="h-12 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Juntos, a construir o presente e o futuro dos nossos filhos. EB
              N.º1 de Condeixa-a-Nova.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-base text-foreground">Navegação</h3>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base text-foreground">Contactos</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                apais.condeixa@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                239 940 200
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Rua Longjumeau, 3150-122 Condeixa-a-Nova
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-center text-xs text-muted-foreground sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} APAIS — Associação de Pais da EB N.º1 de
            Condeixa-a-Nova. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a href="#privacidade" className="hover:text-primary">
              Política de Privacidade
            </a>
            <span aria-hidden="true">·</span>
            <span>Cumprimos o RGPD</span>
          </div>
        </div>

        <p
          id="privacidade"
          className="mt-6 text-center text-[11px] leading-relaxed text-muted-foreground/80"
        >
          Os dados pessoais recolhidos nos formulários deste site são utilizados
          exclusivamente para responder e gerir a sua participação na APAIS, nos
          termos do Regulamento Geral de Proteção de Dados (RGPD). Não são
          partilhados com terceiros e pode solicitar o seu acesso ou eliminação a
          qualquer momento através do nosso email.
        </p>
      </div>
    </footer>
  );
}