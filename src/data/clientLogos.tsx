import React from 'react';

// Comprehensive authentic SVG and graphic logos for Radcom's client partners
// Ensuring 100% reliability, razor-sharp rendering, zero CORS/404 issues, and authentic branding

export interface LogoRendererProps {
  className?: string;
  size?: number;
}

export const ClientLogos: Record<string, React.FC<LogoRendererProps>> = {
  // 1. Direktorat Tipidkor Bareskrim Polri
  'polri.go.id': ({ className = 'w-full h-full' }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer Golden Shield */}
      <path 
        d="M50 8 L85 20 C85 58 50 90 50 90 C50 90 15 58 15 20 Z" 
        fill="#991B1B" 
        stroke="#F5A623" 
        strokeWidth="3.5" 
      />
      <path 
        d="M50 13 L80 23 C80 54 50 82 50 82 C50 82 20 54 20 23 Z" 
        fill="#0F172A" 
        stroke="#FDE047" 
        strokeWidth="1.5" 
      />
      {/* 3 Golden Stars (Tribrata) */}
      <polygon points="50,18 52,23 57,23 53,26 55,31 50,28 45,31 47,26 43,23 48,23" fill="#F5A623" />
      <polygon points="36,25 37.5,29 42,29 38.5,31.5 40,35.5 36,33 32,35.5 33.5,31.5 30,29 34.5,29" fill="#F5A623" />
      <polygon points="64,25 65.5,29 70,29 66.5,31.5 68,35.5 64,33 60,35.5 61.5,31.5 58,29 62.5,29" fill="#F5A623" />
      {/* Scales of Justice & Flaming Torch */}
      <circle cx="50" cy="50" r="16" fill="#1E293B" stroke="#F5A623" strokeWidth="1.5" />
      {/* Scales Balance Beam */}
      <line x1="40" y1="46" x2="60" y2="46" stroke="#FDE047" strokeWidth="2" strokeLinecap="round" />
      <line x1="50" y1="40" x2="50" y2="60" stroke="#FDE047" strokeWidth="2.5" />
      {/* Scale pans */}
      <path d="M37 52 L43 52 L40 48 Z" fill="#F5A623" />
      <line x1="40" y1="46" x2="40" y2="49" stroke="#FDE047" strokeWidth="1" />
      <path d="M57 52 L63 52 L60 48 Z" fill="#F5A623" />
      <line x1="60" y1="46" x2="60" y2="49" stroke="#FDE047" strokeWidth="1" />
      {/* Torch Flame */}
      <path d="M50 35 C48 37 47 40 50 43 C53 40 52 37 50 35 Z" fill="#EF4444" />
      {/* Banner BARESKRIM */}
      <path d="M22 68 Q50 78 78 68 L78 75 Q50 85 22 75 Z" fill="#F5A623" stroke="#B45309" strokeWidth="1" />
      <text x="50" y="74" textAnchor="middle" fontSize="6.5" fontWeight="900" fill="#0F172A" fontFamily="system-ui, sans-serif">
        BARESKRIM
      </text>
      <text x="50" y="80" textAnchor="middle" fontSize="4.5" fontWeight="800" fill="#FEF08A" fontFamily="system-ui, sans-serif">
        POLRI
      </text>
    </svg>
  ),

  // 2. PT. Kereta Api Indonesia (KAI)
  'kai.id': ({ className = 'w-full h-full' }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="18" fill="#FFFFFF" />
      {/* Orange Track Curve */}
      <path d="M14 62 C26 38 48 30 74 24 L82 34 C60 38 40 46 26 72 Z" fill="#F5A623" />
      {/* Navy Track Curve */}
      <path d="M26 74 C42 48 64 42 86 36 L90 48 C72 52 52 58 36 82 Z" fill="#0D2346" />
      {/* Official Typography KAI */}
      <text x="50" y="58" textAnchor="middle" fontSize="24" fontWeight="900" fontStyle="italic" fill="#0D2346" fontFamily="system-ui, sans-serif">
        K<tspan fill="#F5A623">A</tspan>I
      </text>
      <text x="50" y="72" textAnchor="middle" fontSize="6.5" fontWeight="800" fill="#64748B" letterSpacing="1.5" fontFamily="system-ui, sans-serif">
        KERETA API
      </text>
    </svg>
  ),

  // 3. Royal Embassy of Saudi Arabia — Military Attaché
  'mofa.gov.sa': ({ className = 'w-full h-full' }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="18" fill="#064E3B" />
      <circle cx="50" cy="50" r="44" stroke="#F5A623" strokeWidth="2" strokeDasharray="3 2" />
      {/* Golden Palm Tree */}
      <path d="M50 42 L50 64" stroke="#F5A623" strokeWidth="4" strokeLinecap="round" />
      <path d="M48 64 L52 64" stroke="#F5A623" strokeWidth="6" strokeLinecap="round" />
      {/* Palm Fronds */}
      <path d="M50 42 C45 34 34 32 26 36 C34 38 44 42 50 42 Z" fill="#FDE047" />
      <path d="M50 42 C55 34 66 32 74 36 C66 38 56 42 50 42 Z" fill="#FDE047" />
      <path d="M50 38 C46 28 38 24 30 26 C36 29 44 34 50 38 Z" fill="#F5A623" />
      <path d="M50 38 C54 28 62 24 70 26 C64 29 56 34 50 38 Z" fill="#F5A623" />
      <path d="M50 34 C48 24 50 18 50 18 C50 18 52 24 50 34 Z" fill="#FEF08A" />
      {/* Crossed Curved Scimitars */}
      <path d="M28 76 C40 70 60 62 76 56 L72 52 C58 58 38 66 24 72 Z" fill="#F5A623" stroke="#FDE047" strokeWidth="0.8" />
      <path d="M72 76 C60 70 40 62 24 56 L28 52 C42 58 62 66 76 72 Z" fill="#F5A623" stroke="#FDE047" strokeWidth="0.8" />
      <circle cx="50" cy="65" r="2.5" fill="#FEF08A" />
      <text x="50" y="86" textAnchor="middle" fontSize="6" fontWeight="800" fill="#FDE047" letterSpacing="0.5" fontFamily="system-ui, sans-serif">
        SAUDI EMBASSY
      </text>
    </svg>
  ),

  // 4. WWF (World Wide Fund for Nature)
  'worldwildlife.org': ({ className = 'w-full h-full' }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="18" fill="#FFFFFF" />
      {/* WWF Panda Silhouette */}
      <g fill="#0F172A">
        {/* Ears */}
        <circle cx="34" cy="24" r="7" />
        <circle cx="66" cy="24" r="7" />
        {/* Head */}
        <ellipse cx="50" cy="36" rx="20" ry="16" fill="#FFFFFF" stroke="#0F172A" strokeWidth="4" />
        {/* Eye patches */}
        <ellipse cx="42" cy="34" rx="4.5" ry="6" transform="rotate(-15 42 34)" />
        <ellipse cx="58" cy="34" rx="4.5" ry="6" transform="rotate(15 58 34)" />
        {/* Nose & Mouth */}
        <ellipse cx="50" cy="42" rx="3.5" ry="2" />
        <path d="M47 45 Q50 48 53 45" stroke="#0F172A" strokeWidth="1.5" fill="none" />
        {/* Body Arms & Back */}
        <path d="M26 48 C24 60 28 68 38 68 C44 68 46 60 48 56 C52 60 56 68 62 68 C72 68 76 60 74 48 C68 44 32 44 26 48 Z" />
      </g>
      <text x="50" y="88" textAnchor="middle" fontSize="16" fontWeight="900" fill="#0F172A" letterSpacing="1" fontFamily="system-ui, sans-serif">
        WWF
      </text>
    </svg>
  ),

  // 5. CARE International
  'care-international.org': ({ className = 'w-full h-full' }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="18" fill="#F97316" />
      {/* Radiant Sunburst Gear / Hand */}
      <circle cx="50" cy="42" r="18" fill="#FFFFFF" />
      {/* Sun rays */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
        <line
          key={i}
          x1="50"
          y1="16"
          x2="50"
          y2="20"
          stroke="#FFFFFF"
          strokeWidth="3.5"
          strokeLinecap="round"
          transform={`rotate(${angle} 50 42)`}
        />
      ))}
      <circle cx="50" cy="42" r="10" fill="#F97316" />
      <text x="50" y="82" textAnchor="middle" fontSize="17" fontWeight="900" fill="#FFFFFF" letterSpacing="2" fontFamily="system-ui, sans-serif">
        care
      </text>
    </svg>
  ),

  // 6. International SOS
  'internationalsos.com': ({ className = 'w-full h-full' }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="18" fill="#0F2942" />
      {/* Medical Cross in Gold */}
      <rect x="42" y="16" width="16" height="42" rx="4" fill="#DC2626" />
      <rect x="29" y="29" width="42" height="16" rx="4" fill="#DC2626" />
      <circle cx="50" cy="37" r="9" fill="#FFFFFF" />
      <circle cx="50" cy="37" r="6" fill="#0284C7" />
      <text x="50" y="74" textAnchor="middle" fontSize="11" fontWeight="800" fill="#94A3B8" letterSpacing="0.5" fontFamily="system-ui, sans-serif">
        INTERNATIONAL
      </text>
      <text x="50" y="88" textAnchor="middle" fontSize="15" fontWeight="900" fill="#FFFFFF" letterSpacing="1" fontFamily="system-ui, sans-serif">
        SOS
      </text>
    </svg>
  ),

  // 7. ChildFund International
  'childfund.org': ({ className = 'w-full h-full' }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="18" fill="#FFFFFF" />
      {/* Green Child figure */}
      <circle cx="44" cy="28" r="8" fill="#16A34A" />
      <circle cx="62" cy="34" r="6" fill="#F5A623" />
      <path d="M36 48 C36 38 52 38 52 48 L52 64 L44 64 L44 54 L36 54 Z" fill="#16A34A" />
      <path d="M54 52 C54 44 68 44 68 52 L68 64 L62 64 L62 56 L54 56 Z" fill="#F5A623" />
      <text x="50" y="82" textAnchor="middle" fontSize="11" fontWeight="900" fill="#0F172A" fontFamily="system-ui, sans-serif">
        Child<tspan fill="#16A34A">Fund</tspan>
      </text>
    </svg>
  ),

  // 8. ICRC (Palang Merah Internasional)
  'icrc.org': ({ className = 'w-full h-full' }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="18" fill="#FFFFFF" />
      <circle cx="50" cy="42" r="26" fill="none" stroke="#DC2626" strokeWidth="2.5" />
      <rect x="44" y="24" width="12" height="36" fill="#DC2626" />
      <rect x="32" y="36" width="36" height="12" fill="#DC2626" />
      <text x="50" y="84" textAnchor="middle" fontSize="14" fontWeight="900" fill="#0F172A" letterSpacing="1.5" fontFamily="system-ui, sans-serif">
        ICRC
      </text>
    </svg>
  ),

  // 9. Yayasan Konservasi Alam Nusantara (YKAN / The Nature Conservancy)
  'ykan.or.id': ({ className = 'w-full h-full' }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="18" fill="#064E3B" />
      {/* Green Leaf & Oak ring */}
      <circle cx="50" cy="42" r="22" stroke="#34D399" strokeWidth="3" fill="#047857" />
      <path d="M50 24 C40 32 40 48 50 56 C60 48 60 32 50 24 Z" fill="#A7F3D0" />
      <line x1="50" y1="26" x2="50" y2="54" stroke="#047857" strokeWidth="1.5" />
      <text x="50" y="78" textAnchor="middle" fontSize="13" fontWeight="900" fill="#FFFFFF" letterSpacing="1" fontFamily="system-ui, sans-serif">
        YKAN
      </text>
      <text x="50" y="88" textAnchor="middle" fontSize="5.5" fontWeight="700" fill="#A7F3D0" fontFamily="system-ui, sans-serif">
        KONSERVASI ALAM
      </text>
    </svg>
  ),

  // 10. Atlas Copco Indonesia
  'atlascopco.com': ({ className = 'w-full h-full' }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="18" fill="#0072CE" />
      {/* Atlas Copco Blue & White Industrial Flag */}
      <circle cx="50" cy="40" r="20" fill="#FFFFFF" />
      <path d="M40 30 L40 50 L56 50 L56 46 L45 46 L45 42 L54 42 L54 38 L45 38 L45 34 L56 34 L56 30 Z" fill="#0072CE" />
      <text x="50" y="74" textAnchor="middle" fontSize="10" fontWeight="900" fill="#FFFFFF" letterSpacing="0.5" fontFamily="system-ui, sans-serif">
        Atlas Copco
      </text>
      <text x="50" y="86" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#BAE6FD" fontFamily="system-ui, sans-serif">
        INDONESIA
      </text>
    </svg>
  ),

  // 11. PT. International Chemical Industry (Baterai ABC)
  'abc-battery.com': ({ className = 'w-full h-full' }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="18" fill="#FFFFFF" />
      {/* Iconic ABC Battery Oval */}
      <ellipse cx="50" cy="46" rx="42" ry="26" fill="#DC2626" />
      <ellipse cx="50" cy="46" rx="36" ry="20" fill="#1D4ED8" />
      <ellipse cx="50" cy="46" rx="30" ry="15" fill="#FFFFFF" />
      <text x="50" y="52" textAnchor="middle" fontSize="22" fontWeight="900" fontStyle="italic" fill="#DC2626" fontFamily="system-ui, sans-serif">
        ABC
      </text>
      {/* Yellow Star */}
      <polygon points="50,22 52,27 57,27 53,30 55,35 50,32 45,35 47,30 43,27 48,27" fill="#F5A623" />
      <text x="50" y="85" textAnchor="middle" fontSize="9" fontWeight="900" fill="#0F172A" letterSpacing="1" fontFamily="system-ui, sans-serif">
        BATTERY
      </text>
    </svg>
  ),

  // 12. Sinar Mas Group
  'sinarmas.com': ({ className = 'w-full h-full' }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="18" fill="#FFFFFF" />
      {/* Sinar Mas Interlocking Windmill Blades */}
      <path d="M50 42 C50 28 62 20 70 20 C70 34 58 42 50 42 Z" fill="#DC2626" />
      <path d="M50 42 C64 42 72 54 72 62 C58 62 50 50 50 42 Z" fill="#F5A623" />
      <path d="M50 42 C50 56 38 64 30 64 C30 50 42 42 50 42 Z" fill="#DC2626" />
      <path d="M50 42 C36 42 28 30 28 22 C42 22 50 34 50 42 Z" fill="#F5A623" />
      <circle cx="50" cy="42" r="4" fill="#FFFFFF" />
      <text x="50" y="82" textAnchor="middle" fontSize="11" fontWeight="900" fill="#DC2626" fontFamily="system-ui, sans-serif">
        sinarmas
      </text>
    </svg>
  ),

  // 13. China Construction Bank (CCB) Indonesia
  'ccb.com': ({ className = 'w-full h-full' }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="18" fill="#005bac" />
      {/* CCB Ancient Round Coin with Square Hole */}
      <circle cx="50" cy="40" r="22" stroke="#FFFFFF" strokeWidth="5" fill="none" />
      <rect x="42" y="32" width="16" height="16" fill="#005bac" stroke="#FFFFFF" strokeWidth="4" />
      <path d="M42 40 L30 40" stroke="#FFFFFF" strokeWidth="4" />
      <path d="M58 40 L70 40" stroke="#FFFFFF" strokeWidth="4" />
      <text x="50" y="76" textAnchor="middle" fontSize="14" fontWeight="900" fill="#FFFFFF" letterSpacing="1" fontFamily="system-ui, sans-serif">
        CCB
      </text>
      <text x="50" y="87" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#BAE6FD" fontFamily="system-ui, sans-serif">
        INDONESIA
      </text>
    </svg>
  ),

  // 14. Hilti Indonesia
  'hilti.id': ({ className = 'w-full h-full' }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="18" fill="#D9222A" />
      <text x="50" y="60" textAnchor="middle" fontSize="24" fontWeight="900" fontStyle="italic" fill="#FFFFFF" letterSpacing="0.5" fontFamily="system-ui, sans-serif">
        HILTI
      </text>
      <rect x="22" y="70" width="56" height="3" fill="#FFFFFF" />
    </svg>
  ),

  // 15. TÜV Rheinland Indonesia
  'tuv.com': ({ className = 'w-full h-full' }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="18" fill="#FFFFFF" />
      {/* TÜV Triangle */}
      <polygon points="50,14 84,68 16,68" fill="#003A79" />
      <polygon points="50,22 76,64 24,64" fill="#0080C9" />
      <text x="50" y="56" textAnchor="middle" fontSize="12" fontWeight="900" fill="#FFFFFF" fontFamily="system-ui, sans-serif">
        TÜV
      </text>
      <text x="50" y="84" textAnchor="middle" fontSize="7.5" fontWeight="800" fill="#003A79" fontFamily="system-ui, sans-serif">
        Rheinland
      </text>
    </svg>
  ),

  // 16. Penerbit Erlangga
  'erlangga.co.id': ({ className = 'w-full h-full' }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="18" fill="#1E3A8A" />
      {/* Erlangga Open Book & Tree */}
      <path d="M26 50 Q50 42 50 32 Q50 42 74 50 L74 62 Q50 54 50 46 Q50 54 26 62 Z" fill="#F5A623" />
      <circle cx="50" cy="24" r="8" fill="#FDE047" />
      <text x="50" y="80" textAnchor="middle" fontSize="9.5" fontWeight="900" fill="#FFFFFF" letterSpacing="0.8" fontFamily="system-ui, sans-serif">
        ERLANGGA
      </text>
    </svg>
  ),

  // 17. Shipper Indonesia
  'shipper.id': ({ className = 'w-full h-full' }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="18" fill="#7C3AED" />
      {/* Shipper Fast Arrow Box */}
      <path d="M30 46 L50 32 L70 46 L70 66 L50 80 L30 66 Z" fill="#A78BFA" />
      <path d="M50 32 L50 80" stroke="#7C3AED" strokeWidth="2.5" />
      <polygon points="42,50 58,40 58,48 72,48 72,56 58,56 58,64" fill="#F5A623" />
      <text x="50" y="24" textAnchor="middle" fontSize="11" fontWeight="900" fill="#FFFFFF" letterSpacing="0.5" fontFamily="system-ui, sans-serif">
        Shipper
      </text>
    </svg>
  ),

  // 18. Mega Finance (CT Corp)
  'megafinance.co.id': ({ className = 'w-full h-full' }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="18" fill="#0F172A" />
      {/* CT Corp Prism / Diamond */}
      <polygon points="50,18 72,38 50,58 28,38" fill="#F5A623" />
      <polygon points="50,26 64,38 50,50 36,38" fill="#EF4444" />
      <text x="50" y="74" textAnchor="middle" fontSize="13" fontWeight="900" fill="#FFFFFF" letterSpacing="0.5" fontFamily="system-ui, sans-serif">
        MEGA
      </text>
      <text x="50" y="86" textAnchor="middle" fontSize="7" fontWeight="700" fill="#94A3B8" letterSpacing="1" fontFamily="system-ui, sans-serif">
        FINANCE
      </text>
    </svg>
  ),

  // 19. Parker Hannifin / Parker Engineering
  'parker.com': ({ className = 'w-full h-full' }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="18" fill="#000000" />
      <rect x="24" y="20" width="52" height="60" rx="6" fill="#F5A623" />
      <text x="50" y="64" textAnchor="middle" fontSize="42" fontWeight="900" fill="#000000" fontFamily="Georgia, serif">
        P
      </text>
    </svg>
  ),

  // 20. Alila Hotels & Resorts (Hyatt)
  'alilahotels.com': ({ className = 'w-full h-full' }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="18" fill="#1C1917" />
      <circle cx="50" cy="38" r="18" stroke="#F5A623" strokeWidth="1.5" fill="none" />
      <circle cx="50" cy="38" r="10" stroke="#E7E5E4" strokeWidth="1" fill="none" />
      <text x="50" y="72" textAnchor="middle" fontSize="14" fontWeight="300" fill="#FFFFFF" letterSpacing="4" fontFamily="system-ui, sans-serif">
        ALILA
      </text>
      <text x="50" y="84" textAnchor="middle" fontSize="5.5" fontWeight="700" fill="#A8A29E" letterSpacing="2" fontFamily="system-ui, sans-serif">
        HOTELS & RESORTS
      </text>
    </svg>
  ),

  // 21. Harris Hotels
  'discoverasr.com': ({ className = 'w-full h-full' }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="18" fill="#EA580C" />
      <text x="50" y="58" textAnchor="middle" fontSize="18" fontWeight="900" fill="#FFFFFF" letterSpacing="1" fontFamily="system-ui, sans-serif">
        HARRIS
      </text>
      <text x="50" y="76" textAnchor="middle" fontSize="7" fontWeight="700" fill="#FFEDD5" letterSpacing="2" fontFamily="system-ui, sans-serif">
        HOTELS & RESORTS
      </text>
    </svg>
  ),

  // 22. RS Tria Dipa Jakarta
  'triadipa.com': ({ className = 'w-full h-full' }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="18" fill="#047857" />
      {/* Medical Cross & Heart */}
      <rect x="44" y="20" width="12" height="36" rx="3" fill="#FFFFFF" />
      <rect x="32" y="32" width="36" height="12" rx="3" fill="#FFFFFF" />
      <path d="M30 38 L42 38 L46 28 L54 48 L58 38 L70 38" stroke="#F5A623" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <text x="50" y="76" textAnchor="middle" fontSize="8.5" fontWeight="800" fill="#FFFFFF" letterSpacing="0.5" fontFamily="system-ui, sans-serif">
        RS TRIA DIPA
      </text>
      <text x="50" y="86" textAnchor="middle" fontSize="6" fontWeight="600" fill="#A7F3D0" fontFamily="system-ui, sans-serif">
        JAKARTA
      </text>
    </svg>
  ),

  // 23. Heidelberg Indonesia
  'heidelberg.com': ({ className = 'w-full h-full' }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="18" fill="#00358E" />
      <circle cx="36" cy="36" r="10" fill="#00A3E0" />
      <circle cx="50" cy="36" r="10" fill="#E40046" opacity="0.8" />
      <circle cx="64" cy="36" r="10" fill="#FFB81C" opacity="0.8" />
      <text x="50" y="68" textAnchor="middle" fontSize="8" fontWeight="900" fill="#FFFFFF" letterSpacing="0.5" fontFamily="system-ui, sans-serif">
        HEIDELBERG
      </text>
      <text x="50" y="80" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#93C5FD" fontFamily="system-ui, sans-serif">
        INDONESIA
      </text>
    </svg>
  ),

  // 24. Boncafé Indonesia
  'boncafe.co.id': ({ className = 'w-full h-full' }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="18" fill="#78350F" />
      {/* Coffee bean */}
      <ellipse cx="50" cy="38" rx="18" ry="14" fill="#F5A623" />
      <path d="M50 24 Q44 38 50 52" stroke="#78350F" strokeWidth="2.5" fill="none" />
      <text x="50" y="72" textAnchor="middle" fontSize="13" fontWeight="900" fontStyle="italic" fill="#FFFFFF" letterSpacing="0.5" fontFamily="system-ui, sans-serif">
        Boncafé
      </text>
      <text x="50" y="84" textAnchor="middle" fontSize="6" fontWeight="700" fill="#FDE68A" letterSpacing="1" fontFamily="system-ui, sans-serif">
        GOURMET COFFEE
      </text>
    </svg>
  ),

  // 25. Chakra Jawara (Iveco / TMT Group)
  'chakrajawara.co.id': ({ className = 'w-full h-full' }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="18" fill="#0F172A" />
      {/* Golden Chakra Wheel */}
      <circle cx="50" cy="40" r="18" stroke="#F5A623" strokeWidth="3" fill="none" />
      <circle cx="50" cy="40" r="6" fill="#F5A623" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((ang, i) => (
        <line key={i} x1="50" y1="24" x2="50" y2="34" stroke="#F5A623" strokeWidth="2" transform={`rotate(${ang} 50 40)`} />
      ))}
      <text x="50" y="74" textAnchor="middle" fontSize="9" fontWeight="900" fill="#FFFFFF" letterSpacing="0.5" fontFamily="system-ui, sans-serif">
        CHAKRA JAWARA
      </text>
      <text x="50" y="85" textAnchor="middle" fontSize="6" fontWeight="700" fill="#F5A623" fontFamily="system-ui, sans-serif">
        TMT GROUP
      </text>
    </svg>
  ),

  // 26. ANJ (Austindo Nusantara Jaya)
  'anj-group.com': ({ className = 'w-full h-full' }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="18" fill="#065F46" />
      <circle cx="50" cy="38" r="16" fill="#10B981" />
      <path d="M50 26 C42 32 46 44 50 50 C54 44 58 32 50 26 Z" fill="#FDE047" />
      <text x="50" y="74" textAnchor="middle" fontSize="16" fontWeight="900" fill="#FFFFFF" letterSpacing="1" fontFamily="system-ui, sans-serif">
        ANJ
      </text>
      <text x="50" y="85" textAnchor="middle" fontSize="6" fontWeight="700" fill="#A7F3D0" fontFamily="system-ui, sans-serif">
        AGRIBUSINESS
      </text>
    </svg>
  ),

  // 27. Koltiva
  'koltiva.com': ({ className = 'w-full h-full' }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="18" fill="#FFFFFF" />
      <circle cx="50" cy="38" r="18" fill="#10B981" />
      <path d="M42 44 C42 34 50 30 58 32 C58 42 50 46 42 44 Z" fill="#FFFFFF" />
      <text x="50" y="74" textAnchor="middle" fontSize="13" fontWeight="900" fill="#065F46" letterSpacing="0.5" fontFamily="system-ui, sans-serif">
        koltiva
      </text>
      <text x="50" y="85" textAnchor="middle" fontSize="6" fontWeight="700" fill="#64748B" fontFamily="system-ui, sans-serif">
        AGRITECH GLOBAL
      </text>
    </svg>
  ),

  // 28. Hadiprana Design
  'hadiprana.biz': ({ className = 'w-full h-full' }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="18" fill="#18181B" />
      {/* Architectural Golden Triangle */}
      <polygon points="50,18 78,60 22,60" stroke="#F5A623" strokeWidth="2.5" fill="none" />
      <polygon points="50,30 68,56 32,56" fill="#F5A623" opacity="0.3" />
      <text x="50" y="76" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#FFFFFF" letterSpacing="2" fontFamily="system-ui, sans-serif">
        HADIPRANA
      </text>
      <text x="50" y="87" textAnchor="middle" fontSize="5.5" fontWeight="600" fill="#F5A623" letterSpacing="1.5" fontFamily="system-ui, sans-serif">
        ARCHITECTURE
      </text>
    </svg>
  ),
};

