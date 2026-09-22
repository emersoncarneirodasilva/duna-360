import genipabuImg from "@/public/images/genipabu-home-image.webp";
import pitanguiImg from "@/public/images/pitangui-image.webp";
import jacumaImg from "@/public/images/jacuma-image.webp";

interface Tour {
  tag: string;
  duration: string;
  title: string;
  description: string;
  image: typeof genipabuImg;
  href: string;
}

export const TOURS: Tour[] = [
  {
    tag: "LITORAL NORTE CLÁSSICO",
    duration: "~4H30 A 5H",
    title: "Genipabu",
    description:
      "Dunas, praias e paisagens clássicas do litoral norte. O percurso icônico que combina a adrenalina controlada das dunas fixas e móveis com a travessia tradicional em balsa ecológica.",
    image: genipabuImg,
    href: "/passeios#genipabu",
  },
  {
    tag: "ÁGUAS CLARAS & DUNAS DOURADAS",
    duration: "~6H",
    title: "Pitangui",
    description:
      "Dunas, lagoas e paisagens naturais. Um itinerário expandido com banho relaxante em águas doces e límpidas, vegetação nativa preservada e paradas estratégicas de gastronomia costeira.",
    image: pitanguiImg,
    href: "/passeios#pitangui",
  },
  {
    tag: "EXPEDIÇÃO COMPLETA",
    duration: "~7H",
    title: "Jacumã",
    description:
      "Praias, lagoas e dunas em uma experiência completa. A travessia definitiva até o extremo norte, contemplando atividades clássicas como aerobunda, skibunda e mirantes oceânicos intocados.",
    image: jacumaImg,
    href: "/passeios#jacuma",
  },
];
