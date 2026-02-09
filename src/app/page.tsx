"use client";

import { CompanyCard, Company } from "@/components/CompanyCard";
import Image from "next/image";

// Configuração das Empresas
const companies: Company[] = [
  {
    name: "HortSoy",
    slug: "hortsoy",
    description: "Cultivando inovação e tecnologia para o futuro do agronegócio.",
    themeColor: "#4ADE80", // Verde Neon
    logo: (
      <div className="relative w-64 h-40">
        <Image
          src="/assets/hortsoy-logo.png"
          alt="HortSoy Logo"
          fill
          className="object-contain drop-shadow-2xl"
        />
      </div>
    ),
  },
  {
    name: "Tivor",
    slug: "tivor",
    description: "Soluções contábeis estratégicas para impulsionar o seu negócio.",
    themeColor: "#065ECD", // Azul Tivor
    logo: (
      <div className="relative w-64 h-40">
        <Image
          src="/assets/tivor-logo.png"
          alt="Tivor Logo"
          fill
          className="object-contain drop-shadow-2xl"
        />
      </div>
    ),
  },
];

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black selection:bg-purple-500/30">
      {/* Background Ambience - "Hub" */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-[30%] -left-[10%] h-[70%] w-[70%] rounded-full bg-purple-900/20 blur-[120px] animate-pulse-slow" />
        <div className="absolute top-[20%] -right-[10%] h-[60%] w-[60%] rounded-full bg-blue-900/10 blur-[120px] animate-pulse-slow delay-1000" />
        <div className="absolute bottom-[-20%] left-[20%] h-[50%] w-[50%] rounded-full bg-emerald-900/10 blur-[120px] animate-pulse-slow delay-2000" />
        {/* Grid Sutil */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="mx-auto max-w-2xl text-center mb-20 animate-fade-in-up">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            Assinatura <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Outlook</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Selecione sua organização para acessar o gerador de assinaturas exclusivo.
          </p>
        </div>

        {/* Grid de Cards */}
        <div className="mx-auto grid max-w-lg grid-cols-1 gap-8 sm:max-w-none sm:grid-cols-2 lg:grid-cols-2 justify-center">
          {companies.map((company, index) => (
            <div key={company.slug} className="h-96 w-full max-w-sm mx-auto">
              <CompanyCard company={company} index={index} />
            </div>
          ))}
        </div>
      </div>

      <footer className="absolute bottom-8 w-full text-center text-sm text-gray-500/60 font-light tracking-wide">
        <p>
          Copyright &copy; 2026 <span className="text-gray-400 font-medium">Christyan Silva</span>. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
