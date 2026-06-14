import {
  Palette,
  BookOpen,
  PartyPopper,
  Sprout,
  HandHeart,
  School,
  Users,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Scale,
  type LucideIcon,
} from "lucide-react";

import galleryOutdoor from "@/assets/gallery-outdoor.jpg";
import galleryFair from "@/assets/gallery-fair.jpg";
import galleryMarket from "@/assets/gallery-market.jpg";
import galleryCrafts from "@/assets/gallery-crafts.jpg";
import galleryChristmas from "@/assets/gallery-christmas.jpg";
import galleryGarden from "@/assets/gallery-garden.jpg";

export type Feature = {
  emoji: string;
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    emoji: "🎨",
    title: "Atividades Culturais",
    description:
      "Workshops, espetáculos e momentos criativos que despertam a curiosidade e os talentos das crianças.",
  },
  {
    emoji: "📚",
    title: "Apoio Educativo",
    description:
      "Iniciativas que complementam o percurso escolar e valorizam o gosto por aprender.",
  },
  {
    emoji: "🎉",
    title: "Eventos e Festas Escolares",
    description:
      "Magusto, Festa de Natal, Dia da Criança e muitos outros momentos de convívio em família.",
  },
  {
    emoji: "🌱",
    title: "Projetos Ambientais e de Cidadania",
    description:
      "Hortas, reciclagem e ações que ensinam a cuidar do planeta e da comunidade.",
  },
  {
    emoji: "🤝",
    title: "Apoio às Famílias",
    description:
      "Estamos presentes para ouvir, apoiar e dar voz às preocupações de todas as famílias.",
  },
  {
    emoji: "🏫",
    title: "Representação da Comunidade",
    description:
      "Representamos as famílias junto da escola e das entidades locais, sempre pelo bem das crianças.",
  },
];

export type Value = { label: string; icon: LucideIcon };

export const values: Value[] = [
  { label: "Colaboração", icon: HeartHandshake },
  { label: "Inclusão", icon: Users },
  { label: "Respeito", icon: HandHeart },
  { label: "Transparência", icon: ShieldCheck },
  { label: "Participação", icon: Sparkles },
];

export const objectives: string[] = [
  "Promover a participação ativa das famílias.",
  "Apoiar atividades educativas e culturais.",
  "Fortalecer a ligação entre escola e comunidade.",
  "Contribuir para o bem-estar das crianças.",
];

export type BoardMember = { name: string; role: string };

export const board: BoardMember[] = [
  { name: "Lúcia Paradela", role: "Presidente da Direção" },
  { name: "Direção da APAIS", role: "Vice-Presidência" },
  { name: "Direção da APAIS", role: "Tesouraria" },
  { name: "Direção da APAIS", role: "Secretaria" },
  { name: "Assembleia Geral", role: "Mesa da Assembleia" },
  { name: "Conselho Fiscal", role: "Fiscalização" },
];

export type EventItem = {
  day: string;
  month: string;
  title: string;
  description: string;
  cta?: string;
  tone: "blue" | "green" | "yellow";
};

export const events: EventItem[] = [
  {
    day: "11",
    month: "NOV",
    title: "Magusto",
    description:
      "Castanhas assadas, jogos tradicionais e muita animação para celebrar o São Martinho em família.",
    cta: "Inscrever",
    tone: "yellow",
  },
  {
    day: "19",
    month: "DEZ",
    title: "As Sopas do Pai Natal",
    description:
      "Jantar solidário com sopa, bifanas e música ao vivo. Adultos 7,5€ · Crianças (6-12) 2,5€.",
    cta: "Inscrever",
    tone: "blue",
  },
  {
    day: "07",
    month: "FEV",
    title: "Feira do Livro",
    description:
      "Uma viagem pela leitura com autores, contadores de histórias e descobertas para todas as idades.",
    cta: "Saber mais",
    tone: "green",
  },
  {
    day: "15",
    month: "MAI",
    title: "Mercado da Primavera",
    description:
      "Iguarias, legumes e frutas a preços incríveis, com sorteio de rifas e o espetáculo Cantando e Bailando.",
    cta: "Saber mais",
    tone: "green",
  },
  {
    day: "24",
    month: "MAI",
    title: "Caminhada em Família",
    description:
      "Um passeio pela natureza de Condeixa para promover hábitos saudáveis e o convívio entre famílias.",
    cta: "Inscrever",
    tone: "blue",
  },
  {
    day: "01",
    month: "JUN",
    title: "Dia da Criança",
    description:
      "Uma manhã cheia de brincadeiras, surpresas e sorrisos dedicada às nossas crianças.",
    cta: "Saber mais",
    tone: "yellow",
  },
];

export type Notice = {
  date: string;
  title: string;
  description: string;
  level: "info" | "alert";
};

export const notices: Notice[] = [
  {
    date: "3 de junho",
    title: "Informações sobre a greve",
    description:
      "Em virtude da greve, o Pré-Escolar não terá aulas. Os almoços estão assegurados e o 1.º CEB será reavaliado às 10h.",
    level: "alert",
  },
  {
    date: "25 de maio",
    title: "Vencedores do Sorteio da Primavera",
    description:
      "Já são conhecidos os vencedores das Rifas da Primavera. Obrigada a todas as famílias e patrocinadores!",
    level: "info",
  },
  {
    date: "25 de abril",
    title: "Arraial da Liberdade",
    description:
      "Em parceria com a Pais+, a APAIS marcou presença no Arraial da Liberdade, numa noite de celebração e convívio.",
    level: "info",
  },
];

export type GalleryImage = {
  src: string;
  alt: string;
  span: string;
};

export const gallery: GalleryImage[] = [
  {
    src: galleryOutdoor,
    alt: "Crianças a correr ao ar livre num dia de primavera",
    span: "md:row-span-2",
  },
  {
    src: galleryCrafts,
    alt: "Crianças em workshop de artes e trabalhos manuais",
    span: "",
  },
  {
    src: galleryMarket,
    alt: "Banca do Mercado da Primavera com frutas e legumes",
    span: "",
  },
  {
    src: galleryFair,
    alt: "Arraial comunitário à noite com bancas iluminadas",
    span: "md:row-span-2",
  },
  {
    src: galleryGarden,
    alt: "Crianças a plantar na horta da escola",
    span: "",
  },
  {
    src: galleryChristmas,
    alt: "Sopas do Pai Natal, jantar comunitário de Natal",
    span: "",
  },
];

export type Friend = { name: string; gift: string };

export const friends: Friend[] = [
  { name: "Conímbriga Hotel do Paço", gift: "Voucher Spa" },
  { name: "KIDIstore", gift: "Vouchers de compras" },
  { name: "Escarpiadona", gift: "Escarpiada & licor" },
  { name: "Casa de Produtos de Condeixa", gift: "Cabaz de produtos" },
  { name: "Condeixa.Dança", gift: "Aulas de Zumba" },
  { name: "UniQess · UniQids", gift: "Vouchers" },
  { name: "Restaurante Flor da Aldeia", gift: "Almoços" },
  { name: "PT Sarah Oliveira", gift: "Treinos personalizados" },
  { name: "Município de Condeixa-a-Nova", gift: "Apoio institucional" },
  { name: "SOGA", gift: "Apoio aos eventos" },
];

export const featureIconMap: Record<string, LucideIcon> = {
  "🎨": Palette,
  "📚": BookOpen,
  "🎉": PartyPopper,
  "🌱": Sprout,
  "🤝": HandHeart,
  "🏫": School,
};

export const missionValueIcon = Scale;