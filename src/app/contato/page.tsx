import type { Metadata } from "next";
import ContactSection from "@/src/components/Contact";

export const metadata: Metadata = {
  title:
    "Contato e Reservas | Fale com a Duna 360º no litoral norte do Rio Grande do Norte",
  description:
    "Entre em contato conosco para planejar sua expedição privativa, tirar dúvidas sobre roteiros e garantir sua vaga nas dunas e lagoas do litoral norte.",
  openGraph: {
    title: "Contato e Reservas | Duna 360º",
    description:
      "Fale diretamente com nossa equipe via WhatsApp e organize seu passeio de buggy em Genipabu, Pitangui e Jacumã.",
  },
};

export default function Contact() {
  return <ContactSection />;
}