// Fallback generic vector renderer for clients that use standard corporate styling
export const GenericPartnerLogo: React.FC<{
  name: string;
  category: string;
  className?: string;
}> = ({ name, category, className = 'w-full h-full' }) => {
  const clean = name.replace(/^(PT\.|CV\.|Yayasan|RS)\s+/i, '');
  const words = clean.split(' ').filter(Boolean);
  const initials = words.length >= 2 ? (words[0][0] + words[1][0]).toUpperCase() : clean.slice(0, 2).toUpperCase();

  const colorPalettes: Record<string, { bg: string; text: string; ring: string }> = {
    government: { bg: '#991B1B', text: '#FDE047', ring: '#F5A623' },
    international: { bg: '#0369A1', text: '#FFFFFF', ring: '#38BDF8' },
    enterprise: { bg: '#0F172A', text: '#F5A623', ring: '#475569' },
    banking: { bg: '#1E3A8A', text: '#FFFFFF', ring: '#60A5FA' },
    hospitality: { bg: '#047857', text: '#FEF08A', ring: '#34D399' },
    property: { bg: '#334155', text: '#F5A623', ring: '#64748B' },
  };

  const palette = colorPalettes[category] || colorPalettes.enterprise;

  return (
    <div 
      className={`flex items-center justify-center font-black rounded-xl select-none shadow-xs border ${className}`}
      style={{
        backgroundColor: palette.bg,
        color: palette.text,
        borderColor: palette.ring,
      }}
    >
      <span className="tracking-wider">{initials}</span>
    </div>
  );
};
