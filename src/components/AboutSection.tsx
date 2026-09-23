import React from 'react';
import { Target, Compass, Award, CheckCircle2, Zap, Users, Shield, Cpu, RefreshCw, ShoppingCart, HelpCircle, ExternalLink } from 'lucide-react';
import { businessModels, coreValues, officialStores } from '../data/companyData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section 01: Tentang Radcom */}
        <div>
          <div className="inline-flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-widest mb-3">
            <span className="w-6 h-0.5 bg-cyan-400"></span>
            01 · Tentang Radcom
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Siapa Radcom Solusindo Informatika?
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-4xl leading-relaxed">
            <strong>PT. Radcom Solusindo Informatika</strong> adalah perusahaan pengadaan barang dan jasa yang berdiri pada <strong>4 Januari 2004</strong>. Radcom berawal dari bidang Teknologi Informasi dan kemudian berkembang merambah pengadaan berbagai kebutuhan perusahaan secara komprehensif.
          </p>

          {/* Quote Banner */}
          <div className="my-8 p-6 rounded-2xl bg-gradient-to-r from-cyan-950/60 to-slate-800/80 border-l-4 border-cyan-400 text-slate-100 shadow-md">
            <p className="text-lg sm:text-xl font-bold italic">
              “Menjadi perusahaan pengadaan kebutuhan institusi terlengkap yang dapat mensupport semua kebutuhan kantor dengan service excellent.”
            </p>
          </div>

          {/* Two Column Narrative */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-7">
              <div className="flex items-center gap-3 text-cyan-400 mb-4">
                <Compass className="w-5 h-5" />
                <h3 className="text-xl font-bold text-white">Perjalanan Bisnis</h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Perkembangan Radcom berawal dari integrasi sistem dan hardware TI, kemudian berkembang mencakup kebutuhan <strong>IT, konstruksi & sipil, alat tulis kantor (ATK), tinta & toner, percetakan, CCTV & access door</strong>, serta sarana prasarana penunjang gedung.
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Komitmen perusahaan adalah menyajikan citra kerja profesional, memberikan solusi atas kebutuhan pelanggan, dan memberikan pelayanan terbaik demi mencapai kepuasan serta kepercayaan pelanggan berkelanjutan.
              </p>
            </div>

            <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-7">
              <div className="flex items-center gap-3 text-cyan-400 mb-4">
                <Target className="w-5 h-5" />
                <h3 className="text-xl font-bold text-white">Posisi Radcom di Industri</h3>
              </div>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>Partner pengadaan kebutuhan institusi, BUMN, dan korporasi swasta.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>Berawal dari spesialisasi mendalam di bidang Teknologi Informasi.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>Memiliki cakupan kebutuhan lintas kategori (One-stop procurement).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>Mengutamakan standar mutu layanan, akurasi pengerjaan, dan kecepatan.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>Berorientasi murni pada solusi terukur sesuai anggaran pelanggan.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* E-Procurement Badges (LPSE, e-Catalogue, UMK PaDi, SIPLah) */}
          <div className="mt-8 p-5 rounded-2xl bg-slate-800/40 border border-slate-700/60">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <span>Kanal & Portal Pengadaan Resmi Terdaftar</span>
              <span className="text-cyan-400 font-medium text-[11px]">LPSE · LKPP e-Katalog · PaDi UMKM BUMN · SIPLah Gramedia</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              {/* 01. LPSE */}
              <div className="bg-white rounded-xl p-2.5 flex items-center justify-center h-20 shadow-sm border border-slate-200 relative group">
                <img src="/01-LPSE.jpg" alt="LPSE Terdaftar" className="max-h-full max-w-full object-contain" />
                <span className="absolute bottom-1 right-2 text-[9px] font-semibold text-slate-400 hidden group-hover:block bg-white/90 px-1 rounded shadow-xs">
                  Terdaftar
                </span>
              </div>

              {/* 02. LKPP e-Katalog */}
              <div className="bg-white rounded-xl p-2.5 flex items-center justify-center h-20 shadow-sm border border-slate-200 relative group">
                <img src="/01-eCatalogue.jpg" alt="e-Katalog LKPP" className="max-h-full max-w-full object-contain" />
                <span className="absolute bottom-1 right-2 text-[9px] font-semibold text-slate-400 hidden group-hover:block bg-white/90 px-1 rounded shadow-xs">
                  e-Purchasing
                </span>
              </div>

              {/* 03. PaDi UMKM BUMN (Interactive Official Store Link) */}
              <div className="bg-white rounded-xl p-2.5 flex items-center justify-center h-20 shadow-sm border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all duration-200 relative group cursor-pointer">
                <a
                  href={officialStores.padiUmkm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-20 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
                  title="Kunjungi Toko Resmi PT. Radcom Solusindo Informatika di PaDi UMKM BUMN (padiumkm.id)"
                  aria-label="Kunjungi Toko Resmi PaDi UMKM PT. Radcom Solusindo Informatika"
                />
                <img 
                  src="/01-umk-padi.jpg" 
                  alt="PaDi UMKM BUMN - PT Radcom Solusindo Informatika" 
                  className="max-h-full max-w-full object-contain transition-transform duration-200 group-hover:scale-105" 
                />
                
                {/* Idle / Hover Action Badge */}
                <div className="absolute top-1.5 right-1.5 flex items-center gap-1 bg-amber-500/10 text-amber-800 border border-amber-300/80 px-1.5 py-0.5 rounded-full text-[9px] font-bold group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors pointer-events-none z-10 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="hidden sm:inline">Store</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </div>

                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-30 whitespace-nowrap bg-slate-950 text-amber-300 text-[10px] font-bold py-0.5 px-2 rounded-md shadow-md border border-slate-700">
                  Buka Toko PaDi UMKM ↗
                </div>
              </div>

              {/* 04. SIPLah Kemendikbud (Interactive Official Store Link) */}
              <div className="bg-white rounded-xl p-2.5 flex items-center justify-center h-20 shadow-sm border border-slate-200 hover:border-cyan-500 hover:shadow-lg transition-all duration-200 relative group cursor-pointer">
                <a
                  href={officialStores.siplahGramedia}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-20 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  title="Kunjungi Toko Resmi Penyedia PT. Radcom Solusindo Informatika di SIPLah Gramedia (siplahgramedia.id)"
                  aria-label="Kunjungi Toko Resmi SIPLah Gramedia PT. Radcom Solusindo Informatika"
                />
                <img 
                  src="/01-siplah.jpg" 
                  alt="SIPLah Kemendikbud - PT Radcom Solusindo Informatika" 
                  className="max-h-full max-w-full object-contain transition-transform duration-200 group-hover:scale-105" 
                />
                
                {/* Idle / Hover Action Badge */}
                <div className="absolute top-1.5 right-1.5 flex items-center gap-1 bg-cyan-500/10 text-cyan-800 border border-cyan-300/80 px-1.5 py-0.5 rounded-full text-[9px] font-bold group-hover:bg-cyan-500 group-hover:text-white transition-colors pointer-events-none z-10 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="hidden sm:inline">Penyedia</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </div>

                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-30 whitespace-nowrap bg-slate-950 text-cyan-300 text-[10px] font-bold py-0.5 px-2 rounded-md shadow-md border border-slate-700">
                  Buka Toko SIPLah Gramedia ↗
                </div>
              </div>
            </div>

            {/* Quick Helper caption */}
            <div className="mt-3 flex flex-wrap items-center justify-between text-[11px] text-slate-400 gap-2 border-t border-slate-700/40 pt-2.5">
              <span className="flex items-center gap-1 text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
                <strong>Live E-Procurement:</strong> Klik logo <strong>PaDi UMKM</strong> atau <strong>SIPLah</strong> untuk langsung mengakses etalase penyedia resmi.
              </span>
              <div className="flex items-center gap-3 text-[10px]">
                <a 
                  href={officialStores.padiUmkm} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-amber-400 hover:underline flex items-center gap-1 font-semibold"
                >
                  Etalase PaDi UMKM <ExternalLink className="w-3 h-3" />
                </a>
                <span className="text-slate-600">|</span>
                <a 
                  href={officialStores.siplahGramedia} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-cyan-400 hover:underline flex items-center gap-1 font-semibold"
                >
                  Etalase SIPLah Gramedia <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Section 02: Visi, Misi & Nilai Kerja */}
        <div id="vision-mission" className="pt-10 border-t border-slate-800">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-widest mb-3">
            <span className="w-6 h-0.5 bg-cyan-400"></span>
            02 · Arah Perusahaan
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Visi, Misi & Nilai Kerja
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
            {/* Visi Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-cyan-950/80 border border-cyan-500/30 rounded-2xl p-8 flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-xs font-bold text-cyan-400 tracking-wider uppercase">VISI UTAMA</span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mt-3 leading-snug">
                  Pengadaan terlengkap dengan service excellent.
                </h3>
                <p className="mt-4 text-slate-300 text-sm leading-relaxed">
                  Menjadi perusahaan pengadaan kebutuhan institusi terlengkap yang dapat mensupport semua kebutuhan kantor dengan service excellent.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-cyan-500/20 flex items-center gap-3">
                <Award className="w-6 h-6 text-cyan-400" />
                <span className="text-xs font-semibold text-cyan-300">Standar Kualitas & Kepuasan Pelanggan</span>
              </div>
            </div>

            {/* Misi Card */}
            <div className="lg:col-span-7 bg-slate-800/60 border border-slate-700/60 rounded-2xl p-8">
              <span className="text-xs font-bold text-sky-400 tracking-wider uppercase">MISI PERUSAHAAN</span>
              <h3 className="text-xl font-bold text-white mt-2 mb-4">Langkah Strategis Radcom</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs text-slate-300">
                <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-700/40">
                  <strong className="text-cyan-300 block mb-1">01. Grand Value</strong>
                  Memberikan Grand Value dan dampak positif nyata bagi setiap organisasi rekanan.
                </div>
                <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-700/40">
                  <strong className="text-cyan-300 block mb-1">02. Standar Mutu & Efisiensi</strong>
                  Berorientasi pada kepuasan pelanggan, standar mutu tinggi, kecepatan, dan efisiensi.
                </div>
                <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-700/40">
                  <strong className="text-cyan-300 block mb-1">03. Integritas SDM</strong>
                  Meningkatkan kualitas individu tim yang jujur, profesional, dan bermoral mulia.
                </div>
                <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-700/40">
                  <strong className="text-cyan-300 block mb-1">04. Solusi TI Menyeluruh</strong>
                  Memberikan solusi Teknologi Informasi secara menyeluruh sesuai dinamika kebutuhan.
                </div>
                <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-700/40">
                  <strong className="text-cyan-300 block mb-1">05. Cepat & Tepat</strong>
                  Memberikan layanan pengadaan secara cepat, responsif, dan tepat spesifikasi.
                </div>
                <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-700/40">
                  <strong className="text-cyan-300 block mb-1">06. Product Focus</strong>
                  Menghadirkan layanan berbasis keunggulan produk sesuai kebutuhan pelanggan.
                </div>
              </div>
            </div>
          </div>

          {/* Nilai-nilai Kerja */}
          <div className="mt-12">
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6">
              Nilai Kerja yang Ditanamkan (Core Values)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {coreValues.map((v, i) => (
                <div key={i} className="p-5 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-cyan-500/40 transition-colors">
                  <div className="text-cyan-400 font-bold text-base mb-1.5 flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    <span>{v.name}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 03: Model Bisnis */}
        <div id="business-model" className="pt-10 border-t border-slate-800">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-widest mb-3">
            <span className="w-6 h-0.5 bg-cyan-400"></span>
            03 · Model Bisnis
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Bagaimana Radcom Membantu Kebutuhan Anda?
          </h2>
          <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-3xl">
            Model bisnis Radcom dibangun di atas 3 pilar layanan utama untuk menjawab seluruh siklus pengadaan institusi.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {businessModels.map((biz, idx) => (
              <div 
                key={idx} 
                className={`rounded-2xl p-7 flex flex-col justify-between transition-all hover:-translate-y-1 ${
                  idx === 0
                    ? 'bg-gradient-to-b from-slate-900 to-slate-800 border border-slate-700'
                    : idx === 1
                    ? 'bg-gradient-to-b from-blue-950 to-slate-900 border border-blue-500/30'
                    : 'bg-gradient-to-b from-cyan-950 to-slate-900 border border-cyan-500/30'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-black tracking-widest opacity-60 mb-4">
                    <span>PILAR LAYANAN</span>
                    <span className="text-xl font-extrabold">{biz.number}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{biz.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {biz.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-700/50 space-y-2">
                  {biz.features.map((feat, fidx) => (
                    <div key={fidx} className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Keunggulan Pendekatan */}
          <div className="mt-8 p-6 rounded-2xl bg-slate-800/70 border border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <h4 className="text-base font-bold text-white">Keunggulan Pendekatan Terintegrasi Radcom</h4>
              <p className="text-xs text-slate-300 max-w-2xl">
                Cakupan kebutuhan luas, orientasi solusi praktis, kepatuhan jadwal, serta pelayanan purna jual untuk membangun kepuasan dan kepercayaan jangka panjang.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
                One-Stop Solution
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold">
                SLA Garansi Resmi
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
