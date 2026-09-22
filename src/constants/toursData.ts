import { StaticImageData } from "next/image";
import genipabuImg from "@/public/images/genipabu-tour-image.webp";
import pitanguiImg from "@/public/images/pitangui-tour-image.webp";
import jacumaImg from "@/public/images/jacuma-tour-image.webp";

interface TourItem {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  targetAudience: string;
  waypoints: string[];
  image: StaticImageData | string;
  imageAlt: string;
  quote: string;
}

export const TOURS_DATA: TourItem[] = [
  {
    id: "genipabu",
    tag: "ITINERÁRIO 01 · NORTE HISTÓRICO",
    title: "Genipabu — O Clássico das Dunas e Lagoas",
    subtitle: "A essência inaugural de Natal",
    description:
      "Percurso icônico pelo litoral norte de Natal, cruzando as famosas dunas móveis e fixas de Genipabu, a travessia de balsa artesanal no Rio Ceará-Mirim e paradas com vista panorâmica para o oceano atlântico. Uma experiência que traduz a pura identidade potiguar sob o sol suave do Atlântico equatorial.",
    duration: "4h30 a 5h",
    targetAudience: "Casais & Famílias (Ritmo balanceado)",
    waypoints: [
      "Dunas Móveis de Genipabu",
      "Praia e Mirante de Santa Rita",
      "Travessia de Balsa em Barra do Rio",
      "Lagoa de Genipabu & Duna Panorâmica",
    ],
    image: genipabuImg,
    imageAlt: "Buggy nas dunas de Genipabu ao entardecer",
    quote: "“O encontro clássico entre as dunas móveis e o azul do Atlântico”",
  },
  {
    id: "pitangui",
    tag: "ITINERÁRIO 02 · ÁGUAS & SERENIDADE",
    title: "Pitangui — Lagoas, Dunas Douradas e Serenidade",
    subtitle: "Quietude, frescor e contemplação",
    description:
      "Uma experiência mais imersiva e tranquila, explorando o oásis da Lagoa de Pitangui, dunas douradas protegidas e áreas preservadas onde a vegetação litorânea encontra as águas doces. Concebido para viajantes que priorizam o tempo sem pressa e pausas regenerativas diante da natureza.",
    duration: "Aprox. 6 Horas",
    targetAudience: "Amigos & Relaxamento (Tempo livre para banho)",
    waypoints: [
      "Oásis da Lagoa de Pitangui",
      "Banho prolongado em água doce cristalina",
      "Subida à imponente Duna Dourada",
      "Mirantes de preservação da mata costeira",
    ],
    image: pitanguiImg,
    imageAlt: "Paisagem da Lagoa de Pitangui com águas calmas",
    quote: "“Águas doces e dunas douradas em um ritmo de pura contemplação”",
  },
  {
    id: "jacuma",
    tag: "ITINERÁRIO 03 · A IMERSÃO DEFINITIVA",
    title: "Jacumã — Natureza Selvagem e Travessia Completa",
    subtitle: "Do litoral esculpido ao horizonte aberto",
    description:
      "O percurso mais abrangente do litoral norte, estendendo-se até a mística Lagoa de Jacumã, praias selvagens e falésias naturais, combinando aventura suave com paradas gastronômicas à beira-mar. Uma travessia que descortina horizontes abertos e a força indomada da costa potiguar.",
    duration: "Aprox. 7 Horas",
    targetAudience: "Aventureiros & Viajantes Plenos",
    waypoints: [
      "Lagoa de Jacumã (Aerobunda e esqui)",
      "Dunas e Praia de Muriú",
      "Praias Desertas e Restingas Intocadas",
      "Parada Gastronômica Costeira",
    ],
    image: jacumaImg,
    imageAlt: "Vista panorâmica de Jacumã e litoral norte",
    quote:
      "“A travessia definitiva pelas paisagens selvagens e horizontes abertos”",
  },
];
