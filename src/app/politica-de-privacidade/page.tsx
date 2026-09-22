import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Conheça a política de privacidade da Duna 360º e saiba como tratamos os seus dados com segurança e transparência.",
};

export default function PrivacyPolicyPage() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="w-full bg-background py-16 md:py-24 text-text-main">
      <div className="wrapper space-y-12">
        {/* Cabeçalho da Página */}
        <div className="space-y-3 border-b border-border pb-8">
          <span className="text-xs md:text-sm font-bold font-jakarta uppercase tracking-widest text-primary">
            Legal & Transparência
          </span>
          <h1 className="text-3xl md:text-5xl font-bold font-serif text-text-title">
            Política de Privacidade
          </h1>
          <p className="text-sm md:text-base text-text-muted">
            Última atualização: {currentYear}
          </p>
        </div>

        {/* Conteúdo da Política */}
        <div className="space-y-10 text-base text-text-main leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold font-jakarta text-text-title">
              1. Introdução
            </h2>
            <p>
              A <strong>Duna 360º</strong> valoriza a sua privacidade e o
              compromisso com a transparência. Esta Política de Privacidade
              descreve como coletamos, usamos e protegemos as suas informações
              pessoais quando você utiliza o nosso site ou entra em contato
              conosco para agendar passeios e expedições.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold font-jakarta text-text-title">
              2. Coleta de Informações
            </h2>
            <p>
              Podemos coletar informações pessoais que você nos fornece
              diretamente ao interagir conosco, tais como:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-text-muted">
              <li>
                Nome completo e dados de contato (como telefone/WhatsApp e
                e-mail);
              </li>
              <li>
                Informações necessárias para o planejamento e personalização dos
                passeios de buggy;
              </li>
              <li>
                Mensagens e preferências enviadas através dos nossos canais de
                atendimento.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold font-jakarta text-text-title">
              3. Uso das Informações
            </h2>
            <p>
              As informações coletadas são utilizadas exclusivamente para os
              seguintes propósitos:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-text-muted">
              <li>
                Organizar, confirmar e prestar os serviços de passeios e
                expedições contratados;
              </li>
              <li>
                Responder a dúvidas, solicitações e prestar suporte via WhatsApp
                ou outros canais;
              </li>
              <li>
                Melhorar a experiência do usuário em nosso site e otimizar
                nossos serviços.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold font-jakarta text-text-title">
              4. Compartilhamento de Dados
            </h2>
            <p>
              Nós não vendemos, alugamos ou repassamos as suas informações
              pessoais para terceiros. O compartilhamento ocorre apenas quando
              estritamente necessário para a execução do serviço contratado ou
              por exigência legal.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold font-jakarta text-text-title">
              5. Segurança das Informações
            </h2>
            <p>
              Adotamos medidas de segurança adequadas para proteger os seus
              dados contra acesso não autorizado, alteração, divulgação ou
              destruição. No entanto, lembre-se de que nenhum sistema de
              transmissão pela internet é 100% seguro.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold font-jakarta text-text-title">
              6. Contato
            </h2>
            <p>
              Caso tenha dúvidas sobre esta Política de Privacidade ou sobre
              como tratamos os seus dados, entre em contato conosco através da
              nossa página de{" "}
              <Link
                href="/contato"
                className="text-primary font-semibold hover:underline"
              >
                Contato
              </Link>{" "}
              ou diretamente pelo nosso WhatsApp oficial.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
