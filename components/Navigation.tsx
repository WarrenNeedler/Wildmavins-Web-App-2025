
import React, { useState, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { BRAND, IMAGES } from '../constants';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  
  const { scrollY } = useScroll();
  const lastY = useRef(0);
  // Use explicit number type for browser-based timeouts and window.setTimeout to avoid ambiguity
  const scrollTimeout = useRef<number | null>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const diff = latest - lastY.current;
    
    // Only toggle visibility if menu is closed
    if (!isOpen) {
        // Scroll Down -> Hide (if not at very top)
        if (diff > 10 && latest > 50) {
            setIsVisible(false);
        } 
        // Scroll Up -> Show
        else if (diff < -10) {
            setIsVisible(true);
        }
    }

    lastY.current = latest;

    // Reset "Stop Scroll" timer
    if (scrollTimeout.current) {
        window.clearTimeout(scrollTimeout.current);
    }
    
    // "Re-appear when you stop the scroll" logic
    scrollTimeout.current = window.setTimeout(() => {
        setIsVisible(true);
    }, 600); // 600ms pause to show header
  });

  const navLinks = [
    { label: 'Manifesto', href: '#manifesto', id: '01', external: false },
    { label: 'Membership', href: '#membership', id: '02', external: false },
    { label: 'Collection', href: '#collection', id: '03', external: false },
    { label: 'Partners', href: '#partners', id: '04', external: false },
    { label: 'Join', href: '#join', id: '05', external: false },
    { label: 'Login', href: 'https://wildmavins.com/login', id: '06', external: true },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isExternal: boolean) => {
    if (isExternal) return;
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.pushState(null, '', window.location.pathname);
  };

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: isVisible || isOpen ? 0 : '-100%' }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 w-full z-50"
      >
        {/* Cool Almost Black Glass Bar - 60% opacity */}
        <div className="absolute inset-0 bg-mavins-black/60 backdrop-blur-md border-b border-white/10 shadow-lg transition-opacity duration-300"></div>

        {/* Content Container */}
        <div className="relative z-10 px-6 md:px-10 py-4 md:py-5 flex justify-between items-center w-full max-w-[1920px] mx-auto">
            
            {/* Left Side: Logo Only */}
            <a 
              href="/" 
              onClick={handleLogoClick}
              className="group flex items-center space-x-3 pointer-events-auto"
            >
              <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                 {/* Standard White Logo Icon */}
                 <img 
                    src={IMAGES.logoIcon} 
                    alt="WM" 
                    className="absolute inset-0 w-full h-full object-contain transition-all duration-300 group-hover:opacity-0 filter brightness-0 invert"
                 />
                 {/* Neon Hover State */}
                 <img 
                    src={IMAGES.logoIcon} 
                    alt="WM" 
                    className="absolute inset-0 w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ 
                        filter: 'brightness(0) invert(74%) sepia(63%) saturate(2250%) hue-rotate(359deg) brightness(103%) contrast(106%) drop-shadow(0 0 10px rgba(255, 200, 0, 0.9))' 
                    }}
                 />
              </div>
            </a>

            {/* Right Side: Menu Toggle */}
            <button 
              className="flex items-center space-x-3 group pointer-events-auto"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="hidden md:block font-elegant font-bold text-xs text-mavins-white tracking-widest uppercase group-hover:text-mavins-neon transition-colors pt-[2px]">
                  {isOpen ? 'Close' : 'Menu'}
              </span>
              
              <div className="relative w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 group-hover:bg-white/10 group-hover:border-mavins-neon/50 transition-all duration-300">
                 <AnimatePresence mode="wait">
                     {isOpen ? (
                         <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                         >
                             <X className="w-5 h-5 text-mavins-neon" />
                         </motion.div>
                     ) : (
                        <motion.div
                            key="menu"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                         >
                             <Menu className="w-5 h-5 text-mavins-white group-hover:text-mavins-neon transition-colors" />
                         </motion.div>
                     )}
                 </AnimatePresence>
              </div>
            </button>
        </div>
      </motion.nav>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-mavins-black flex flex-col justify-center items-center"
          >
            {/* Background Marquee Decoration */}
            <div className="absolute inset-0 opacity-10 pointer-events-none flex flex-col justify-between py-10 overflow-hidden z-0">
                <div className="whitespace-nowrap animate-marquee text-[10vw] font-sans font-bold text-stroke uppercase leading-none">
                    The Future of Collecting The Future of Collecting The Future of Collecting
                </div>
                <div className="whitespace-nowrap animate-marquee-reverse text-[10vw] font-sans font-bold text-stroke uppercase leading-none">
                    Wildmavins Wildmavins Wildmavins Wildmavins
                </div>
            </div>

            {/* Navigation Links */}
            <div className="relative z-10 flex flex-col space-y-4 md:space-y-6 text-center md:text-left">
              {navLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href, link.external)}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: Number(link.id) * 0.1 }}
                  className="group relative flex items-baseline space-x-4 cursor-pointer justify-center md:justify-start"
                >
                  <span className="hidden md:inline-block font-mono text-xs text-mavins-neon opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-4 group-hover:translate-x-0">
                    {link.id}
                  </span>
                  <span className="font-sans text-5xl md:text-8xl font-black uppercase tracking-tight text-mavins-white group-hover:text-transparent group-hover:text-stroke-neon transition-all duration-300">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Footer / Contact */}
            <div className="absolute bottom-10 left-0 w-full text-center z-20">
              <a 
                href={`mailto:${BRAND.contactEmail}`} 
                className="font-elegant text-xs font-bold text-mavins-silver hover:text-mavins-neon transition-colors tracking-widest"
              >
                {BRAND.contactEmail}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
