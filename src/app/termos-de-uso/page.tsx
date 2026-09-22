import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Consulte os termos e condições de uso dos serviços e do site da Duna 360º, incluindo diretrizes para agendamento de passeios de buggy.",
};

export default function TermsOfUsePage() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="w-full bg-background py-16 md:py-24 text-text-main">
      <div className="wrapper space-y-12">
        {/* Cabeçalho da Página */}
        <div className="space-y-3 border-b border-border pb-8">
          <span className="text-xs md:text-sm font-bold font-jakarta uppercase tracking-widest text-primary">
            Legal & Condições
          </span>
          <h1 className="text-3xl md:text-5xl font-bold font-serif text-text-title">
            Termos de Uso
          </h1>
          <p className="text-sm md:text-base text-text-muted">
            Última atualização: {currentYear}
          </p>
        </div>

        {/* Conteúdo dos Termos */}
        <div className="space-y-10 text-base text-text-main leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold font-jakarta text-text-title">
              1. Aceitação dos Termos
            </h2>
            <p>
              Ao acessar e utilizar o site da <strong>Duna 360º</strong>, bem
              como ao contratar nossos serviços de expedições e passeios de
              buggy, você concorda expressamente em cumprir e estar vinculado
              aos presentes Termos de Uso. Caso não concorde com qualquer parte
              destes termos, recomendamos que não utilize nossos canais ou
              serviços.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold font-jakarta text-text-title">
              2. Serviços e Agendamentos
            </h2>
            <p>
              A Duna 360º oferece passeios de buggy e expedições turísticas
              credenciadas no litoral do Rio Grande do Norte. Sobre as reservas:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-text-muted">
              <li>
                Os agendamentos são realizados mediante contato prévio e
                confirmação através dos nossos canais oficiais de atendimento
                (como o WhatsApp);
              </li>
              <li>
                As condições climáticas e normas ambientais locais podem
                influenciar diretamente os roteiros, priorizando sempre a
                segurança dos passageiros;
              </li>
              <li>
                Alterações de datas ou cancelamentos devem ser comunicados com
                antecedência conforme as diretrizes alinhadas no momento da
                reserva.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold font-jakarta text-text-title">
              3. Responsabilidades do Usuário
            </h2>
            <p>
              Ao participar das expedições e navegar pelo site, o usuário
              compromete-se a:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-text-muted">
              <li>
                Fornecer informações verdadeiras, completas e atualizadas no
                momento do contato e da reserva;
              </li>
              <li>
                Seguir estritamente todas as normas de segurança repassadas pelo
                condutor/bugueiro durante o passeio;
              </li>
              <li>
                Respeitar o meio ambiente, as dunas, as falésias e as
                legislações locais de preservação durante as paradas e o
                trajeto.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold font-jakarta text-text-title">
              4. Propriedade Intelectual
            </h2>
            <p>
              Todo o conteúdo disponível neste site — incluindo textos,
              logotipos, marcas, imagens, fotografias da galeria e códigos
              visuais — é de propriedade exclusiva da Duna 360º ou licenciado
              para uso, sendo protegido pelas leis de direitos autorais e
              propriedade intelectual. A reprodução sem autorização prévia é
              proibida.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold font-jakarta text-text-title">
              5. Limitação de Responsabilidade
            </h2>
            <p>
              A Duna 360º não se responsabiliza por instabilidades técnicas
              temporárias no site ou por eventuais falhas de conexão de internet
              de terceiros. Em relação aos passeios, seguimos rigorosamente as
              credenciais e padrões de segurança exigidos para garantir uma
              experiência tranquila e memorável.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold font-jakarta text-text-title">
              6. Contato e Esclarecimentos
            </h2>
            <p>
              Se houver qualquer dúvida sobre estes Termos de Uso, você pode
              falar diretamente com nossa equipe através da página de{" "}
              <Link
                href="/contato"
                className="text-primary font-semibold hover:underline"
              >
                Contato
              </Link>{" "}
              ou pelos nossos canais de atendimento oficiais.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
