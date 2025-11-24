import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrailCard from './components/TrailCard';
import GeminiGuide from './components/GeminiGuide';
import Experiences from './components/Experiences';
import BentoGallery from './components/BentoGallery';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import { TRAILS } from './constants';
import { ViewState } from './types';
import { Mountain, Wind, Droplets, Star } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayView, setDisplayView] = useState<ViewState>(ViewState.HOME);
  const [isDark, setIsDark] = useState(true);

  // Toggle Dark Mode
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  // Handle smooth view transitions
  useEffect(() => {
    if (currentView !== displayView) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setDisplayView(currentView);
        setIsTransitioning(false);
        window.scrollTo(0, 0);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentView, displayView]);

  const renderContent = () => {
    switch (displayView) {
      case ViewState.GUIDE:
        return <GeminiGuide />;
      case ViewState.TRAILS:
        return (
          <div className="pt-32 pb-24 min-h-screen bg-sand-50 dark:bg-forest-950 transition-colors duration-700">
            <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-forest-900/10 dark:border-white/10 pb-8">
                <div>
                  <span className="text-gold-600 dark:text-gold-400 uppercase tracking-[0.2em] text-xs font-bold block mb-4">Curated Experiences</span>
                  <h2 className="font-serif text-5xl md:text-7xl text-forest-900 dark:text-sand-100">Sacred Destinations</h2>
                </div>
                <p className="text-forest-800/60 dark:text-white/60 max-w-sm mt-8 md:mt-0 font-light">
                  Select your path. Each journey is designed to challenge the body and calm the spirit.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                {TRAILS.map((trail, index) => (
                  <div key={trail.id} className={`${index % 2 !== 0 ? 'md:mt-24' : ''}`}>
                    <TrailCard trail={trail} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case ViewState.HOME:
      default:
        return (
          <>
            <Hero onExplore={() => setCurrentView(ViewState.TRAILS)} />
            
            {/* Scrolling Marquee */}
            <div className="bg-gold-500 py-3 overflow-hidden whitespace-nowrap border-y border-black">
              <div className="animate-marquee inline-block">
                <span className="text-forest-950 font-bold tracking-[0.3em] mx-8 uppercase text-sm">Reconnect • Breathe • Discover • Silence • Nature • Spirit • Reconnect • Breathe • Discover • Silence • Nature • Spirit</span>
                <span className="text-forest-950 font-bold tracking-[0.3em] mx-8 uppercase text-sm">Reconnect • Breathe • Discover • Silence • Nature • Spirit • Reconnect • Breathe • Discover • Silence • Nature • Spirit</span>
              </div>
            </div>

            {/* Philosophy Section - Editorial Layout */}
            <section className="py-32 bg-white dark:bg-forest-900 relative overflow-hidden transition-colors duration-700">
               <div className="container mx-auto px-6">
                 <div className="grid md:grid-cols-12 gap-12 items-center">
                   
                   {/* Left Text Column */}
                   <div className="md:col-span-5 relative z-10">
                     <div className="w-12 h-[1px] bg-gold-400 mb-8"></div>
                     <h3 className="font-serif text-4xl md:text-6xl text-forest-900 dark:text-sand-50 leading-[1.1] mb-8">
                       Listen to the <br/>
                       <span className="italic text-gold-500 dark:text-gold-400">Quietude.</span>
                     </h3>
                     <p className="text-forest-800/70 dark:text-gray-400 text-lg leading-relaxed font-light mb-12">
                       In a world of constant noise, we offer the ultimate luxury: silence. Our trails are not merely vacations, but pilgrimages to the self. We believe the wilderness is the original cathedral.
                     </p>
                     
                     <div className="space-y-6">
                        {[
                          { icon: Mountain, title: "Grounding", desc: "Connect with the earth beneath." },
                          { icon: Wind, title: "Clarity", desc: "Let the wind clear your mind." },
                          { icon: Droplets, title: "Flow", desc: "Move like water through life." }
                        ].map((item, i) => (
                          <div key={i} className="flex items-center group cursor-default">
                            <div className="w-12 h-12 rounded-full border border-forest-900/10 dark:border-white/10 flex items-center justify-center group-hover:border-gold-400 group-hover:bg-gold-400/10 transition-colors mr-6">
                              <item.icon className="w-5 h-5 text-gold-500 dark:text-gold-400" />
                            </div>
                            <div>
                              <h4 className="uppercase tracking-widest text-xs font-bold text-forest-900 dark:text-sand-200">{item.title}</h4>
                              <p className="text-forest-800/50 dark:text-white/40 text-sm">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                     </div>
                   </div>

                   {/* Right Image Composition */}
                   <div className="md:col-span-7 relative">
                      <div className="relative z-10 ml-auto w-[85%] aspect-[3/4] overflow-hidden">
                        <img 
                          src="https://picsum.photos/seed/meditate/800/1000" 
                          alt="Meditation" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s] ease-luxury"
                        />
                      </div>
                      {/* Decorative elements */}
                      <div className="absolute top-12 left-0 w-64 h-80 border border-gold-400/20 z-0 hidden md:block"></div>
                      <div className="absolute -bottom-12 -right-12 text-[12rem] font-serif text-forest-900/5 dark:text-white/5 pointer-events-none leading-none z-0">
                        ZEN
                      </div>
                   </div>

                 </div>
               </div>
            </section>

            {/* Popular Destinations (Replaces previous Featured) */}
            <section className="py-32 bg-sand-50 dark:bg-forest-950 transition-colors duration-700 relative">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-forest-900/10 dark:via-white/20 to-transparent"></div>
              
              <div className="container mx-auto px-6">
                 <div className="text-center mb-20">
                    <span className="text-gold-600 dark:text-gold-400 uppercase tracking-widest text-xs font-bold border border-gold-500/30 dark:border-gold-400/30 px-4 py-2 rounded-full">Featured Expeditions</span>
                    <h2 className="font-serif text-5xl md:text-7xl mt-8 text-forest-900 dark:text-white">Popular Destinations</h2>
                    <p className="text-forest-800/60 dark:text-white/50 mt-6 max-w-xl mx-auto font-light">
                      Journey to the ends of the earth.
                    </p>
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-1 px-4 md:px-0">
                    <div className="h-[500px] overflow-hidden relative group">
                      <img src="https://picsum.photos/seed/andes1/600/800" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-luxury" alt="Andes 1" />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                    </div>
                    <div className="h-[500px] overflow-hidden relative group md:-mt-12 z-10 shadow-2xl">
                      <img src="https://picsum.photos/seed/andes2/600/800" className="w-full h-full object-cover transition-transform duration-1000 ease-luxury hover:scale-110" alt="Andes 2" />
                      <div className="absolute bottom-8 left-8 right-8 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                         <button onClick={() => setCurrentView(ViewState.TRAILS)} className="text-sm border-b border-white pb-1 hover:text-gold-400 hover:border-gold-400 transition-colors uppercase tracking-widest text-white">View Journey</button>
                      </div>
                    </div>
                    <div className="h-[500px] overflow-hidden relative group">
                      <img src="https://picsum.photos/seed/andes3/600/800" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-luxury" alt="Andes 3" />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                    </div>
                 </div>
              </div>
            </section>

            {/* New Sections */}
            <Experiences />
            <BentoGallery />
            <Pricing />
            <Testimonials />

            {/* AI Call to Action */}
            <section className="py-32 bg-forest-900 flex justify-center items-center text-center px-6 relative overflow-hidden">
               <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
               <div className="max-w-4xl relative z-10">
                  <Star className="w-8 h-8 text-gold-400 mx-auto mb-8 animate-spin-slow" />
                  <h2 className="font-serif text-5xl md:text-7xl text-sand-50 mb-8">Unsure where to wander?</h2>
                  <p className="text-gray-400 text-xl mb-12 font-light max-w-2xl mx-auto">
                    Consult our Spirit Guide. An AI oracle tuned to the frequencies of the earth, ready to align your soul with its destination.
                  </p>
                  <button 
                    onClick={() => setCurrentView(ViewState.GUIDE)}
                    className="bg-transparent border border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-forest-900 px-12 py-4 uppercase tracking-[0.2em] text-sm font-bold transition-all duration-500 ease-luxury"
                  >
                    Consult the Oracle
                  </button>
               </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className={`${isDark ? 'dark' : ''} bg-sand-50 dark:bg-forest-950 transition-colors duration-700 ease-luxury`}>
      <div className="min-h-screen flex flex-col font-sans text-forest-900 dark:text-sand-100 selection:bg-gold-500 selection:text-forest-950">
        <Navbar currentView={currentView} onNavigate={setCurrentView} isDark={isDark} toggleTheme={toggleTheme} />
        
        <main className={`flex-grow transition-opacity duration-500 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          {renderContent()}
        </main>
        
        {/* Footer */}
        <footer className="bg-forest-950 dark:bg-black text-white py-20 border-t border-white/10">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="col-span-1 md:col-span-4">
              <h4 className="font-serif text-3xl tracking-wider font-bold mb-6 text-white">SPIRITUAL TRAILS</h4>
              <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                We curate journeys that do not just move the body, but move the soul. Reconnecting humanity with the sacred silence of nature.
              </p>
            </div>
            <div className="col-span-1 md:col-span-2 md:col-start-7">
              <h5 className="text-gold-400 uppercase tracking-widest text-[10px] font-bold mb-8">Navigation</h5>
              <ul className="space-y-4 text-xs tracking-widest uppercase text-gray-400">
                <li className="cursor-pointer hover:text-white transition-colors" onClick={() => setCurrentView(ViewState.HOME)}>Sanctuary</li>
                <li className="cursor-pointer hover:text-white transition-colors" onClick={() => setCurrentView(ViewState.TRAILS)}>Journeys</li>
                <li className="cursor-pointer hover:text-white transition-colors" onClick={() => setCurrentView(ViewState.GUIDE)}>Oracle</li>
              </ul>
            </div>
            <div className="col-span-1 md:col-span-3">
               <h5 className="text-gold-400 uppercase tracking-widest text-[10px] font-bold mb-8">Contact</h5>
               <div className="text-gray-400 text-sm font-light leading-relaxed">
                 <p>hello@spiritualtrails.com</p>
                 <p>+1 (555) 000-0000</p>
                 <div className="mt-4 flex gap-4">
                   <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-gold-400 transition-colors cursor-pointer">IG</span>
                   <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-gold-400 transition-colors cursor-pointer">X</span>
                 </div>
               </div>
            </div>
          </div>
          <div className="container mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex justify-between items-center text-[10px] text-gray-600 uppercase tracking-widest">
            <span>© 2024 Spiritual Trails</span>
            <span>Designed with Gemini</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;