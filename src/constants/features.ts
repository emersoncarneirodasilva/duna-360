import { ShieldCheck, Compass, Leaf, LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FEATURES: Feature[] = [
  {
    icon: ShieldCheck,
    title: "Credenciados",
    description: "Roteiros homologados e seguros.",
  },
  {
    icon: Compass,
    title: "Condutores",
    description: "Profissionais nativos e experientes.",
  },
  {
    icon: Leaf,
    title: "Preservação",
    description: "Respeito à fauna e às dunas móveis.",
  },
];
