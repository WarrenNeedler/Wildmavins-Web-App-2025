
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { IMAGES } from '../constants';
import { ArrowRight, User } from 'lucide-react';

interface HeroProps {
  onApply: () => void;
}

const Hero: React.FC<HeroProps> = ({ onApply }) => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-[100dvh] w-full bg-mavins-black overflow-hidden flex flex-col justify-between pt-24 pb-12">
      
      {/* Parallax Background Video */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-50 contrast-125 saturate-110 scale-[1.2] origin-center" 
        >
            <source src={IMAGES.hero.video} type="video/mp4" />
        </video>
        
        {/* Gradients and Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-mavins-black via-mavins-black/20 to-mavins-black/40" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>
      </motion.div>

      {/* Top Meta Data */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="relative z-10 px-6 flex justify-between items-start font-mono text-xs text-mavins-neon/80"
      >
         <div className="flex flex-col tracking-widest">
            <span>COORDINATES</span>
            <span>19.3133° N, 81.2546° W</span>
         </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 w-full px-4 text-center flex flex-col items-center justify-center flex-grow">
         <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, ease: "circOut", delay: 0.5 }}
            className="w-[1px] h-16 md:h-24 bg-gradient-to-b from-transparent via-mavins-neon to-mavins-neon mb-8 origin-top"
         />

         {/* Animated Logo */}
         <div className="w-full max-w-5xl relative px-4 md:px-0">
             <motion.img
                src={IMAGES.hero.logo}
                alt="WILDMAVINS"
                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                animate={{ 
                    opacity: 1, 
                    scale: 1, 
                    filter: "blur(0px)" 
                }}
                transition={{ 
                    duration: 1.5, 
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.2
                }}
                className="w-full h-auto drop-shadow-2xl"
             />
         </div>
         
         <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 1.5, duration: 1 }}
             className="mt-8 md:mt-12 flex flex-col justify-center items-center space-y-4"
         >
            <div className="flex items-center space-x-4 md:space-x-8 mb-4">
                <span className="w-8 md:w-16 h-[1px] bg-mavins-neon/50"></span>
                <p className="font-elegant text-[10px] md:text-sm uppercase tracking-[0.4em] text-mavins-white drop-shadow-lg font-bold">
                    The Future of Collecting
                </p>
                <span className="w-8 md:w-16 h-[1px] bg-mavins-neon/50"></span>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
                {/* APPLY BUTTON */}
                <motion.button
                    onClick={onApply}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-8 py-3 border border-mavins-white/30 bg-black/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-mavins-neon hover:bg-black/80 hover:shadow-[0_0_20px_rgba(255,200,0,0.2)]"
                >
                    <span className="relative z-10 flex items-center space-x-3 font-elegant font-bold text-xs text-mavins-white uppercase tracking-widest group-hover:text-mavins-neon transition-colors">
                        <span>Apply For Membership</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                </motion.button>

                {/* LOGIN BUTTON */}
                <motion.a
                    href="https://wildmavins.com/login"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-8 py-3 border border-mavins-white/20 bg-black/30 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-mavins-white hover:bg-white/10"
                >
                    <span className="relative z-10 flex items-center space-x-3 font-elegant font-bold text-xs text-mavins-silver uppercase tracking-widest group-hover:text-mavins-white transition-colors">
                        <User className="w-3 h-3" />
                        <span>Member Login</span>
                    </span>
                </motion.a>
            </div>
         </motion.div>
      </div>
      
      {/* Clean bottom area */}
      <div className="relative z-10 w-full mt-auto"></div>
    </section>
  );
};

export default Hero;
