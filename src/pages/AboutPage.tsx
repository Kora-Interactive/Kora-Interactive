import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Footer } from '../components/Footer';
import logo from 'figma:asset/1a88c82f213103267ad8def47c82d2f620a76907.png';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-950 text-white">
      {/* Header */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-6 border-b border-stone-800">
        <Link to="/">
          <img src={logo} alt="Kora Interactive" className="h-12 md:h-16" />
        </Link>
        <Link to="/" className="flex items-center gap-2 text-stone-400 hover:text-yellow-400 transition-colors">
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-stone-950 to-stone-900 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M50 10 L90 90 L10 90 Z" fill="#D4AF37" />
            <circle cx="50" cy="60" r="15" fill="#722F37" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-red-700"></div>
            <div className="w-3 h-3 rotate-45 bg-yellow-500"></div>
            <div className="w-12 h-1 bg-gradient-to-r from-red-700 via-yellow-500 to-transparent"></div>
          </div>

          <h1 className="text-5xl md:text-7xl mb-6">
            About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-600 to-emerald-500">
              Kora Interactive
            </span>
          </h1>
          <p className="text-xl text-stone-300 leading-relaxed">
            We are storytellers, innovators, and dreamers dedicated to crafting 
            extraordinary digital experiences that celebrate culture and push technological boundaries.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-6 md:px-12 bg-stone-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8 bg-stone-950/50 border-2 border-yellow-600/30 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16">
                <svg viewBox="0 0 60 60" className="w-full h-full">
                  <path d="M0 0 L60 0 L60 60 Z" fill="#D4AF37" opacity="0.2" />
                </svg>
              </div>
              <div className="w-12 h-1 bg-yellow-500 mb-6"></div>
              <h2 className="text-3xl mb-4 text-yellow-400">Our Mission</h2>
              <p className="text-stone-300 leading-relaxed text-lg">
                To create world-class gaming and XR experiences that honor African heritage 
                while pioneering the future of interactive entertainment. We believe technology 
                and culture can unite to create experiences that inspire, educate, and entertain 
                audiences across the globe.
              </p>
            </div>

            <div className="p-8 bg-stone-950/50 border-2 border-red-700/30 rounded-3xl relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-16 h-16">
                <svg viewBox="0 0 60 60" className="w-full h-full">
                  <path d="M0 60 L0 0 L60 60 Z" fill="#722F37" opacity="0.2" />
                </svg>
              </div>
              <div className="w-12 h-1 bg-red-700 mb-6"></div>
              <h2 className="text-3xl mb-4 text-red-400">Our Vision</h2>
              <p className="text-stone-300 leading-relaxed text-lg">
                To become Africa's leading digital entertainment company, recognized globally 
                for innovative storytelling, cutting-edge technology, and experiences that 
                transcend borders. We envision a future where African creativity leads the 
                global entertainment industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-6 md:px-12 bg-stone-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl mb-6">Our Story</h2>
              <div className="space-y-4 text-stone-300 leading-relaxed text-lg">
                <p>
                  Founded in 2020, Kora Interactive began with a simple yet powerful vision: 
                  to create digital entertainment that celebrates African culture while 
                  embracing cutting-edge technology.
                </p>
                <p>
                  What started as a small team of passionate game developers and artists has 
                  grown into a dynamic studio of over 30 talented individuals from diverse 
                  backgrounds, all united by a shared love for innovation and storytelling.
                </p>
                <p>
                  Today, our products reach millions of users worldwide, and we continue to 
                  push the boundaries of what's possible in gaming, XR, and interactive media.
                </p>
                <p>
                  From our headquarters in Lagos to our global community of players, we remain 
                  committed to creating experiences that inspire wonder, foster connection, 
                  and celebrate the richness of our heritage.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1672581437674-3186b17b405a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3Njc3Njc4MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Our Technology"
                  className="w-full h-64 object-cover rounded-2xl border-2 border-yellow-600/30"
                />
                <div className="h-48 bg-gradient-to-br from-amber-900/40 to-red-900/40 rounded-2xl border-2 border-yellow-600/30 flex items-center justify-center backdrop-blur-sm">
                  <div className="text-6xl">🎮</div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-48 bg-gradient-to-br from-red-900/40 to-emerald-900/40 rounded-2xl border-2 border-red-700/30 flex items-center justify-center backdrop-blur-sm">
                  <div className="text-6xl">🥽</div>
                </div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1629429407756-4a7703614972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBoZWFkc2V0fGVufDF8fHx8MTc2Nzc5MzMwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Gaming Innovation"
                  className="w-full h-64 object-cover rounded-2xl border-2 border-red-700/30"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-24 px-6 md:px-12 bg-stone-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-center mb-16">By The Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-stone-950/50 border-2 border-yellow-600/30 rounded-2xl">
              <div className="text-5xl text-yellow-400 mb-3">50+</div>
              <div className="text-stone-400">Projects Launched</div>
            </div>
            <div className="text-center p-8 bg-stone-950/50 border-2 border-red-700/30 rounded-2xl">
              <div className="text-5xl text-red-400 mb-3">15M+</div>
              <div className="text-stone-400">Active Users</div>
            </div>
            <div className="text-center p-8 bg-stone-950/50 border-2 border-emerald-600/30 rounded-2xl">
              <div className="text-5xl text-emerald-400 mb-3">30+</div>
              <div className="text-stone-400">Team Members</div>
            </div>
            <div className="text-center p-8 bg-stone-950/50 border-2 border-yellow-600/30 rounded-2xl">
              <div className="text-5xl text-yellow-400 mb-3">25+</div>
              <div className="text-stone-400">Awards Won</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 md:px-12 bg-stone-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-center mb-16">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-stone-900/50 border-2 border-yellow-600/30 rounded-2xl">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-2xl mb-3 text-yellow-400">Cultural Pride</h3>
              <p className="text-stone-300 leading-relaxed">
                We celebrate and honor African heritage in everything we create, 
                sharing our stories with the world.
              </p>
            </div>
            <div className="p-8 bg-stone-900/50 border-2 border-red-700/30 rounded-2xl">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl mb-3 text-red-400">Innovation</h3>
              <p className="text-stone-300 leading-relaxed">
                We push the boundaries of technology to create groundbreaking 
                experiences that inspire and delight.
              </p>
            </div>
            <div className="p-8 bg-stone-900/50 border-2 border-emerald-600/30 rounded-2xl">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl mb-3 text-emerald-400">Community</h3>
              <p className="text-stone-300 leading-relaxed">
                We build experiences that bring people together and create 
                lasting connections across the globe.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
