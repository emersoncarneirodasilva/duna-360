import Image from "next/image";
import heroImage from "@/public/images/ride-hero-image.webp";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] min-h-150 flex items-center justify-center overflow-hidden bg-text-title text-background">
      {/* Imagem de Fundo com Overlay Escuro para Contraste Editorial */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Expedições autorais no litoral potiguar"
          fill
          className="object-cover object-center opacity-50 scale-105 transition-transform duration-1000"
          priority
        />
        {/* Gradiente escuro para garantir leitura perfeita da tipografia */}
        <div className="absolute inset-0 bg-linear-to-t from-text-title via-text-title/60 to-text-title/30 z-10" />
      </div>

      <div className="wrapper relative z-20 w-full mx-auto px-4">
        <div className="max-w-4xl space-y-6">
          {/* Tag Superior */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/10 backdrop-blur-md border border-background/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium font-jakarta uppercase tracking-widest text-text-title-detail">
              EXPEDIÇÕES AUTORAIS · LITORAL POTIGUAR
            </span>
          </div>

          {/* Título Principal com Estética Editorial */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium font-serif leading-[1.08] text-background">
            Explore o litoral potiguar <br />
            <span className="italic font-normal text-text-title-detail">
              de buggy.
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-base sm:text-lg text-background/50 font-jakarta max-w-xl leading-relaxed">
            Escolha seu roteiro e descubra uma nova forma de conhecer o litoral.
          </p>

          {/* Rodapé Interno da Hero (Localização e Detalhes) */}
          <div className="pt-8 mt-8 border-t border-background/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs sm:text-sm text-background/70 font-jakarta">
            <div className="space-y-1">
              <span className="uppercase tracking-wider text-[10px] text-primary font-bold block">
                NATAL, BRASIL · PRAIA DE GENIPABU
              </span>
              <p className="font-serif italic text-background/90 text-sm sm:text-base">
                &ldquo;Entre a cadência dos ventos alísios e a vastidão intocada
                das dunas, redescubra o tempo, a quietude e o privilégio da
                travessia.&rdquo;
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-2 pt-2 sm:pt-0">
              <Link
                href="/passeios#tour"
                className="px-3 py-1 rounded-md bg-background/10 backdrop-blur-sm border border-background/15 font-medium text-xs text-text-title-detail tracking-wide"
              >
                3 EXPEDIÇÕES EXCLUSIVAS ↓
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
