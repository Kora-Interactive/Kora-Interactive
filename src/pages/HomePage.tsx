import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Products } from '../components/Products';
import { About } from '../components/About';
import { Footer } from '../components/Footer';

export function HomePage() {
  return (
    <div className="min-h-screen bg-stone-950 text-white">
      <Hero />
      <Services />
      <Products />
      <About />
      <Footer />
    </div>
  );
}
