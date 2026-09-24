import React from 'react';
import { Phone, Mail, MapPin, Globe, MessageSquare, Clock, ArrowRight, ShieldCheck, ExternalLink } from 'lucide-react';
import { companyInfo, officialStores } from '../data/companyData';

interface ContactSectionProps {
  onOpenRfq: () => void;
  onViewDocument: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onOpenRfq,
  onViewDocument,
}) => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div>
          <div className="inline-flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-widest mb-3">
            <span className="w-6 h-0.5 bg-[#F5A623]"></span>
            07 · Hubungi Kami
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Let's Work Together.
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg max-w-2xl">
            Untuk kebutuhan pengadaan barang, jasa teknis, tender institusi, atau kontrak pemeliharaan berkala, silakan hubungi tim Radcom melalui saluran resmi di bawah ini.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Info Box */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl space-y-8">
            <h3 className="text-xl font-bold text-white flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F5A623]" />
              <span>Informasi Kontak Resmi Perusahaan</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Phone */}
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
                <div className="flex items-center gap-2.5 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
                  <Phone className="w-4 h-4" />
                  <span>Telepon Kantor</span>
                </div>
                <a 
                  href={`tel:${companyInfo.phone.replace(/[^0-9]/g, '')}`}
                  className="text-base font-bold text-white hover:text-amber-300 transition-colors"
                >
                  {companyInfo.phone}
                </a>
                <p className="text-[11px] text-slate-400 mt-1">Hari Kerja (08.30 - 17.00 WIB)</p>
              </div>

              {/* WhatsApp Mobile */}
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-emerald-500/30">
                <div className="flex items-center gap-2.5 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp & Mobile</span>
                </div>
                <a 
                  href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(
                    'Halo PT. Radcom Solusindo Informatika, kami ingin mengajukan pengadaan barang/jasa kantor.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-bold text-white hover:text-emerald-300 transition-colors flex items-center gap-1.5"
                >
                  <span>{companyInfo.mobile}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-semibold">Aktif</span>
                </a>
                <p className="text-[11px] text-slate-400 mt-1">Konsultasi cepat via WhatsApp</p>
              </div>

              {/* Email */}
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
                <div className="flex items-center gap-2.5 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
                  <Mail className="w-4 h-4" />
                  <span>Email Korespondensi</span>
                </div>
                <a 
                  href={`mailto:${companyInfo.email}`}
                  className="text-base font-bold text-white hover:text-amber-300 transition-colors break-all"
                >
                  {companyInfo.email}
                </a>
                <p className="text-[11px] text-slate-400 mt-1">Kirim RFQ, penawaran & tender</p>
              </div>

              {/* Website */}
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
                <div className="flex items-center gap-2.5 text-purple-400 text-xs font-bold uppercase tracking-wider mb-2">
                  <Globe className="w-4 h-4" />
                  <span>Website Resmi</span>
                </div>
                <span className="text-base font-bold text-white">
                  {companyInfo.website}
                </span>
                <p className="text-[11px] text-slate-400 mt-1">PT. Radcom Solusindo Informatika</p>
              </div>
            </div>

            {/* Address */}
            <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-[#F5A623] flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">Alamat Kantor</span>
                <p className="text-sm font-semibold text-white mt-1">
                  {companyInfo.address}, {companyInfo.area}, {companyInfo.city} {companyInfo.postalCode}
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  DKI Jakarta, Indonesia
                </p>
              </div>
            </div>

            {/* Direct CTA inside contact */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={onOpenRfq}
                className="px-6 py-3 rounded-xl bg-[#F5A623] text-slate-950 font-bold text-xs hover:bg-amber-400 transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-amber-500/20"
              >
                <span>Formulir Permintaan Penawaran</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onViewDocument}
                className="px-5 py-3 rounded-xl bg-slate-800 text-slate-200 border border-slate-700 hover:text-white text-xs font-bold transition-all cursor-pointer"
              >
                Tinjau Format Dokumen A4 (PDF)
              </button>
            </div>
          </div>

          {/* Right Partnership Pitch */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-amber-950/40 via-slate-900 to-slate-950 border border-amber-500/30 shadow-2xl space-y-5">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">KEMITRAAN KORPORAT</span>
              <h4 className="text-2xl font-black text-white leading-snug">
                Butuh partner terpercaya untuk kebutuhan pengadaan perusahaan?
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Radcom siap mendukung pengadaan Anda dengan pendekatan profesional, cepat, tepat, dan berorientasi pada kepuasan pelanggan:
              </p>

              <div className="space-y-3 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <ShieldCheck className="w-4 h-4 text-[#F5A623] flex-shrink-0" />
                  <span>Jaminan Legalitas & Surat Dukungan Pabrikan (Dealer Resmi)</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <Clock className="w-4 h-4 text-[#F5A623] flex-shrink-0" />
                  <span>Pengiriman Tepat Waktu dengan Tim Lapangan Berpengalaman</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <ShieldCheck className="w-4 h-4 text-[#F5A623] flex-shrink-0" />
                  <span>Layanan Garansi & Purna Jual Resmi Komprehensif</span>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 space-y-2">
              <div className="flex items-center justify-between text-slate-300 font-semibold">
                <span>Jam Kerja Kantor:</span>
                <span className="text-[#F5A623]">Senin - Jumat | 08.30 - 17.00 WIB</span>
              </div>
              <p>
                Permintaan konsultasi via WhatsApp dilayani pada jam operasional dan emergency support tersedia bagi rekanan kontrak pemeliharaan (SLA).
              </p>
            </div>
          </div>

        </div>

        {/* Section 08 Back Cover & Footer */}
        <div className="pt-16 border-t border-slate-800 text-center space-y-6">
          <div className="text-3xl font-black tracking-wider text-white">
            RAD<span className="text-[#F5A623]">COM</span>
          </div>
          <div className="w-16 h-1 bg-[#F5A623] mx-auto rounded-full" />
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            One Partner. Many Solutions.
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto">
            PT. Radcom Solusindo Informatika — Pengadaan barang dan jasa untuk kebutuhan perusahaan dan institusi.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={officialStores.padiUmkm}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-amber-400 text-xs text-amber-300 font-medium transition-colors"
            >
              <span>Etalase PaDi UMKM BUMN</span>
              <ExternalLink className="w-3 h-3 text-amber-400" />
            </a>
            <a
              href={officialStores.siplahGramedia}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-cyan-400 text-xs text-cyan-300 font-medium transition-colors"
            >
              <span>Penyedia SIPLah Gramedia</span>
              <ExternalLink className="w-3 h-3 text-cyan-400" />
            </a>
          </div>
          <div className="pt-4 text-[11px] text-slate-500">
            © 2026 PT. Radcom Solusindo Informatika. All rights reserved. · Terdaftar Resmi Sejak 4 Januari 2004.
          </div>
        </div>

      </div>
    </section>
  );
};
