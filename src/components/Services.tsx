import { Gamepad2, Glasses, Sparkles, Cpu } from 'lucide-react';
import { AfricanPattern } from './AfricanPattern';

const services = [
  {
    icon: Gamepad2,
    title: 'Game Development',
    description: 'Creating next-generation gaming experiences that captivate and engage players across all platforms.',
    color: 'from-yellow-600 to-yellow-700',
  },
  {
    icon: Glasses,
    title: 'XR Experiences',
    description: 'Immersive virtual and augmented reality solutions that blur the line between digital and physical worlds.',
    color: 'from-red-800 to-red-900',
  },
  {
    icon: Sparkles,
    title: 'Interactive Media',
    description: 'Innovative digital entertainment that transforms passive viewers into active participants.',
    color: 'from-amber-700 to-yellow-800',
  },
  {
    icon: Cpu,
    title: 'Technology Solutions',
    description: 'Cutting-edge technical infrastructure and tools that power the future of interactive entertainment.',
    color: 'from-emerald-700 to-emerald-800',
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 px-6 md:px-12 bg-gradient-to-b from-stone-950 to-stone-900 overflow-hidden">
      {/* African Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <AfricanPattern />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-red-700"></div>
            <div className="w-3 h-3 rotate-45 bg-yellow-500"></div>
            <div className="w-12 h-1 bg-gradient-to-r from-red-700 via-yellow-500 to-transparent"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl mb-4">What We Create</h2>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">
            Pushing the boundaries of interactive entertainment with innovative technology and creative excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-stone-900/80 border-2 border-stone-800 rounded-2xl hover:border-yellow-600/50 transition-all hover:transform hover:scale-105 backdrop-blur-sm relative overflow-hidden"
              >
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-yellow-600/30"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-red-700/30"></div>
                
                <div className={`w-14 h-14 mb-4 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:rotate-6 transition-transform shadow-lg`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl mb-3">{service.title}</h3>
                <p className="text-stone-400 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}