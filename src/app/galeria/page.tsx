import { Metadata } from "next";
import GallerySection from "@/src/components/Gallery";
import Cta from "@/src/components/Cta";
import genipabuImg from "@/public/images/ride-hero-image.webp";

export const metadata: Metadata = {
  title:
    "Galeria de Fotos | Momentos e Paisagens no litoral norte do Rio Grande do Norte - Duna 360º",
  description:
    "Explore registros reais de nossas expedições privativas pelas dunas móveis, lagoas cristalinas e praias do litoral norte do Rio Grande do Norte.",
  openGraph: {
    title: "Acervo Fotográfico | Galeria Duna 360º",
    description:
      "Confira imagens exclusivas dos passeios de buggy em Genipabu, Pitangui e Jacumã. Sinta a atmosfera do nosso litoral.",
  },
};

export default function Gallery() {
  const backgroundImage = genipabuImg;
  const tag = "SUA PRÓXIMA JORNADA";
  const title = "Pronto para viver essa experiência?";
  const description =
    "Deixe a DUNA 360º guiar você pelas dunas e lagoas mais bonitas do Rio Grande do Norte.";

  return (
    <>
      <GallerySection />
      <Cta
        backgroundImage={backgroundImage}
        tag={tag}
        title={title}
        description={description}
      />
    </>
  );
}
