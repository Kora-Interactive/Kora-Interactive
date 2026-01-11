import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { AfricanPattern } from './AfricanPattern';
import logo from 'figma:asset/1a88c82f213103267ad8def47c82d2f620a76907.png';

export function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-stone-950">
      {/* African Pattern Overlay */}
      <div className="absolute inset-0 z-0">
        <AfricanPattern />
      </div>

      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://res.cloudinary.com/drrkmnmct/image/upload/v1768153057/photo-1640823127518-65e1ad563576_t5amif.jpg"
          alt="VR Gaming Experience"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/90 via-stone-900/70 to-stone-950"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-6">
        <Link to="/">
          <img src={logo} alt="Kora Interactive" className="h-12 md:h-16" />
        </Link>
        <div className="hidden md:flex gap-8">
          <a href="#services" className="hover:text-yellow-400 transition-colors">Services</a>
          <a href="#products" className="hover:text-yellow-400 transition-colors">Products</a>
          <Link to="/about" className="hover:text-yellow-400 transition-colors">About</Link>
          <a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 h-[calc(100%-88px)] flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight">
          Crafting the Future
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-600 to-yellow-500">
            of Entertainment
          </span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-12 text-stone-300">
          Pioneering immersive experiences in gaming, XR, and digital entertainment
          that push the boundaries of reality.
        </p>
        <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 via-red-700 to-yellow-600 rounded-full hover:scale-105 transition-transform shadow-lg shadow-yellow-500/20">
          Explore Our World
        </button>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 animate-bounce">
          <ChevronDown className="w-8 h-8 text-yellow-400" />
        </div>
      </div>
    </div>
  );
}