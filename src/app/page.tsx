import { Metadata } from "next";
import Hero from "../components/Home/Hero";
import AboutPhilosophy from "../components/Home/AboutPhilosophy";
import Tours from "../components/Home/Tours";
import Differentials from "../components/Home/Differentials";
import VisualNarrative from "../components/Home/VisualNarrative";
import Testimonials from "../components/Home/Testimonials";
import HowItWorks from "../components/Home/HowItWorks";
import Faq from "../components/Home/Faq";
import Cta from "../components/Cta";
import defaultSunsetImg from "@/public/images/about-image.webp";

export const metadata: Metadata = {
  title: {
    absolute:
      "Duna 360º | Passeios de Buggy Exclusivos em Natal e Litoral Norte",
  },
  description:
    "Descubra as dunas de Genipabu, as águas da Lagoa de Pitangui e as belezas de Jacumã com expedições de buggy privativas. Saídas de Ponta Negra e Via Costeira.",
  openGraph: {
    title: "Duna 360º | Passeios de Buggy Exclusivos em Natal - RN",
    description:
      "Viva uma experiência autônoma e segura pelo litoral norte potiguar. Reserve seu passeio privativo com atendimento sob medida.",
  },
};

export default function Home() {
  const backgroundImage = defaultSunsetImg;
  const tag = "INICIE SUA JORNADA";
  const title = "Seu próximo passeio começa aqui.";
  const description =
    "Conte para a gente como será seu grupo e vamos planejar sua experiência pelas areias e águas de Natal.";

  return (
    <>
      <Hero />
      <AboutPhilosophy />
      <Tours />
      <Differentials />
      <VisualNarrative />
      <Testimonials />
      <HowItWorks />
      <Faq />
      <Cta
        backgroundImage={backgroundImage}
        tag={tag}
        title={title}
        description={description}
      />
    </>
  );
}
