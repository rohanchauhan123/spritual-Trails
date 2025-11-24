import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { EXPERIENCES } from '../constants';

interface ExperienceDetailProps {
  id: string;
  onBack: () => void;
}

const ExperienceDetail: React.FC<ExperienceDetailProps> = ({ id, onBack }) => {
  const experience = EXPERIENCES.find(e => e.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!experience) return <div>Experience not found</div>;

  return (
    <div className="bg-sand-50 dark:bg-forest-950 min-h-screen text-forest-900 dark:text-sand-50 transition-colors duration-700">
      
      {/* Hero Image - Parallax */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${experience.image})` }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute bottom-12 left-6 md:left-24 z-10">
          <button onClick={onBack} className="flex items-center gap-2 text-white/80 hover:text-gold-400 uppercase tracking-widest text-xs mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Sanctuary
          </button>
          <h1 className="font-serif text-5xl md:text-8xl text-sand-50">{experience.title}</h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Sidebar / Quick Info */}
          <div className="md:col-span-4">
             <div className="sticky top-32 p-8 border border-forest-900/10 dark:border-white/10 bg-white dark:bg-forest-900">
                <span className="text-gold-600 dark:text-gold-400 uppercase tracking-widest text-xs font-bold block mb-6">Key Benefits</span>
                <ul className="space-y-4 mb-8">
                  {experience.benefits?.map((b, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-forest-800 dark:text-sand-200">
                      <span className="w-1.5 h-1.5 bg-gold-400 rounded-full"></span>
                      {b}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-4 bg-forest-900 dark:bg-sand-50 text-sand-50 dark:text-forest-900 uppercase tracking-[0.2em] text-xs font-bold hover:bg-gold-500 hover:text-white transition-colors">
                  Reserve Session
                </button>
             </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-8">
            <h3 className="font-serif text-3xl mb-8">About the Ritual</h3>
            <p className="text-lg leading-relaxed font-light text-forest-800/80 dark:text-sand-100/80 mb-12">
              {experience.fullDescription}
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-12">
               <img src="https://picsum.photos/seed/detail1/600/400" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700" alt="Detail 1" />
               <img src="https://picsum.photos/seed/detail2/600/400" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700" alt="Detail 2" />
            </div>

            <h3 className="font-serif text-3xl mb-6">What to Expect</h3>
            <p className="text-forest-800/60 dark:text-sand-100/60 font-light mb-4">
              Upon arrival, you will be greeted with herbal tea sourced from local roots. 
              The session begins with a grounding meditation followed by the core practice.
              Silence is maintained throughout the journey to ensure maximum internalization of the energy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetail;