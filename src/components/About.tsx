import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-stone-900 relative overflow-hidden">
      {/* Decorative African-inspired elements */}
      <div className="absolute top-20 right-10 w-32 h-32 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 10 L90 90 L10 90 Z" fill="#D4AF37" />
          <circle cx="50" cy="60" r="15" fill="#722F37" />
        </svg>
      </div>
      <div className="absolute bottom-20 left-10 w-40 h-40 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 30 L70 50 L50 70 L30 50 Z" fill="#8B4513" />
          <path d="M50 40 L60 50 L50 60 L40 50 Z" fill="#D4AF37" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Decorative accent */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rotate-45 bg-yellow-500"></div>
              <div className="w-2 h-2 rotate-45 bg-red-700"></div>
              <div className="w-2 h-2 rotate-45 bg-emerald-600"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl mb-6">
              Building Tomorrow's
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-600 to-emerald-500">
                {' '}Entertainment Experiences
              </span>
            </h2>
            <p className="text-stone-300 text-lg mb-6 leading-relaxed">
              At Kora Interactive, we're not just creating games and experiences—we're 
              architecting entire worlds. Our team of visionaries, developers, and artists 
              work together to craft immersive digital experiences that resonate with 
              audiences worldwide.
            </p>
            <p className="text-stone-300 text-lg mb-8 leading-relaxed">
              From cutting-edge XR applications to boundary-pushing games, we leverage 
              the latest technology to create unforgettable moments that connect people 
              and inspire wonder.
            </p>
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center relative">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-yellow-500"></div>
                <div className="text-4xl text-yellow-400 mb-2">3+</div>
                <div className="text-stone-400 text-sm">Projects Launched</div>
              </div>
              <div className="text-center relative">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-red-700"></div>
                <div className="text-4xl text-red-500 mb-2">1M+</div>
                <div className="text-stone-400 text-sm">Active Users</div>
              </div>
              <div className="text-center relative">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-emerald-600"></div>
                <div className="text-4xl text-emerald-500 mb-2">5+</div>
                <div className="text-stone-400 text-sm">Team Members</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1672581437674-3186b17b405a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3Njc3Njc4MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Futuristic Technology"
                className="w-full h-64 object-cover rounded-2xl border-2 border-yellow-600/30"
              />
              <div className="h-48 bg-gradient-to-br from-amber-900/40 to-red-900/40 rounded-2xl border-2 border-yellow-600/30 flex items-center justify-center backdrop-blur-sm relative overflow-hidden">
                {/* Decorative corner */}
                <div className="absolute top-2 right-2 w-6 h-6">
                  <svg viewBox="0 0 20 20" className="w-full h-full">
                    <path d="M0 0 L20 0 L10 10 Z" fill="#D4AF37" opacity="0.5" />
                  </svg>
                </div>
                <div className="text-center">
                  <div className="text-6xl mb-2">🎮</div>
                  <div className="text-sm text-stone-300">Interactive Gaming</div>
                </div>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="h-48 bg-gradient-to-br from-red-900/40 to-emerald-900/40 rounded-2xl border-2 border-red-700/30 flex items-center justify-center backdrop-blur-sm relative overflow-hidden">
                {/* Decorative corner */}
                <div className="absolute bottom-2 left-2 w-6 h-6">
                  <svg viewBox="0 0 20 20" className="w-full h-full">
                    <path d="M0 20 L20 20 L10 10 Z" fill="#722F37" opacity="0.5" />
                  </svg>
                </div>
                <div className="text-center">
                  <div className="text-6xl mb-2">🥽</div>
                  <div className="text-sm text-stone-300">XR Experiences</div>
                </div>
              </div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1629429407756-4a7703614972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBoZWFkc2V0fGVufDF8fHx8MTc2Nzc5MzMwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Gaming Headset"
                className="w-full h-64 object-cover rounded-2xl border-2 border-red-700/30"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}