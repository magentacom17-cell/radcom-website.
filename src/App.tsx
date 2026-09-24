/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ClientPartnerSection } from './components/ClientPartnerSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { RfqModal } from './components/RfqModal';
import { A4DocumentView } from './components/A4DocumentView';
import { FileText, MessageSquare, ArrowUp } from 'lucide-react';
import { companyInfo } from './data/companyData';

export default function App() {
  const [currentView, setCurrentView] = useState<'web' | 'document'>('web');
  const [rfqModalOpen, setRfqModalOpen] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<string>('');
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenRfq = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setRfqModalOpen(true);
  };

  const handleCloseRfq = () => {
    setRfqModalOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-[#F5A623] selection:text-slate-950">
      {currentView === 'document' ? (
        <A4DocumentView onBackToWeb={() => setCurrentView('web')} />
      ) : (
        <div className="flex flex-col min-h-screen">
          <Navbar
            currentView={currentView}
            onToggleView={(view) => setCurrentView(view)}
            onOpenRfq={() => handleOpenRfq()}
          />

          <main className="flex-grow">
            <HeroSection
              onOpenRfq={() => handleOpenRfq()}
              onViewDocument={() => setCurrentView('document')}
            />
            <AboutSection />
            <ServicesSection
              onSelectServiceForRfq={(serviceTitle) => handleOpenRfq(serviceTitle)}
            />
            <ProjectsSection />
            <ClientPartnerSection />
            <GallerySection />
            <ContactSection
              onOpenRfq={() => handleOpenRfq()}
              onViewDocument={() => setCurrentView('document')}
            />
          </main>

          {/* Floating Action Buttons (Web Mode) */}
          <aside aria-label="Aksi Cepat" className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
            {showBackToTop && (
              <button
                onClick={scrollToTop}
                className="w-11 h-11 rounded-full bg-slate-800/90 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700 shadow-xl flex items-center justify-center transition-all cursor-pointer"
                title="Kembali ke atas"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            )}

            <button
              id="floating-doc-btn"
              onClick={() => setCurrentView('document')}
              className="px-3.5 py-2.5 rounded-full bg-[#F5A623] hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-xl shadow-amber-500/20 flex items-center gap-2 transition-all cursor-pointer"
              title="Buka Company Profile Format Cetak A4"
            >
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">Dokumen A4</span>
            </button>

            <a
              href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(
                'Halo PT. Radcom Solusindo Informatika, saya ingin konsultasi kebutuhan pengadaan barang/jasa kantor.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-xl shadow-emerald-500/30 flex items-center justify-center transition-all group"
              title="Chat WhatsApp Resmi"
            >
              <MessageSquare className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
          </aside>
        </div>
      )}

      {/* RFQ Permintaan Penawaran Modal */}
      <RfqModal
        isOpen={rfqModalOpen}
        onClose={handleCloseRfq}
        defaultService={selectedService}
      />
    </div>
  );
}
