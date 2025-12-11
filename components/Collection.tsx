
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useInView } from 'framer-motion';
import { IMAGES } from '../constants';
import { X } from 'lucide-react';

const Collection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const [activeModal, setActiveModal] = useState<'collection' | 'artist' | null>(null);
  
  const isVideoInView = useInView(videoContainerRef, { margin: "-20% 0px -20% 0px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  useEffect(() => {
    if (videoRef.current) {
      if (isVideoInView) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {});
        }
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVideoInView]);

  const closeModal = () => setActiveModal(null);

  return (
    <section ref={containerRef} id="collection" className="bg-mavins-black relative overflow-hidden">
        {/* Header */}
        <div className="py-24 px-6 border-b border-mavins-gray/50 relative z-20 bg-mavins-black">
            <h2 className="font-sans font-black text-6xl md:text-[10rem] text-mavins-white text-center uppercase tracking-tighter leading-none">
                The <span className="text-stroke-neon block md:inline">Founders Drop</span>
            </h2>
        </div>

        {/* Item 1: Tequila - Bottle Visualization */}
        <div className="relative w-full min-h-screen flex flex-col md:flex-row group" data-nav-color="black">
            <div className="md:w-1/2 h-[70vh] md:h-auto relative overflow-hidden border-r border-mavins-gray/30 bg-mavins-white/5 flex items-end justify-center">
                <motion.div 
                    className="w-full h-full relative"
                    initial="rest"
                    whileHover="active"
                >
                    {/* 
                        Logic for Cinematic Bottle:
                        - Anchored to bottom.
                        - Object-contain preserves the whole bottle (no crop).
                        - We want it to "scale up from bottom", so we use object-bottom.
                        - To minimize empty space, we treat it as a hero object.
                    */}
                    <motion.img 
                        src={IMAGES.collection.bottle} 
                        alt="Bottle"
                        className="w-full h-full object-contain object-bottom" 
                        style={{ transformOrigin: 'bottom center' }}
                        variants={{
                            rest: { 
                                scale: 1, 
                            },
                            active: { 
                                scale: 1.05, 
                                transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } 
                            }
                        }}
                    />
                </motion.div>
                
                {/* Mobile Text Overlay for context */}
                <div className="absolute bottom-4 left-4 md:hidden z-30">
                     <span className="bg-mavins-black/80 backdrop-blur text-mavins-white px-3 py-1 font-elegant font-bold text-xs tracking-widest border border-mavins-gray/50">FIG. 001</span>
                </div>
            </div>

            <div className="md:w-1/2 flex flex-col justify-center p-8 md:p-24 bg-mavins-black relative z-20" data-nav-color="white">
                <div className="border-l-2 border-mavins-gray pl-8 transition-colors group-hover:border-mavins-neon">
                    <span className="font-elegant font-bold text-mavins-neon text-xs mb-6 block uppercase tracking-[0.25em]">001 / Launch Collection</span>
                    <h3 className="font-sans font-black text-5xl md:text-8xl mb-8 text-mavins-white uppercase leading-[0.85] transition-all duration-500">
                        Calatrava <br/><span className="text-mavins-neon">|</span> Cedano
                    </h3>
                    <p className="font-serif text-lg md:text-2xl text-mavins-silver mb-10 max-w-md leading-relaxed">
                        Extra Añejo Tequila. A Global Exclusive. Only 1000 bottles ever made. Architecture meets Distillation.
                    </p>
                    <button 
                        onClick={() => setActiveModal('collection')}
                        className="px-10 py-4 border border-mavins-white text-mavins-white font-elegant font-bold text-xs uppercase tracking-widest hover:bg-mavins-neon hover:border-mavins-neon hover:text-black transition-all duration-300"
                    >
                        About the Collection
                    </button>
                </div>
            </div>
        </div>

        {/* Item 2: Art (ThankYouX Video) */}
        <div className="relative w-full min-h-screen flex flex-col md:flex-row-reverse group">
            <div 
                ref={videoContainerRef}
                className="md:w-1/2 h-[60vh] md:h-auto relative overflow-hidden border-l border-mavins-gray/30 bg-mavins-white/5" 
                data-nav-color="black"
            >
                 <motion.div 
                    className="w-full h-[120%] relative -top-[10%]"
                    style={{ y: parallaxY }} // Parallax Effect
                    initial="rest"
                    whileHover="active"
                >
                    <motion.video 
                        ref={videoRef}
                        src={IMAGES.collection.artVideo} 
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                        variants={{
                            rest: { 
                                scale: 1, 
                            },
                            active: { 
                                scale: 1.05,
                                transition: { 
                                    scale: { duration: 1.5, ease: "easeOut" }
                                } 
                            }
                        }}
                    />
                </motion.div>
            </div>

             <div className="md:w-1/2 flex flex-col justify-center p-8 md:p-24 bg-mavins-black relative z-20 md:text-right items-start md:items-end" data-nav-color="white">
                <div className="border-l-2 md:border-l-0 md:border-r-2 border-mavins-gray pl-8 md:pl-0 md:pr-8 transition-colors group-hover:border-mavins-neon">
                    <span className="font-elegant font-bold text-mavins-neon text-xs mb-6 block uppercase tracking-[0.25em]">002 / 1:1 Art</span>
                    <h3 className="font-sans font-black text-5xl md:text-8xl mb-8 text-mavins-white uppercase leading-[0.85] transition-all duration-500">
                        ThankYouX
                    </h3>
                    <p className="font-serif text-lg md:text-2xl text-mavins-silver mb-10 max-w-md leading-relaxed ml-auto">
                        Bridging the gap between traditional art and Web3. A digital and physical masterpiece. Your asset is art.
                    </p>
                     <button 
                        onClick={() => setActiveModal('artist')}
                        className="px-10 py-4 border border-mavins-white text-mavins-white font-elegant font-bold text-xs uppercase tracking-widest hover:bg-mavins-neon hover:border-mavins-neon hover:text-black transition-all duration-300"
                    >
                        Artist Profile
                    </button>
                </div>
            </div>
        </div>

        {/* Modal Overlays */}
        <AnimatePresence>
          {activeModal && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 z-50 flex items-center justify-center bg-mavins-black/95 backdrop-blur-md px-4 py-8 md:p-8"
            >
              {/* MODAL 1: CALATRAVA COLLECTION */}
              {activeModal === 'collection' && (
                <motion.div 
                    initial={{ scale: 0.9, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.9, y: 20 }}
                    onClick={(e) => e.stopPropagation()}
                    className="relative w-full max-w-2xl bg-mavins-dark border border-mavins-gray shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-mavins-neon shadow-[0_0_15px_#FFC800]"></div>
                    <button 
                        onClick={closeModal}
                        className="absolute top-6 right-6 text-mavins-silver hover:text-mavins-neon transition-colors z-50"
                    >
                        <X size={24} />
                    </button>

                    <div className="p-8 md:p-12 flex flex-col text-center md:text-left">
                        <span className="font-elegant font-bold text-xs text-mavins-neon tracking-widest uppercase mb-4">Collection Specs</span>
                        <h3 className="font-sans font-bold text-3xl md:text-4xl text-mavins-white uppercase leading-tight mb-8">
                            Calatrava | Cedano <br/> Extra Añejo Tequila
                        </h3>
                        <div className="w-12 h-[1px] bg-mavins-gray mb-8 mx-auto md:mx-0"></div>
                        <p className="font-serif text-lg md:text-xl text-mavins-silver leading-relaxed">
                            A globally exclusive collection that won't be released to retail. A collaboration between renowned Architect <span className="text-mavins-white">Gabriel Calatrava</span> and Master Distiller <span className="text-mavins-white">Marco Cedano</span>. Founders receive a limited edition hand blown crystal bottle and packaging limited to 1000.
                        </p>
                    </div>

                    <div className="bg-black/50 p-4 border-t border-mavins-gray/30 flex justify-between items-center font-mono text-[10px] text-mavins-silver/50 uppercase tracking-wider">
                        <span>Auth: 0x...71A</span>
                        <span>Ver: 1.0</span>
                    </div>
                </motion.div>
              )}

              {/* MODAL 2: THANKYOUX ARTIST PROFILE (SCROLLABLE & LARGER) */}
              {activeModal === 'artist' && (
                  <motion.div 
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    onClick={(e) => e.stopPropagation()}
                    className="relative w-full max-w-5xl h-full max-h-[85vh] bg-mavins-dark border border-mavins-gray shadow-2xl flex flex-col overflow-hidden"
                  >
                      {/* Close & Header Bar */}
                      <div className="sticky top-0 z-50 bg-mavins-dark/95 backdrop-blur border-b border-mavins-gray/50 p-6 flex justify-between items-center">
                          <span className="font-elegant font-bold text-xs text-mavins-neon tracking-[0.2em] uppercase">Artist Dossier // 002</span>
                          <button onClick={closeModal} className="text-mavins-white hover:text-mavins-neon transition-colors">
                              <X size={32} />
                          </button>
                      </div>
                      
                      {/* Scrollable Content */}
                      <div className="overflow-y-auto custom-scrollbar flex-1 p-0">
                          <div className="flex flex-col md:flex-row">
                              
                              {/* Left: Image */}
                              <div className="md:w-5/12 relative h-[400px] md:h-auto">
                                  <img 
                                    src={IMAGES.collection.thankyouxHeadshot} 
                                    alt="ThankYouX" 
                                    className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-mavins-black via-transparent to-transparent opacity-80 md:hidden"></div>
                              </div>
                              
                              {/* Right: Text */}
                              <div className="md:w-7/12 p-8 md:p-16">
                                  <h2 className="font-sans font-black text-5xl md:text-7xl uppercase text-mavins-white leading-[0.85] mb-8">
                                      Meet <br/><span className="text-stroke-neon text-transparent">ThankYouX</span>
                                  </h2>
                                  
                                  <div className="w-24 h-1 bg-mavins-neon mb-10"></div>
                                  
                                  <div className="space-y-8 font-serif text-lg md:text-xl text-mavins-silver leading-relaxed">
                                      <p>
                                          <span className="text-mavins-white font-bold">ThankYouX</span>, a painter from Los Angeles, California, began his artistic career in 2009. Starting as an acclaimed yet anonymous street artist, over the last fifteen years, his work has evolved into experimentation with geometric forms and layered abstraction that is now internationally recognized.
                                      </p>
                                      <p>
                                          As an enthusiastic proponent of emerging technology, ThankYouX expanded his artistic practice in 2020, when he started exploring and creating digital blockchain-based artwork.
                                      </p>
                                      <p>
                                          He quickly became one of the leaders in the space, bridging the gap between traditional art and Web3. Notable moments include his solo show <span className="text-mavins-white italic">'Inertia'</span> at Sotheby's gallery in LA, a collaboration with Hans Zimmer, inclusion of his work in institutions like the The Museum of the Future in Dubai and The Bechtler Museum of Modern Art, partnerships with major auction houses as both an artist and curator.
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      
                      {/* Footer */}
                      <div className="p-4 bg-black border-t border-mavins-gray text-right">
                          <span className="font-mono text-[10px] text-mavins-gray uppercase tracking-widest">End of Record</span>
                      </div>
                  </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

    </section>
  );
};

export default Collection;
