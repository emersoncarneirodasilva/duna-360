"use client";

import { useState } from "react";
import { toast } from "sonner";

export function useContactForm() {
  const [name, setName] = useState("");
  const [peopleCount, setPeopleCount] = useState(2);
  const [date, setDate] = useState("");
  const [tourOption, setTourOption] = useState("Genipabu");
  const [preference, setPreference] = useState("");

  const handleDecrement = () => setPeopleCount((prev) => Math.max(1, prev - 1));
  const handleIncrement = () => setPeopleCount((prev) => Math.min(4, prev + 1));

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const whatsappNumber =
      process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+558499999999";

    // Formata a data de YYYY-MM-DD para DD/MM/AAAA
    let formattedDate = "";
    if (date) {
      const [year, month, day] = date.split("-");
      formattedDate = `${day}/${month}/${year}`;
    }

    // Limpa a preferência caso o usuário tenha digitado algo repetitivo
    const cleanPreference = preference
      .trim()
      .replace(/^(gostaria de|quero|queria)\s+/i, "");

    // Mensagem limpa e inteligente
    const formattedMessage = `Olá, Duna 360º! Meu nome é ${name.trim()}. ${
      peopleCount === 1
        ? "Quero reservar um passeio"
        : `Gostaríamos de reservar um passeio para ${peopleCount} pessoas`
    } com destino a ${tourOption}${
      formattedDate ? ` no dia ${formattedDate}` : ""
    }.${cleanPreference ? ` Obs.: ${cleanPreference}.` : ""} Gostaria de confirmar a disponibilidade e os valores.`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      formattedMessage,
    )}`;

    // Abre o WhatsApp em nova aba com segurança
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    // Dispara o feedback visual com Sonner
    toast.success("Expedição em rota!", {
      description:
        "Abrindo o WhatsApp para confirmar os detalhes do seu roteiro privativo.",
    });

    // Limpa e reseta os campos do formulário para o estado inicial
    setName("");
    setPeopleCount(2);
    setDate("");
    setTourOption("Genipabu");
    setPreference("");
  };

  return {
    state: {
      name,
      peopleCount,
      date,
      tourOption,
      preference,
    },
    actions: {
      setName,
      setDate,
      setTourOption,
      setPreference,
      handleDecrement,
      handleIncrement,
      handleSubmit,
    },
  };
}
