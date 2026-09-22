"use client";

import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useGallery } from "@/src/hooks/useGallery";

const categories = [
  "TODOS",
  "BUGGY",
  "DUNAS",
  "PRAIAS",
  "LAGOAS",
  "EXPERIÊNCIAS",
];

export default function GalleryGrid() {
  const { state, actions } = useGallery();

  return (
    <div className="space-y-8">
      {/* Botões de Filtro */}
      <div className="flex flex-wrap items-center gap-2 pt-2">
        <span className="text-[10px] text-text-muted font-jakarta uppercase tracking-wider">
          Filtrar por:
        </span>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => actions.setActiveCategory(category)}
            className={`px-5 py-2.5 rounded-full text-xs font-jakarta tracking-wider uppercase transition-all duration-300 cursor-pointer ${
              state.activeCategory === category
                ? "bg-text-title text-background shadow-md"
                : "bg-background-alt text-text-muted hover:text-text-title hover:bg-border/30 border border-border/60"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid de Imagens */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4">
        {state.filteredItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => actions.handleImageClick(index)}
            className={`${item.span} relative ${item.height} rounded-2xl overflow-hidden shadow-xl border border-border/40 group cursor-pointer`}
          >
            <Image
              src={item.image}
              alt={item.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-text-title/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="absolute top-6 left-6 z-10">
              <span className="bg-background/90 backdrop-blur-xs text-text-title text-[10px] font-bold font-jakarta uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
                0{item.id} / {item.title}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Componente Lightbox para Tela Cheia */}
      <Lightbox
        open={state.isOpen}
        close={actions.handleCloseLightbox}
        index={state.currentIndex}
        slides={state.slides}
      />
    </div>
  );
}
