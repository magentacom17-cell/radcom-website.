import React, { useState } from 'react';
import { 
  Printer, 
  ArrowLeft, 
  ZoomIn, 
  ZoomOut, 
  Check, 
  ChevronRight, 
  Award, 
  ShieldCheck, 
  FileCheck, 
  Building2, 
  Server, 
  Network, 
  Shield, 
  Monitor, 
  Laptop, 
  Printer as PrinterIcon, 
  PackageCheck, 
  Truck, 
  FileSpreadsheet, 
  UserCheck, 
  Wrench, 
  Receipt, 
  Phone, 
  Mail, 
  Globe, 
  MapPin, 
  CheckCircle2,
  Calendar,
  Briefcase
} from 'lucide-react';
import { SmartImage } from './SmartImage';
import { RadcomLogo } from './RadcomLogo';
import { WheatCrest, GlobeArc, ProcurementBadgesBar } from './ComproDecorative';
import project01InstallationImg from '../assets/images/regenerated_image_1789637294664.jpg';
import { 
  companyInfo, 
  servicesData, 
  coreValues, 
  taxLegalityInfo, 
  businessModelWorkflows, 
  brandMatrixData, 
  dealerCertificates, 
  clientPartnersList 
} from '../data/companyData';

interface A4DocumentViewProps {
  onBackToWeb: () => void;
}

