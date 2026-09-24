import React, { useState } from 'react';
import { Phone, FileText, Globe, MessageSquare, Menu, X } from 'lucide-react';
import { companyInfo } from '../data/companyData';
import { RadcomLogo } from './RadcomLogo';

interface NavbarProps {
  currentView: 'web' | 'document';
  onToggleView: (view: 'web' | 'document') => void;
  onOpenRfq: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onToggleView,
  onOpenRfq,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (currentView !== 'web') {
      onToggleView('web');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 text-white transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => scrollToSection('hero')}
            id="brand-logo-btn"
          >
            <div className="w-11 h-11 rounded-xl bg-white p-1 shadow-md shadow-cyan-500/10 flex items-center justify-center overflow-hidden border border-slate-700/60 group-hover:scale-105 transition-transform flex-shrink-0">
              <RadcomLogo className="w-full h-full" variant="full" showBackground={false} />
            </div>
            <div>
              <div className="text-2xl font-black tracking-wider leading-none">
                RAD<span className="text-cyan-400">COM</span>
              </div>
              <p className="text-[10px] text-slate-400 font-medium tracking-wide mt-1">
                PT. Radcom Solusindo Informatika
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            <button 
              onClick={() => scrollToSection('about')} 
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              Tentang Kami
            </button>
            <button 
              onClick={() => scrollToSection('vision-mission')} 
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              Visi & Misi
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              Lini Bisnis
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              Pengalaman Project
            </button>
            <button 
              onClick={() => scrollToSection('clients-partners')} 
              className="hover:text-amber-300 text-amber-400 font-semibold transition-colors cursor-pointer"
            >
              Rekanan & Dealer
            </button>
            <button 
              onClick={() => scrollToSection('documentation')} 
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              Dokumentasi
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              Kontak
            </button>
          </nav>

          {/* Action CTAs & View Switcher */}
          <div className="hidden md:flex items-center gap-3">
            {/* View Mode Switcher */}
            <div className="flex bg-slate-900 border border-slate-800 p-1 rounded-xl">
              <button
                id="toggle-web-view-btn"
                onClick={() => onToggleView('web')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                  currentView === 'web'
                    ? 'bg-[#F5A623] text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Tampilan Web Modern"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Web Interaktif</span>
              </button>
              <button
                id="toggle-doc-view-btn"
                onClick={() => onToggleView('document')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                  currentView === 'document'
                    ? 'bg-[#F5A623] text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Tampilan Format Dokumen A4 / Print Ready"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Dokumen A4</span>
              </button>
            </div>

            {/* RFQ Request Button */}
            <button
              id="rfq-nav-btn"
              onClick={onOpenRfq}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-white text-slate-950 hover:bg-[#F5A623] hover:text-slate-950 transition-all cursor-pointer shadow-sm"
            >
              Minta Penawaran
            </button>

            {/* Direct WhatsApp Callout */}
            <a
              href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(
                'Halo PT. Radcom Solusindo Informatika, saya ingin berkonsultasi mengenai kebutuhan pengadaan barang dan jasa perusahaan.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500 hover:text-white border border-emerald-500/30 transition-all"
              title="Chat WhatsApp Resmi"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onToggleView(currentView === 'web' ? 'document' : 'web')}
              className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 border border-slate-800 text-[#F5A623] flex items-center gap-1"
            >
              {currentView === 'web' ? <FileText className="w-3 h-3" /> : <Globe className="w-3 h-3" />}
              <span>{currentView === 'web' ? 'A4' : 'Web'}</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-white"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900/98 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <div className="flex gap-2 pb-3 border-b border-slate-800">
            <button
              onClick={() => {
                onToggleView('web');
                setMobileMenuOpen(false);
              }}
              className={`flex-1 py-2 rounded-lg text-xs font-bold text-center ${
                currentView === 'web' ? 'bg-[#F5A623] text-slate-950' : 'bg-slate-800 text-slate-300'
              }`}
            >
              Web Interaktif
            </button>
            <button
              onClick={() => {
                onToggleView('document');
                setMobileMenuOpen(false);
              }}
              className={`flex-1 py-2 rounded-lg text-xs font-bold text-center ${
                currentView === 'document' ? 'bg-[#F5A623] text-slate-950' : 'bg-slate-800 text-slate-300'
              }`}
            >
              Dokumen A4 (PDF)
            </button>
          </div>

          <div className="flex flex-col gap-2.5 text-sm font-medium">
            <button
              onClick={() => scrollToSection('about')}
              className="text-left py-2 text-slate-300 hover:text-amber-400"
            >
              Tentang Kami
            </button>
            <button
              onClick={() => scrollToSection('vision-mission')}
              className="text-left py-2 text-slate-300 hover:text-amber-400"
            >
              Visi & Misi
            </button>
            <button
              onClick={() => scrollToSection('business-model')}
              className="text-left py-2 text-slate-300 hover:text-amber-400"
            >
              Model Bisnis
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-left py-2 text-slate-300 hover:text-amber-400"
            >
              Lini Bisnis & Produk
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-left py-2 text-slate-300 hover:text-amber-400"
            >
              Pengalaman Project
            </button>
            <button
              onClick={() => scrollToSection('clients-partners')}
              className="text-left py-2 text-amber-400 font-bold hover:text-amber-300"
            >
              Rekanan & Dealer Resmi
            </button>
            <button
              onClick={() => scrollToSection('documentation')}
              className="text-left py-2 text-slate-300 hover:text-amber-400"
            >
              Dokumentasi Pengadaan
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left py-2 text-slate-300 hover:text-amber-400"
            >
              Kontak Perusahaan
            </button>
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRfq();
              }}
              className="w-full py-2.5 rounded-xl bg-[#F5A623] text-slate-950 font-bold text-xs text-center"
            >
              Minta Penawaran Pengadaan
            </button>
            <a
              href={`tel:${companyInfo.phone.replace(/[^0-9]/g, '')}`}
              className="w-full py-2.5 rounded-xl bg-slate-800 text-slate-200 font-semibold text-xs text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Telepon Langsung: {companyInfo.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
