export function AfricanPattern() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="african-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
          {/* Triangles */}
          <path d="M30 10 L40 30 L20 30 Z" fill="#D4AF37" />
          <path d="M90 10 L100 30 L80 30 Z" fill="#8B4513" />
          
          {/* Diamonds */}
          <path d="M60 40 L70 50 L60 60 L50 50 Z" fill="#722F37" />
          <path d="M10 80 L20 90 L10 100 L0 90 Z" fill="#4A7C59" />
          
          {/* Zigzag lines */}
          <path d="M0 20 L10 30 L20 20 L30 30 L40 20" stroke="#D4AF37" strokeWidth="2" fill="none" />
          <path d="M60 80 L70 90 L80 80 L90 90 L100 80" stroke="#722F37" strokeWidth="2" fill="none" />
          
          {/* Circles */}
          <circle cx="100" cy="60" r="5" fill="#4A7C59" />
          <circle cx="30" cy="90" r="4" fill="#D4AF37" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#african-pattern)" />
    </svg>
  );
}
