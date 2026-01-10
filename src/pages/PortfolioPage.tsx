import { ArrowLeft, Star, Calendar, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Footer } from '../components/Footer';
import logo from 'figma:asset/1a88c82f213103267ad8def47c82d2f620a76907.png';

const portfolioItems = [
  {
    title: 'Safari Legends',
    category: 'Mobile Adventure Game',
    year: '2025',
    description: 'An epic journey through the African savanna with stunning visuals and engaging gameplay mechanics.',
    image: 'https://images.unsplash.com/photo-1564049489314-60d154ff107d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBnYW1pbmd8ZW58MXx8fHwxNzY3NzY4OTcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 4.8,
    users: '2M+',
    accent: 'yellow',
  },
  {
    title: 'Ancestral Realms VR',
    category: 'Virtual Reality Experience',
    year: '2024',
    description: 'Immersive VR worlds inspired by African folklore and mythology with breathtaking environments.',
    image: 'https://images.unsplash.com/photo-1609126126390-15ab454eeb23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXJ0dWFsJTIwcmVhbGl0eSUyMGV4cGVyaWVuY2V8ZW58MXx8fHwxNzY3ODMxNzgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 4.9,
    users: '500K+',
    accent: 'red',
  },
  {
    title: 'Creativity Studio XR',
    category: 'Digital Art Platform',
    year: '2024',
    description: 'Revolutionary mixed reality platform for creating stunning digital art in 3D space.',
    image: 'https://images.unsplash.com/photo-1763931504269-d66c27e8c5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYXJ0JTIwY3JlYXRpb258ZW58MXx8fHwxNzY3NzE5ODQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 4.7,
    users: '1M+',
    accent: 'green',
  },
  {
    title: 'Warriors Unite',
    category: 'Multiplayer Battle Arena',
    year: '2023',
    description: 'Competitive multiplayer game featuring African warriors with strategic gameplay.',
    image: 'https://images.unsplash.com/photo-1758598497271-691207e1586d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdWx0aXBsYXllciUyMGdhbWluZ3xlbnwxfHx8fDE3Njc4MzE3ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 4.6,
    users: '3M+',
    accent: 'yellow',
  },
  {
    title: 'Rhythm of the Drums',
    category: 'Music Rhythm Game',
    year: '2023',
    description: 'An energetic rhythm game celebrating African drumming traditions and music.',
    image: 'https://images.unsplash.com/photo-1640823127518-65e1ad563576?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXJ0dWFsJTIwcmVhbGl0eSUyMGdhbWluZ3xlbnwxfHx8fDE3Njc3NTUyMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 4.5,
    users: '1.5M+',
    accent: 'red',
  },
  {
    title: 'Market Tales AR',
    category: 'Augmented Reality',
    year: '2022',
    description: 'AR experience bringing African marketplaces to life with interactive storytelling.',
    image: 'https://images.unsplash.com/photo-1672581437674-3186b17b405a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3Njc3Njc4MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 4.4,
    users: '800K+',
    accent: 'green',
  },
];

const getAccentColors = (accent: string) => {
  switch (accent) {
    case 'yellow':
      return { border: 'border-yellow-600/50', text: 'text-yellow-400' };
    case 'red':
      return { border: 'border-red-700/50', text: 'text-red-400' };
    case 'green':
      return { border: 'border-emerald-600/50', text: 'text-emerald-400' };
    default:
      return { border: 'border-yellow-600/50', text: 'text-yellow-400' };
  }
};

export function PortfolioPage() {
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
        <div className="absolute top-20 left-20 opacity-10">
          <svg width="100" height="100" viewBox="0 0 100 100">
            <path d="M50 10 L80 50 L50 90 L20 50 Z" fill="#D4AF37" />
            <circle cx="50" cy="50" r="15" fill="#722F37" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-red-700"></div>
            <div className="w-3 h-3 rotate-45 bg-yellow-500"></div>
            <div className="w-3 h-3 rotate-45 bg-red-700"></div>
            <div className="w-3 h-3 rotate-45 bg-emerald-600"></div>
            <div className="w-12 h-1 bg-gradient-to-r from-red-700 via-yellow-500 to-transparent"></div>
          </div>

          <h1 className="text-5xl md:text-7xl mb-6">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-600 to-emerald-500">
              Portfolio
            </span>
          </h1>
          <p className="text-xl text-stone-300 leading-relaxed">
            Explore our complete collection of groundbreaking games, XR experiences, 
            and digital entertainment products that have captivated millions worldwide.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 px-6 md:px-12 bg-stone-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => {
              const colors = getAccentColors(item.accent);
              return (
                <div
                  key={index}
                  className={`group bg-stone-900/80 border-2 ${colors.border} rounded-3xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300`}
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rotate-45 bg-yellow-500"></div>
                      <p className={`text-sm uppercase tracking-wider ${colors.text}`}>
                        {item.category}
                      </p>
                    </div>
                    
                    <h3 className="text-2xl mb-3">{item.title}</h3>
                    <p className="text-stone-400 leading-relaxed mb-6 line-clamp-2">
                      {item.description}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center gap-6 text-sm text-stone-400">
                      <div className="flex items-center gap-2">
                        <Star className={`w-4 h-4 ${colors.text} fill-current`} />
                        <span>{item.rating}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{item.users}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{item.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 bg-stone-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6">
            Want to Collaborate?
          </h2>
          <p className="text-xl text-stone-300 mb-8">
            We're always looking for exciting partnerships and new opportunities 
            to create amazing experiences together.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 via-red-700 to-yellow-600 rounded-full hover:scale-105 transition-transform shadow-lg shadow-yellow-500/20">
            Get In Touch
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
