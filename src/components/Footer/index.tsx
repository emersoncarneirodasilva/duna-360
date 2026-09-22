import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import logo from "@/public/images/logo.webp";
import { NAV_LINKS } from "@/src/constants/navLinks";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+558499999999";
  const whatsappFormattedNumber =
    process.env.NEXT_PUBLIC_PHONE_NUMBER || "(84) 99999-9999";
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de planejar um passeio de buggy com a Duna 360º.",
  );
  const instagramUrl = "https://instagram.com";

  return (
    <footer className="bg-background-footer border-t border-border pt-16 pb-8 transition-all">
      <div className="wrapper">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pb-12 border-b border-border">
          {/* Coluna 1: Logo e Slogan */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center group py-1">
              <div className="relative w-60 h-10 flex items-center">
                <Image
                  src={logo}
                  alt="Duna 360º - Passeios de Buggy Natal"
                  fill
                  sizes="160px"
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="font-serif italic text-text-title text-base">
              &ldquo;Você não visita apenas o litoral. Você atravessa o
              litoral.&rdquo;
            </p>
            <p className="text-xs text-text-muted leading-relaxed">
              Explore as dunas douradas e falésias do Rio Grande do Norte em
              expedições de buggy credenciadas, com foco absoluto em conforto,
              segurança e exclusividade.
            </p>
          </div>

          {/* Coluna 2: Navegação Simplificada (Usando a constante compartilhada) */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold font-jakarta uppercase tracking-widest text-text-title">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-text-main hover:text-primary font-semibold uppercase tracking-wider transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Concierge & Localização */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold font-jakarta uppercase tracking-widest text-text-title">
              Concierge & Localização
            </h4>
            <ul className="space-y-3 text-xs text-text-muted">
              <li>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 group transition-colors hover:text-primary"
                >
                  <svg
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="text-primary shrink-0"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <span>{whatsappFormattedNumber}</span>
                </a>
              </li>
              <li>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 group transition-colors hover:text-primary"
                >
                  <svg
                    className="w-4 h-4 text-primary shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span>@duna360natal</span>
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span>Ponta Negra e Via Costeira — Natal/RN</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Rodapé Inferior */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>
            &copy; {currentYear} DUNA 360º Passeios de Buggy. Todos os direitos
            reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/politica-de-privacidade"
              className="hover:text-primary transition-colors"
            >
              Política de Privacidade
            </Link>
            <Link
              href="/termos-de-uso"
              className="hover:text-primary transition-colors"
            >
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
