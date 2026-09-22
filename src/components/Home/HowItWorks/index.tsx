import { WORK_FLOW_STEPS } from "@/src/constants/workflowSteps";

export default function HowItWorks() {
  return (
    <section className="w-full bg-background-alt py-24 md:py-32 overflow-hidden">
      <div className="wrapper mx-auto">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs md:text-sm font-medium uppercase tracking-widest text-primary block">
            06 / FLUXO DE ATENDIMENTO
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-text-title leading-[1.2]">
            Como Funciona
          </h2>
          <p className="text-sm md:text-base text-text-muted pt-2">
            Três passos diretos e sem burocracia para desenhar seu dia no
            litoral.
          </p>
        </div>

        {/* Grid de 3 Colunas com os Passos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {WORK_FLOW_STEPS.map((step, index) => (
            <div
              key={index}
              className="group flex flex-col justify-between bg-background-card p-8 md:p-10 rounded-2xl border border-border shadow-xs hover:shadow-md transition-all duration-300"
            >
              <div className="space-y-6">
                {/* Numeração Gigante em Destaque */}
                <span className="text-4xl md:text-5xl font-serif text-primary block">
                  {step.number}
                </span>

                {/* Título e Descrição */}
                <div className="space-y-3">
                  <h3 className="text-xl text-text-title tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-xs md:text-sm text-text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
