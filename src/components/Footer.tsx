import { Twitter, Linkedin, Github, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from 'figma:asset/1a88c82f213103267ad8def47c82d2f620a76907.png';

export function Footer() {
  return (
    <footer id="contact" className="bg-stone-950 border-t-2 border-yellow-600/30 py-12 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 via-red-700 to-emerald-600"></div>
      
      {/* African pattern subtle overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M30 10 L40 30 L20 30 Z" fill="#D4AF37" />
              <circle cx="45" cy="45" r="3" fill="#722F37" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-pattern)" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <img src={logo} alt="Kora Interactive" className="h-16 mb-4" />
            <p className="text-stone-400 leading-relaxed">
              Crafting the future of entertainment through immersive gaming, XR, and digital experiences.
            </p>
          </div>

          <div>
            <h3 className="text-lg mb-4 text-yellow-400">Quick Links</h3>
            <ul className="space-y-2 text-stone-400">
              <li><a href="#services" className="hover:text-yellow-400 transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-700 rotate-45"></span>Services
              </a></li>
              <li><a href="#products" className="hover:text-yellow-400 transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-700 rotate-45"></span>Products
              </a></li>
              <li><Link to="/about" className="hover:text-yellow-400 transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-700 rotate-45"></span>About Us
              </Link></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-700 rotate-45"></span>Careers
              </a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-700 rotate-45"></span>Press
              </a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg mb-4 text-yellow-400">Connect With Us</h3>
            <div className="flex gap-4 mb-6">
              <a href="https://x.com/ProVision_Inn?s=20" className="w-10 h-10 bg-stone-900 border border-stone-800 rounded-full flex items-center justify-center hover:bg-yellow-600 hover:border-yellow-600 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-stone-900 border border-stone-800 rounded-full flex items-center justify-center hover:bg-red-700 hover:border-red-700 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/provision-innovations/" className="w-10 h-10 bg-stone-900 border border-stone-800 rounded-full flex items-center justify-center hover:bg-yellow-600 hover:border-yellow-600 transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-stone-400 text-sm">
              hello@korainteractive.com
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-800 text-center text-stone-500 text-sm">
          <p>© 2026 Kora Interactive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}