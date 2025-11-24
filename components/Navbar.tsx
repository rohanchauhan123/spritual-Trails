import React, { useState, useEffect } from 'react';
import { Menu, X, Compass, Sun, Moon } from 'lucide-react';
import { ViewState } from '../types';

interface NavbarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate, isDark, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-luxury ${
          isScrolled 
            ? 'py-4 bg-forest-950/90 dark:bg-forest-950/90 bg-sand-50/90 backdrop-blur-md border-b border-forest-900/5 dark:border-white/5 shadow-sm' 
            : 'py-8 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-8 flex justify-between items-center">
          
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => onNavigate(ViewState.HOME)}
          >
            <Compass className={`w-5 h-5 transition-colors duration-500 ${isScrolled ? 'text-gold-500 dark:text-gold-400' : 'text-white'}`} />
            <span className={`font-serif text-lg tracking-[0.2em] font-bold group-hover:text-gold-400 transition-colors ${
              !isScrolled ? 'text-white' : 'text-forest-900 dark:text-sand-50'
            }`}>
              SPIRITUAL TRAILS
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-12">
            {[
              { label: 'Sanctuary', view: ViewState.HOME },
              { label: 'Journeys', view: ViewState.TRAILS },
              { label: 'Oracle', view: ViewState.GUIDE },
              { label: 'Contact', view: ViewState.CONTACT }
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => onNavigate(item.view)}
                className={`relative text-xs font-bold uppercase tracking-[0.15em] hover:text-gold-400 transition-colors duration-300 ${
                  currentView === item.view 
                    ? 'text-gold-500 dark:text-gold-400' 
                    : !isScrolled ? 'text-white/80' : 'text-forest-900/60 dark:text-sand-50/60'
                }`}
              >
                {item.label}
                {currentView === item.view && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-gold-400 rounded-full"></span>
                )}
              </button>
            ))}
            
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors duration-300 ${
                !isScrolled ? 'text-white/80 hover:text-white' : 'text-forest-900/60 dark:text-sand-50/60 hover:text-gold-500'
              }`}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4">
             <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors duration-300 ${
                !isScrolled ? 'text-white' : 'text-forest-900 dark:text-sand-50'
              }`}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={!isScrolled ? 'text-white' : 'text-forest-900 dark:text-sand-50'}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile Menu */}
      <div className={`fixed inset-0 bg-forest-950 z-40 transition-transform duration-700 ease-luxury ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <button 
            className="text-2xl font-serif text-sand-100 hover:text-gold-400 transition-colors"
            onClick={() => { onNavigate(ViewState.HOME); setIsMobileMenuOpen(false); }}
          >
            Sanctuary
          </button>
          <button 
            className="text-2xl font-serif text-sand-100 hover:text-gold-400 transition-colors"
            onClick={() => { onNavigate(ViewState.TRAILS); setIsMobileMenuOpen(false); }}
          >
            Journeys
          </button>
          <button 
            className="text-2xl font-serif text-sand-100 hover:text-gold-400 transition-colors"
            onClick={() => { onNavigate(ViewState.GUIDE); setIsMobileMenuOpen(false); }}
          >
            Oracle Guide
          </button>
          <button 
            className="text-2xl font-serif text-sand-100 hover:text-gold-400 transition-colors"
            onClick={() => { onNavigate(ViewState.CONTACT); setIsMobileMenuOpen(false); }}
          >
            Contact
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;