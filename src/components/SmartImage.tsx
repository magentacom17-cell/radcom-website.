import React, { useState } from 'react';

interface SmartImageProps {
  localSrc?: string;
  fallbackUrl: string;
  alt: string;
  className?: string;
  onClick?: () => void;
}

export const SmartImage: React.FC<SmartImageProps> = ({
  localSrc,
  fallbackUrl,
  alt,
  className = '',
  onClick,
}) => {
  const [useFallback, setUseFallback] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  // If no localSrc provided, directly use fallback
  const source = !localSrc || useFallback ? fallbackUrl : localSrc;

  return (
    <div className={`relative overflow-hidden bg-slate-200 ${className}`}>
      {!hasLoaded && (
        <div className="absolute inset-0 bg-slate-200 animate-pulse" />
      )}
      <img
        src={source}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          hasLoaded ? 'opacity-100' : 'opacity-0'
        } ${onClick ? 'cursor-pointer hover:scale-105 transition-transform duration-300' : ''}`}
        loading="lazy"
        referrerPolicy="no-referrer"
        onLoad={() => setHasLoaded(true)}
        onError={() => {
          if (!useFallback) {
            setUseFallback(true);
            setHasLoaded(false);
          }
        }}
        onClick={onClick}
      />
    </div>
  );
};
