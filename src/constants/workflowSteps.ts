interface Step {
  number: string;
  title: string;
  description: string;
}

export const WORK_FLOW_STEPS: Step[] = [
  {
    number: "01",
    title: "Escolha seu passeio",
    description:
      "Conheça os roteiros autorais (Genipabu, Pitangui ou Jacumã) e encontre a experiência que mais combina com você.",
  },
  {
    number: "02",
    title: "Planeje sua experiência",
    description:
      "Conte para a Duna 360º um pouco sobre seu grupo, suas preferências e as datas pretendidas da sua estada em Natal.",
  },
  {
    number: "03",
    title: "Viva o litoral",
    description:
      "Continue o atendimento direto pelo WhatsApp com nosso concierge, confirme o horário e receba o buggy no seu hotel.",
  },
];