export const A4DocumentView: React.FC<A4DocumentViewProps> = ({ onBackToWeb }) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [activeSheetIndex, setActiveSheetIndex] = useState<number>(1);

  const handlePrint = () => {
    window.print();
  };

  const scrollToSheet = (index: number) => {
    setActiveSheetIndex(index);
    const element = document.getElementById(`sheet-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalSheets = 12;

  return (
    <div className="min-h-screen bg-slate-900 text-slate-900 pb-20 selection:bg-amber-400 selection:text-slate-950">
      
      {/* Top Floating Control Bar (Hidden on print) */}
      <header className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 text-white px-4 py-3 shadow-xl print:hidden">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToWeb}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-amber-400" />
              <span>Kembali ke Web</span>
            </button>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-xs font-bold text-slate-200 hidden sm:inline">
                Company Profile A4 (12 Halaman Dokumen Resmi)
              </span>
            </div>
          </div>

          {/* Quick Page Jump */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-900 border border-slate-800 px-2 py-1 rounded-lg text-xs">
            <span className="text-slate-400 mr-1.5 text-[11px] font-semibold">Hal:</span>
            {Array.from({ length: totalSheets }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                onClick={() => scrollToSheet(num)}
                className={`w-6 h-6 rounded flex items-center justify-center font-bold text-xs transition-colors ${
                  activeSheetIndex === num
                    ? 'bg-amber-400 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {num}
              </button>
            ))}
          </div>

          {/* Action Buttons: Zoom & Print */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-1 bg-slate-900 border border-slate-800 rounded-lg p-1">
              <button
                onClick={() => setZoomLevel(prev => Math.max(0.6, prev - 0.1))}
                className="p-1 rounded hover:bg-slate-800 text-slate-300 transition-colors"
                title="Perkecil"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="text-[11px] font-mono px-1.5 text-slate-300 min-w-[42px] text-center">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                onClick={() => setZoomLevel(prev => Math.min(1.3, prev + 0.1))}
                className="p-1 rounded hover:bg-slate-800 text-slate-300 transition-colors"
                title="Perbesar"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              id="print-document-btn"
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold transition-all shadow-md shadow-amber-400/20 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Cetak / PDF (A4)</span>
            </button>
          </div>

        </div>
      </header>

      {/* A4 Document Container with Zoom Scale */}
      <div 
        className="w-full flex flex-col items-center pt-6 px-2 overflow-x-auto print:p-0 print:m-0 print:overflow-visible"
        style={{ transformOrigin: 'top center' }}
      >
        <div 
          className="transition-transform duration-200 origin-top flex flex-col gap-6 print:gap-0"
          style={{ transform: `scale(${zoomLevel})` }}
        >

          {/* ============================================================ */}
          {/* SHEET 01 · COVER (Faithful to Page 1 of Compro)              */}
          {/* ============================================================ */}
          <section id="sheet-1" className="sheet relative bg-white flex flex-col justify-between" style={{ height: '297mm' }}>
            {/* Top White Canvas Area */}
            <div className="relative pt-8 px-10 flex-grow z-10 flex flex-col">
              
              {/* Header Bar: Top Right Official RSI Logo */}
              <div className="flex items-center justify-between">
                <div className="text-[11px] font-black tracking-widest text-[#0D2346] uppercase border-l-2 border-[#F5A623] pl-2.5">
                  Corporate Profile · Established 2004
                </div>
                <div className="w-20 h-20 rounded-full bg-white p-2 shadow-lg border border-slate-100 flex items-center justify-center">
                  <RadcomLogo className="w-full h-full" variant="full" showBackground={false} />
                </div>
              </div>

              {/* Central Architectural Skyscraper Portal (Page 1 Motif) */}
              <div className="my-auto relative flex justify-center items-center py-4">
                {/* Decorative circular aura */}
                <div className="w-[110mm] h-[110mm] rounded-full border-4 border-[#F5A623] p-1.5 shadow-2xl relative">
                  <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 relative">
                    <img 
                      src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85" 
                      alt="Modern Highrise Corporate Headquarters" 
                      className="w-full h-full object-cover filter contrast-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#0D2346]/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Subtle Overlapping Accent Ring */}
                <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-44 h-44 rounded-full border-2 border-[#0D2346]/30 pointer-events-none" />
              </div>
            </div>

            {/* Bottom Sweeping Golden Amber & Navy Wave Area */}
            <div className="relative z-20 w-full">
              {/* Dynamic Curved SVG Wave */}
              <svg 
                viewBox="0 0 1000 380" 
                className="w-full h-auto block -mb-1"
                preserveAspectRatio="none"
              >
                {/* Navy Blue Accent Swoop */}
                <path 
                  d="M0,180 Q250,50 600,160 T1000,100 L1000,380 L0,380 Z" 
                  fill="#0D2346" 
                  opacity="0.95"
                />
                {/* Primary Golden-Amber Wave */}
                <path 
                  d="M0,220 C320,110 500,280 1000,160 L1000,380 L0,380 Z" 
                  fill="#F5A623" 
                />
              </svg>

              {/* Content Box within Golden Section */}
              <div className="bg-[#F5A623] px-12 pt-2 pb-6 text-white">
                <div className="text-white text-base sm:text-lg font-black tracking-wider uppercase drop-shadow-sm mb-1">
                  PT. RADCOMSOLUSINDOINFORMATIKA
                </div>
                <h1 className="text-5xl sm:text-6xl font-black text-[#0D2346] tracking-tight leading-none mb-3 drop-shadow-sm">
                  COMPANY<br />PROFILE
                </h1>
                <p className="text-sm text-[#0D2346]/90 font-medium max-w-lg mb-4">
                  Solusi Pengadaan Barang & Jasa Terintegrasi untuk Institusi, BUMN, Pemerintah, dan Korporasi Swasta.
                </p>
              </div>

              {/* Bottom White Procurement Badges Bar */}
              <div className="bg-white px-10 py-3.5 border-t border-slate-200">
                <ProcurementBadgesBar size="md" />
              </div>
            </div>
            
            {/* Sheet Footer */}
            <div className="absolute bottom-1 right-10 text-[8px] font-bold text-slate-400">
              01 / 12 · COVER
            </div>
          </section>

          {/* ============================================================ */}
          {/* SHEET 02 · DAFTAR ISI (Faithful to Page 2 of Compro)          */}
          {/* ============================================================ */}
          <section id="sheet-2" className="sheet relative flex" style={{ height: '297mm' }}>
            
            {/* Left Deep Navy Timeline Column */}
            <div className="w-[38%] bg-[#0D2346] text-white p-8 flex flex-col justify-between relative overflow-hidden">
              {/* Background ambient lighting */}
              <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-blue-500/10 blur-2xl pointer-events-none" />

              <div>
                <div className="text-[10px] font-bold tracking-widest text-[#F5A623] uppercase mb-1">
                  RADCOM SOLUSINDO
                </div>
                <div className="text-xl font-black text-white tracking-wide">
                  STRUKTUR DOKUMEN
                </div>
              </div>

              {/* Connected Milestone Vertical Node Line (Page 2 Motif) */}
              <div className="relative my-auto pl-3 py-4">
                {/* Vertical Axis Line */}
                <div className="absolute left-[23px] top-6 bottom-6 w-0.5 bg-white/40" />

                <div className="space-y-4 relative z-10">
                  {[
                    { num: '01', title: 'Cover' },
                    { num: '02', title: 'Daftar Isi' },
                    { num: '03', title: 'Filosofi' },
                    { num: '04', title: 'Tentang Kami' },
                    { num: '05', title: 'Model Bisnis' },
                    { num: '06', title: 'Lini Bisnis IT' },
                    { num: '07', title: 'Penunjukan Dealer' },
                    { num: '08', title: 'Daftar Rekanan' },
                    { num: '09', title: 'Project Unggulan' },
                    { num: '10', title: 'Dokumentasi I' },
                    { num: '11', title: 'Dokumentasi II' },
                    { num: '12', title: 'Penutup & Kontak' },
                  ].map((node, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#F5A623] text-[#0D2346] font-bold text-[9px] flex items-center justify-center shadow-md flex-shrink-0 border-2 border-[#0D2346]">
                        {i + 1}
                      </div>
                      <span className="text-[11px] font-semibold text-slate-200 tracking-wide truncate">
                        {node.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom RSI Logo Card in Left Column */}
              <div className="bg-white rounded-xl p-3 shadow-md border border-white/20 flex items-center gap-3">
                <div className="w-10 h-10 flex-shrink-0">
                  <RadcomLogo className="w-full h-full" variant="full" showBackground={false} />
                </div>
                <div>
                  <div className="text-[11px] font-black text-[#0D2346] leading-tight">
                    PT. RADCOM SOLUSINDO INFORMATIKA
                  </div>
                  <div className="text-[9px] text-[#DC1E28] font-bold">
                    ESTABLISHED 2004
                  </div>
                </div>
              </div>
            </div>

            {/* Right Golden Amber Panel with Clean Listing */}
            <div className="w-[62%] bg-[#F5A623] p-12 flex flex-col justify-between text-[#0D2346] relative">
              {/* Header Title */}
              <div>
                <h2 className="text-4xl font-black text-[#0D2346] tracking-tight mb-2">
                  DAFTAR ISI
                </h2>
                <div className="w-16 h-1 bg-[#0D2346] rounded-full mb-8" />
              </div>

              {/* Table of Contents Grid Items */}
              <div className="space-y-4 my-auto">
                {[
                  { page: '01', title: 'Cover', desc: 'Identitas Perusahaan & Kanal Pengadaan' },
                  { page: '02', title: 'Daftar Isi', desc: 'Struktur & Panduan Halaman Dokumen' },
                  { page: '03', title: 'Filosofi', desc: 'Visi, Misi & Grand Value Perusahaan' },
                  { page: '04', title: 'Tentang Kami', desc: 'Sejarah 2004, Legalitas & Komitmen' },
                  { page: '05', title: 'Model Bisnis Kami', desc: 'Alur Layanan Jasa & Pengadaan Barang' },
                  { page: '06', title: 'Line of Business IT', desc: 'Kategori Solusi & Brand Otorisasi' },
                  { page: '07', title: 'Surat Penunjukan Dealer', desc: 'Kemitraan Resmi HP, Epson & Gear' },
                  { page: '08', title: 'Daftar Rekanan', desc: '48+ Klien Korporasi & Lembaga Negara' },
                  { page: '09', title: 'Project Experience', desc: 'Studi Kasus Kedutaan Arab Saudi & KAI' },
                  { page: '10', title: 'Dokumentasi Lapangan I', desc: 'Instansi Pemerintah, Logistik & APD' },
                  { page: '11', title: 'Dokumentasi Lapangan II', desc: 'Hardware, Konsumsi Kantor, Lab & Tim' },
                  { page: '12', title: 'Penutup & Legalitas', desc: 'Status Pajak PKP & Direktori Kontak' },
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center justify-between pb-2 border-b border-[#0D2346]/20 group hover:border-[#0D2346] transition-colors"
                  >
                    <div>
                      <div className="text-sm font-black text-[#0D2346] tracking-wide">
                        {item.title}
                      </div>
                      <div className="text-[10px] text-[#0D2346]/80 font-medium">
                        {item.desc}
                      </div>
                    </div>
                    <div className="text-xs font-mono font-black text-[#0D2346] bg-white/40 px-2 py-0.5 rounded">
                      Hal. {item.page}
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer Note */}
              <div className="flex items-center justify-between text-[9px] font-bold text-[#0D2346]/80 pt-4 border-t border-[#0D2346]/20">
                <span>RADCOM SOLUSINDO INFORMATIKA</span>
                <span>02 / 12</span>
              </div>
            </div>

          </section>

          {/* ============================================================ */}
          {/* SHEET 03 · FILOSOFI (Faithful to Page 3 of Compro)            */}
          {/* ============================================================ */}
          <section id="sheet-3" className="sheet relative flex flex-col justify-between" style={{ height: '297mm' }}>
            
            {/* Top Workspace Photography Header in Curved Portal */}
            <div className="relative h-[85mm] w-full overflow-hidden bg-[#0D2346]">
              <img 
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1000&q=80" 
                alt="Workspace Laptop and Business Planning" 
                className="w-full h-full object-cover filter contrast-105 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D2346] via-transparent to-black/30" />
              
              {/* Dynamic Curved Bottom Cutout */}
              <svg 
                viewBox="0 0 1000 80" 
                className="absolute bottom-0 left-0 w-full h-10 text-[#F5A623]"
                preserveAspectRatio="none"
              >
                <path d="M0,80 Q500,0 1000,80 L1000,80 L0,80 Z" fill="currentColor" />
              </svg>
            </div>

            {/* Golden Header Strip with Title */}
            <div className="bg-[#F5A623] px-12 py-3 flex items-center justify-between text-[#0D2346]">
              <div>
                <h2 className="text-3xl font-black tracking-tight leading-none">
                  FILOSOFI
                </h2>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0D2346]/80">
                  Landasan Nilai & Arah Strategis Perusahaan
                </span>
              </div>
              <WheatCrest className="w-10 h-10 text-[#0D2346]" color="#0D2346" />
            </div>

            {/* Philosophy Content Body */}
            <div className="px-12 py-6 flex-grow flex flex-col justify-between">
              
              {/* VISI */}
              <div className="p-5 rounded-2xl bg-slate-50 border-2 border-slate-200">
                <div className="flex items-center gap-2 text-xs font-black text-[#0D2346] tracking-wider uppercase mb-1">
                  <WheatCrest className="w-4 h-4 text-[#F5A623]" />
                  <span>VISI</span>
                </div>
                <p className="text-base text-slate-800 font-bold leading-relaxed">
                  Menjadi Perusahaan pengadaan kebutuhan institusi terlengkap yang dapat mensupport semua kebutuhan kantor dengan <span className="text-[#DC1E28]">service excellent</span>.
                </p>
              </div>

              {/* MISI */}
              <div className="p-5 rounded-2xl bg-[#0D2346] text-white">
                <div className="flex items-center gap-2 text-xs font-black text-[#F5A623] tracking-wider uppercase mb-2">
                  <WheatCrest className="w-4 h-4 text-[#F5A623]" />
                  <span>MISI</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-200 leading-normal">
                  <li className="flex items-start gap-2">
                    <span className="text-[#F5A623] font-bold">»</span>
                    <span>Memberikan solusi teknologi informasi secara menyeluruh sesuai kebutuhan masyarakat dan institusi.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#F5A623] font-bold">»</span>
                    <span>Memberikan layanan kebutuhan pengadaan secara cepat dan tepat sesuai tuntutan kebutuhan pelanggan.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#F5A623] font-bold">»</span>
                    <span>Memberikan layanan berbasis produk focus dengan kustomisasi spesifikasi tinggi.</span>
                  </li>
                </ul>
              </div>

              {/* GRAND VALUE */}
              <div className="p-5 rounded-2xl bg-amber-50/80 border-2 border-amber-300">
                <div className="flex items-center gap-2 text-xs font-black text-[#0D2346] tracking-wider uppercase mb-2">
                  <WheatCrest className="w-4 h-4 text-[#F5A623]" />
                  <span>GRAND VALUE</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-800 font-medium">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F5A623] flex-shrink-0 mt-0.5" />
                    <span><b>Berorientasi pada kepuasan pelanggan</b> (standar mutu dan kecepatan) serta efisiensi anggaran.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F5A623] flex-shrink-0 mt-0.5" />
                    <span><b>Peningkatan kualitas individu</b> berintegritas tinggi, jujur, dan bermoral mulia.</span>
                  </div>
                </div>
              </div>

              {/* 4 Core Pillars */}
              <div className="grid grid-cols-4 gap-3">
                {coreValues.slice(0, 4).map((val, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-100 border border-slate-200 text-center">
                    <div className="text-xs font-black text-[#0D2346] mb-0.5">{val.name}</div>
                    <div className="text-[9px] text-slate-600 leading-tight">{val.desc}</div>
                  </div>
                ))}
              </div>

            </div>

            {/* Footer */}
            <div className="px-12 py-3 border-t border-slate-200 flex items-center justify-between text-[9px] font-bold text-slate-500">
              <span>FILOSOFI & GRAND VALUE</span>
              <span>03 / 12</span>
            </div>
          </section>

          {/* ============================================================ */}
          {/* SHEET 04 · TENTANG KAMI (Faithful to Page 4 of Compro)        */}
          {/* ============================================================ */}
          <section id="sheet-4" className="sheet relative p-10 flex flex-col justify-between bg-slate-50" style={{ height: '297mm' }}>
            
            {/* Architectural Archway Frame (Page 4 Motif) */}
            <div className="w-full h-full bg-white rounded-3xl border-2 border-[#F5A623] p-10 shadow-lg flex flex-col justify-between relative overflow-hidden">
              
              {/* Top Arch Center: Golden Crest + Official RSI Logo */}
              <div className="flex flex-col items-center text-center">
                <WheatCrest className="w-14 h-14 text-[#F5A623] mb-1" />
                <div className="w-16 h-16 bg-white p-1 rounded-2xl shadow-sm border border-slate-200 flex items-center justify-center mb-3">
                  <RadcomLogo className="w-full h-full" variant="full" showBackground={false} />
                </div>
                <h2 className="text-3xl font-black text-[#0D2346] tracking-tight leading-tight">
                  TENTANG KAMI
                </h2>
                <div className="text-[11px] font-bold text-[#F5A623] uppercase tracking-widest mt-1">
                  Established 4 Januari 2004 · Jakarta
                </div>
                <div className="w-12 h-1 bg-[#F5A623] rounded-full mt-3 mb-6" />
              </div>

              {/* Narrative Story (Authentic Text from Page 4) */}
              <div className="space-y-6 max-w-xl mx-auto text-slate-700 text-sm leading-relaxed">
                <div className="p-5 rounded-2xl bg-slate-50 border-l-4 border-[#0D2346]">
                  <p>
                    <span className="text-[#0D2346] font-bold font-serif text-lg mr-1">»</span>
                    <b>Radcom Solusindo Informatika</b> adalah perusahaan yang berdiri pada tanggal <b>4 Januari 2004</b> yang berawal bergerak dalam bidang Teknologi Informasi dan lambat laun merambah ke dalam pengadaan seluruh kebutuhan perusahaan, seperti kebutuhan IT, alat tulis kantor, tinta toner, konstruksi, percetakan, CCTV, dan sarana prasarana lainnya.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-amber-50/70 border-l-4 border-[#F5A623]">
                  <p>
                    <span className="text-[#F5A623] font-bold font-serif text-lg mr-1">»</span>
                    <b>Komitmen yang ditawarkan oleh perusahaan</b> dalam memberikan pelayanan kepada pelanggan adalah menyajikan citra kerja yang profesional, memberikan solusi terhadap segala permasalahan di bidang IT khususnya dan serta bidang lainnya pada umumnya serta memberikan pelayanan terbaik demi mencapai kepuasan dan kepercayaan pelanggan.
                  </p>
                </div>
              </div>

              {/* Fast Facts Key Metrics */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200">
                <div className="p-4 rounded-xl bg-[#0D2346] text-white text-center">
                  <div className="text-2xl font-black text-[#F5A623]">20+ Thn</div>
                  <div className="text-[10px] text-slate-300 font-medium">Pengalaman Pengadaan</div>
                </div>
                <div className="p-4 rounded-xl bg-[#F5A623] text-[#0D2346] text-center">
                  <div className="text-2xl font-black">PKP</div>
                  <div className="text-[10px] font-bold">Faktur Pajak Resmi</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-800 text-white text-center">
                  <div className="text-2xl font-black text-[#F5A623]">360°</div>
                  <div className="text-[10px] text-slate-300 font-medium">Cakupan Kebutuhan Kantor</div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="flex items-center justify-between text-[9px] font-bold text-slate-400 pt-3">
                <span>PT. RADCOM SOLUSINDO INFORMATIKA</span>
                <span>04 / 12</span>
              </div>
            </div>

          </section>

          {/* ============================================================ */}
          {/* SHEET 05 · MODEL BISNIS KAMI (Faithful to Page 5 of Compro)   */}
          {/* ============================================================ */}
          <section id="sheet-5" className="sheet relative p-10 flex flex-col justify-between bg-white" style={{ height: '297mm' }}>
            
            {/* Header */}
            <div>
              <div className="flex items-center justify-between border-b-2 border-slate-100 pb-4 mb-6">
                <div>
                  <div className="text-[10px] font-black tracking-widest text-[#F5A623] uppercase mb-1">
                    Sistem Alur Kerja & Operasional
                  </div>
                  <h2 className="text-3xl font-black text-[#0D2346] tracking-tight">
                    MODEL BISNIS KAMI
                  </h2>
                </div>
                <WheatCrest className="w-10 h-10 text-[#F5A623]" />
              </div>
              <p className="text-xs text-slate-600 max-w-xl">
                Dua pilar alur kerja sistematis untuk menjamin transparansi, ketepatan waktu, dan standar mutu tinggi pada setiap tahap pengerjaan.
              </p>
            </div>

            {/* Workflow 1: Layanan Jasa Service / Maintenance */}
            <div className="p-5 rounded-2xl bg-slate-50 border-2 border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-lg bg-[#F5A623] text-[#0D2346] font-black text-sm flex items-center justify-center shadow-sm">
                  1
                </span>
                <div>
                  <h3 className="text-base font-black text-[#0D2346]">Layanan Jasa Service / Maintenance</h3>
                  <div className="text-[10px] text-slate-500 font-medium">Alur kerja pemeliharaan, setting perangkat, dan dukungan teknisi</div>
                </div>
              </div>

              {/* 4 Process Cards Flow */}
              <div className="grid grid-cols-4 gap-2.5 relative">
                {businessModelWorkflows[0].steps.map((st, i) => (
                  <div key={i} className="p-3 rounded-xl bg-white border border-slate-200 flex flex-col justify-between shadow-xs">
                    <div>
                      <div className="text-[9px] font-bold text-[#F5A623] mb-1">TAHAP 0{st.step}</div>
                      <div className="text-[11px] font-black text-[#0D2346] leading-tight mb-1.5">{st.title}</div>
                      <div className="text-[9px] text-slate-500 leading-snug">{st.subtitle}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Workflow 2: Pengadaan Kebutuhan Barang / Kantor */}
            <div className="p-5 rounded-2xl bg-amber-50/70 border-2 border-amber-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-lg bg-[#0D2346] text-[#F5A623] font-black text-sm flex items-center justify-center shadow-sm">
                  2
                </span>
                <div>
                  <h3 className="text-base font-black text-[#0D2346]">Pengadaan Kebutuhan Barang / Kantor</h3>
                  <div className="text-[10px] text-slate-500 font-medium">Siklus pengadaan komoditas, hardware, ATK, dan sarana prasarana</div>
                </div>
              </div>

              {/* 4 Process Cards Flow */}
              <div className="grid grid-cols-4 gap-2.5 relative">
                {businessModelWorkflows[1].steps.map((st, i) => (
                  <div key={i} className="p-3 rounded-xl bg-white border border-amber-200/80 flex flex-col justify-between shadow-xs">
                    <div>
                      <div className="text-[9px] font-bold text-[#0D2346] mb-1">TAHAP 0{st.step}</div>
                      <div className="text-[11px] font-black text-[#0D2346] leading-tight mb-1.5">{st.title}</div>
                      <div className="text-[9px] text-slate-600 leading-snug">{st.subtitle}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Guarantees Box */}
            <div className="p-4 rounded-xl bg-[#0D2346] text-white flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-[#F5A623] flex-shrink-0" />
                <div>
                  <div className="text-xs font-black text-[#F5A623]">Jaminan Legalitas & Pembayaran Fleksibel</div>
                  <div className="text-[10px] text-slate-300">Dukungan faktur pajak resmi, e-Faktur PPN, dan opsi Term of Payment (TOP) instansi.</div>
                </div>
              </div>
              <span className="text-[9px] font-bold bg-white/10 px-2.5 py-1 rounded-md text-amber-300 flex-shrink-0">
                TERVERIFIKASI
              </span>
            </div>

            {/* Footer */}
            <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[9px] font-bold text-slate-400">
              <span>ALUR MODEL BISNIS OPERASIONAL</span>
              <span>05 / 12</span>
            </div>
          </section>

          {/* ============================================================ */}
          {/* SHEET 06 · LINE OF BUSINESS IT (Faithful to Page 6 of Compro) */}
          {/* ============================================================ */}
          <section id="sheet-6" className="sheet relative p-10 flex flex-col justify-between bg-white" style={{ height: '297mm' }}>
            
            {/* Header */}
            <div>
              <div className="flex items-center justify-between border-b-2 border-slate-100 pb-3 mb-4">
                <div>
                  <div className="text-[10px] font-black tracking-widest text-[#F5A623] uppercase mb-0.5">
                    Kemitraan Perangkat & Solusi Teknologi
                  </div>
                  <h2 className="text-3xl font-black text-[#0D2346] tracking-tight">
                    LINE OF BUSINESS IT
                  </h2>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-[#0D2346]">
                    AUTHORIZED BRANDS MATRIX
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-600 mb-4">
                Distribusi resmi dan dukungan purna jual untuk merek-merek teknologi informasi kelas dunia yang terdaftar di company profile Radcom.
              </p>
            </div>

            {/* IT Brand Matrix Table (Page 6 Motif) */}
            <div className="border-2 border-slate-300 rounded-2xl overflow-hidden shadow-xs">
              <div className="bg-[#0D2346] text-white px-4 py-2.5 text-xs font-bold flex justify-between">
                <span>KATEGORI INFRASTRUKTUR IT</span>
                <span className="text-[#F5A623]">BRAND PARTNER UTAMA</span>
              </div>
              
              <div className="divide-y divide-slate-200 text-xs">
                {brandMatrixData.map((bm, idx) => (
                  <div key={idx} className="grid grid-cols-12 p-3 items-center hover:bg-slate-50 transition-colors">
                    <div className="col-span-4 font-black text-[#0D2346] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#F5A623]" />
                      <span>{bm.category}</span>
                    </div>
                    <div className="col-span-8 flex flex-wrap items-center gap-2">
                      {bm.brands.map((b, bidx) => (
                        <span 
                          key={bidx} 
                          className="px-2.5 py-1 rounded-md bg-slate-100 font-bold text-slate-800 border border-slate-200 text-[11px]"
                        >
                          {b.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* General Procurement Scope (ATK, CCTV, Konstruksi, Percetakan) */}
            <div>
              <div className="text-[10px] font-black text-[#0D2346] uppercase tracking-wider mb-2">
                Cakupan Pengadaan Umum Lintas Kategori
              </div>
              <div className="grid grid-cols-3 gap-2.5 text-xs">
                {servicesData.filter(s => s.id !== 'it').slice(0, 6).map((srv, sidx) => (
                  <div key={sidx} className="p-2.5 rounded-xl border border-slate-200 bg-slate-50/70">
                    <div className="font-bold text-[#0D2346] text-[11px] mb-0.5">{srv.title}</div>
                    <div className="text-[9px] text-slate-500 leading-tight truncate">{srv.shortDesc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[9px] font-bold text-slate-400">
              <span>LINE OF BUSINESS & BRAND MATRIX</span>
              <span>06 / 12</span>
            </div>
          </section>

          {/* ============================================================ */}
          {/* SHEET 07 · SURAT PENUNJUKAN DEALER (Pages 7, 8, 9 of Compro) */}
          {/* ============================================================ */}
          <section id="sheet-7" className="sheet relative p-10 flex flex-col justify-between bg-slate-50" style={{ height: '297mm' }}>
            
            {/* Header */}
            <div>
              <div className="flex items-center justify-between border-b-2 border-[#F5A623] pb-3 mb-4">
                <div>
                  <div className="text-[10px] font-black tracking-widest text-[#F5A623] uppercase mb-0.5">
                    Otorisasi & Legalitas Distribusi Resmi
                  </div>
                  <h2 className="text-3xl font-black text-[#0D2346] tracking-tight">
                    SURAT PENUNJUKAN DEALER
                  </h2>
                </div>
                <div className="w-12 h-12 bg-white p-1 rounded-xl shadow-xs border border-slate-200 flex items-center justify-center">
                  <RadcomLogo className="w-full h-full" variant="full" showBackground={false} />
                </div>
              </div>
              <p className="text-xs text-slate-600 mb-4">
                Dokumentasi resmi sertifikasi dan surat penunjukan distributor prinsipal bagi PT. Radcom Solusindo Informatika.
              </p>
            </div>

            {/* 3 Certification Plaques */}
            <div className="space-y-4 my-auto">
              {dealerCertificates.map((cert, cidx) => (
                <div key={cidx} className="p-5 rounded-2xl bg-white border-2 border-slate-200 shadow-sm relative overflow-hidden">
                  
                  {/* Top Header of Plaque */}
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">
                        {cert.issuer}
                      </span>
                      <h3 className="text-sm font-black text-[#0D2346] mt-0.5">
                        {cert.program}
                      </h3>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-amber-100 text-[#0D2346] font-bold text-[9px] border border-amber-300 flex-shrink-0">
                      {cert.statusText}
                    </span>
                  </div>

                  {/* Body description */}
                  <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Metadata Row */}
                  <div className="flex flex-wrap items-center justify-between text-[10px] pt-2 border-t border-slate-100 text-slate-500 font-medium">
                    <div>
                      <span className="text-slate-400">Penerima Penunjukan: </span>
                      <span className="font-bold text-[#0D2346]">{cert.authorizedParty}</span>
                    </div>
                    {cert.partnerId && (
                      <div>
                        <span className="text-slate-400">Partner ID: </span>
                        <span className="font-mono font-bold text-[#DC1E28]">{cert.partnerId}</span>
                      </div>
                    )}
                    <div>
                      <span className="text-slate-400">Tingkat: </span>
                      <span className="font-bold text-[#F5A623]">{cert.partnerType}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Verification Guarantee */}
            <div className="p-4 rounded-xl bg-[#0D2346] text-white flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-[#F5A623] flex-shrink-0" />
              <div className="text-[11px] text-slate-200 leading-snug">
                Semua produk pengadaan dijamin <b>100% original</b>, bergaransi resmi prinsipal, dan didukung sertifikasi kemitraan resmi.
              </div>
            </div>

            {/* Footer */}
            <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[9px] font-bold text-slate-400">
              <span>LEGALITAS & SERTIFIKAT PENUNJUKAN DEALER</span>
              <span>07 / 12</span>
            </div>
          </section>

          {/* ============================================================ */}
          {/* SHEET 08 · DAFTAR REKANAN (Faithful to Page 10 of Compro)     */}
          {/* ============================================================ */}
          <section id="sheet-8" className="sheet relative bg-[#0D2346] text-white flex flex-col justify-between overflow-hidden" style={{ height: '297mm' }}>
            
            {/* Ambient Background & Top Bar */}
            <div className="p-10 pb-4 flex-grow flex flex-col justify-between relative z-10">
              
              {/* Header with Golden Vertical Banner (Page 10 Motif) */}
              <div className="flex items-start justify-between border-b border-white/20 pb-4 mb-4">
                <div className="flex items-center gap-4">
                  <div className="bg-[#F5A623] text-[#0D2346] font-black text-xs px-3 py-2 rounded-lg tracking-widest uppercase">
                    DAFTAR REKANAN
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-white tracking-tight">
                      KLIEN & INSTITUSI TERPERCAYA
                    </h2>
                    <div className="text-[10px] text-slate-300">
                      Portofolio kemitraan pengadaan lintas lembaga negara, BUMN, NGO global, dan korporasi
                    </div>
                  </div>
                </div>
                <div className="text-right text-[10px] text-[#F5A623] font-bold">
                  48+ PARTNER REKANAN RESMI
                </div>
              </div>

              {/* Rekanan Categorized Grid */}
              <div className="space-y-4 my-auto">
                
                {/* Government & Law Enforcement */}
                <div>
                  <div className="text-[10px] font-black text-[#F5A623] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623]" />
                    <span>Instansi Pemerintah & Penegak Hukum</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {clientPartnersList.filter(c => c.category === 'government').map((client, idx) => (
                      <div key={idx} className="p-2 rounded-lg bg-white/10 border border-white/15 text-[11px] font-bold text-white truncate">
                        {client.name}
                      </div>
                    ))}
                  </div>
                </div>

                {/* International NGOs & Conservation */}
                <div>
                  <div className="text-[10px] font-black text-[#F5A623] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623]" />
                    <span>Organisasi Internasional, Konservasi & NGO</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {clientPartnersList.filter(c => c.category === 'international').slice(0, 8).map((client, idx) => (
                      <div key={idx} className="p-2 rounded-lg bg-white/10 border border-white/15 text-[10px] font-bold text-white truncate">
                        {client.name}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enterprises, Energy & Industrial */}
                <div>
                  <div className="text-[10px] font-black text-[#F5A623] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623]" />
                    <span>Korporasi Multinasional, Industri & Migas</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {clientPartnersList.filter(c => c.category === 'enterprise').slice(0, 16).map((client, idx) => (
                      <div key={idx} className="p-2 rounded-lg bg-white/10 border border-white/15 text-[10px] font-bold text-white truncate">
                        {client.name}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Banking, Healthcare, Hospitality & Property */}
                <div>
                  <div className="text-[10px] font-black text-[#F5A623] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623]" />
                    <span>Perbankan, Healthcare, Hospitality & Properti</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {clientPartnersList.filter(c => ['banking', 'hospitality', 'property'].includes(c.category)).slice(0, 12).map((client, idx) => (
                      <div key={idx} className="p-2 rounded-lg bg-white/10 border border-white/15 text-[10px] font-bold text-white truncate">
                        {client.name}
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Bottom Globe Meridian Arc (Page 10 Motif) */}
              <div className="relative pt-2">
                <GlobeArc className="w-full h-16 text-[#F5A623]" color="#F5A623" />
              </div>

            </div>

            {/* Footer */}
            <div className="px-10 py-3 border-t border-white/15 flex items-center justify-between text-[9px] font-bold text-slate-400">
              <span>DAFTAR REKANAN & PORTOFOLIO KLIEN</span>
              <span>08 / 12</span>
            </div>
          </section>

          {/* ============================================================ */}
          {/* SHEET 09 · DAFTAR PROJECT (Faithful to Page 11 of Compro)     */}
          {/* ============================================================ */}
          <section id="sheet-9" className="sheet relative p-10 flex flex-col justify-between bg-[#0D2346] text-white" style={{ height: '297mm' }}>
            
            {/* Header */}
            <div>
              <div className="flex items-center justify-between border-b border-white/20 pb-3 mb-4">
                <div>
                  <div className="text-[10px] font-black tracking-widest text-[#F5A623] uppercase mb-0.5">
                    Studi Kasus & Kontrak Strategis
                  </div>
                  <h2 className="text-3xl font-black text-white tracking-tight">
                    DAFTAR PROJECT UTAMA
                  </h2>
                </div>
                <div className="bg-[#F5A623] text-[#0D2346] font-bold text-[10px] px-2.5 py-1 rounded">
                  HIGH SECURITY & DIPLOMATIC
                </div>
              </div>
              <p className="text-xs text-slate-300 mb-4">
                Implementasi proyek pengadaan dan instalasi berskala tinggi dengan tingkat kepatuhan dan presisi ketat.
              </p>
            </div>

            {/* Project 01: Royal Embassy of Saudi Arabia Military Attache (Page 11 Top) */}
            <div className="p-6 rounded-2xl bg-white/10 border border-white/20 relative overflow-hidden">
              <div className="text-[10px] font-bold text-[#F5A623] uppercase tracking-wider mb-1">
                KEDUTAAN BESAR ARAB SAUDI · JAKARTA
              </div>
              <h3 className="text-base font-black text-white leading-tight mb-2">
                ROYAL EMBASSY OF SAUDI ARABIA OFFICE OF MILITARY ATTACHE JAKARTA
              </h3>
              <p className="text-xs text-amber-200 font-bold mb-3">
                Project Instalasi Pemasangan 30 Camera CCTV NVR
              </p>
              
              <div className="p-3 rounded-xl bg-slate-950/60 border border-white/10 text-[11px] text-slate-300 leading-relaxed mb-3">
                Pelaksanaan instalasi dan integrasi sistem kamera pengawas NVR untuk perimeter keamanan tinggi di kantor Atase Militer Kedutaan Besar Arab Saudi, didukung verifikasi bilateral resmi.
              </div>

              <div className="grid grid-cols-2 gap-2 text-[10px] font-semibold text-slate-300">
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#F5A623]" />
                  <span>30 Titik IP Camera NVR Enkripsi Tinggi</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#F5A623]" />
                  <span>Standar Protokol Keamanan Diplomatik</span>
                </div>
              </div>
            </div>

            {/* Project 02: PT. Integrasi Jaringan Ekosistem (KAI) (Page 11 Bottom) */}
            <div className="p-6 rounded-2xl bg-white/10 border border-white/20 relative overflow-hidden">
              <div className="text-[10px] font-bold text-[#F5A623] uppercase tracking-wider mb-1">
                PT. INTEGRASI JARINGAN EKOSISTEM · SHELTER KAI
              </div>
              <h3 className="text-base font-black text-white leading-tight mb-2">
                PROJECT INSTALASI PEMASANGAN IP CAMERA CCTV & AKSES DOOR 8 SHELTER KAI
              </h3>
              <p className="text-xs text-amber-200 font-bold mb-3">
                Integrasi Pengawasan Perimeter & Access Control Stasiun / Shelter
              </p>
              
              {/* Photo Showcase of KAI Project */}
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="h-28 rounded-xl overflow-hidden border border-white/20 bg-slate-900">
                  <img 
                    src={project01InstallationImg} 
                    alt="Pekerjaan Shelter KAI" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-white/10 text-[11px] text-slate-300 flex flex-col justify-between">
                  <p>
                    Instalasi di 8 titik shelter vital Kereta Api Indonesia mencakup sistem penguncian magnetik otomatis, controller pintu, dan transmisi video jarak jauh.
                  </p>
                  <span className="text-[9px] font-bold text-[#F5A623]">Status: Selesai & Beroperasi Penuh</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[10px] font-semibold text-slate-300">
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#F5A623]" />
                  <span>Access Door 8 Shelter Tersebar</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#F5A623]" />
                  <span>IP Surveillance Outdoor Tahan Cuaca</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-2 border-t border-white/15 flex items-center justify-between text-[9px] font-bold text-slate-400">
              <span>PROJECT EXPERIENCE & KONTRAK STRATEGIS</span>
              <span>09 / 12</span>
            </div>
          </section>

          {/* ============================================================ */}
          {/* SHEET 10 · DOKUMENTASI I (Pages 12 & 13 of Compro)           */}
          {/* ============================================================ */}
          <section id="sheet-10" className="sheet relative p-10 flex flex-col justify-between bg-white" style={{ height: '297mm' }}>
            
            {/* Header */}
            <div>
              <div className="flex items-center justify-between border-b-2 border-slate-100 pb-3 mb-4">
                <div>
                  <div className="text-[10px] font-black tracking-widest text-[#F5A623] uppercase mb-0.5">
                    Bukti Kegiatan & Serah Terima Proyek
                  </div>
                  <h2 className="text-3xl font-black text-[#0D2346] tracking-tight">
                    DOKUMENTASI LAPANGAN I
                  </h2>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-[#0D2346]">
                  INSTANSI NEGARA & LOGISTIK
                </span>
              </div>
              <p className="text-xs text-slate-600 mb-4">
                Dokumentasi pekerjaan di Bareskrim Polri, pengiriman armada logistik, serta penyediaan alat pelindung diri dan furnitur kantor.
              </p>
            </div>

            {/* Photo Grid Section 1: Instansi & Bareskrim (Page 12) */}
            <div>
              <div className="text-[11px] font-black text-[#0D2346] uppercase mb-2 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#0D2346]" />
                <span>Instansi Kepolisian & Rapat Koordinasi Teknis</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <figure className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                  <SmartImage 
                    localSrc="radcom_assets/img-081.png"
                    fallbackUrl="https://images.unsplash.com/photo-1541888946425-d0fbb1861593?auto=format&fit=crop&w=500&q=80"
                    alt="Bareskrim Polri Handover"
                    className="w-full h-24 object-cover"
                  />
                  <figcaption className="p-2 text-[9px] text-slate-600 font-medium">
                    Serah terima di Bareskrim Polri
                  </figcaption>
                </figure>
                <figure className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                  <SmartImage 
                    localSrc="radcom_assets/img-089.png"
                    fallbackUrl="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=500&q=80"
                    alt="Rapat Koordinasi Lapangan"
                    className="w-full h-24 object-cover"
                  />
                  <figcaption className="p-2 text-[9px] text-slate-600 font-medium">
                    Rapat koordinasi bersama jajaran dinas
                  </figcaption>
                </figure>
                <figure className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                  <SmartImage 
                    localSrc="radcom_assets/img-065.png"
                    fallbackUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&q=80"
                    alt="Verifikasi Lapangan"
                    className="w-full h-24 object-cover"
                  />
                  <figcaption className="p-2 text-[9px] text-slate-600 font-medium">
                    Verifikasi teknis di ruang server
                  </figcaption>
                </figure>
              </div>
            </div>

            {/* Photo Grid Section 2: Logistik, APD & Furnitur (Page 13) */}
            <div>
              <div className="text-[11px] font-black text-[#F5A623] uppercase mb-2 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#F5A623]" />
                <span>Pengiriman Truk Logistik, Safety Wear & Furnitur</span>
              </div>
              <div className="grid grid-cols-4 gap-2.5">
                <figure className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                  <SmartImage 
                    localSrc="radcom_assets/img-043.png"
                    fallbackUrl="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=400&q=80"
                    alt="Pemuatan Truk Kargo"
                    className="w-full h-20 object-cover"
                  />
                  <figcaption className="p-1.5 text-[8px] text-slate-600 font-medium truncate">
                    Bongkar muat truk kargo
                  </figcaption>
                </figure>
                <figure className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                  <SmartImage 
                    localSrc="radcom_assets/img-059.png"
                    fallbackUrl="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=400&q=80"
                    alt="Safety Shoes Dr. OSHA & CAT"
                    className="w-full h-20 object-cover"
                  />
                  <figcaption className="p-1.5 text-[8px] text-slate-600 font-medium truncate">
                    Sepatu safety Dr. OSHA & CAT
                  </figcaption>
                </figure>
                <figure className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                  <SmartImage 
                    localSrc="radcom_assets/img-073.png"
                    fallbackUrl="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80"
                    alt="Seragam Kerja ANJ & Plakat"
                    className="w-full h-20 object-cover"
                  />
                  <figcaption className="p-1.5 text-[8px] text-slate-600 font-medium truncate">
                    Seragam kerja safety & plakat
                  </figcaption>
                </figure>
                <figure className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                  <SmartImage 
                    localSrc="radcom_assets/img-057.png"
                    fallbackUrl="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=400&q=80"
                    alt="Kursi Kantor Ergonomis"
                    className="w-full h-20 object-cover"
                  />
                  <figcaption className="p-1.5 text-[8px] text-slate-600 font-medium truncate">
                    Kursi kantor ergonomis
                  </figcaption>
                </figure>
              </div>
            </div>

            {/* Quality Commitment Bar */}
            <div className="p-3 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-700 flex items-center justify-between">
              <span className="font-semibold">Standar Inspeksi: Setiap pengiriman disertai surat jalan resmi dan pemeriksaan fisik.</span>
              <span className="font-bold text-[#0D2346] text-[10px]">100% QUALITY PASS</span>
            </div>

            {/* Footer */}
            <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[9px] font-bold text-slate-400">
              <span>DOKUMENTASI PENGADAAN & LOGISTIK</span>
              <span>10 / 12</span>
            </div>
          </section>

          {/* ============================================================ */}
          {/* SHEET 11 · DOKUMENTASI II (Pages 14, 15, 16, 17 of Compro)   */}
          {/* ============================================================ */}
          <section id="sheet-11" className="sheet relative p-10 flex flex-col justify-between bg-white" style={{ height: '297mm' }}>
            
            {/* Header */}
            <div>
              <div className="flex items-center justify-between border-b-2 border-slate-100 pb-3 mb-4">
                <div>
                  <div className="text-[10px] font-black tracking-widest text-[#F5A623] uppercase mb-0.5">
                    Hardware, Pantry, Lab Teknis & Budaya
                  </div>
                  <h2 className="text-3xl font-black text-[#0D2346] tracking-tight">
                    DOKUMENTASI LAPANGAN II
                  </h2>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-[#0D2346]">
                  PERANGKAT, OPERASIONAL & TIM
                </span>
              </div>
              <p className="text-xs text-slate-600 mb-4">
                Aktivitas staging perangkat keras, pengadaan operasional kantor/pantry, penarikan kabel gedung, serta kebersamaan tim kerja.
              </p>
            </div>

            {/* Grid 1: Gadgets, ATK & Kertas (Page 14) */}
            <div>
              <div className="text-[11px] font-black text-[#0D2346] uppercase mb-2 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#0D2346]" />
                <span>Gadget, Kertas SiDU & Perangkat Komputasi</span>
              </div>
              <div className="grid grid-cols-4 gap-2.5">
                <figure className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                  <SmartImage 
                    localSrc="radcom_assets/img-037.png"
                    fallbackUrl="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=400&q=80"
                    alt="Smartphone & Gadget"
                    className="w-full h-18 object-cover"
                  />
                  <figcaption className="p-1.5 text-[8px] text-slate-600 font-medium truncate">
                    Batch smartphone Infinix & iPhone
                  </figcaption>
                </figure>
                <figure className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                  <SmartImage 
                    localSrc="radcom_assets/img-041.png"
                    fallbackUrl="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=80"
                    alt="Kertas SiDU A4 Palet"
                    className="w-full h-18 object-cover"
                  />
                  <figcaption className="p-1.5 text-[8px] text-slate-600 font-medium truncate">
                    Palet kertas SiDU 80gr & Joyko
                  </figcaption>
                </figure>
                <figure className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                  <SmartImage 
                    localSrc="radcom_assets/img-025.png"
                    fallbackUrl="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=400&q=80"
                    alt="Router Xiaomi & Laptop Axioo"
                    className="w-full h-18 object-cover"
                  />
                  <figcaption className="p-1.5 text-[8px] text-slate-600 font-medium truncate">
                    Router Xiaomi & Laptop Axioo
                  </figcaption>
                </figure>
                <figure className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                  <SmartImage 
                    localSrc="radcom_assets/img-055.png"
                    fallbackUrl="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80"
                    alt="Kebutuhan Pantry & Groceries"
                    className="w-full h-18 object-cover"
                  />
                  <figcaption className="p-1.5 text-[8px] text-slate-600 font-medium truncate">
                    Kebutuhan pantry & konsumsi
                  </figcaption>
                </figure>
              </div>
            </div>

            {/* Grid 2: Workbench & Installation (Page 15) */}
            <div>
              <div className="text-[11px] font-black text-[#F5A623] uppercase mb-2 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#F5A623]" />
                <span>Teknisi Lab, Server Rack & Instalasi Plafon</span>
              </div>
              <div className="grid grid-cols-4 gap-2.5">
                <figure className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                  <SmartImage 
                    localSrc="radcom_assets/img-061.png"
                    fallbackUrl="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=400&q=80"
                    alt="Staging Multi Laptop"
                    className="w-full h-18 object-cover"
                  />
                  <figcaption className="p-1.5 text-[8px] text-slate-600 font-medium truncate">
                    Workbench laptop massal
                  </figcaption>
                </figure>
                <figure className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                  <SmartImage 
                    localSrc="radcom_assets/img-076.png"
                    fallbackUrl="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=400&q=80"
                    alt="Server Rack Cabling"
                    className="w-full h-18 object-cover"
                  />
                  <figcaption className="p-1.5 text-[8px] text-slate-600 font-medium truncate">
                    Cabling di server rack
                  </figcaption>
                </figure>
                <figure className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                  <SmartImage 
                    localSrc="radcom_assets/img-035.png"
                    fallbackUrl="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80"
                    alt="Pemasangan Plafon & Ducting"
                    className="w-full h-18 object-cover"
                  />
                  <figcaption className="p-1.5 text-[8px] text-slate-600 font-medium truncate">
                    Instalasi kabel plafon & ducting
                  </figcaption>
                </figure>
                <figure className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                  <SmartImage 
                    localSrc="radcom_assets/img-077.png"
                    fallbackUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80"
                    alt="Perayaan 17 Tahun Radcom"
                    className="w-full h-18 object-cover"
                  />
                  <figcaption className="p-1.5 text-[8px] text-slate-600 font-medium truncate">
                    HUT ke-17 & kekeluargaan tim
                  </figcaption>
                </figure>
              </div>
            </div>

            {/* Team Culture Highlight Banner */}
            <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-[#0D2346] flex items-center justify-between">
              <span className="font-bold">Dedikasi Sumber Daya Manusia: Tim teknisi handal, disiplin, jujur, dan berintegritas.</span>
              <span className="font-black text-[#DC1E28]">SOLID TEAMWORK</span>
            </div>

            {/* Footer */}
            <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[9px] font-bold text-slate-400">
              <span>DOKUMENTASI OPERASIONAL & BUDAYA PERUSAHAAN</span>
              <span>11 / 12</span>
            </div>
          </section>

          {/* ============================================================ */}
          {/* SHEET 12 · PENUTUP & LEGALITAS KONTAK (Page 18 of Compro)     */}
          {/* ============================================================ */}
          <section id="sheet-12" className="sheet relative p-12 flex flex-col justify-between bg-[#0D2346] text-white" style={{ height: '297mm' }}>
            
            {/* Top Golden Arch Frame (Page 18 Motif) */}
            <div className="flex flex-col items-center text-center pt-4">
              <WheatCrest className="w-14 h-14 text-[#F5A623] mb-2" />
              
              <div className="w-20 h-20 rounded-2xl bg-white p-2 shadow-xl border border-white/20 flex items-center justify-center mb-4">
                <RadcomLogo className="w-full h-full" variant="full" showBackground={false} />
              </div>

              <h2 className="text-3xl font-black text-white tracking-wide uppercase mb-1">
                PT RADCOM SOLUSINDO INFORMATIKA
              </h2>
              <div className="w-16 h-1 bg-[#F5A623] rounded-full my-3" />
            </div>

            {/* Tax Legality Statement (Exact Official Text from Page 18) */}
            <div className="max-w-lg mx-auto p-6 rounded-2xl bg-white/10 border-2 border-[#F5A623]/80 text-center shadow-lg my-auto">
              <span className="text-[10px] font-black text-[#F5A623] tracking-widest uppercase block mb-1">
                STATUS PERPAJAKAN & FAKTUR RESMI
              </span>
              <p className="text-sm font-bold text-white leading-relaxed">
                Perusahaan pengadaan barang dan jasa dengan pertambahan nilai pajak dan dapat mengeluarkan faktur pajak.
              </p>
              <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5A623] text-[#0D2346] font-black text-[10px]">
                <Check className="w-3.5 h-3.5" />
                <span>PKP TERDAFTAR RESMI (e-Faktur PPN Valid)</span>
              </div>
            </div>

            {/* Official Contact Directory (Page 18 Motif) */}
            <div className="max-w-md mx-auto w-full space-y-3">
              
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-[#F5A623] text-[#0D2346] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[9px] font-bold text-slate-400 uppercase">Phone (Kantor)</div>
                  <div className="text-xs font-bold text-white">{companyInfo.phone}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-[#F5A623] text-[#0D2346] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[9px] font-bold text-slate-400 uppercase">Mobile / WhatsApp Resmi</div>
                  <div className="text-xs font-bold text-white">{companyInfo.mobile}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-[#F5A623] text-[#0D2346] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[9px] font-bold text-slate-400 uppercase">Email Korespondensi</div>
                  <div className="text-xs font-bold text-white">{companyInfo.email}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-[#F5A623] text-[#0D2346] flex items-center justify-center flex-shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[9px] font-bold text-slate-400 uppercase">Website Resmi</div>
                  <div className="text-xs font-bold text-white">{companyInfo.website}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-[#F5A623] text-[#0D2346] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[9px] font-bold text-slate-400 uppercase">Alamat Kantor</div>
                  <div className="text-xs font-bold text-white">{companyInfo.fullAddress}</div>
                </div>
              </div>

            </div>

            {/* Footer Copyright */}
            <div className="pt-4 border-t border-white/15 flex items-center justify-between text-[9px] font-bold text-slate-400">
              <span>© {new Date().getFullYear()} PT. RADCOM SOLUSINDO INFORMATIKA</span>
              <span>12 / 12 · BACK COVER</span>
            </div>

          </section>

        </div>
      </div>
    </div>
  );
};
