"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function BrandBook() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased flex flex-col">
      {/* Header navigation */}
      <header className="fixed top-0 left-0 w-full bg-black text-white px-6 py-2 border-b border-gray-700 z-50">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Image
              src="/LOGO.jpg"
              alt="QA Observability"
              width={32}
              height={32}
              className="h-12 w-12 object-cover rounded-full"
            />
            <Link href="/" className="font-bold text-xl hidden md:block">
              QA Observability
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-6 text-sm">
            <a href="#intro" className="hover:text-orange-400">
              Introdução
            </a>
            <a href="#valores" className="hover:text-orange-400">
              Visão, Missão e Valores
            </a>
            <a href="#persona" className="hover:text-orange-400">
              Persona do Cliente
            </a>
            <a href="#identidade" className="hover:text-orange-400">
              Identidade Visual
            </a>
            <a href="#voz" className="hover:text-orange-400">
              Tom de Voz
            </a>
            <a href="#aplicacoes" className="hover:text-orange-400">
              Aplicações
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-2xl"
          >
            ☰
          </button>
        </div>
      </header>

      {/* Mobile sidebar (hidden by default) */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-black text-white transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-40`}
      >
        <div className="px-6 py-6 font-bold text-xl border-b border-gray-700">
          Menu
        </div>
        <nav className="px-6 py-4 space-y-3 text-sm">
          <a href="#intro" className="block hover:text-orange-400">
            Introdução
          </a>
          <a href="#valores" className="block hover:text-orange-400">
            Visão, Missão e Valores
          </a>
          <a href="#persona" className="block hover:text-orange-400">
            Persona do Cliente
          </a>
          <a href="#identidade" className="block hover:text-orange-400">
            Identidade Visual
          </a>
          <a href="#voz" className="block hover:text-orange-400">
            Tom de Voz
          </a>
          <a href="#aplicacoes" className="block hover:text-orange-400">
            Aplicações
          </a>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 px-6 py-12 space-y-12 mt-16">
        <section id="intro">
          <h2 className="text-xl font-bold mb-3">Introdução</h2>
          <p className="leading-relaxed text-gray-700">
            A <span className="font-semibold">QA Observability</span> é uma
            startup de consultoria especializada em testes de software e
            observabilidade de qualidade. Nossa missão é apoiar empresas de
            tecnologia na construção de produtos digitais mais confiáveis, por
            meio de processos estruturados de QA, métricas visíveis e práticas
            de automação. Este guia de marca foi criado para garantir
            consistência em como nos apresentamos visual e verbalmente,
            refletindo nossa visão, valores e diferenciais.
          </p>
        </section>

        <section id="valores">
          <h2 className="text-xl font-bold mb-4">
            Visão, Missão e Valores
          </h2>
          <p className="text-gray-700">
            <strong>Visão:</strong> Ser referência nacional em consultoria de
            testes e observabilidade.
          </p>
          <p className="text-gray-700 mt-2">
            <strong>Missão:</strong> Oferecer soluções estratégicas e práticas
            de QA que aumentem a visibilidade, reduzam riscos e garantam
            confiança.
          </p>
          <p className="text-gray-700 mt-2">
            <strong>Valores:</strong> Clareza, Inovação, Eficiência, Confiança e
            Parceria.
          </p>
        </section>

        <section id="persona">
          <h2 className="text-xl font-bold mb-4">Persona do Cliente</h2>
          <p className="text-gray-700 leading-relaxed">
            Nosso cliente ideal é uma{" "}
            <span className="font-semibold">
              empresa de médio a grande porte do setor de tecnologia
            </span>
            , que já possui produtos digitais em operação, mas enfrenta
            dificuldades em monitorar a qualidade e os resultados de seus
            testes.
          </p>
          <ul className="list-disc pl-5 text-gray-700 mt-2 space-y-1 text-sm">
            <li>
              Quem é: gestores de QA, líderes técnicos, product managers.
            </li>
            <li>
              O que buscam: visibilidade, redução de falhas em produção e
              suporte estratégico na automação.
            </li>
            <li>
              Desafios: pouca maturidade em QA, dificuldade em medir métricas,
              pressão por entregas rápidas.
            </li>
            <li>
              Expectativa: consultoria que traga clareza, confiança e agilidade.
            </li>
          </ul>
        </section>

        <section id="identidade">
          <h2 className="text-xl font-bold mb-4">Identidade Visual</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>
              <strong>Logo principal:</strong> Ícone “O” em 3D com degradê laranja/vermelho + wordmark “QA Observability”.
            </li>
            <li>
              <strong>Variações:</strong> versão monocromática branca e versão ícone (apps, favicon, social media).
            </li>
            <li>
              <div className="flex items-center space-x-4">
                <strong>Paleta de cores:</strong>
                <div className="flex space-x-2">
                  {/* Círculo Laranja */}
                  <span className="w-6 h-6 rounded-full bg-gradient-to-r from-[#FF6600] to-[#FF3300]"></span>
                  {/* Círculo Preto */}
                  <span className="w-6 h-6 rounded-full bg-black"></span>
                  {/* Círculo Branco */}
                  <span className="w-6 h-6 rounded-full bg-white border border-gray-300"></span>
                </div>
                <span className="text-sm">(Laranja Degradê, Preto, Branco)</span>
              </div>
            </li>
            <li>
              <strong>Tipografia:</strong> Montserrat Bold (títulos) e Roboto/Open Sans (textos corridos).
            </li>
          </ul>
        </section>

        <section id="voz">
          <h2 className="text-xl font-bold mb-4">Tom de Voz</h2>
          <p className="text-gray-700 leading-relaxed">
            O tom da marca é <strong>profissional, claro e acessível</strong>.
            Evitamos jargões desnecessários em materiais institucionais. Em
            comunicação técnica, usamos precisão e linguagem objetiva, sempre
            transmitindo confiança e parceria.
          </p>
          <p className="text-gray-700 mt-4">
            <strong>Mensagens-chave:</strong> “Clareza para sua qualidade de
            software.” — “Enxergue além do teste.”
          </p>
        </section>

        <section id="aplicacoes">
          <h2 className="text-xl font-bold mb-4">Aplicações Práticas</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>
              <strong>Templates Institucionais:</strong> apresentações,
              propostas e relatórios com uso consistente de logo, paleta e
              tipografia.
            </li>
            <li>
              <strong>Dashboards:</strong> fundo escuro com destaques em laranja
              para métricas críticas e insights.
            </li>
            <li>
              <strong>Material Digital:</strong> posts, website e e-mails
              seguindo identidade visual e tom de voz.
            </li>
          </ul>
        </section>

        <footer className="text-center text-sm text-gray-500 py-12">
          © {new Date().getFullYear()} QA Observability — Todos os direitos
          reservados.
        </footer>
      </main>
    </div>
  );
}