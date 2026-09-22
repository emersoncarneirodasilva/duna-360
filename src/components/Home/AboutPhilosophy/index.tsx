import Image from "next/image";
import aboutImage from "@/public/images/about-image.webp";
import { FEATURES } from "@/src/constants/features";

export default function AboutPhilosophy() {
  return (
    <section className="w-full bg-background py-24 md:py-32 overflow-hidden">
      <div className="wrapper mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Coluna Esquerda: Textos e Diferenciais */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-10">
            {/* Tag Numérica e Categoria */}
            <div className="space-y-4">
              <span className="text-xs md:text-sm font-medium font-jakarta uppercase tracking-widest text-primary block">
                01 / CONCEITO & FILOSOFIA
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-text-title leading-[1.2]">
                Mais que um passeio.{" "}
                <span className="italic font-normal text-text-detail block sm:inline mt-1 sm:mt-0">
                  Cada percurso é uma experiência.
                </span>
              </h2>
            </div>

            {/* Descrição / Copy com bom respiro */}
            <div className="space-y-5 text-sm md:text-base text-text-main leading-relaxed">
              <p>
                Dunas, praias, lagoas e paisagens que fazem parte de uma das
                costas mais marcantes do Nordeste brasileiro.
              </p>
              <p className="text-text-muted">
                Navegamos o relevo potiguar sem a urgência dos comboios
                turísticos tradicionais, priorizando paradas estratégicas,
                iluminação perfeita e silêncio diante da imensidão.
              </p>
            </div>

            {/* Grid de Ícones / Diferenciais mapeados dinamicamente */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-border">
              {FEATURES.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="space-y-2.5">
                    <div className="w-10 h-10 rounded-lg bg-background-detail flex items-center justify-center text-primary shadow-xs">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h4 className="text-xs font-bold font-jakarta uppercase tracking-wider text-text-title">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-text-muted leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Coluna Direita: Imagem com Efeito Hover e Legenda Flutuante */}
          <div className="lg:col-span-6 relative group">
            <div className="relative w-full h-120 sm:h-140 rounded-2xl overflow-hidden shadow-2xl border border-border">
              <Image
                src={aboutImage}
                alt="Turista contemplando as dunas móveis do Rio Grande do Norte"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Tag / Legenda Flutuante na Base da Imagem */}
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-accent/90 backdrop-blur-md px-5 py-3.5 rounded-xl border border-white/10 text-white shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
                <div className="flex items-center gap-3 text-xs tracking-wide font-jakarta">
                  <span className="font-semibold text-text-title-detail">
                    DUNAS MÓVEIS
                  </span>
                  <span className="inline-block w-1.25 h-1.25 rounded-full bg-orange-400"></span>
                  <span className="text-white/80">
                    Litoral Norte / Rio Grande do Norte
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
