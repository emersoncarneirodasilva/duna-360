interface Testimonial {
  id: number;
  stars: number;
  quote: string;
  avatarFallback: string;
  name: string;
  location: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    stars: 5,
    quote:
      "“A travessia pelas dunas ao final da tarde foi o ponto alto da nossa viagem a Natal. O cuidado e o ritmo que deram ao percurso fizeram toda a diferença.”",
    avatarFallback: "MR",
    name: "Mariana & Rodrigo",
    location: "São Paulo / SP",
  },
  {
    id: 2,
    stars: 5,
    quote:
      "“Fizemos o passeio em família com nossos dois filhos. Sensação única de liberdade com total tranquilidade e segurança.”",
    avatarFallback: "CE",
    name: "Carlos Eduardo",
    location: "Belo Horizonte / MG",
  },
  {
    id: 3,
    stars: 5,
    quote:
      "“Nada de pressa ou roteiro engessado. Conhecemos praias e lagoas quase desertas com um olhar autêntico do litoral.”",
    avatarFallback: "BA",
    name: "Beatriz Albuquerque",
    location: "Curitiba / PR",
  },
  {
    id: 4,
    stars: 5,
    quote:
      "“Experiência impecável do início ao fim. O buggy é super confortável e o roteiro pelas lagoas superou todas as nossas expectativas.”",
    avatarFallback: "FL",
    name: "Felipe Lima",
    location: "Rio de Janeiro / RJ",
  },
  {
    id: 5,
    stars: 5,
    quote:
      "“Segurança e exclusividade nota dez. Ver o pôr do sol do mirante nas dunas foi algo que jamais vamos esquecer.”",
    avatarFallback: "CP",
    name: "Camila Pinheiro",
    location: "Brasília / DF",
  },
  {
    id: 6,
    stars: 5,
    quote:
      "“Atendimento super personalizado desde o primeiro contato no WhatsApp. Vale cada centavo pela paz de espírito e paisagens incríveis.”",
    avatarFallback: "RM",
    name: "Renato Mendes",
    location: "Porto Alegre / RS",
  },
  {
    id: 7,
    stars: 5,
    quote:
      "“Levei meus pais idosos e eles amaram o cuidado redobrado e o conforto durante todo o trajeto pelas dunas móveis.”",
    avatarFallback: "JS",
    name: "Juliana Santos",
    location: "Recife / PE",
  },
  {
    id: 8,
    stars: 5,
    quote:
      "“O visual do litoral norte é indescritível. Ter um guia que conhece cada segredo da região faz toda a diferença no passeio.”",
    avatarFallback: "LV",
    name: "Lucas Vasconcelos",
    location: "Florianópolis / SC",
  },
];
