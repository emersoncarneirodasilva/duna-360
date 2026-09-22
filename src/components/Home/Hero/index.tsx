import Image from "next/image";
import Link from "next/link";
import heroImage from "@/public/images/home-hero.webp";

export default function Hero() {
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+558499999999";
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de planejar um passeio de buggy com a Duna 360º.",
  );

  return (
    <section className="relative w-full h-[90vh] min-h-150 flex items-center justify-center overflow-hidden">
      {/* Imagem de Fundo & Overlay com a cor Accent (Azul Escuro da Paleta) */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Duna 360º - Expedições de Buggy no Litoral Potiguar"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Gradiente customizado utilizando o tom accent/azul escuro */}
        <div className="absolute inset-0 bg-linear-to-r from-accent/90 via-accent/60 to-accent/30" />
      </div>

      {/* Coordenadas Geográficas (Genipabu) */}
      <div className="wrapper absolute top-28 right-6 md:right-12 z-10 hidden sm:block text-right">
        <span className="block text-[10px] font-jakarta tracking-[1.8] uppercase text-text-title-detail">
          COORDENADAS POTIGUARES
        </span>
        <span className="text-xs font-mono tracking-wider text-white/90">
          05°42'12" S / 35°11'43" W
        </span>
      </div>

      {/* Conteúdo Principal */}
      <div className="wrapper relative z-10 w-full pt-20">
        <div className="max-w-2xl space-y-6">
          {/* Subtítulo / Tag */}
          <span className="inline-block text-xs md:text-sm font-jakarta uppercase tracking-widest text-primary">
            Expedições & Buggy Natal
          </span>

          {/* Título Principal */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1]">
            Você não visita apenas o litoral.{" "}
            <span className="italic font-normal text-text-title-detail">
              Você atravessa o litoral.
            </span>
          </h1>

          {/* Descrição */}
          <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-xl">
            Experiências de buggy pelas dunas, praias e lagoas do litoral
            potiguar. Curadoria de tempo, segurança e contemplação autêntica.
          </p>

          {/* Botões de Ação */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <Link
              href="/passeios"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-primary text-white font-semibold font-jakarta text-xs uppercase tracking-wider hover:bg-primary/90 transition-colors shadow-lg"
            >
              Conheça Nossos Passeios
            </Link>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold font-jakarta text-xs uppercase tracking-wider backdrop-blur-sm transition-colors border border-white/20"
            >
              Iniciar meu planejamento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
