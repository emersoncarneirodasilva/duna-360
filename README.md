# 🏜️ Duna 360º | Expedições Privativas & Passeios de Buggy (Litoral Norte - RN)

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-16.3.5-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19.2.8-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.0-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Status-Concluído-success?style=for-the-badge" alt="Status" />
</div>

<br>

> Uma aplicação web moderna, imersiva e de alta conversão desenvolvida como **projeto conceitual/fictício** para serviços de turismo de alto padrão. O **Duna 360º** simula uma operação especializada em expedições privativas de buggy pelas dunas, lagoas e praias do litoral norte do Rio Grande do Norte (Genipabu, Pitangui e Jacumã). Este projeto faz parte do portfólio oficial da **RAM Stack**, demonstrando o padrão de excelência em soluções digitais para negócios locais.

---

## 🌐 Acesse o Projeto
* **URL de Produção:** [https://duna-360.pages.dev](https://duna-360.pages.dev)

---

## 📋 Sobre o Projeto

O **Duna 360º** foi arquitetado para transmitir a grandiosidade e a liberdade das paisagens potiguares através de um design editorial sofisticado. A plataforma une uma interface limpa e elegante a um sistema inteligente de agendamento que direciona o cliente diretamente para o atendimento via WhatsApp, garantindo uma experiência de usuário (UX) fluida, rápida e sem atritos.

---

## 🎯 Objetivos do Projeto

* **Presença Digital Premium:** Consolidar a marca com uma identidade visual imersiva, tipografia refinada e paleta de cores inspirada no cenário de dunas e sol.
* **Conversão Direta via WhatsApp:** Formulário interativo inteligente que valida dados, calcula pax e formata mensagens automáticas personalizadas para o atendimento.
* **Galeria Imersiva com Lightbox:** Exibição fotográfica de alta qualidade com suporte a zoom em tela cheia e filtragem dinâmica por categorias.
* **SEO Local Otimizado:** Metadados estruturados para posicionar o serviço nas buscas por turismo e passeios de buggy em Natal e região.

---

## 📄 Detalhamento das Páginas e Rotas

A arquitetura utiliza o **Next.js App Router**, garantindo performance de renderização e organização modular:

1. **Página Inicial (`/`)**: Apresentação visual de impacto, valores da marca, destaques dos roteiros e chamadas para ação (*CTAs*).
2. **Passeios (`/passeios`)**: Exibição detalhada das expedições privativas disponíveis, com especificações de duração, trajeto e atrativos.
3. **Galeria (`/galeria`)**: Acervo fotográfico categorizado (Buggy, Dunas, Praias, Lagoas e Experiências) integrado com visualizador de tela cheia (*Lightbox*).
4. **Contato (`/contato`)**: Central de atendimento com seletor de passageiros, escolha de roteiro, datas e feedback visual em tempo real via *Sonner*.
5. **Termos de Uso (`/termos`)**: Diretrizes institucionais, regras de agendamento e políticas de remarcação.
6. **Política de Privacidade (`/privacidade`)**: Transparência absoluta no tratamento de dados dos usuários.

---

## ✨ Recursos Principais

* **Custom Hooks Modularizados:** Lógica de formulários e estados da galeria isolados para manter os componentes focados puramente na interface.
* **Lightbox Interativo:** Navegação contínua por imagens em tela cheia utilizando `yet-another-react-lightbox`.
* **Notificações Toast (Sonner):** Feedback visual elegante ("Expedição em rota!") ao submeter reservas.
* **Responsividade Completa:** Layout adaptado milimetricamente para dispositivos móveis, tablets e desktops.

---

## 🛠️ Stack Tecnológico (RAM Stack / Modern Web)

* **Framework:** Next.js 16+ (App Router)
* **Biblioteca UI:** React 19
* **Linguagem:** TypeScript
* **Estilização:** Tailwind CSS v4 (`@tailwindcss/postcss`)
* **Ícones:** Lucide React
* **Galeria/Zoom:** Yet Another React Lightbox
* **Notificações:** Sonner
* **Hospedagem:** Cloudflare Pages

---

## 📁 Estrutura do Arquitetura

```text
duna-360/
├── public/
│   └── images/            # Ativos visuais e fotografias otimizadas
├── src/
│   ├── app/
│   │   ├── contato/       # Página de Contato e Reservas
│   │   ├── galeria/       # Página de Galeria Fotográfica
│   │   ├── privacidade/   # Política de Privacidade
│   │   ├── termos/        # Termos de Uso
│   │   ├── layout.tsx     # Layout raiz, fontes e metadados SEO globais
│   │   ├── page.tsx       # Página principal (Home)
│   │   └── globals.css    # Estilos globais e variáveis do Tailwind v4
│   ├── components/
│   │   ├── Contact/       # Seção e formulário de contato
│   │   ├── Gallery/       # Componentes de cabeçalho e grid da galeria
│   │   ├── Header.tsx     # Navegação principal
│   │   └── Footer.tsx     # Rodapé institucional
│   ├── hooks/
│   │   ├── useContactForm.ts # Lógica de estado e disparo do WhatsApp
│   │   └── useGallery.ts     # Lógica de filtros e controle do Lightbox
│   └── constants/
│       └── galleryImages.ts  # Array de dados das fotos da galeria
├── package.json
├── tsconfig.json
└── README.md

```

---

## 📦 Dependências do Projeto (`package.json`)

```json
{
  "name": "duna-360",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "lucide-react": "^1.46.0",
    "next": "16.3.5",
    "react": "19.2.8",
    "react-dom": "19.2.8",
    "sonner": "^2.0.8",
    "yet-another-react-lightbox": "^3.32.2"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.3.5",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}

```

---

## 🚀 Como Executar o Projeto Localmente

Certifique-se de ter o **Node.js** (versão 20+) instalado em sua máquina.

1. **Clone o repositório:**

```bash
git clone https://github.com/emersoncarneirodasilva/duna-360.git
cd duna-360

```

2. **Instale as dependências:**

```bash
npm install

```

3. **Inicie o servidor de desenvolvimento:**

```bash
npm run dev

```

4. **Acesse no navegador:**
Abra [http://localhost:3000](http://localhost:3000?utm_source=gemini) para interagir com a aplicação.

---

## 📚 Scripts Disponíveis

| Script | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor local de desenvolvimento. |
| `npm run build` | Compila o projeto otimizado para produção. |
| `npm run start` | Inicia o servidor em modo de produção. |
| `npm run lint` | Executa o linter (ESLint) para validação de código. |

---

## 📍 Informações Regionais & Contexto

* **Localização:** Litoral Norte do Rio Grande do Norte (Genipabu, Pitangui, Jacumã — Natal, RN).
* **Coordenadas de Referência:** 05° 47.7' S, 35° 12.5' W.
* **Público-alvo:** Turistas, entusiastas de ecoturismo e visitantes em busca de experiências privativas e seguras pelo litoral potiguar.

---

## 👨‍💻 Autor & Empresa

Projeto concebido, arquitetado e desenvolvido por **RAM Stack (Emerson Carneiro da Silva)**, destacando boas práticas de engenharia de software frontend, componentização limpa, separação de lógica via *Custom Hooks* e foco total em conversão comercial.
