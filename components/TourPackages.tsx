import React, { useRef, useLayoutEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { TOUR_PACKAGES } from '../constants';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TourPackages: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // Small delay to ensure layout is computed
    const ctx = gsap.context(() => {
      const container = containerRef.current;
      if (!container) return;

      const items = gsap.utils.toArray('.tour-item');
      // Calculate width manually to be robust against loading images
      const totalWidth = (items.length * window.innerWidth * 0.6) + (window.innerWidth * 0.5); 
      // Fallback check
      const scrollWidth = container.scrollWidth;
      const finalWidth = Math.max(totalWidth, scrollWidth);
      const windowWidth = window.innerWidth;
      
      // Horizontal Scroll Animation
      gsap.to(container, {
        x: () => -(finalWidth - windowWidth),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${finalWidth}`,
          invalidateOnRefresh: true,
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-forest-950 text-sand-50 relative overflow-hidden h-screen">
      {/* Background/Header absolute to stay visible before pin starts moving content */}
      <div className="absolute top-12 left-6 md:left-24 z-10 pointer-events-none">
        <span className="text-gold-400 uppercase tracking-widest text-xs font-bold block mb-2">Signature Expeditions</span>
        <h3 className="font-serif text-5xl md:text-6xl text-sand-50">The Grand Journey</h3>
      </div>

      <div className="absolute bottom-12 left-6 md:left-24 z-10 pointer-events-none md:block hidden">
        <p className="text-white/40 uppercase tracking-widest text-[10px]">Scroll to Explore</p>
      </div>

      {/* Horizontal Container */}
      <div className="h-full flex items-center overflow-visible pl-[10vw] md:pl-[25vw]" ref={containerRef}>
        
        {TOUR_PACKAGES.map((pkg, idx) => (
          <div 
            key={pkg.id} 
            className="tour-item flex-shrink-0 w-[85vw] md:w-[60vw] h-[70vh] md:h-[80vh] mx-4 md:mx-12 relative group"
          >
            {/* Background Image */}
            <div className="absolute inset-0 overflow-hidden">
               <img 
                 src={pkg.image} 
                 alt={pkg.name} 
                 className="w-full h-full object-cover transition-transform duration-[1.5s] ease-luxury group-hover:scale-105 filter brightness-75 group-hover:brightness-100" 
               />
            </div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-transparent opacity-90"></div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
              <div className="flex justify-between items-end border-b border-white/20 pb-8 mb-8">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 border border-gold-400/50 text-gold-400 text-[10px] uppercase tracking-widest rounded-full">
                      {pkg.duration}
                    </span>
                    <span className="text-white/60 text-xs uppercase tracking-widest">{pkg.location}</span>
                  </div>
                  <h4 className="font-serif text-4xl md:text-6xl mb-2">{pkg.name}</h4>
                </div>
                <div className="text-right hidden md:block">
                  <span className="block text-3xl font-serif text-gold-400 italic">{pkg.price}</span>
                  <span className="text-[10px] text-white/40 uppercase tracking-widest">Per person</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <p className="text-gray-300 font-light leading-relaxed text-sm md:text-base">
                  {pkg.description}
                </p>
                <div className="flex flex-col justify-between">
                   <ul className="text-sm text-gray-400 space-y-2 mb-6">
                     {pkg.features.slice(0, 3).map((f, i) => (
                       <li key={i}>• {f}</li>
                     ))}
                   </ul>
                   <button className="self-start md:self-end flex items-center gap-2 text-gold-400 uppercase tracking-widest text-xs font-bold hover:text-white transition-colors">
                     View Itinerary <ArrowUpRight className="w-4 h-4" />
                   </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* End Spacer */}
        <div className="w-[10vw] flex-shrink-0"></div>
      </div>
    </section>
  );
};

export default TourPackages;