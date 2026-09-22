import gallery1 from "@/public/images/gallery-01.webp";
import gallery2 from "@/public/images/gallery-02.webp";
import gallery3 from "@/public/images/gallery-03.webp";
import gallery4 from "@/public/images/pitangui-image.webp";

interface GalleryItem {
  image: typeof gallery1;
  alt: string;
  tag: string;
  gridSpan: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    image: gallery1,
    alt: "Buggy Duna 360 no mirante das dunas ao entardecer",
    tag: "MIRANTE DAS DUNAS • 17H30",
    gridSpan: "lg:col-span-7",
  },
  {
    image: gallery2,
    alt: "Turistas curtindo o passeio à beira-mar na maré baixa",
    tag: "BEIRA-MAR NA MARÉ BAIXA",
    gridSpan: "lg:col-span-5",
  },
  {
    image: gallery3,
    alt: "Linhas e horizontes nas dunas do Rio Grande do Norte",
    tag: "LINHAS & HORIZONTES",
    gridSpan: "lg:col-span-5",
  },
  {
    image: gallery4,
    alt: "Detalhe da Lagoa de Pitangui",
    tag: "LAGOA DE PITANGUI",
    gridSpan: "lg:col-span-7",
  },
];
