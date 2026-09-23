import React, { useState } from 'react';
import { 
  Building2, 
  Award, 
  ShieldCheck, 
  Globe2, 
  CheckCircle2, 
  Search, 
  ExternalLink 
} from 'lucide-react';
import { dealerCertificates, clientPartnersList, taxLegalityInfo } from '../data/companyData';
import { GlobeArc } from './ComproDecorative';

export const ClientPartnerSection: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'Semua Rekanan' },
    { id: 'government', label: 'Pemerintah & Polri' },
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
      (client.highlight && client.highlight.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="clients-partners" className="py-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Subtle background ambient */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* ============================================================ */}
        {/* SECTION HEADER                                               */}
        {/* ============================================================ */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-widest mb-3">
              <span className="w-6 h-0.5 bg-amber-400"></span>
              05 · Rekanan & Penunjukan Dealer
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Kemitraan Resmi & Daftar Rekanan
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl">
              Tercatat dalam dokumen resmi Company Profile Radcom: sertifikasi kemitraan prinsipal IT terkemuka serta rekam jejak pengadaan di 48+ institusi dan korporasi terkemuka di Indonesia.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
              <div className="text-2xl font-black text-amber-400">48+</div>
              <div className="text-[11px] text-slate-400">Institusi Rekanan</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
              <div className="text-2xl font-black text-cyan-400">PKP</div>
              <div className="text-[11px] text-slate-400">e-Faktur PPN</div>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* SURAT PENUNJUKAN DEALER RESMI                                */}
        {/* ============================================================ */}
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-6">
            <Award className="w-4 h-4 text-amber-400" />
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
        {/* DAFTAR REKANAN CLIENT GRID                                   */}
        {/* ============================================================ */}
        <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 relative overflow-hidden">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                <Globe2 className="w-4 h-4" />
                <span>Portofolio Instansi & Korporasi Rekanan</span>
              </div>
              <h3 className="text-xl font-bold text-white">Daftar Rekanan Terverifikasi</h3>
            </div>

            {/* Client Search Bar */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari nama klien / lembaga..."
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
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
                    ? 'bg-amber-400 text-slate-950 font-bold shadow-xs'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Client Logo / Badges Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {filteredClients.map((client, idx) => (
              <div 
                key={idx}
                className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-950 transition-all flex flex-col justify-between group"
              >
                <div className="flex items-start justify-between gap-1.5 mb-1.5">
                  <span className="text-xs font-bold text-slate-200 group-hover:text-amber-300 transition-colors leading-snug line-clamp-1">
                    {client.name}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0 mt-1 opacity-60 group-hover:opacity-100" />
                </div>
                {client.highlight && (
                  <p className="text-[10px] text-slate-400 leading-tight line-clamp-2">
                    {client.highlight}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Globe Arc Accent */}
          <div className="pt-8">
            <GlobeArc className="w-full h-12 text-amber-400/40" color="#F5A623" />
          </div>

          {/* Tax Status Banner */}
          <div className="mt-4 p-4 rounded-xl bg-slate-950 border border-amber-400/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-amber-400 flex-shrink-0" />
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
    </section>
  );
};
