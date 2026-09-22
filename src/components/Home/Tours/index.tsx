import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";
import { TOURS } from "@/src/constants/tours";

export default function Tours() {
  return (
    <section className="w-full bg-background-alt py-24 md:py-32 overflow-hidden">
      <div className="wrapper mx-auto">
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="text-xs md:text-sm font-medium font-jakarta uppercase tracking-widest text-primary block">
              02 / ITINERÁRIOS EXCLUSIVOS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-text-title">
              Nossos Passeios
            </h2>
            <p className="text-sm md:text-base text-text-muted max-w-xl">
              Três dimensões da costa potiguar projetadas para diferentes níveis
              de imersão e tempo.
            </p>
          </div>

          {/* Informação adicional de embarque */}
          <div className="flex items-center gap-2 text-xs md:text-sm text-text-muted bg-background-detail px-4 py-2.5 rounded-xl border border-border self-start md:self-auto">
            <Clock className="w-4 h-4 text-primary shrink-0" />
            <span>
              Saídas diárias com embarque em Ponta Negra e Via Costeira
            </span>
          </div>
        </div>

        {/* Grid de Passeios (3 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOURS.map((tour, index) => (
            <div
              key={index}
              className="group flex flex-col bg-background-card rounded-2xl overflow-hidden border border-border shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Container da Imagem */}
              <div className="relative w-full h-70 sm:h-80 overflow-hidden bg-background-detail">
                <Image
                  src={tour.image}
                  alt={`Passeio para ${tour.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Badge de Duração Flutuante */}
                <div className="absolute top-4 left-4 bg-accent/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-white shadow-sm">
                  <span className="text-[10px] md:text-xs font-semibold font-jakarta tracking-wider uppercase">
                    DURAÇÃO: {tour.duration}
                  </span>
                </div>
              </div>

              {/* Conteúdo do Card */}
              <div className="flex flex-col grow p-6 sm:p-8 justify-between space-y-6">
                <div className="space-y-3">
                  <span className="text-[10px] md:text-xs font-bold font-jakarta tracking-widest text-primary uppercase block">
                    {tour.tag}
                  </span>
                  <h3 className="text-2xl text-text-title">{tour.title}</h3>
                  <p className="text-xs md:text-sm text-text-muted leading-relaxed">
                    {tour.description}
                  </p>
                </div>

                {/* Link "Ver Passeio" com animação na seta */}
                <div className="pt-4 border-t border-border">
                  <Link
                    href={tour.href}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-text-title group-hover:text-primary transition-colors"
                  >
                    <span>Ver Passeio</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
