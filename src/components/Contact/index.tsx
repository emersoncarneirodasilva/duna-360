import Hero from "./Hero";
import ContactEditorial from "./FormSection/ContactEditorial";
import ContactForm from "./FormSection/ContactForm";

export default function ContactSection() {
  return (
    <section className="w-full py-24 md:py-32 bg-background text-text-main">
      <div className="wrapper space-y-16">
        {/* Cabeçalho Padrão Consistente com as Outras Páginas */}
        <Hero />

        {/* Layout de Duas Colunas (Editorial à Esquerda + Construtor à Direita) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          <ContactEditorial />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
