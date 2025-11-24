import React from 'react';

const BentoGallery: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-forest-950 transition-colors duration-700">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold-600 dark:text-gold-400 uppercase tracking-widest text-xs font-bold">Visual Journal</span>
          <h3 className="font-serif text-4xl md:text-5xl mt-4 text-forest-900 dark:text-sand-50">Glimpses of Eternity</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-[120vh] md:h-[80vh]">
          {/* Large Item */}
          <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden">
            <img src="https://picsum.photos/seed/bento1/800/800" className="w-full h-full object-cover transition-transform duration-[2s] ease-luxury group-hover:scale-105" alt="Gallery 1" />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
               <span className="text-sand-50 font-serif italic text-2xl">Stillness</span>
            </div>
          </div>
          
          {/* Top Right Items */}
          <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden">
             <img src="https://picsum.photos/seed/bento2/400/400" className="w-full h-full object-cover transition-transform duration-[2s] ease-luxury group-hover:scale-105" alt="Gallery 2" />
          </div>
          <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden">
             <img src="https://picsum.photos/seed/bento3/400/400" className="w-full h-full object-cover transition-transform duration-[2s] ease-luxury group-hover:scale-105" alt="Gallery 3" />
          </div>

          {/* Bottom Right Items */}
          <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden">
             <img src="https://picsum.photos/seed/bento4/400/400" className="w-full h-full object-cover transition-transform duration-[2s] ease-luxury group-hover:scale-105" alt="Gallery 4" />
          </div>
          <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden bg-forest-900 flex items-center justify-center p-8 text-center">
             <div>
                <p className="font-serif text-gold-400 text-xl italic mb-2">"Nature does not hurry, yet everything is accomplished."</p>
                <span className="text-[10px] uppercase tracking-widest text-sand-200">Lao Tzu</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGallery;