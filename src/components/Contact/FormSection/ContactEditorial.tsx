import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import aboutImg from "@/public/images/about-image.webp";

export default function ContactEditorial() {
  return (
    <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
      <div className="relative w-full flex-1 min-h-120 lg:min-h-135 rounded-2xl overflow-hidden shadow-lg border border-border/40 group">
        <Image
          src={aboutImg}
          alt="Expedição privativa Duna 360º"
          fill
          sizes="(max-width: 1024px) 100vw, 40vw"
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-text-title/80 via-transparent to-transparent opacity-60" />

        <div className="absolute bottom-6 left-6 right-6 text-background space-y-2">
          <span className="text-[10px] uppercase font-jakarta tracking-widest text-primary font-bold block">
            TRAVESSIA AUTORAL
          </span>
          <p className="font-serif italic text-base sm:text-lg text-background/90">
            Seu próximo horizonte começa aqui.
          </p>
          <p className="text-xs text-background/80 font-jakarta">
            Conte como será seu passeio. A gente cuida do resto com
            pontualidade, brisa marinha e segurança integral.
          </p>
        </div>
      </div>

      <div className="p-5 rounded-xl bg-background-alt border border-border/60 flex items-center gap-4 shrink-0">
        <ShieldCheck className="w-6 h-6 text-primary shrink-0" />
        <div>
          <h4 className="text-xs font-bold uppercase font-jakarta text-text-title">
            Bugueiro Credenciado SETUR
          </h4>
          <p className="text-xs text-text-muted font-jakarta">
            Guias nativos experientes e rotas seguras pelo litoral norte.
          </p>
        </div>
      </div>
    </div>
  );
}
