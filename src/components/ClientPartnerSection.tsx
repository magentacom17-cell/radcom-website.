import React, { useState } from 'react';
import { 
  Building2, 
  Award, 
  ShieldCheck, 
  Globe2, 
  CheckCircle2, 
  Search, 
  ExternalLink,
  Sparkles,
  Layers,
  X,
  ShieldAlert,
  ArrowUpRight
} from 'lucide-react';
import { dealerCertificates, clientPartnersList, taxLegalityInfo } from '../data/companyData';
import { ClientPartner } from '../types';
import { GlobeArc } from './ComproDecorative';
import { ClientLogos, GenericPartnerLogo } from '../data/clientLogos';
import { 
  officialLocalLogos, 
  getOfficialLogoUrl, 
  getSecondaryLogoUrl, 
  getTertiaryLogoUrl 
} from '../data/officialLogos';

// Component for displaying 100% authentic, real logos of every company
const PartnerLogo: React.FC<{
  client: ClientPartner;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}> = ({ client, size = 'md', className = '' }) => {
  const [attempt, setAttempt] = useState<number>(0);

  const domain = client.domain || '';

  // Determine current image source based on fallback attempts
  const getSrc = () => {
    // 1. Primary: Verified official local file (e.g. Bareskrim Polri, KAI, ICRC, CARE, Baterai ABC, Erlangga, etc.)
    if (domain && officialLocalLogos[domain] && attempt === 0) {
      return officialLocalLogos[domain];
    }
    // 2. Google High-Resolution Favicon (sz=128)
    if (attempt === 1) {
      return getOfficialLogoUrl(domain);
    }
    // 3. Google Favicon V2 endpoint
    if (attempt === 2) {
      return getSecondaryLogoUrl(domain);
    }
    // 4. Unavatar service
    if (attempt === 3) {
      return getTertiaryLogoUrl(domain);
    }
    return null;
  };

  const currentSrc = getSrc();
  const SvgLogo = domain && ClientLogos[domain] ? ClientLogos[domain] : null;

  const sizeClasses = {
    sm: 'w-8 h-8 text-[11px]',
    md: 'w-12 h-12 text-xs',
    lg: 'w-16 h-16 text-sm',
    xl: 'w-20 h-20 text-base',
  };

  return (
    <div className={`relative flex items-center justify-center rounded-xl bg-white p-1.5 shadow-md border border-slate-700/50 overflow-hidden flex-shrink-0 transition-all duration-300 ${sizeClasses[size]} ${className}`}>
      {currentSrc ? (
        <img
          src={currentSrc}
          alt={`Logo Resmi ${client.name}`}
          loading="lazy"
          className="w-full h-full object-contain"
          onError={() => setAttempt(prev => prev + 1)}
        />
      ) : SvgLogo ? (
        <SvgLogo className="w-full h-full object-contain" />
      ) : (
        <GenericPartnerLogo name={client.shortName || client.name} category={client.category} />
      )}
    </div>
  );
};

