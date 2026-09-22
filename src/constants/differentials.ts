import {
  Compass,
  ShieldCheck,
  SlidersHorizontal,
  BookOpen,
  LucideIcon,
} from "lucide-react";

interface Differential {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const DIFFERENTIAL: Differential[] = [
  {
    icon: Compass,
    title: "Experiência",
    description:
      "Conhecimento profundo dos principais cenários, marés e segredos geográficos do litoral potiguar.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança",
    description:
      "Passeios conduzidos com rigor técnico, veículos inspecionados e atenção dedicada a cada passageiro.",
  },
  {
    icon: SlidersHorizontal,
    title: "Personalização",
    description:
      "Experiências sob medida, calibradas conforme a energia de casais, famílias com crianças e grupos fechados.",
  },
  {
    icon: BookOpen,
    title: "Memórias",
    description:
      "Mais do que cumprir pontos de parada, construímos vivências visuais e sensoriais para marcar sua viagem.",
  },
];
