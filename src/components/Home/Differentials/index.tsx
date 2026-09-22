import { DIFFERENTIAL } from "@/src/constants/differentials";

export default function Differentials() {
  return (
    <section className="w-full bg-background py-24 md:py-32 overflow-hidden">
      <div className="wrapper mx-auto">
        {/* Cabeçalho da Seção */}
        <div className="mb-16 max-w-2xl space-y-3">
          <span className="text-xs md:text-sm font-medium font-jakarta uppercase tracking-widest text-primary block">
            03 / A ASSINATURA DUNA 360º
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-text-title leading-[1.2]">
            Diferenciais pensados para o seu ritmo
          </h2>
        </div>

        {/* Grid de 4 Colunas com os Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {DIFFERENTIAL.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="group flex flex-col justify-between bg-background-alt p-8 rounded-2xl border border-border shadow-xs hover:shadow-md transition-all duration-300"
              >
                <div className="space-y-6">
                  {/* Ícone com fundo destacado */}
                  <div className="w-12 h-12 rounded-xl bg-accent text-white flex items-center justify-center shadow-sm">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Textos do Card */}
                  <div className="space-y-3">
                    <h3 className="text-xl text-text-title">{item.title}</h3>
                    <p className="text-xs md:text-sm text-text-muted leading-relaxed">
                      {item.description}
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
