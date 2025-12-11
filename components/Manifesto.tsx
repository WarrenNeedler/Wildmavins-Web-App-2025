
import React from 'react';
import { motion } from 'framer-motion';

const Manifesto: React.FC = () => {
  return (
    <section id="manifesto" className="bg-mavins-black py-24 md:py-32 relative overflow-hidden flex flex-col items-center justify-center">
      <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
        
        {/* Header Tag - Bold Headline */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="mb-8 md:mb-12"
        >
             <span className="font-sans font-black text-mavins-neon text-lg md:text-xl tracking-[0.2em] uppercase border-b-2 border-mavins-neon pb-2">
                01 // THE MANIFESTO
            </span>
        </motion.div>

        {/* Content Container */}
        <div className="space-y-8">
            
            {/* Primary Statement */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center space-y-6"
            >
                <h2 className="font-sans font-black text-4xl md:text-6xl leading-none text-mavins-white uppercase tracking-wide">
                    The <span className="text-mavins-neon">Wildmavins</span>
                </h2>
                
                <div className="font-serif text-lg md:text-2xl text-mavins-white leading-snug max-w-3xl space-y-3 opacity-90">
                    <p>Those who devote ten thousand hours to a craft.</p>
                    <p>Those who protect the integrity of their work, even when the world wants it faster and cheaper.</p>
                    <p>Those who make, shape, and curate culture.</p>
                </div>
            </motion.div>

            {/* Sub-text */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="pt-6 border-t border-mavins-gray/30 w-full max-w-lg mx-auto"
            >
                 <p className="font-elegant font-bold text-xs text-mavins-silver uppercase tracking-[0.25em] leading-loose">
                    A global private community designed for collectors, curators, creators and experts.
                 </p>
            </motion.div>

        </div>

      </div>
      
      {/* Refined Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-mavins-neon/5 blur-[100px] rounded-full pointer-events-none opacity-20" />
    </section>
  );
};

export default Manifesto;
