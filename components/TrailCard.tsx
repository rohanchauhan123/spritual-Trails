import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Trail } from '../types';

interface TrailCardProps {
  trail: Trail;
}

const TrailCard: React.FC<TrailCardProps> = ({ trail }) => {
  return (
    <div className="group relative w-full aspect-[3/4] overflow-hidden cursor-pointer bg-forest-900">
      {/* Image Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-luxury group-hover:scale-110 opacity-80 group-hover:opacity-60"
        style={{ backgroundImage: `url(${trail.imageUrl})` }}
      />
      
      {/* Overlay Gradient - Darker at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />
      
      {/* Content Container */}
      <div className="absolute inset-0 p-8 flex flex-col justify-between">
        
        {/* Top: Location & Tag */}
        <div className="flex justify-between items-start transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-luxury">
          <span className="text-xs font-bold tracking-widest uppercase text-gold-400 border border-gold-400/30 px-3 py-1 rounded-full backdrop-blur-sm">
            {trail.difficulty}
          </span>
          <span className="text-xs tracking-widest uppercase text-white/80">{trail.location}</span>
        </div>

        {/* Bottom: Title & Details */}
        <div className="transform translate-y-4 transition-transform duration-700 ease-luxury group-hover:translate-y-0">
          <h3 className="font-serif text-3xl md:text-4xl text-sand-50 mb-2 leading-tight group-hover:text-white transition-colors">
            {trail.title}
          </h3>
          
          <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500 ease-luxury">
            <p className="text-sm text-gray-300 font-light leading-relaxed mb-6 pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
              {trail.description}
            </p>
            
            <div className="flex items-center justify-between border-t border-white/20 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
              <span className="text-xs uppercase tracking-wider text-white/60">{trail.duration}</span>
              <div className="flex items-center gap-2 text-gold-400">
                <span className="font-serif italic text-lg">{trail.price}</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrailCard;