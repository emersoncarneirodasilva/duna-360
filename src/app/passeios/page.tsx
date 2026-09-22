import { Metadata } from "next";
import Hero from "@/src/components/Ride/Hero";
import ToursList from "@/src/components/Ride/ToursList";
import Cta from "@/src/components/Cta";
import genipabuImg from "@/public/images/genipabu-image-02.webp";

export const metadata: Metadata = {
  title: "Nossos Roteiros | Passeios de Buggy Privativos em Natal - Duna 360º",
  description:
    "Conheça os itinerários exclusivos pelo litoral norte: Genipabu, Lagoa de Pitangui e Jacumã. Roteiros flexíveis com duração estimada e pontos de parada detalhados.",
  openGraph: {
    title: "Roteiros Exclusivos de Buggy em Natal e Litoral Norte | Duna 360º",
    description:
      "Explore os roteiros privativos de Genipabu, Pitangui e Jacumã com um bugueiro credenciado SETUR. Atendimento sob medida para o seu grupo.",
  },
};

export default function Ride() {
  const backgroundImage = genipabuImg;
  const tag = "ROTEIROS PRIVATIVOS & ATENDIMENTO SOB MEDIDA";
  const title = "Não sabe qual passeio escolher?";
  const description =
    "Conte um pouco sobre seu grupo e deixe a gente ajudar a desenhar o percurso ideal para sua viagem. Consideramos suas preferências de ritmo, maré e perfil para uma experiência inesquecível.";

  return (
    <>
      <Hero />
      <ToursList />
      <Cta
        backgroundImage={backgroundImage}
        tag={tag}
        title={title}
        description={description}
      />
    </>
  );
}
