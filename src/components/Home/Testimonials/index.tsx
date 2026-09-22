"use client";

import { useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/src/constants/testimonials";

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Função para rolar para a esquerda ou direita baseada na largura de um card
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth > 768 ? clientWidth / 3 : clientWidth; // Rola 1 card no mobile ou 3 no desktop

      scrollRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full bg-background py-24 md:py-32 overflow-hidden">
      <div className="wrapper mx-auto">
        {/* Cabeçalho da Seção com os Botões */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs md:text-sm font-medium font-jakarta uppercase tracking-widest text-primary block">
              05 / DEPOIMENTOS REAIS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-text-title leading-[1.2]">
              A voz de quem cruzou as dunas
            </h2>
          </div>

          {/* Botões de Controle Nativos */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              aria-label="Depoimento anterior"
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-text-title hover:bg-background-alt hover:border-primary transition-all duration-300 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Próximo depoimento"
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-text-title hover:bg-background-alt hover:border-primary transition-all duration-300 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Container com Rolagem Nativa e Scroll-Snap */}
        <div
          ref={scrollRef}
          className="flex gap-6 md:gap-8 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="flex-[0_0_100%] md:flex-[0_0_calc(50%-16px)] lg:flex-[0_0_calc(33.333%-21px)] min-w-0 snap-start"
            >
              <div className="h-full group flex flex-col justify-between bg-background-alt p-8 rounded-2xl border border-border shadow-xs hover:shadow-md transition-all duration-300">
                <div className="space-y-6">
                  {/* Estrelas */}
                  <div className="flex items-center gap-0.5 text-primary">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary" />
                    ))}
                  </div>

                  {/* Citação */}
                  <blockquote className="text-sm md:text-base text-text-muted italic leading-relaxed">
                    {item.quote}
                  </blockquote>
                </div>

                {/* Rodapé do Card */}
                <div className="flex items-center gap-4 mt-8 pt-6 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-text-title text-background font-bold flex items-center justify-center text-sm uppercase shadow-inner">
                    {item.avatarFallback}
                  </div>
                  <div>
                    <h4 className="text-sm font-jakarta font-semibold text-text-title">
                      {item.name}
                    </h4>
                    <p className="text-xs text-text-muted">{item.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
