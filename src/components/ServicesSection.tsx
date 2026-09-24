import React, { useState } from 'react';
import { 
  Server, ShieldAlert, Briefcase, Printer, FileText, 
  Building2, Wrench, CheckCircle2, ArrowUpRight, Check, Search
} from 'lucide-react';
import { servicesData } from '../data/companyData';
import { ServiceCategory } from '../types';
import { SmartImage } from './SmartImage';

interface ServicesSectionProps {
  onSelectServiceForRfq: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForRfq,
}) => {
  const [selectedId, setSelectedId] = useState<string>(servicesData[0].id);
  const [filterQuery, setFilterQuery] = useState('');

  const activeService = servicesData.find(s => s.id === selectedId) || servicesData[0];

  const filteredServices = servicesData.filter(s => 
    s.title.toLowerCase().includes(filterQuery.toLowerCase()) ||
    s.shortDesc.toLowerCase().includes(filterQuery.toLowerCase()) ||
    s.items.some(item => item.toLowerCase().includes(filterQuery.toLowerCase()))
  );

  const getIcon = (code: string) => {
    switch (code) {
      case 'IT': return <Server className="w-5 h-5 text-[#F5A623]" />;
      case 'CCTV': return <ShieldAlert className="w-5 h-5 text-[#F5A623]" />;
      case 'OFF': return <Briefcase className="w-5 h-5 text-[#F5A623]" />;
      case 'TON': return <Printer className="w-5 h-5 text-[#F5A623]" />;
      case 'PRN': return <FileText className="w-5 h-5 text-[#F5A623]" />;
      case 'CON': return <Building2 className="w-5 h-5 text-[#F5A623]" />;
      case 'INF': return <Wrench className="w-5 h-5 text-[#F5A623]" />;
      default: return <CheckCircle2 className="w-5 h-5 text-[#F5A623]" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-widest mb-3">
              <span className="w-6 h-0.5 bg-[#F5A623]"></span>
              04 · Line of Business
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Solusi Lengkap Lintas Kategori
            </h2>
            <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-2xl">
              Radcom berkembang dari bidang IT menuju pengadaan terintegrasi untuk segala kebutuhan perusahaan, kantor, dan fasilitas operasional.
            </p>
          </div>

          {/* Search bar inside services */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Cari komoditas / layanan..."
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#F5A623] transition-colors"
            />
          </div>
        </div>

        {/* 8 Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {filteredServices.map((service) => {
            const isSelected = service.id === selectedId;
            return (
              <button
                key={service.id}
                onClick={() => setSelectedId(service.id)}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between min-h-[110px] ${
                  isSelected
                    ? 'bg-amber-950/70 border-[#F5A623] shadow-lg shadow-amber-500/10 -translate-y-1'
                    : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-2">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    isSelected ? 'bg-amber-500/20 text-amber-300' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {getIcon(service.code)}
                  </div>
                  <span className={`text-[10px] font-black tracking-wider ${
                    isSelected ? 'text-[#F5A623]' : 'text-slate-500'
                  }`}>
                    {service.code}
                  </span>
                </div>
                <div>
                  <h4 className={`text-xs font-bold leading-snug line-clamp-2 ${
                    isSelected ? 'text-white' : 'text-slate-300'
                  }`}>
                    {service.title}
                  </h4>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Category Detail Panel */}
        <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 lg:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info & Items */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold">
                  {activeService.code} · {activeService.highlight}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  {activeService.title}
                </h3>
                <p className="mt-2 text-slate-300 text-sm leading-relaxed">
                  {activeService.fullDesc}
                </p>
              </div>

              {/* Items checklist */}
              <div className="pt-2">
                <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Ruang Lingkup & Cakupan Pengadaan:
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeService.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-950/70 border border-slate-800/80 text-xs text-slate-200">
                      <Check className="w-3.5 h-3.5 text-[#F5A623] flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onSelectServiceForRfq(activeService.title)}
                  className="px-5 py-3 rounded-xl bg-[#F5A623] text-slate-950 font-bold text-xs hover:bg-amber-400 transition-all flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Minta Penawaran untuk {activeService.title}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Showcase Photo */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl relative aspect-4/3">
                <SmartImage
                  fallbackUrl={activeService.imageUrl}
                  alt={activeService.title}
                  className="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex items-end p-6">
                  <div>
                    <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block mb-1">
                      Katalog Resmi Radcom
                    </span>
                    <h4 className="text-white text-base font-bold">
                      {activeService.title}
                    </h4>
                    <p className="text-xs text-slate-300">
                      {activeService.shortDesc}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Banner Quote */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-amber-950/50 border border-amber-500/20 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#F5A623] animate-pulse" />
            <p className="text-sm font-semibold text-slate-200">
              Satu partner untuk menghubungkan seluruh kebutuhan pengadaan dengan solusi tepat, cepat, dan bergaransi.
            </p>
          </div>
          <span className="text-xs font-bold text-[#F5A623]">
            RADCOM · Solusi Korporasi & Pemerintahan
          </span>
        </div>

      </div>
    </section>
  );
};
