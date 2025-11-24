import React, { useRef, useEffect, useState } from 'react';
import { POPULAR_DESTINATIONS } from '../constants';
import { MapPin, ArrowRight } from 'lucide-react';

const PopularDestinations: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const requestRef = useRef<number>(0);

  // Auto-scroll Logic
  useEffect(() => {
    const scroll = () => {
      if (scrollContainerRef.current && !isPaused && !isDragging) {
        const container = scrollContainerRef.current;
        // The scroll amount per frame
        container.scrollLeft += 0.5;

        // Infinite loop reset logic
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      requestRef.current = requestAnimationFrame(scroll);
    };

    requestRef.current = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(requestRef.current);
  }, [isPaused, isDragging]);

  // Manual Drag Logic
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0));
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    if (scrollContainerRef.current) {
      const x = e.pageX - (scrollContainerRef.current.offsetLeft || 0);
      const walk = (x - startX) * 2; // Scroll-fastness
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  // Duplicate items for infinite loop
  const displayItems = [...POPULAR_DESTINATIONS, ...POPULAR_DESTINATIONS];

  return (
    <section className="py-32 bg-sand-50 dark:bg-forest-950 transition-colors duration-700 relative overflow-hidden border-t border-forest-900/5 dark:border-white/5">
      <div className="container mx-auto px-6 mb-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end">
          <div>
            <span className="text-gold-600 dark:text-gold-400 uppercase tracking-widest text-xs font-bold block mb-4 border border-gold-500/30 w-fit px-3 py-1 rounded-full">
              Endless Horizons
            </span>
            <h2 className="font-serif text-5xl md:text-7xl text-forest-900 dark:text-sand-100">
              Popular Destinations
            </h2>
          </div>
          <p className="text-forest-800/60 dark:text-white/50 mt-6 md:mt-0 max-w-sm text-sm font-light uppercase tracking-widest">
            Drag to explore • Hover to pause
          </p>
        </div>
      </div>

      {/* Slider Container */}
      <div 
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-hidden md:cursor-grab md:active:cursor-grabbing pl-6 pb-12 select-none"
        style={{ overflowX: 'auto', scrollbarWidth: 'none' }} /* allow native scroll on touch */
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => { setIsPaused(false); setIsDragging(false); }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {displayItems.map((dest, idx) => (
          <div 
            key={`${dest.id}-${idx}`}
            className="group relative flex-shrink-0 w-[300px] md:w-[400px] aspect-[3/5] overflow-hidden rounded-sm"
          >
            {/* Image with Parallax Zoom on Hover */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-luxury group-hover:scale-110"
              style={{ backgroundImage: `url(${dest.image})` }}
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />

            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between">
              
              {/* Top Label */}
              <div className="flex items-center gap-2 transform -translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <MapPin className="w-3 h-3 text-gold-400" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/80">{dest.location}</span>
              </div>

              {/* Bottom Content */}
              <div className="transform translate-y-4 transition-transform duration-700 ease-luxury group-hover:translate-y-0">
                <h3 className="font-serif text-3xl text-sand-50 mb-4 leading-none group-hover:text-white transition-colors">
                  {dest.title}
                </h3>
                
                <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500 ease-luxury">
                  <div className="pt-4 border-t border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                    <p className="text-sm text-gray-300 font-light leading-relaxed mb-6">
                      {dest.description}
                    </p>
                    <button className="flex items-center gap-2 text-gold-400 text-xs uppercase tracking-widest hover:text-white transition-colors">
                      Discover <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularDestinations;