"use client";

import { useContactForm } from "@/src/hooks/useContactForm";
import { ArrowUpRight, MessageSquare } from "lucide-react";

export default function ContactForm() {
  const { state, actions } = useContactForm();

  return (
    <form
      id="formulario"
      onSubmit={actions.handleSubmit}
      className="lg:col-span-7 bg-background-alt/50 border border-border/60 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-8 scroll-mt-10"
    >
      <div className="space-y-6">
        {/* 1. Nome (Obrigatório) */}
        <div className="space-y-3">
          <label className="text-xs font-bold uppercase font-jakarta tracking-wider text-text-title block">
            1. Seu Nome <span className="text-primary">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="Como podemos chamar você?"
            value={state.name}
            onChange={(e) => actions.setName(e.target.value)}
            className="w-full bg-background border border-border/80 rounded-xl px-4 py-3.5 text-sm text-text-main font-jakarta focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        {/* 2. Quantas Pessoas */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <label className="text-xs font-bold uppercase font-jakarta tracking-wider text-text-title block">
              2. Quantas Pessoas? <span className="text-primary">*</span>
            </label>
            <span className="text-[10px] text-text-muted font-jakarta">
              Capacidade do buggy: até 4 passageiros
            </span>
          </div>
          <div className="flex items-center justify-between bg-background border border-border/80 rounded-xl px-4 py-2.5">
            <span className="text-sm font-medium text-text-main font-jakarta">
              {state.peopleCount}{" "}
              {state.peopleCount === 1 ? "Pessoa" : "Pessoas"}
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={actions.handleDecrement}
                className="w-9 h-9 rounded-lg bg-background-alt border border-border/60 flex items-center justify-center text-text-main hover:bg-border/35 transition-colors font-bold cursor-pointer"
              >
                -
              </button>
              <button
                type="button"
                onClick={actions.handleIncrement}
                className="w-9 h-9 rounded-lg bg-background-alt border border-border/60 flex items-center justify-center text-text-main hover:bg-border/35 transition-colors font-bold cursor-pointer"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* 3. Data Desejada (Obrigatório) */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <label className="text-xs font-bold uppercase font-jakarta tracking-wider text-text-title block">
              3. Data Desejada <span className="text-primary">*</span>
            </label>
            <span className="text-[10px] text-text-muted font-jakarta">
              Flexibilidade na maré
            </span>
          </div>
          <input
            type="date"
            required
            min={new Date().toISOString().split("T")[0]}
            value={state.date}
            onChange={(e) => actions.setDate(e.target.value)}
            className="w-full bg-background border border-border/80 rounded-xl px-4 py-3.5 text-sm text-text-main font-jakarta focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        {/* 4. Qual Experiência Interessa */}
        <div className="space-y-3">
          <label className="text-xs font-bold uppercase font-jakarta tracking-wider text-text-title block">
            4. Qual Experiência Interessa?{" "}
            <span className="text-primary">*</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "Genipabu", sub: "Litoral Norte" },
              { label: "Pitangui", sub: "Lagoas & Dunas" },
              { label: "Jacumã", sub: "Aerobunda & Mar" },
              { label: "Á definir", sub: "Consultoria" },
            ].map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => actions.setTourOption(item.label)}
                className={`p-3 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                  state.tourOption === item.label
                    ? "bg-accent text-background border-accent shadow-md"
                    : "bg-background text-text-muted border-border/80 hover:border-accent/40"
                }`}
              >
                <span className="text-[10px] uppercase font-jakarta opacity-85 block">
                  {item.sub}
                </span>
                <span className="text-xs font-bold font-jakarta block mt-0.5">
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* 5. Alguma Preferência (Opcional) */}
        <div className="space-y-3">
          <label className="text-xs font-bold uppercase font-jakarta tracking-wider text-text-title block">
            5. Alguma Preferência?{" "}
            <span className="text-text-muted font-normal lowercase">
              (opcional)
            </span>
          </label>
          <input
            type="text"
            placeholder="Ex.: com emoção moderada, fotos no pôr do sol"
            value={state.preference}
            onChange={(e) => actions.setPreference(e.target.value)}
            className="w-full bg-background border border-border/80 rounded-xl px-4 py-3.5 text-sm text-text-main font-jakarta focus:outline-none focus:border-primary transition-colors"
          />
        </div>
      </div>

      {/* Botão de Envio */}
      <div className="space-y-3 pt-4">
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-3 bg-accent hover:bg-primary text-background font-medium py-4 px-6 rounded-xl transition-all duration-300 shadow-sm hover:shadow text-xs sm:text-sm uppercase tracking-wider font-jakarta group cursor-pointer"
        >
          <MessageSquare className="w-4 h-4 text-primary group-hover:text-background transition-colors" />
          <span>Enviar pelo WhatsApp</span>
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>

        <p className="text-center text-[11px] text-text-muted font-jakarta">
          Suas informações serão usadas apenas para iniciar seu atendimento
          personalizado.
        </p>
      </div>
    </form>
  );
}
