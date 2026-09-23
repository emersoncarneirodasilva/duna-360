import Link from "next/link";
import { Compass, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="w-full min-h-[95vh] flex items-center justify-center bg-background text-text-main py-24 px-6">
      <div className="wrapper max-w-2xl text-center space-y-8">
        {/* Tag Editorial Superior */}
        <div className="inline-flex items-center gap-2 bg-background-alt border border-border/60 px-4 py-2 rounded-full shadow-sm">
          <Compass className="w-4 h-4 text-primary animate-spin-slow" />
          <span className="text-xs font-jakarta uppercase tracking-widest text-primary font-semibold">
            Erro 404 — Rota Inexistente
          </span>
        </div>

        {/* Título Principal Editorial */}
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium font-serif text-text-title leading-tight">
            Você saiu da trilha
          </h1>
          <p className="text-sm md:text-base text-text-muted font-jakarta leading-relaxed max-w-lg mx-auto">
            A duna ou a página que você está procurando pode ter mudado de lugar
            ou não existe no mapa do nosso litoral norte.
          </p>
        </div>

        {/* Coordenadas Decorativas */}
        <div className="py-2">
          <span className="text-[10px] font-jakarta uppercase tracking-widest text-text-muted/60 block mb-1">
            COORDENADAS PERDIDAS
          </span>
          <span className="text-xs font-mono text-text-title/80">
            ?° ??.?' S, ?° ??.?' W — Fora de Rota
          </span>
        </div>

        {/* Botões de Ação para Retomar o Caminho */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-text-title text-background hover:bg-text-title/90 px-8 py-3.5 rounded-full text-xs font-jakarta font-medium tracking-wider uppercase transition-all duration-300 shadow-md"
          >
            <Home className="w-4 h-4" />
            Voltar ao Início
          </Link>

          <Link
            href="/passeios"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-background-alt text-text-title hover:bg-border/30 border border-border/60 px-8 py-3.5 rounded-full text-xs font-jakarta font-medium tracking-wider uppercase transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Ver Nossos Passeios
          </Link>
        </div>
      </div>
    </main>
  );
}
