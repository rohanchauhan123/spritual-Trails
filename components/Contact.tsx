import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-sand-50 dark:bg-forest-950 transition-colors duration-700">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
          
          {/* Info Side */}
          <div>
             <span className="text-gold-600 dark:text-gold-400 uppercase tracking-widest text-xs font-bold block mb-6">Get in Touch</span>
             <h2 className="font-serif text-5xl md:text-7xl text-forest-900 dark:text-sand-50 mb-12">Begin the Dialogue.</h2>
             
             <div className="space-y-12">
               <div className="group">
                 <h5 className="flex items-center gap-3 text-forest-900 dark:text-sand-200 uppercase tracking-widest text-xs font-bold mb-4">
                   <Mail className="w-4 h-4 text-gold-500" /> Inquiries
                 </h5>
                 <p className="font-serif text-2xl text-forest-800 dark:text-sand-100 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors cursor-pointer">
                   hello@spiritualtrails.com
                 </p>
               </div>
               
               <div className="group">
                 <h5 className="flex items-center gap-3 text-forest-900 dark:text-sand-200 uppercase tracking-widest text-xs font-bold mb-4">
                   <Phone className="w-4 h-4 text-gold-500" /> Concierge
                 </h5>
                 <p className="font-serif text-2xl text-forest-800 dark:text-sand-100 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors cursor-pointer">
                   +1 (800) 555-0199
                 </p>
               </div>

               <div className="group">
                 <h5 className="flex items-center gap-3 text-forest-900 dark:text-sand-200 uppercase tracking-widest text-xs font-bold mb-4">
                   <MapPin className="w-4 h-4 text-gold-500" /> Headquarters
                 </h5>
                 <p className="text-lg font-light text-forest-800 dark:text-sand-200 leading-relaxed">
                   108 Silence Ave.<br />
                   Kyoto, 605-0000<br />
                   Japan
                 </p>
               </div>
             </div>
          </div>

          {/* Form Side */}
          <div className="bg-white dark:bg-forest-900 p-8 md:p-12 border border-forest-900/5 dark:border-white/5 shadow-2xl">
            <h3 className="font-serif text-2xl text-forest-900 dark:text-sand-50 mb-8">Send a Message</h3>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-forest-500 dark:text-sand-300">First Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-forest-900/20 dark:border-white/20 py-2 text-forest-900 dark:text-sand-50 focus:border-gold-500 outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-forest-500 dark:text-sand-300">Last Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-forest-900/20 dark:border-white/20 py-2 text-forest-900 dark:text-sand-50 focus:border-gold-500 outline-none transition-colors" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-forest-500 dark:text-sand-300">Email Address</label>
                <input type="email" className="w-full bg-transparent border-b border-forest-900/20 dark:border-white/20 py-2 text-forest-900 dark:text-sand-50 focus:border-gold-500 outline-none transition-colors" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-forest-500 dark:text-sand-300">Message</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-forest-900/20 dark:border-white/20 py-2 text-forest-900 dark:text-sand-50 focus:border-gold-500 outline-none transition-colors resize-none"></textarea>
              </div>

              <button className="w-full bg-forest-900 dark:bg-sand-50 text-sand-50 dark:text-forest-900 py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-gold-500 hover:text-white transition-colors duration-500">
                Submit Inquiry
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;