export const ClientPartnerSection: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activePartnerModal, setActivePartnerModal] = useState<ClientPartner | null>(null);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const categories = [
    { id: 'all', label: 'Semua Rekanan' },
    { id: 'government', label: 'Pemerintah & BUMN' },
    { id: 'international', label: 'NGO & Global' },
    { id: 'enterprise', label: 'Industri & Migas' },
    { id: 'banking', label: 'Perbankan & Finance' },
    { id: 'hospitality', label: 'Kesehatan & Hotel' },
    { id: 'property', label: 'Properti & Arsitektur' },
  ];

  const filteredClients = clientPartnersList.filter(client => {
    const matchesCategory = filterCategory === 'all' || 
      (filterCategory === 'hospitality' && ['hospitality', 'health'].includes(client.category)) ||
      client.category === filterCategory;
    const matchesSearch = client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (client.shortName && client.shortName.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (client.highlight && client.highlight.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Top highlight partners for the floating continuous marquee
  const marqueePartnersRow1 = clientPartnersList.slice(0, 26);
  const marqueePartnersRow2 = clientPartnersList.slice(26);

  return (
    <section id="clients-partners" className="py-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* ============================================================ */}
        {/* SECTION HEADER                                               */}
        {/* ============================================================ */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-widest mb-3">
              <span className="w-6 h-0.5 bg-[#F5A623]"></span>
              05 · Rekanan & Penunjukan Dealer Resmi
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Kemitraan Resmi & Daftar Rekanan
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl">
              Tercatat dalam dokumen resmi Company Profile Radcom: sertifikasi kemitraan prinsipal IT terkemuka serta rekam jejak pengadaan resmi di 48+ institusi dan korporasi terkemuka di Indonesia.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center shadow-md">
              <div className="text-2xl font-black text-[#F5A623]">48+</div>
              <div className="text-[11px] text-slate-400">Institusi Rekanan</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center shadow-md">
              <div className="text-2xl font-black text-[#F5A623]">PKP</div>
              <div className="text-[11px] text-slate-400">e-Faktur PPN</div>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* SURAT PENUNJUKAN DEALER RESMI                                */}
        {/* ============================================================ */}
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-6">
            <Award className="w-4 h-4 text-[#F5A623]" />
            <span>Surat Penunjukan Dealer & Kemitraan Prinsipal (Authorized Partner)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dealerCertificates.map((cert) => (
              <div 
                key={cert.id}
                className="rounded-2xl p-6 bg-slate-900/90 border border-slate-800 hover:border-amber-400/40 transition-all flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider truncate">
                      {cert.issuer}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-amber-400/10 text-amber-400 font-bold text-[9px] border border-amber-400/30 flex-shrink-0">
                      {cert.statusText}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors mb-2 leading-snug">
                    {cert.program}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Level: <strong className="text-slate-200">{cert.partnerType}</strong></span>
                  {cert.partnerId && (
                    <span className="font-mono text-amber-400 font-bold">ID: {cert.partnerId}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================ */}
        {/* IDLE FLOATING MARQUEE BANNER (LOGO MENGAMBANG OTOMATIS)       */}
        {/* ============================================================ */}
        <div className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800 relative overflow-hidden shadow-2xl space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F5A623] animate-ping" />
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#F5A623]" />
                Showcase Logo Mengambang (Idle Floating Motion)
              </span>
            </div>
            <div className="text-[11px] text-slate-400 flex items-center gap-2">
              <span>*Hover untuk jeda interaktif</span>
              <button 
                onClick={() => setIsPaused(!isPaused)}
                className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-[10px] text-slate-300 transition-colors"
              >
                {isPaused ? 'Lanjutkan Animasi' : 'Jeda Gerak'}
              </button>
            </div>
          </div>

          {/* Marquee Row 1 - Right to Left */}
          <div className="relative overflow-hidden py-2 mask-gradient">
            <div 
              className={`flex gap-3.5 ${isPaused ? '' : 'animate-marquee-track'}`}
              style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
            >
              {[...marqueePartnersRow1, ...marqueePartnersRow1].map((client, i) => (
                <div
                  key={`marquee-1-${i}`}
                  onClick={() => setActivePartnerModal(client)}
                  className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-amber-400/60 hover:bg-slate-900 transition-all cursor-pointer group shadow-sm hover:scale-105"
                  title={`${client.name} — Klik untuk detail`}
                >
                  <PartnerLogo client={client} size="sm" className="group-hover:scale-110" />
                  <span className="text-xs font-semibold text-slate-200 group-hover:text-amber-300 whitespace-nowrap transition-colors">
                    {client.shortName || client.name}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400/40 group-hover:bg-[#F5A623]" />
                </div>
              ))}
            </div>
          </div>

          {/* Marquee Row 2 - Left to Right (Reverse) */}
          <div className="relative overflow-hidden py-1">
            <div 
              className={`flex gap-3.5 ${isPaused ? '' : 'animate-marquee-track-reverse'}`}
              style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
            >
              {[...marqueePartnersRow2, ...marqueePartnersRow2].map((client, i) => (
                <div
                  key={`marquee-2-${i}`}
                  onClick={() => setActivePartnerModal(client)}
                  className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-amber-400/60 hover:bg-slate-900 transition-all cursor-pointer group shadow-sm hover:scale-105"
                  title={`${client.name} — Klik untuk detail`}
                >
                  <PartnerLogo client={client} size="sm" className="group-hover:scale-110" />
                  <span className="text-xs font-semibold text-slate-200 group-hover:text-amber-300 whitespace-nowrap transition-colors">
                    {client.shortName || client.name}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400/40 group-hover:bg-[#F5A623]" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* DAFTAR REKANAN CLIENT GRID DENGAN LOGO BERGAMBANG            */}
        {/* ============================================================ */}
        <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 relative overflow-hidden shadow-2xl">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                <Globe2 className="w-4 h-4 text-[#F5A623]" />
                <span>Portofolio Instansi & Korporasi Rekanan</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Daftar Rekanan Terverifikasi ({filteredClients.length})
              </h3>
            </div>

            {/* Client Search Bar */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari nama klien / lembaga..."
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#F5A623] transition-colors"
              />
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-slate-950/80 rounded-xl border border-slate-800 mb-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilterCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  filterCategory === cat.id
                    ? 'bg-[#F5A623] text-slate-950 font-bold shadow-xs'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* ============================================================ */}
          {/* CLIENT LOGO & FLOATING CARDS INTERAKTIF                      */}
          {/* ============================================================ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
            {filteredClients.map((client, idx) => {
              // Staggered floating delay for a natural floating/bobbing idle movement
              const floatDelay = ((idx % 7) * 0.4).toFixed(1);
              const floatDuration = (3.2 + (idx % 4) * 0.5).toFixed(1);

              return (
                <div 
                  key={idx}
                  onClick={() => setActivePartnerModal(client)}
                  style={{
                    animationDelay: `${floatDelay}s`,
                    animationDuration: `${floatDuration}s`,
                  }}
                  className="animate-float-idle hover:[animation-play-state:paused] p-4 rounded-2xl bg-slate-950/80 border border-slate-800/90 hover:border-amber-400/60 hover:bg-slate-900/90 transition-all duration-300 flex items-start gap-3.5 group cursor-pointer shadow-md hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-2 relative overflow-hidden"
                >
                  {/* Subtle hover accent light */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-xl group-hover:bg-amber-500/15 transition-all pointer-events-none" />

                  {/* Logo fetched from Google Favicon Service */}
                  <div className="relative">
                    <PartnerLogo 
                      client={client} 
                      size="md" 
                      className="group-hover:scale-110 group-hover:rotate-1 group-hover:border-amber-400/60 transition-transform duration-300" 
                    />
                    <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-slate-950" title="Rekanan Terverifikasi" />
                  </div>

                  {/* Client Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-1 mb-1">
                      <h4 className="text-xs font-bold text-slate-200 group-hover:text-amber-300 transition-colors leading-snug line-clamp-1">
                        {client.name}
                      </h4>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
                    </div>

                    {client.highlight && (
                      <p className="text-[11px] text-slate-400 group-hover:text-slate-300 leading-snug line-clamp-2 transition-colors">
                        {client.highlight}
                      </p>
                    )}

                    <div className="mt-2 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px] text-slate-500">
                      <span className="capitalize">{client.category}</span>
                      {client.domain && (
                        <span className="font-mono text-slate-400 group-hover:text-amber-400/90 transition-colors">
                          {client.domain}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredClients.length === 0 && (
            <div className="text-center py-12 text-slate-500 text-xs">
              Tidak ditemukan rekanan dengan kata kunci "{searchQuery}".
            </div>
          )}

          {/* Bottom Globe Arc Accent */}
          <div className="pt-8">
            <GlobeArc className="w-full h-12 text-amber-400/40" color="#F5A623" />
          </div>

          {/* Tax Status Banner */}
          <div className="mt-4 p-4 rounded-xl bg-slate-950 border border-amber-400/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs shadow-inner">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-[#F5A623] flex-shrink-0" />
              <span className="text-slate-300">
                <strong className="text-white">Status Legalitas Pajak: </strong>
                {taxLegalityInfo.declaration}
              </span>
            </div>
            <span className="px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 font-bold text-[10px] border border-amber-400/40 flex-shrink-0">
              {taxLegalityInfo.status}
            </span>
          </div>

        </div>

      </div>

      {/* ============================================================ */}
      {/* INTERACTIVE PARTNER DETAIL MODAL                             */}
      {/* ============================================================ */}
      {activePartnerModal && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActivePartnerModal(null)}
        >
          <div 
            className="relative max-w-md w-full bg-slate-900 border border-slate-700/80 rounded-3xl p-6 shadow-2xl space-y-5 animate-in fade-in zoom-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <PartnerLogo client={activePartnerModal} size="lg" />
                <div>
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">
                    {activePartnerModal.category}
                  </span>
                  <h4 className="text-base font-bold text-white leading-snug">
                    {activePartnerModal.name}
                  </h4>
                </div>
              </div>
              <button 
                onClick={() => setActivePartnerModal(null)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Cakupan Pekerjaan / Layanan Radcom
              </span>
              <p className="text-xs text-slate-200 leading-relaxed font-medium">
                {activePartnerModal.highlight || 'Penyediaan komoditas dan perangkat teknologi informasi resmi bergaransi.'}
              </p>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#F5A623]" />
                <span>Dokumen Rekanan Terdaftar</span>
              </div>
              {activePartnerModal.domain && (
                <a
                  href={`https://${activePartnerModal.domain}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-amber-400 hover:underline font-mono text-[11px]"
                >
                  <span>{activePartnerModal.domain}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>

            <button
              onClick={() => setActivePartnerModal(null)}
              className="w-full py-2.5 rounded-xl bg-[#F5A623] text-slate-950 font-bold text-xs hover:bg-amber-400 transition-colors cursor-pointer"
            >
              Tutup Rincian
            </button>
          </div>
        </div>
      )}

    </section>
  );
};
