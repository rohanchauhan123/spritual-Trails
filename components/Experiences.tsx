import React from 'react';
import { EXPERIENCES } from '../constants';

// Note: In a full implementation, we would pass an onExperienceClick prop here.
// For now, the App component handles view switching, but we style this to look interactive.

const Experiences: React.FC = () => {
  return (
    <section className="py-24 bg-sand-100 dark:bg-forest-900 transition-colors duration-700">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
           <div className="max-w-xl">
             <span className="text-gold-600 dark:text-gold-400 uppercase tracking-widest text-xs font-bold block mb-4">Holistic Wellness</span>
             <h3 className="font-serif text-4xl md:text-5xl text-forest-900 dark:text-sand-50 leading-tight">
               Curated Experiences <br /> for the Soul
             </h3>
           </div>
           <button className="hidden md:block text-xs font-bold uppercase tracking-[0.2em] border-b border-forest-900 dark:border-sand-50 pb-1 text-forest-900 dark:text-sand-50 hover:text-gold-500 hover:border-gold-500 transition-colors">
             View All Rituals
           </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="group relative overflow-hidden cursor-pointer" onClick={() => window.dispatchEvent(new CustomEvent('navigate-experience', { detail: exp.id }))}>
              <div className="aspect-[4/5] overflow-hidden mb-6 relative">
                 <img 
                   src={exp.image} 
                   alt={exp.title} 
                   className="w-full h-full object-cover transition-transform duration-[1.5s] ease-luxury group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                 
                 {/* Hover Reveal Button */}
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 uppercase tracking-widest text-[10px] font-bold">
                      Read More
                    </span>
                 </div>
              </div>
              <div className="relative">
                <h4 className="font-serif text-2xl text-forest-900 dark:text-sand-50 mb-2 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">{exp.title}</h4>
                <p className="text-sm text-forest-800/60 dark:text-sand-200/60 font-light leading-relaxed max-w-xs">{exp.description}</p>
                <div className="w-0 group-hover:w-12 h-[1px] bg-gold-500 mt-4 transition-all duration-500 ease-luxury"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;