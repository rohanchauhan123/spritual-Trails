import React from 'react';
import { Check } from 'lucide-react';
import { PACKAGES } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section className="py-32 bg-sand-50 dark:bg-forest-900 transition-colors duration-700 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h3 className="font-serif text-4xl md:text-5xl text-forest-900 dark:text-sand-50 mb-6">Sanctuary Membership</h3>
          <p className="text-forest-800/60 dark:text-sand-200/60 max-w-lg mx-auto font-light">
            Commit to your inner journey. Exclusive access to hidden trails, private retreats, and global sanctuaries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {PACKAGES.map((pkg, idx) => (
            <div 
              key={idx} 
              className={`relative p-10 transition-all duration-500 group ${
                pkg.highlight 
                  ? 'bg-forest-900 dark:bg-forest-950 text-sand-50 md:-mt-8 md:mb-8 shadow-2xl border border-gold-500/30' 
                  : 'bg-white dark:bg-forest-800/50 border border-black/5 dark:border-white/5 hover:border-gold-400/50'
              }`}
            >
              {pkg.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold-500 text-forest-950 text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              
              <h4 className={`font-serif text-2xl mb-2 ${pkg.highlight ? 'text-sand-50' : 'text-forest-900 dark:text-sand-50'}`}>
                {pkg.name}
              </h4>
              <div className="flex items-baseline gap-1 mb-8">
                <span className={`text-4xl font-light ${pkg.highlight ? 'text-gold-400' : 'text-forest-800 dark:text-gold-400'}`}>{pkg.price}</span>
                <span className="text-xs uppercase tracking-widest opacity-60">{pkg.period}</span>
              </div>

              <ul className="space-y-4 mb-10">
                {pkg.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-light opacity-80">
                    <Check className={`w-4 h-4 ${pkg.highlight ? 'text-gold-400' : 'text-forest-500 dark:text-gold-400'}`} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${
                pkg.highlight 
                  ? 'bg-gold-500 text-forest-950 hover:bg-gold-400' 
                  : 'bg-transparent border border-forest-900/10 dark:border-white/10 text-forest-900 dark:text-sand-50 hover:border-gold-400 hover:text-gold-500'
              }`}>
                Join Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;