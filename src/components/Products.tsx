import { Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';

const products = [

  {
    title: 'The Monoverse',
    category: 'Virtual Reality Experience',
    description: 'Step into a digital world where evolution meets nature; build, own, and live digitally, but naturally',
    image: '/src/assets/Monoverse.png',
    // image: 'https://github.com/nkpresh/kora-assets/tree/main/assets/Monoverse/tile000.png',
    rating: 4.8,
    downloads: '1k+',
    status: 'Live',
    accent: 'green',
  },    {
    title: 'Mama Putt',
    category: 'Digital Art Platform',
    description: 'Create stunning digital art in 3D space with our revolutionary mixed reality creation platform.',
    image: '/src/assets/MamaPutt.png',
    rating: 4.7,
    downloads: '500+',
    status: 'Alpha',
    accent: 'yellow',
  },
  {
    title: 'Treasuremania',
    category: 'Augmented Reality Experience',
    description: 'Get into the world of monsters, celestial beings, .',
    image: '/src/assets/Teasuremania.jpeg',
    rating: 0,
    downloads: 'NAN',
    status: 'Coming',
    accent: 'red',
  },
  //   {
  //   title: 'AFRO GT',
  //   category: 'Augmented Reality Experience',
  //   description: 'Get into the world of monsters, celestial beings, .',
  //   image: '/src/assets/Treasuremania/_fe23a972-3747-40e3-8443-af2f7297eb59.jpeg',
  //   rating: 0,
  //   downloads: 'NAN',
  //   status: 'Coming',
  //   accent: 'red',
  // },
  {
    title: 'Urban Conquest',
    category: 'Multiplayer Battle Arena',
    description: 'Join forces with players worldwide in this competitive multiplayer game featuring African warriors and legends.',
    image: '/src/assets/Urban Conquest.jpeg',
    rating: 0,
    downloads: 'NAN',
    status: 'Coming',
    accent: 'red',
  },
];

const getAccentColors = (accent: string) => {
  switch (accent) {
    case 'yellow':
      return {
        border: 'border-yellow-600/50',
        bg: 'bg-yellow-600',
        text: 'text-yellow-400',
        gradient: 'from-yellow-500/20 to-transparent',
      };
    case 'red':
      return {
        border: 'border-red-700/50',
        bg: 'bg-red-700',
        text: 'text-red-400',
        gradient: 'from-red-700/20 to-transparent',
      };
    case 'green':
      return {
        border: 'border-emerald-600/50',
        bg: 'bg-emerald-600',
        text: 'text-emerald-400',
        gradient: 'from-emerald-600/20 to-transparent',
      };
    default:
      return {
        border: 'border-yellow-600/50',
        bg: 'bg-yellow-600',
        text: 'text-yellow-400',
        gradient: 'from-yellow-500/20 to-transparent',
      };
  }
};

export function Products() {
  return (
    <section id="products" className="py-24 px-6 md:px-12 bg-stone-950 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-600/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-red-700/5 to-transparent rounded-full blur-3xl"></div>
      
      {/* African Pattern Elements */}
      <div className="absolute top-40 right-20 opacity-10">
        <svg width="80" height="80" viewBox="0 0 80 80">
          <path d="M40 10 L60 40 L40 70 L20 40 Z" fill="#D4AF37" />
          <circle cx="40" cy="40" r="10" fill="#722F37" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-red-700"></div>
            <div className="w-3 h-3 rotate-45 bg-yellow-500"></div>
            <div className="w-3 h-3 rotate-45 bg-red-700"></div>
            <div className="w-3 h-3 rotate-45 bg-emerald-600"></div>
            <div className="w-12 h-1 bg-gradient-to-r from-red-700 via-yellow-500 to-transparent"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl mb-4">Our Products</h2>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">
            Experience our portfolio of award-winning games and immersive XR applications that blend cutting-edge technology with rich cultural storytelling.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => {
            const colors = getAccentColors(product.accent);
            return (
              <div
                key={index}
                className={`group bg-stone-900/80 border-2 ${colors.border} rounded-3xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm relative`}
              >
                {/* Corner Decorations */}
                <div className="absolute top-0 right-0 w-16 h-16 z-10">
                  <svg viewBox="0 0 60 60" className="w-full h-full">
                    <path d="M0 0 L60 0 L60 60 Z" fill="#D4AF37" opacity="0.2" />
                  </svg>
                </div>
                
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${colors.gradient}`}></div>
                  
                  {/* Status Badge */}
                  <div className={`absolute top-4 left-4 px-4 py-1.5 ${colors.bg} rounded-full text-xs uppercase tracking-wider`}>
                    {product.status}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rotate-45 bg-yellow-500"></div>
                    <p className={`text-sm uppercase tracking-wider ${colors.text}`}>
                      {product.category}
                    </p>
                  </div>
                  
                  <h3 className="text-2xl mb-3">{product.title}</h3>
                  <p className="text-stone-400 leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <Star className={`w-5 h-5 ${colors.text} fill-current`} />
                      <span className="text-lg">{product.rating}</span>
                    </div>
                    <div className="text-stone-400">
                      {product.downloads} Downloads
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link to={`/product/${product.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <button className={`w-full py-3 border-2 ${colors.border} rounded-full hover:${colors.bg} hover:border-transparent transition-all flex items-center justify-center gap-2 group/btn`}>
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>

                {/* Decorative Bottom Corner */}
                <div className="absolute bottom-0 left-0 w-12 h-12">
                  <svg viewBox="0 0 40 40" className="w-full h-full">
                    <path d="M0 40 L0 0 L40 40 Z" fill="#722F37" opacity="0.2" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-stone-400 mb-6">Want to see more of what we're building?</p>
          <Link to="/portfolio">
            <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 via-red-700 to-yellow-600 rounded-full hover:scale-105 transition-transform shadow-lg shadow-yellow-500/20">
              View Full Portfolio
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}