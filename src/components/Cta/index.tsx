import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { ArrowRight } from "lucide-react";

interface CtaProps {
  tag: string;
  title: string;
  description: string;
  backgroundImage: StaticImageData | string;
}

export default function Cta({
  tag,
  title,
  description,
  backgroundImage,
}: CtaProps) {
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+558499999999";

  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de planejar um passeio de buggy com a Duna 360º.",
  );

  return (
    <section className="relative w-full py-28 md:py-36 overflow-hidden bg-text-title text-background">
      {/* Imagem de Fundo Dinâmica com Overlay Escuro */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover object-center opacity-40 scale-105 transition-transform duration-1000"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-r from-text-title/95 via-text-title/80 to-text-title/60 z-10" />
      </div>

      <div className="wrapper relative z-20 mx-auto px-4">
        <div className="max-w-3xl space-y-6">
          {/* Tag Superior Dinâmica */}
          <span className="text-xs md:text-sm font-medium font-jakarta uppercase tracking-widest text-primary block">
            {tag}
          </span>

          {/* Título Principal Dinâmico */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] text-background">
            {title}
          </h2>

          {/* Subtítulo Descritivo Dinâmico */}
          <p className="text-sm md:text-base text-background/80 leading-relaxed max-w-xl">
            {description}
          </p>

          {/* Botão de Ação / CTA */}
          <div className="pt-4">
            <Link
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-dark text-white font-medium px-8 py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg group"
            >
              <span>PLANEJAR MEU PASSEIO</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
