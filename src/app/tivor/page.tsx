"use client";

import { useEffect, useRef, useState } from "react";

import { Copy, Settings, Check, Calculator } from "lucide-react";
import clsx from "clsx";

/**
 * TIVOR SIGNATURE GENERATOR
 * Theme: Blue/Tech (#065ECD)
 * Logo: /assets/tivor-logo.png
 * Background: /assets/tivor-fundo.png
 */

export default function TivorSignature() {
    const [saudacao, setSaudacao] = useState("Atenciosamente,");
    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [unidade, setUnidade] = useState("");
    const [celular, setCelular] = useState("");
    const [copied, setCopied] = useState(false);
    const [baseUrl, setBaseUrl] = useState("");
    const signatureRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setBaseUrl(window.location.origin);
        }
    }, []);

    // Initial default values for preview ONLY (not inputs)
    const defaultNome = "Seu Nome";
    const defaultCargo = "SEU CARGO AQUI";
    const defaultCelular = "(00) 0 0000-0000";

    // Phone Mask
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let v = e.target.value.replace(/\D/g, "");
        v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
        v = v.replace(/(\d)(\d{4})$/, "$1-$2");
        if (v.length <= 15) {
            setCelular(v);
        } else {
            setCelular(v.substring(0, 15));
        }
    };

    const copyToClipboard = () => {
        if (!signatureRef.current) return;

        try {
            const range = document.createRange();
            range.selectNodeContents(signatureRef.current);
            const selection = window.getSelection();
            if (selection) {
                selection.removeAllRanges();
                selection.addRange(range);
                document.execCommand("copy");
                selection.removeAllRanges();
                setCopied(true);
                setTimeout(() => setCopied(false), 3000);
            }
        } catch (err) {
            console.error("Erro ao copiar", err);
        }
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center p-4 bg-[url('/assets/tivor-fundo.png')] bg-cover bg-center bg-fixed font-sans text-white">
            {/* Overlay: Blue tint for Tivor brand */}
            <div className="absolute inset-0 bg-[#01214B]/60 pointer-events-none backdrop-blur-[4px]" />

            <main className="relative z-10 w-full max-w-[1000px] grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-8 items-start lg:items-center">

                {/* Controls Section - Glassmorphism */}
                <div className="bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl flex flex-col gap-4 ring-1 ring-white/5">
                    <div className="text-center pb-3 border-b border-white/10 mb-2">
                        <h1 className="text-xl font-bold flex items-center justify-center gap-2 drop-shadow-md text-[#60a5fa]">
                            <Calculator size={24} /> Gerador de Assinaturas
                        </h1>
                        <p className="mt-1 text-[10px] font-light opacity-80 uppercase tracking-[0.2em] text-blue-200">
                            Contabilidade
                        </p>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] text-blue-200 uppercase font-bold tracking-wider">Saudação Inicial</label>
                        <select
                            value={saudacao}
                            onChange={(e) => setSaudacao(e.target.value)}
                            className="w-full p-2.5 bg-black/30 border border-[#065ECD]/40 rounded-lg text-sm outline-none focus:border-[#065ECD] focus:bg-black/50 focus:ring-1 focus:ring-[#065ECD]/50 transition-all font-sans text-white"
                        >
                            <option value="Atenciosamente,">Atenciosamente,</option>
                            <option value="Cordialmente,">Cordialmente,</option>
                            <option value="Um abraço,">Um abraço,</option>
                            <option value="">Nenhuma</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] text-blue-200 uppercase font-bold tracking-wider">Nome Completo</label>
                        <input
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            placeholder="Ex: Ana Souza"
                            className="w-full p-2.5 bg-black/30 border border-[#065ECD]/40 rounded-lg text-sm outline-none focus:border-[#065ECD] focus:bg-black/50 focus:ring-1 focus:ring-[#065ECD]/50 transition-all font-sans text-white placeholder:text-white/20"
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] text-blue-200 uppercase font-bold tracking-wider">Cargo / Função</label>
                        <input
                            type="text"
                            value={cargo}
                            onChange={(e) => setCargo(e.target.value)}
                            placeholder="Ex: Diretora de Inovação"
                            className="w-full p-2.5 bg-black/30 border border-[#065ECD]/40 rounded-lg text-sm outline-none focus:border-[#065ECD] focus:bg-black/50 focus:ring-1 focus:ring-[#065ECD]/50 transition-all font-sans text-white placeholder:text-white/20"
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] text-blue-200 uppercase font-bold tracking-wider">Unidade / Setor</label>
                        <select
                            value={unidade}
                            onChange={(e) => setUnidade(e.target.value)}
                            className="w-full p-2.5 bg-black/30 border border-[#065ECD]/40 rounded-lg text-sm outline-none focus:border-[#065ECD] focus:bg-black/50 focus:ring-1 focus:ring-[#065ECD]/50 transition-all font-sans text-white"
                        >
                            <option value="">-- Opcional --</option>
                            <option value="CONTABILIDADE">CONTABILIDADE</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] text-blue-200 uppercase font-bold tracking-wider">WhatsApp / Celular</label>
                        <input
                            type="text"
                            value={celular}
                            onChange={handlePhoneChange}
                            placeholder="(00) 0 0000-0000"
                            className="w-full p-2.5 bg-black/30 border border-[#065ECD]/40 rounded-lg text-sm outline-none focus:border-[#065ECD] focus:bg-black/50 focus:ring-1 focus:ring-[#065ECD]/50 transition-all font-sans text-white placeholder:text-white/20"
                            maxLength={16}
                        />
                    </div>

                    <button
                        onClick={copyToClipboard}
                        className="mt-4 w-full flex items-center justify-center gap-2 p-3.5 rounded-xl bg-[#065ECD] hover:bg-[#054bbd] text-white font-bold uppercase tracking-wide text-xs shadow-[0_4px_15px_rgba(6,94,205,0.4)] hover:shadow-[0_8px_25px_rgba(6,94,205,0.6)] active:translate-y-[1px] transition-all"
                    >
                        {copied ? <Check size={18} /> : <Copy size={18} />}
                        {copied ? "Copiado!" : "Copiar Assinatura"}
                    </button>

                    <a
                        href="https://outlook.office.com/mail/options/accounts-category/signatures-subcategory"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-1 w-full flex items-center justify-center gap-2 p-3.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-blue-200 font-bold uppercase tracking-wide text-xs hover:-translate-y-[2px] transition-all"
                    >
                        <Settings size={18} />
                        Configurar Assinatura
                    </a>
                </div>

                {/* Preview Section */}
                <div className="flex flex-col gap-4 h-full justify-center">
                    {/* White bg container for preview - Matches actual email background */}
                    <div className="bg-white border border-white/20 p-8 rounded-2xl shadow-2xl w-fit mx-auto lg:mx-0 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none" />

                        <div ref={signatureRef} className="relative z-10">
                            {/* TIVOR SIGNATURE TEMPLATE - INLINE STYLES MANDATORY */}
                            {saudacao && (
                                <div style={{ fontFamily: "'Segoe UI', Arial, sans-serif", fontSize: "14px", color: "#666", marginBottom: "16px" }}>
                                    {saudacao}
                                </div>
                            )}
                            <table cellPadding="0" cellSpacing="0" style={{ fontFamily: "'Segoe UI', Arial, sans-serif", color: "#333", lineHeight: "1.2", border: "0" }}>
                                <tbody>
                                    <tr>
                                        <td valign="middle" style={{ paddingRight: "25px", borderRight: "2px solid #bfdbfe", textAlign: "center" }}>
                                            {/* LOGO TIVOR */}
                                            <img
                                                src={`${baseUrl}/assets/tivor-logo.png`}
                                                width="120"
                                                style={{ display: "block", width: "120px", margin: "0 auto" }}
                                                alt="Tivor Logo"
                                            />
                                            <div style={{ marginTop: "12px" }}>
                                                <a href="http://www.tivor.agr.br" style={{ color: "#065ECD", textDecoration: "none", fontSize: "12px", fontWeight: "bold", letterSpacing: "0.5px" }}>
                                                    www.tivor.agr.br
                                                </a>
                                            </div>
                                        </td>

                                        <td valign="middle" style={{ paddingLeft: "25px" }}>
                                            <div style={{ fontSize: "24px", fontWeight: "800", color: "#1e3a8a", letterSpacing: "-0.5px", textTransform: "uppercase" }}>
                                                {nome || defaultNome}
                                            </div>

                                            <table cellPadding="0" cellSpacing="0" style={{ marginTop: "8px", marginBottom: "12px", border: "0" }}>
                                                <tbody>
                                                    <tr>
                                                        <td style={{ backgroundColor: "#065ECD", color: "#ffffff", padding: "4px 8px", fontSize: "10px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px", borderRadius: "4px" }}>
                                                            <span>{(cargo || defaultCargo).toUpperCase()}</span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            {unidade && (
                                                <div style={{ marginBottom: "8px", fontSize: "11px", color: "#1e40af", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px", display: "flex", alignItems: "center" }}>
                                                    <span style={{ marginRight: "6px" }}>📍</span> <span>{unidade}</span>
                                                </div>
                                            )}

                                            <div style={{ fontSize: "14px", color: "#444", marginTop: "4px" }}>
                                                <span style={{ fontWeight: "600", color: "#065ECD", marginRight: "6px" }}>📱</span>
                                                <span style={{ fontWeight: "600", color: "#333" }}>{celular || defaultCelular}</span>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>

            {/* Toast Notification */}
            <div className={clsx(
                "fixed bottom-8 left-1/2 -translate-x-1/2 bg-[#065ECD]/90 backdrop-blur-md text-white px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 shadow-2xl border border-blue-500/40 transition-all duration-500 z-50",
                copied ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20 pointer-events-none"
            )}>
                ✅ Assinatura copiada com sucesso!
            </div>
        </div>
    );
}
