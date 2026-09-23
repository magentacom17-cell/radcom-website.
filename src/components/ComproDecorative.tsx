import React from 'react';
import { officialStores } from '../data/companyData';

/**
 * Decorative vector elements faithfully recreated from the official
 * PT. Radcom Solusindo Informatika Company Profile document.
 */

export const WheatCrest: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-12 h-12',
  color = '#F5A623',
}) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Central Stem */}
    <path
      d="M50 15 V85"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
    />
    {/* Left Radiant Stalks / Wheat Fronds */}
    <path
      d="M50 25 C38 22 28 30 22 40"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M50 38 C34 35 22 45 15 58"
      stroke={color}
      strokeWidth="3.2"
      strokeLinecap="round"
    />
    <path
      d="M50 52 C32 50 18 62 12 76"
      stroke={color}
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    <path
      d="M50 66 C35 66 22 76 16 88"
      stroke={color}
      strokeWidth="3.5"
      strokeLinecap="round"
    />

    {/* Right Radiant Stalks / Wheat Fronds */}
    <path
      d="M50 25 C62 22 72 30 78 40"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M50 38 C66 35 78 45 85 58"
      stroke={color}
      strokeWidth="3.2"
      strokeLinecap="round"
    />
    <path
      d="M50 52 C68 50 82 62 88 76"
      stroke={color}
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    <path
      d="M50 66 C65 66 78 76 84 88"
      stroke={color}
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    
    {/* Top Crown Seed */}
    <circle cx="50" cy="16" r="3.5" fill={color} />
  </svg>
);

export const GlobeArc: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-full h-24',
  color = '#F5A623',
}) => (
  <svg
    viewBox="0 0 400 120"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M-50 120 A260 160 0 0 1 450 120"
      stroke={color}
      strokeWidth="2.5"
      strokeOpacity="0.85"
    />
    <path
      d="M-20 120 A280 180 0 0 1 420 120"
      stroke={color}
      strokeWidth="1.2"
      strokeOpacity="0.45"
      strokeDasharray="4 4"
    />
    <path
      d="M50 120 C100 80 300 80 350 120"
      stroke={color}
      strokeWidth="1"
      strokeOpacity="0.3"
    />
    {/* Meridian Cross-lines */}
    <path d="M120 120 C140 95 160 75 180 60" stroke={color} strokeWidth="1" strokeOpacity="0.35" />
    <path d="M280 120 C260 95 240 75 220 60" stroke={color} strokeWidth="1" strokeOpacity="0.35" />
    <path d="M200 120 V55" stroke={color} strokeWidth="1.2" strokeOpacity="0.45" />
  </svg>
);

export const ProcurementBadgesBar: React.FC<{
  className?: string;
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
}> = ({ className = '', theme = 'light', size = 'md' }) => {
  const badgeClasses = {
    sm: 'h-8 px-2',
    md: 'h-11 px-3',
    lg: 'h-14 px-4',
  }[size];

  const imgMaxHeight = {
    sm: 'max-h-5',
    md: 'max-h-7',
    lg: 'max-h-9',
  }[size];

  return (
    <div className={`flex items-center justify-between gap-2.5 ${className}`}>
      <div className={`bg-white rounded-lg p-1.5 flex items-center justify-center shadow-sm border border-slate-200/80 flex-1 ${badgeClasses}`}>
        <img src="/01-LPSE.jpg" alt="LPSE Terdaftar" className={`${imgMaxHeight} max-w-full object-contain`} />
      </div>
      <a 
        href={officialStores.padiUmkm} 
        target="_blank" 
        rel="noopener noreferrer" 
        title="Buka Toko Resmi PaDi UMKM BUMN (padiumkm.id)"
        className={`bg-white rounded-lg p-1.5 flex items-center justify-center shadow-sm border border-slate-200/80 flex-1 hover:border-amber-400 hover:shadow transition-all group ${badgeClasses}`}
      >
        <img src="/01-umk-padi.jpg" alt="PaDi UMKM BUMN" className={`${imgMaxHeight} max-w-full object-contain group-hover:scale-105 transition-transform`} />
      </a>
      <a 
        href={officialStores.siplahGramedia} 
        target="_blank" 
        rel="noopener noreferrer" 
        title="Buka Toko Resmi SIPLah Gramedia Kemendikbud (siplahgramedia.id)"
        className={`bg-white rounded-lg p-1.5 flex items-center justify-center shadow-sm border border-slate-200/80 flex-1 hover:border-cyan-400 hover:shadow transition-all group ${badgeClasses}`}
      >
        <img src="/01-siplah.jpg" alt="SIPLah Kemendikbud" className={`${imgMaxHeight} max-w-full object-contain` } />
      </a>
      <div className={`bg-white rounded-lg p-1.5 flex items-center justify-center shadow-sm border border-slate-200/80 flex-1 ${badgeClasses}`}>
        <img src="/01-eCatalogue.jpg" alt="LKPP e-Katalog" className={`${imgMaxHeight} max-w-full object-contain`} />
      </div>
    </div>
  );
};
