import Image from "next/image";
import Link from "next/link";
import { Clock, Users, ArrowRight, ShieldCheck } from "lucide-react";
import { TOURS_DATA } from "@/src/constants/toursData";

export default function ToursList() {
  return (
    <section
      id="tour"
      className="w-full py-24 md:py-32 bg-background text-text-main -scroll-mt-16 sm:-scroll-mt-24"
    >
      <div className="wrapper space-y-28 md:space-y-36">
        {TOURS_DATA.map((tour, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={tour.id}
              id={tour.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch scroll-mt-6 ${
                !isEven ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Coluna de Conteúdo (Texto) */}
              <div
                className={`space-y-6 lg:col-span-6 flex flex-col justify-between ${
                  !isEven ? "lg:col-start-7" : "lg:col-start-1"
                }`}
              >
                <div className="space-y-6">
                  {/* Tag Superior */}
                  <span className="text-xs font-semibold font-jakarta uppercase tracking-widest text-primary block">
                    {tour.tag}
                  </span>

                  {/* Título Principal */}
                  <div className="space-y-2">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium font-serif leading-[1.1] text-text-title">
                      {tour.title.split("—")[0]} —{" "}
                      <span className="italic font-normal">
                        {tour.title.split("—")[1]}
                      </span>
                    </h2>
                  </div>

                  {/* Descrição */}
                  <p className="text-sm md:text-base text-text-muted leading-relaxed font-jakarta">
                    {tour.description}
                  </p>

                  {/* Especificações Técnicas */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
                    <div className="p-4 rounded-xl bg-background-alt border border-border/60 space-y-1">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase font-jakarta text-text-title">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>Duração Estimada</span>
                      </div>
                      <p className="text-sm font-medium text-text-main font-jakarta">
                        {tour.duration}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-background-alt border border-border/60 space-y-1">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase font-jakarta text-text-title">
                        <Users className="w-4 h-4 text-primary" />
                        <span>Perfil Sugerido</span>
                      </div>
                      <p className="text-sm font-medium text-text-main font-jakarta">
                        {tour.targetAudience}
                      </p>
                    </div>
                  </div>

                  {/* Principais Pontos de Passagem */}
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-bold font-jakarta uppercase tracking-wider text-text-title">
                      Principais Pontos de Passagem
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-text-muted">
                      {tour.waypoints.map((point, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Ações / Rodapé do Card */}
                <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <Link
                    href="/contato#formulario"
                    className="inline-flex items-center justify-center gap-3 bg-text-title hover:bg-primary text-background font-medium px-7 py-3.5 rounded-xl transition-all duration-300 shadow-sm hover:shadow group text-xs sm:text-sm uppercase tracking-wider font-jakarta"
                  >
                    <span>Planejar este Roteiro</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>

                  <div className="flex items-center gap-2 text-xs text-text-muted font-jakarta">
                    <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                    <span>Bugueiro credenciado SETUR</span>
                  </div>
                </div>
              </div>

              {/* Coluna de Imagem Editorial com Efeito Visual */}
              <div
                className={`lg:col-span-6 flex ${
                  !isEven ? "lg:col-start-1" : "lg:col-start-7"
                }`}
              >
                <div className="relative w-full h-112.5 sm:h-130 lg:h-full min-h-125 rounded-2xl overflow-hidden shadow-xl border border-border/40 group">
                  <Image
                    src={tour.image}
                    alt={tour.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradiente sutil na parte inferior da foto */}
                  <div className="absolute inset-0 bg-linear-to-t from-text-title/80 via-transparent to-transparent opacity-60" />

                  <div className="absolute bottom-6 left-6 right-6 text-background">
                    <span className="text-[10px] uppercase font-jakarta tracking-widest text-primary font-bold block mb-1">
                      EXPEDIÇÃO PRIVATIVA
                    </span>
                    <p className="font-serif italic text-sm sm:text-base text-background/90">
                      {tour.quote}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
