"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import logo from "@/public/images/logo.webp";
import { NAV_LINKS } from "@/src/constants/navLinks";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-background-header backdrop-blur-md border-b border-border transition-all">
      <div className="wrapper flex items-center justify-between h-20 gap-2 md:gap-4">
        {/* Logo Horizontal */}
        <Link href="/" className="flex items-center group py-2 shrink-0">
          <div className="relative w-42 md:w-50 h-15 flex items-center">
            <Image
              src={logo}
              alt="Duna 360º - Passeios de Buggy Natal"
              fill
              sizes="(max-width: 768px) 128px, 160px"
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Navegação Desktop Centralizada */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 lg:px-5 py-2 text-[11px] lg:text-xs rounded-full font-semibold tracking-wider uppercase transition-all duration-200 ${
                  isActive
                    ? "bg-accent text-white shadow-xs"
                    : "text-text-main hover:text-accent hover:bg-background-detail"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Botão de Ação Desktop */}
        <div className="hidden md:block shrink-0">
          <Link
            href="/contato"
            className="px-4 lg:px-6 py-2.5 bg-accent text-white text-[11px] lg:text-xs font-bold uppercase tracking-wider rounded-md hover:bg-accent/90 transition-all shadow-xs flex items-center"
          >
            Planejar Meu Passeio
          </Link>
        </div>

        {/* Botão do Menu Hambúrguer (Apenas Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2.5 bg-background-alt border border-border rounded-lg text-text-title hover:text-primary transition-colors focus:outline-none cursor-pointer"
          aria-label="Abrir Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menu Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background-header border-b border-border shadow-xl py-6 px-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-semibold uppercase tracking-wider transition-all ${
                    isActive
                      ? "bg-accent text-white shadow-xs"
                      : "text-text-main hover:bg-background-detail"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          <div className="pt-3 border-t border-border">
            <Link
              href="/contato"
              onClick={() => setIsOpen(false)}
              className="w-full py-3.5 bg-accent text-white text-xs font-bold uppercase tracking-wider rounded-lg text-center block shadow-xs"
            >
              Planejar Meu Passeio
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
