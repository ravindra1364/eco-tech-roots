import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-aerial-wetlands.jpg";
import { ChevronDown, Plane, TreePine, Waves } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const scrollToNext = () => {
    const exploreSection = document.querySelector('section');
    exploreSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent" />
      </div>

      {/* Floating organic shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-river organic-shape opacity-20 animate-gentle-float" />
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-forest organic-shape opacity-30 animate-gentle-float" style={{ animationDelay: '1s' }} />

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Icon trio */}
        <div className="flex justify-center items-center gap-8 mb-8">
          <div className="p-3 bg-forest-light/20 rounded-full animate-organic-pulse">
            <Plane className="w-8 h-8 text-white" />
          </div>
          <div className="p-3 bg-river-blue/20 rounded-full animate-organic-pulse" style={{ animationDelay: '1.3s' }}>
            <Waves className="w-8 h-8 text-white" />
          </div>
          <div className="p-3 bg-forest-deep/20 rounded-full animate-organic-pulse" style={{ animationDelay: '2.6s' }}>
            <TreePine className="w-8 h-8 text-white" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Bridging Technology <br />
          <span className="text-river-light">and Nature</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-4xl mx-auto leading-relaxed">
          AI & UAVs for Ecological Conservation
        </p>
        
        <p className="text-lg text-white/80 mb-8 max-w-3xl mx-auto">
          Dr. Ravindra Nath Tripathi, PhD • Principal Project Associate, Wildlife Institute of India
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            asChild
            size="lg" 
            variant="secondary"
            className="bg-white/10 text-white border border-white/30 hover:bg-white/20 backdrop-blur-sm ripple-effect transition-organic"
          >
            <Link to="/research">Explore Research</Link>
          </Button>
          <Button 
            asChild
            size="lg" 
            variant="outline"
            className="bg-transparent text-white border border-white/50 hover:bg-white/10 backdrop-blur-sm ripple-effect transition-organic"
          >
            <Link to="/projects">View Projects</Link>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white transition-organic animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>

      {/* River divider */}
      <div className="absolute bottom-0 left-0 right-0 river-divider" />
    </section>
  );
};

export default HeroSection;