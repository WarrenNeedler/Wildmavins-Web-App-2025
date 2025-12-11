
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IMAGES } from '../constants';
import { ArrowUpRight, Plus, Minus } from 'lucide-react';

const PARTNERS_DATA = [
  {
      id: "01",
      name: "Gabriel Calatrava",
      role: "ARCHITECT",
      images: IMAGES.partners.calatrava,
      link: "https://www.cal.xyz/"
  },
  {
      id: "02",
      name: "Marco Cedano",
      role: "MASTER DISTILLER",
      images: IMAGES.partners.cedano,
      link: "https://restaurantindustry.co.uk/2025/06/23/interview-with-marco-cedano-master-distiller-and-founder-of-tequila-tromba/"
  },
  {
      id: "03",
      name: "ThankYouX",
      role: "ARTIST",
      images: IMAGES.partners.thankyoux,
      link: "https://www.instagram.com/thankyoux/?hl=en"
  },
  {
      id: "04",
      name: "Seedphrase",
      role: "CURATOR",
      images: IMAGES.partners.seedphrase,
      link: "https://www.instagram.com/seedphrase/?hl=en"
  },
  {
      id: "05",
      name: "Lacure",
      role: "HOSPITALITY",
      images: IMAGES.partners.lacure,
      link: "https://www.lacurevillas.com/"
  },
];

const Partners: React.FC = () => {
  const [activePartner, setActivePartner] = useState<number>(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Reset slide index when switching partners
  useEffect(() => {
    setCurrentSlide(0);
  }, [activePartner]);

  // Slideshow interval for active partner
  useEffect(() => {
    const interval = setInterval(() => {
      const images = PARTNERS_DATA[activePartner]?.images || [];
      if (images.length > 1) {
        setCurrentSlide((prev) => (prev + 1) % images.length);
      }
    }, 4000); 

    return () => clearInterval(interval);
  }, [activePartner]);

  return (
    <section id="partners" className="bg-mavins-black py-24 relative overflow-hidden flex flex-col">
       {/* Header */}
       <div className="container mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between md:items-end relative z-20">
            <div>
                <span className="font-elegant font-bold text-xs text-mavins-neon tracking-[0.3em] uppercase block mb-4">
                    // The Architects
                </span>
                <h2 className="font-sans font-black text-5xl md:text-7xl text-mavins-white uppercase leading-none">
                    Building <br className="hidden md:block" /> Culture
                </h2>
            </div>
            <div className="mt-6 md:mt-0 max-w-md md:text-right">
                <p className="font-serif text-mavins-silver text-lg md:text-xl leading-relaxed">
                    Wildmavins is being built along side renowned creators, artists, curators and partners. Meet some of them.
                </p>
            </div>
       </div>

       {/* Accordion Container */}
       <div className="w-full h-[80vh] min-h-[600px] flex flex-col md:flex-row border-y border-mavins-gray/30 bg-mavins-dark">
          {PARTNERS_DATA.map((partner, index) => {
            const isActive = activePartner === index;
            
            return (
              <motion.div
                key={partner.id}
                layout
                onClick={() => setActivePartner(index)}
                onHoverStart={() => setActivePartner(index)} // Desktop hover interaction
                className={`relative border-b md:border-b-0 md:border-r border-mavins-gray/30 overflow-hidden cursor-pointer group transition-all duration-500 ease-out`}
                initial={false}
                animate={{ 
                    flex: isActive ? 3.5 : 1,
                    filter: isActive ? 'grayscale(0%)' : 'grayscale(100%) brightness(50%)' 
                }}
              >
                 {/* Background Image/Slideshow */}
                 <div className="absolute inset-0 w-full h-full bg-black">
                    <AnimatePresence mode="wait">
                         <motion.img 
                            key={`${partner.id}-${currentSlide}`}
                            src={partner.images[currentSlide] || partner.images[0]}
                            alt={partner.name}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5 }}
                            className="absolute inset-0 w-full h-full object-cover opacity-60"
                         />
                    </AnimatePresence>
                    {/* Gradient Overlays */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-mavins-black via-transparent to-black/40 ${isActive ? 'opacity-80' : 'opacity-90'}`} />
                 </div>

                 {/* Content Wrapper */}
                 <div className={`absolute inset-0 p-6 md:p-10 flex flex-col z-10 pointer-events-none transition-all duration-500 ${isActive ? 'justify-end' : 'justify-center md:justify-end'}`}>
                    
                    {/* Number & Icon - Absolute for consistent positioning */}
                    <div className="absolute top-6 left-6 right-6 md:top-10 md:left-10 md:right-10 flex justify-between items-start z-20 pointer-events-auto">
                        <span className={`font-mono text-xs tracking-widest ${isActive ? 'text-mavins-neon' : 'text-mavins-silver'}`}>
                            {partner.id}
                        </span>
                        {/* Status Icon */}
                        <div className={`transition-transform duration-500`}>
                             {isActive ? <ArrowUpRight className="text-mavins-neon w-6 h-6" /> : <Plus className="text-mavins-silver/50 w-6 h-6" />}
                        </div>
                    </div>

                    {/* Main Text Info */}
                    <div className={`relative w-full transition-all duration-500 z-20 pointer-events-auto`}>
                        
                        {/* Vertical Text for Desktop Inactive State */}
                        {!isActive && (
                            <div className="hidden md:block absolute bottom-0 left-0 origin-bottom-left -rotate-90 translate-x-10 w-[400px]">
                                <h3 className="font-sans font-bold text-4xl uppercase text-mavins-white tracking-widest opacity-60 group-hover:opacity-100 whitespace-nowrap transition-opacity">
                                    {partner.name}
                                </h3>
                            </div>
                        )}

                        {/* Mobile Inactive State - Centered Title */}
                        <div className={`md:hidden absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                            <h3 className="font-sans font-bold text-3xl uppercase text-mavins-white tracking-wider text-center">
                                {partner.name}
                            </h3>
                        </div>
                        
                        {/* Active Content (Revealed on Open) */}
                        <div className={`${isActive ? 'opacity-100 translate-y-0 text-left' : 'opacity-0 translate-y-10 md:translate-y-0'} transition-all duration-500`}>
                             <h4 className="font-elegant font-bold text-xs text-mavins-neon uppercase tracking-widest mb-2 md:mb-3">
                                {partner.role}
                             </h4>
                             <h3 className={`font-sans font-black uppercase text-mavins-white leading-[0.9] mb-4 md:mb-8 transition-all duration-500 ${isActive ? 'text-4xl md:text-7xl' : 'text-2xl md:text-7xl'}`}>
                                {partner.name}
                             </h3>
                             
                             {/* Link Section - Reveal on Active */}
                             <div className={`overflow-hidden transition-all duration-500 delay-100 ${isActive ? 'max-h-20 opacity-100 translate-y-0' : 'max-h-0 opacity-0 translate-y-4'}`}>
                                 <a 
                                    href={partner.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center space-x-2 border-b border-mavins-white pb-1 hover:border-mavins-neon hover:text-mavins-neon transition-colors"
                                 >
                                    <span className="font-elegant font-bold text-xs uppercase tracking-widest">View Profile</span>
                                    <ArrowUpRight size={14} />
                                 </a>
                             </div>
                        </div>
                    </div>
                 </div>

                 {/* Hover Shine Effect */}
                 <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out pointer-events-none" />

              </motion.div>
            );
          })}
       </div>
    </section>
  );
};

export default Partners;
