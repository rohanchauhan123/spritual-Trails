import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="py-32 bg-forest-950 text-sand-50 relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] border border-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] border border-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-12">
            <Quote className="w-12 h-12 text-gold-500/20" />
          </div>
          
          <div className="min-h-[250px] flex items-center justify-center">
             <h3 key={current} className="font-serif text-3xl md:text-5xl leading-tight animate-fade-in">
               "{TESTIMONIALS[current].quote}"
             </h3>
          </div>

          <div className="mt-12 flex flex-col items-center">
            <div className="w-12 h-[1px] bg-gold-500 mb-6"></div>
            <span className="text-sm font-bold uppercase tracking-widest text-gold-400">{TESTIMONIALS[current].author}</span>
            <span className="text-xs text-white/40 mt-1 uppercase tracking-widest">{TESTIMONIALS[current].location}</span>
          </div>

          <div className="flex justify-center gap-4 mt-12">
            <button onClick={prev} className="p-3 rounded-full border border-white/10 hover:border-gold-400 hover:text-gold-400 transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button onClick={next} className="p-3 rounded-full border border-white/10 hover:border-gold-400 hover:text-gold-400 transition-colors">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;