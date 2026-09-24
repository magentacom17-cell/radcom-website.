import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, MessageSquare, Building2, Phone, Mail, User } from 'lucide-react';
import { companyInfo, servicesData } from '../data/companyData';
import { RfqFormData } from '../types';

interface RfqModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const RfqModal: React.FC<RfqModalProps> = ({
  isOpen,
  onClose,
  defaultService,
}) => {
  const [formData, setFormData] = useState<RfqFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    serviceCategory: defaultService || servicesData[0].title,
    projectScope: '',
    timeline: 'Segera (< 2 minggu)',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultService) {
      setFormData(prev => ({ ...prev, serviceCategory: defaultService }));
    }
  }, [defaultService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Format professional WhatsApp message
    const message = `*PERMINTAAN PENAWARAN PENGADAAN (RFQ)*
*PT. Radcom Solusindo Informatika*

Halo Tim Radcom, saya ingin mengajukan penawaran untuk kebutuhan perusahaan:

• *Nama PIC:* ${formData.fullName}
• *Perusahaan / Institusi:* ${formData.companyName}
• *Telepon / WA:* ${formData.phone}
• *Email:* ${formData.email}
• *Kategori Kebutuhan:* ${formData.serviceCategory}
• *Timeline:* ${formData.timeline}
• *Rincian Kebutuhan:* 
${formData.projectScope || 'Sesuai spesifikasi terlampir.'}

${formData.notes ? `• *Catatan Tambahan:* ${formData.notes}` : ''}

Mohon dapat dihubungi kembali dengan estimasi penawaran resmi. Terima kasih.`;

    const waUrl = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(message)}`;
    
    // Give user a brief confirmation before opening WA
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative max-w-xl w-full bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                FORMULIR PERMINTAAN RESMI
              </span>
              <h3 className="text-2xl font-black text-white mt-1">
                Permintaan Penawaran (RFQ)
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Sampaikan spesifikasi kebutuhan pengadaan instansi Anda. Tim marketing dan teknis Radcom akan segera merespons dengan estimasi dan katalog resmi.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Nama Lengkap PIC *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      required
                      type="text"
                      placeholder="Nama Anda"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#F5A623]"
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Nama Perusahaan / Instansi *
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      required
                      type="text"
                      placeholder="PT / CV / Lembaga"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#F5A623]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Email PIC *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      required
                      type="email"
                      placeholder="nama@perusahaan.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#F5A623]"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Nomor Telepon / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      required
                      type="tel"
                      placeholder="0812xxxxxxx"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#F5A623]"
                    />
                  </div>
                </div>
              </div>

              {/* Service Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Kategori Pengadaan *
                  </label>
                  <select
                    value={formData.serviceCategory}
                    onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#F5A623]"
                  >
                    {servicesData.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Multi-Kategori Pengadaan Kantor">Multi-Kategori Pengadaan Kantor</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Ekspektasi Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#F5A623]"
                  >
                    <option value="Mendesak (< 1 Minggu)">Mendesak (&lt; 1 Minggu)</option>
                    <option value="Segera (1 - 2 Minggu)">Segera (1 - 2 Minggu)</option>
                    <option value="Perencanaan Bulan Depan">Perencanaan Bulan Depan</option>
                    <option value="Tender / Proyek Tahunan">Tender / Proyek Tahunan</option>
                  </select>
                </div>
              </div>

              {/* Project Scope */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Uraian Kebutuhan & Spesifikasi Barang/Jasa
                </label>
                <textarea
                  rows={3}
                  placeholder="Contoh: Pengadaan 15 unit PC Workstation, instalasi 8 CCTV Outdoor untuk gudang, dan pasokan toner bulanan..."
                  value={formData.projectScope}
                  onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#F5A623]"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 text-xs font-semibold text-slate-300 hover:text-white"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-[#F5A623] hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg shadow-amber-500/20"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Kirim via WhatsApp Resmi</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Submitted State */
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-white">
              Permintaan Penawaran Terkirim!
            </h4>
            <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
              Pesan penawaran Anda telah diarahkan ke WhatsApp resmi PT. Radcom Solusindo Informatika. Tim sales dan teknis kami akan segera memproses estimasi dan spesifikasi resmi.
            </p>
            <div className="pt-4 flex justify-center gap-3">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-5 py-2.5 rounded-xl bg-[#F5A623] text-slate-950 font-bold text-xs"
              >
                Kembali ke Profile
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
