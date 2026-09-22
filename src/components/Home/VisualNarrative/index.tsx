import Image from "next/image";
import Link from "next/link";
import { GALLERY_ITEMS } from "@/src/constants/galleryItems";

export default function VisualNarrative() {
  return (
    <section className="w-full bg-background-alt py-24 md:py-32 overflow-hidden">
      <div className="wrapper mx-auto">
        {/* Cabeçalho da Seção com Título e Link para Galeria */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="text-xs md:text-sm font-medium font-jakarta uppercase tracking-widest text-primary block">
              04 / NARRATIVA VISUAL
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-text-title">
              Fragmentos da Costa Potiguar
            </h2>
          </div>

          <Link
            href="/galeria"
            className="inline-flex items-center gap-2 text-xs md:text-sm font-bold font-jakarta uppercase tracking-wider text-text-title hover:text-primary transition-colors self-start md:self-auto group"
          >
            <span>VER TODA A GALERIA</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Grid Assimétrico Profissional e Alinhado */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={index}
              className={`${item.gridSpan} group relative rounded-2xl overflow-hidden bg-background border border-border shadow-md hover:shadow-xl transition-all duration-500`}
            >
              {/* Altura fixa rigorosa (ex: 380px no mobile, 420px em telas maiores) para manter o padrão editorial */}
              <div className="relative w-full h-85 sm:h-100 lg:h-105 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Gradiente sutil para destacar a tag sobre a imagem */}
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />

                {/* Tag Flutuante na Base da Imagem */}
                <div className="absolute bottom-5 left-5 bg-accent/90 backdrop-blur-md px-3.5 py-2 rounded-lg border border-white/10 text-white shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
                  <span className="text-[10px] md:text-xs font-semibold font-jakarta tracking-wider uppercase text-text-title-detail">
                    {item.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
