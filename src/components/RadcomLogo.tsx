import React, { useState } from 'react';

interface RadcomLogoProps {
  className?: string;
  variant?: 'full' | 'monogram';
  showBackground?: boolean;
}

/**
 * Official logo component for PT. Radcom Solusindo Informatika
 * Uses the official high-resolution photo asset from Google & corporate domain (radcomsolusindo.com)
 * with an SVG fallback.
 */
export const RadcomLogo: React.FC<RadcomLogoProps> = ({
  className = 'w-10 h-10',
  variant = 'full',
  showBackground = true,
}) => {
  const [useFallback, setUseFallback] = useState(false);

  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden ${
        showBackground ? 'bg-white rounded-xl' : ''
      } ${className}`}
    >
      {!useFallback ? (
        <img
          src="/radcom-logo.png"
          alt="PT. Radcom Solusindo Informatika"
          className="w-full h-full object-contain p-0.5"
          onError={() => setUseFallback(true)}
          loading="eager"
        />
      ) : (
        <svg
          viewBox="0 0 500 500"
          className="w-full h-full object-contain"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Logo PT. Radcom Solusindo Informatika"
        >
          {showBackground && <rect width="500" height="500" fill="#FFFFFF" rx="20" />}

          {/* Monogram Group (RSI) */}
          <g id="rsi-monogram">
            {/* Red Accent Triangle on "I" */}
            <polygon points="398,82 445,82 445,129" fill="#DC1E28" />

            {/* Letter R */}
            <path
              fill="#193A8B"
              fillRule="evenodd"
              d="
                M 55,82
                L 175,82
                C 214,82 238,102 238,131
                C 238,158 214,178 175,178
                L 101,178
                L 101,239
                L 155,239
                L 155,285
                L 55,285
                Z

                M 101,128
                L 170,128
                C 188,128 196,134 196,142
                C 196,150 188,156 170,156
                L 101,156
                Z
              "
            />

            {/* Letter S */}
            <path
              fill="#193A8B"
              d="
                M 175,132
                L 295,132
                C 334,132 358,152 358,178
                C 358,206 332,224 290,224
                L 218,224
                C 200,224 190,230 190,238
                C 190,246 200,252 218,252
                L 399,252
                L 399,285
                L 215,285
                C 176,285 148,266 148,238
                C 148,210 174,192 216,192
                L 288,192
                C 306,192 316,186 316,178
                C 316,170 306,164 288,164
                L 175,164
                Z
              "
            />

            {/* Letter I */}
            <path
              fill="#193A8B"
              d="
                M 399,82
                L 399,285
                L 445,285
                L 445,129
                L 398,82
                Z
              "
            />
          </g>

          {/* Corporate Typography */}
          {variant === 'full' && (
            <g
              id="typography"
              fill="#DC1E28"
              fontFamily="'Montserrat', 'Arial Black', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
              fontWeight="900"
            >
              <text x="55" y="340" textLength="390" lengthAdjust="spacing" fontSize="38">
                RADCOM
              </text>
              <text x="55" y="390" textLength="390" lengthAdjust="spacing" fontSize="32">
                SOLUSINDO
              </text>
              <text x="55" y="436" textLength="390" lengthAdjust="spacing" fontSize="27">
                INFORMATIKA
              </text>
            </g>
          )}
        </svg>
      )}
    </div>
  );
};
