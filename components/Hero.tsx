import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations slightly after mount
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-forest-950">
      {/* Background Image with Slow Zoom (Ken Burns effect) */}
      <div className="absolute inset-0 overflow-hidden">
         <div 
          className={`w-full h-full bg-cover bg-center transition-transform duration-[20s] ease-linear ${isLoaded ? 'scale-110' : 'scale-100'}`}
          style={{ backgroundImage: 'url(https://picsum.photos/seed/mountainsph/1920/1080)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-forest-950/90"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        
        {/* Decorative Top Line */}
        <div className={`w-[1px] h-24 bg-gold-400/50 mb-8 transition-all duration-1000 ease-luxury origin-top ${isLoaded ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}></div>

        <div className="reveal-container mb-6">
          <h2 className={`text-gold-400 text-xs md:text-sm tracking-[0.4em] uppercase font-bold reveal-text ${isLoaded ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            The Inner Odyssey
          </h2>
        </div>

        <h1 className="font-serif text-5xl md:text-8xl lg:text-9xl text-sand-50 leading-[0.9] mix-blend-overlay opacity-90 mb-8">
          <div className="reveal-container">
            <div className={`reveal-text ${isLoaded ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>SACRED</div>
          </div>
          <div className="reveal-container">
            <div className={`reveal-text italic text-gold-400 ${isLoaded ? 'visible' : ''}`} style={{ transitionDelay: '0.6s' }}>SILENCE</div>
          </div>
        </h1>

        <p className={`max-w-md text-base md:text-lg font-light text-sand-200/80 mb-12 transition-all duration-1000 ease-luxury ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.8s' }}>
          Luxury spiritual expeditions crafted for the modern seeker. Reconnect with the rhythm of the earth.
        </p>
        
        <button 
          onClick={onExplore}
          className={`group relative px-10 py-4 overflow-hidden border border-sand-100/20 hover:border-gold-400/50 transition-all duration-700 ease-luxury ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '1s' }}
        >
          <div className="absolute inset-0 w-0 bg-gold-400 transition-all duration-[250ms] ease-out group-hover:w-full opacity-10"></div>
          <span className="relative z-10 text-xs tracking-[0.2em] uppercase font-bold text-sand-100 group-hover:text-gold-400 transition-colors">Begin Journey</span>
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-12 left-0 w-full flex justify-center transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '1.2s' }}>
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-[10px] uppercase tracking-widest text-white/40">Scroll</span>
          <ArrowDown className="w-4 h-4 text-gold-400" />
        </div>
      </div>
    </div>
  );
};

export default Hero;