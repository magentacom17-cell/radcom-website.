import React, { useState } from 'react';
import { Shield, Building, Award, CheckCircle, ExternalLink, X, ZoomIn } from 'lucide-react';
import { projectExperiences } from '../data/companyData';
import { SmartImage } from './SmartImage';

export const ProjectsSection: React.FC = () => {
  const [activePhotoModal, setActivePhotoModal] = useState<{
    src: string;
    caption: string;
    project: string;
  } | null>(null);

  return (
    <section id="projects" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div>
          <div className="inline-flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-widest mb-3">
            <span className="w-6 h-0.5 bg-cyan-400"></span>
            05 · Project Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Rekam Jejak & Pengalaman Proyek
          </h2>
          <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-3xl">
            Kepercayaan institusi berskala nasional dan perwakilan diplomatik internasional menjadi bukti nyata kapabilitas teknis dan profesionalisme PT. Radcom Solusindo Informatika.
          </p>
        </div>

        {/* Projects Cards List */}
        <div className="space-y-12">
          {projectExperiences.map((project, idx) => (
            <div 
              key={project.id}
              className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl space-y-8"
            >
              {/* Project Top Info */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2.5">
                    <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-black tracking-widest uppercase">
                      {project.number}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    {project.client}
                  </h3>
                  <p className="text-cyan-300 font-semibold text-sm sm:text-base">
                    {project.title}
                  </p>
                </div>

                <div className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700/80 text-xs text-slate-300 flex items-center gap-2 self-start lg:self-center">
                  <Award className="w-4 h-4 text-cyan-400" />
                  <span>Verified Project Accomplishment</span>
                </div>
              </div>

              {/* Description & Highlights */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-6 space-y-4">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Ringkasan Pengerjaan:
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="lg:col-span-6 space-y-3">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Spesifikasi & Cakupan Teknis:
                  </h4>
                  <div className="space-y-2">
                    {project.highlights.map((item, hidx) => (
                      <div key={hidx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 4 Photos Grid */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center justify-between">
                  <span>Dokumentasi Visual Lapangan:</span>
                  <span className="text-[11px] font-normal text-slate-500">Klik gambar untuk memperbesar</span>
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                  {project.photos.map((photo, pidx) => (
                    <div 
                      key={pidx}
                      className="group cursor-pointer rounded-xl overflow-hidden border border-slate-800 bg-slate-900 flex flex-col hover:border-cyan-500/50 transition-colors"
                      onClick={() => setActivePhotoModal({
                        src: photo.localSrc || photo.fallbackUrl,
                        caption: photo.caption,
                        project: `${project.client} — ${project.title}`
                      })}
                    >
                      <div className="relative aspect-4/3 overflow-hidden">
                        <SmartImage
                          localSrc={photo.localSrc}
                          fallbackUrl={photo.fallbackUrl}
                          alt={photo.caption}
                          className="w-full h-full"
                        />
                        <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="p-2 rounded-full bg-cyan-500 text-slate-950 shadow-lg">
                            <ZoomIn className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                      <div className="p-2.5 text-[11px] text-slate-300 font-medium leading-tight line-clamp-2">
                        {photo.caption}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Rekanan & Legalitas Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
            <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <Shield className="w-4 h-4 text-cyan-400" />
              <span>Daftar Rekanan & Kredibilitas Resmi</span>
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Company profile Radcom memuat bagian <strong>Daftar Rekanan</strong>, <strong>Dokumentasi Lapangan</strong>, dan <strong>Surat Penunjukan Dealer Resmi</strong> sebagai komitmen jaminan keaslian garansi barang dan standar purna jual.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
            <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <Building className="w-4 h-4 text-cyan-400" />
              <span>Fokus & Standar Pengadaan</span>
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Instalasi teruji dan suplai komprehensif terkait teknologi informasi, CCTV canggih, access door terenkripsi, office consumables, hingga infrastruktur pendukung gedung.
            </p>
          </div>
        </div>

      </div>

      {/* Lightbox Photo Modal */}
      {activePhotoModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-3xl w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
            <div className="p-4 border-b border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs text-cyan-400 font-bold block">{activePhotoModal.project}</span>
                <h5 className="text-sm font-semibold text-white">{activePhotoModal.caption}</h5>
              </div>
              <button
                onClick={() => setActivePhotoModal(null)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={activePhotoModal.src}
                alt={activePhotoModal.caption}
                className="max-h-[70vh] w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-4 bg-slate-950 text-right">
              <button
                onClick={() => setActivePhotoModal(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 text-xs font-semibold text-slate-200 hover:text-white"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
