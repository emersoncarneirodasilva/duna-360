import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://duna-360.pages.dev"),
  title: {
    default:
      "Duna 360º | Passeios de Buggy Exclusivos no Litoral Norte de Natal",
    template: "%s | Duna 360º",
  },
  description:
    "Viva expedições de buggy privativas e roteiros autorais pelas dunas, lagoas e praias do Litoral Norte de RN. Saídas diárias de Ponta Negra e Via Costeira com total conforto e segurança.",
  keywords: [
    "passeio de buggy Natal",
    "dunas de Genipabu",
    "Lagoa de Pitangui",
    "Jacumã RN",
    "litoral norte RN",
    "passeio privativo buggy Natal",
    "buggy VIP Natal RN",
    "passeio de buggy Jacumã",
    "Duna 360º",
    "Ponta Negra Via Costeira",
  ],
  authors: [{ name: "Duna 360º" }],
  creator: "Duna 360º",
  publisher: "Duna 360º",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://duna-360.pages.dev",
    title: "Duna 360º | Passeios de Buggy Exclusivos em Natal - RN",
    description:
      "Explore as belezas do litoral norte potiguar com roteiros autorais, conforto e atendimento sob medida. Reserve sua expedição privativa.",
    siteName: "Duna 360º",
    images: [
      {
        url: "/images/home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Duna 360º - Passeios de Buggy em Natal RN",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Duna 360º | Passeios de Buggy Exclusivos no Litoral Norte",
    description:
      "Expedições de buggy privativas e roteiros autorais em Natal e litoral norte de RN.",
    images: ["/images/og-cover.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${jakarta.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
