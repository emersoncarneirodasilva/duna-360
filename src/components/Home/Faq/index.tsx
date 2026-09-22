"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/src/constants/faqItems";

export default function Faq() {
  // Começa com o índice 0 (a primeira pergunta) aberto por padrão
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    // Se clicar na que já está aberta, fecha (ou mantém aberta se preferir. Aqui fecha ao re-clicar ou alterna)
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-background py-24 md:py-32 overflow-hidden">
      <div className="wrapper max-w-4xl mx-auto px-4">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs md:text-sm font-medium font-jakarta uppercase tracking-widest text-primary block">
            07 / PERGUNTAS FREQUENTES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-text-title leading-[1.2]">
            Dúvidas Frequentes
          </h2>
          <p className="text-sm md:text-base text-text-muted pt-2">
            Transparência e clareza sobre tudo o que envolve as expedições de
            buggy em Natal.
          </p>
        </div>

        {/* Lista de Acordeões com Estado Controlado */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`group bg-background-alt border rounded-2xl p-6 transition-all duration-300 ${
                  isOpen ? "border-primary/50 shadow-sm" : "border-border"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between text-left cursor-pointer list-none text-text-title font-serif text-lg md:text-xl font-medium select-none"
                >
                  <span>{item.question}</span>
                  <span
                    className={`w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center text-primary transition-transform duration-300 shrink-0 ml-4 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {/* Conteúdo com animação suave de altura */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 pt-4 mt-4 border-t border-border"
                      : "grid-rows-[0fr] opacity-0 overflow-hidden"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm md:text-base text-text-muted leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
