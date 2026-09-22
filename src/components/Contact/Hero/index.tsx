export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border/40 pb-8">
      <div className="space-y-4 max-w-2xl">
        <span className="text-xs font-semibold font-jakarta uppercase tracking-widest text-primary block">
          — ATENDIMENTO SOB MEDIDA
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium font-serif text-text-title">
          Planeje seu passeio
        </h1>
        <p className="text-sm md:text-base text-text-muted font-jakarta leading-relaxed">
          Leva menos de um minuto. Preencha os campos abaixo para iniciar a
          conversa direta no WhatsApp.
        </p>
      </div>

      <div className="text-right hidden md:block">
        <span className="text-[10px] font-jakarta uppercase tracking-widest text-primary block">
          RESPOSTA IMEDIATA
        </span>
        <span className="text-xs font-mono text-text-title font-medium">
          05° 47.7&apos; S, 35° 12.5&apos; W — Natal, RN
        </span>
      </div>
    </div>
  );
}
