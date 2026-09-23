import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle, FileDown, MessageSquare, Award, Clock, Layers } from 'lucide-react';
import { companyInfo } from '../data/companyData';

interface HeroSectionProps {
  onOpenRfq: () => void;
  onViewDocument: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenRfq,
  onViewDocument,
}) => {
  return (
    <section id="hero" className="relative bg-slate-950 text-white overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Dynamic Background Gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-300 text-xs font-semibold tracking-wider uppercase shadow-inner">
              <Award className="w-3.5 h-3.5 text-cyan-400" />
              <span>ESTABLISHED 2004 · 20+ TAHUN TERPERCAYA</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-none">
              One Partner.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">
                Many Solutions.
              </span>
            </h1>

            <p className="text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              <strong className="text-white font-semibold">PT. Radcom Solusindo Informatika</strong> adalah partner pengadaan barang dan jasa terpercaya untuk mendukung kebutuhan perusahaan, kantor, teknologi informasi, sistem keamanan CCTV, percetakan, konstruksi, hingga sarana prasarana.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                id="hero-request-btn"
                onClick={onOpenRfq}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/25 flex items-center gap-2 cursor-pointer group"
              >
                <span>Ajukan Pengadaan</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-doc-btn"
                onClick={onViewDocument}
                className="px-5 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-white hover:border-cyan-400/60 font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Buka Company Profile A4</span>
              </button>

              <a
                href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(
                  'Halo Tim Radcom, saya ingin konsultasi kebutuhan pengadaan barang/jasa perusahaan.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-900/60 font-semibold text-sm transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Langsung</span>
              </a>
            </div>

            {/* Value Points */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Service Excellent & SLA Terukur</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Legalitas Resmi & Terdaftar</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Dukungan Teknis Komprehensif</span>
              </div>
            </div>
          </div>

          {/* Right Visual Card & Quick KPI Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 sm:p-8 shadow-2xl">
              
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div>
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Ikhtisar Perusahaan</span>
                  <h3 className="text-xl font-bold text-white mt-0.5">Solusi Pengadaan Terintegrasi</h3>
                </div>
                <div className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-xs font-semibold text-cyan-400">
                  Resmi Sejak 2004
                </div>
              </div>

              {/* KPI 3 Columns */}
              <div className="grid grid-cols-3 gap-3 my-6">
                <div className="bg-slate-800/60 rounded-xl p-3.5 text-center border border-slate-700/50">
                  <div className="text-2xl font-black text-cyan-400">2004</div>
                  <div className="text-[11px] text-slate-400 mt-1 font-medium">Tahun Berdiri</div>
                </div>
                <div className="bg-slate-800/60 rounded-xl p-3.5 text-center border border-slate-700/50">
                  <div className="text-2xl font-black text-white">3</div>
                  <div className="text-[11px] text-slate-400 mt-1 font-medium">Pilar Bisnis</div>
                </div>
                <div className="bg-slate-800/60 rounded-xl p-3.5 text-center border border-slate-700/50">
                  <div className="text-2xl font-black text-sky-400">360°</div>
                  <div className="text-[11px] text-slate-400 mt-1 font-medium">Cakupan Solusi</div>
                </div>
              </div>

              {/* Scope summary */}
              <div className="space-y-2.5 text-xs text-slate-300 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Kantor Pusat</span>
                  <span className="font-semibold text-slate-200">Mampang Prapatan, Jakarta</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Cakupan Layanan</span>
                  <span className="font-semibold text-cyan-400">IT, CCTV, ATK, Cetak, Sipil</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Klien Flagship</span>
                  <span className="font-semibold text-slate-200">KAI Shelter & Kedutaan Arab Saudi</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 text-center">
                <p className="text-xs text-slate-400">
                  Butuh penawaran resmi atau presentasi tender?
                </p>
                <button
                  onClick={onOpenRfq}
                  className="mt-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 underline underline-offset-4 cursor-pointer"
                >
                  Kirim Kebutuhan Anda Sekarang &rarr;
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
