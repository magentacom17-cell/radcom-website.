import React, { useState } from 'react';
import { Camera, ZoomIn, X, Filter } from 'lucide-react';
import { documentationGallery } from '../data/companyData';
import { DocumentationItem } from '../types';
import { SmartImage } from './SmartImage';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<DocumentationItem | null>(null);

  const categories = [
    { id: 'all', label: 'Semua Dokumentasi (12)' },
    { id: 'Hardware & IT', label: 'Hardware & Perangkat' },
    { id: 'Technical Preparation', label: 'Persiapan & Tim' },
    { id: 'Logistics & Delivery', label: 'Logistik & Gudang' },
    { id: 'Office Supplies', label: 'Barang Kantor' },
    { id: 'Security Devices', label: 'Sistem Keamanan' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? documentationGallery
    : documentationGallery.filter(item => 
        item.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        selectedCategory.toLowerCase().includes(item.category.toLowerCase())
      );

  return (
    <section id="documentation" className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-widest mb-3">
              <span className="w-6 h-0.5 bg-cyan-400"></span>
              06 · Dokumentasi
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Aktivitas Operasional & Galeri Pengadaan
            </h2>
            <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-2xl">
              Dokumentasi visual representasi aktivitas pergudangan, perakitan perangkat, pengiriman logistik, hingga uji fungsi tim teknis lapangan PT. Radcom Solusindo Informatika.
            </p>
          </div>

          <div className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 flex items-center gap-2 self-start md:self-auto">
            <Camera className="w-4 h-4 text-cyan-400" />
            <span>12 Kategori Dokumentasi Resmi</span>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap gap-2 pt-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/10'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 12-Item Photo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 hover:border-cyan-500/50 transition-all flex flex-col hover:-translate-y-1 shadow-lg"
              onClick={() => setActiveItem(item)}
            >
              <div className="relative aspect-4/3 overflow-hidden bg-slate-950">
                <SmartImage
                  localSrc={item.localSrc}
                  fallbackUrl={item.fallbackUrl}
                  alt={item.title}
                  className="w-full h-full"
                />
                
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-slate-950/80 backdrop-blur-sm text-[10px] font-bold text-cyan-400 border border-slate-800">
                  #{String(index + 1).padStart(2, '0')}
                </div>

                <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-2.5 rounded-full bg-cyan-500 text-slate-950 shadow-xl">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div className="p-3.5 flex-1 flex flex-col justify-between">
                <h4 className="text-xs font-bold text-white leading-snug line-clamp-2">
                  {item.title}
                </h4>
                <div className="mt-2 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
                  <span>{item.category}</span>
                  <span className="text-cyan-400 font-semibold group-hover:underline">Detail &rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-2xl w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
            <div className="p-4 border-b border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider">{activeItem.category}</span>
                <h5 className="text-base font-bold text-white mt-0.5">{activeItem.title}</h5>
              </div>
              <button
                onClick={() => setActiveItem(null)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="max-h-[60vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={activeItem.fallbackUrl}
                alt={activeItem.title}
                className="max-h-[60vh] w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-4 bg-slate-950 flex items-center justify-between">
              <p className="text-xs text-slate-400">
                PT. Radcom Solusindo Informatika · Dokumentasi Pengadaan Resmi
              </p>
              <button
                onClick={() => setActiveItem(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white"
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
