
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface FlipCardProps {
    title: string;
    subtitle?: string;
    detail: string;
}

const FlipCard: React.FC<FlipCardProps> = ({ title, subtitle, detail }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="group h-64 w-full perspective-1000 cursor-pointer" onClick={handleFlip}>
      <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
        
        {/* Front Face */}
        <div className="flip-card-front bg-mavins-gray/10 border border-mavins-gray p-8 backdrop-blur-sm group-hover:border-mavins-neon/50 transition-colors">
          <div className="flex flex-col items-center justify-center h-full space-y-4">
              <h3 className="font-sans font-black text-3xl md:text-5xl uppercase text-mavins-white tracking-tight leading-none text-center">
                {title}
              </h3>
              {subtitle && (
                <span className="font-elegant font-bold text-xs text-mavins-silver uppercase tracking-widest border border-mavins-gray px-3 py-1 rounded-full">
                    {subtitle}
                </span>
              )}
          </div>
          <div className="absolute bottom-4 right-4 text-mavins-neon opacity-50 group-hover:opacity-100 transition-opacity">
            <span className="font-elegant font-bold text-[10px] uppercase tracking-widest hidden md:inline">+ HOVER TO REVEAL</span>
            <span className="font-elegant font-bold text-[10px] uppercase tracking-widest md:hidden">+ TAP TO REVEAL</span>
          </div>
        </div>

        {/* Back Face */}
        <div className="flip-card-back bg-mavins-neon text-black p-4 border border-mavins-neon shadow-[0_0_30px_rgba(255,200,0,0.3)]">
          <p className="font-sans font-black text-3xl md:text-5xl uppercase tracking-tight text-center leading-none">
            {detail}
          </p>
        </div>

      </div>
    </div>
  );
};

interface JoinProps {
    onApply: () => void;
}

const Join: React.FC<JoinProps> = ({ onApply }) => {
  return (
    <section id="join" className="py-32 md:py-48 px-6 bg-mavins-black relative flex flex-col items-center justify-center overflow-hidden">
        
        {/* Subtle animated grid background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ 
                 backgroundImage: 'radial-gradient(#FFC800 1px, transparent 1px)', 
                 backgroundSize: '40px 40px',
                 maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
             }}>
        </div>

        <div className="w-full max-w-5xl mx-auto text-center relative z-10">
            <h2 className="font-elegant font-bold text-mavins-neon text-sm mb-6 uppercase tracking-[0.5em] animate-pulse">
                Founders Access Closing Soon
            </h2>
            
            <p className="font-serif text-xl md:text-3xl text-mavins-silver mb-16 max-w-3xl mx-auto leading-relaxed">
                To become a member at Wildmavins you are either nominated by an existing member or you may apply here.
            </p>

            <button 
                onClick={onApply}
                className="group relative inline-flex items-center justify-center px-12 py-6 mb-32 overflow-hidden font-elegant font-bold text-mavins-white border-2 border-mavins-white hover:text-mavins-black transition-colors duration-300"
            >
                <span className="absolute inset-0 w-full h-full bg-mavins-neon scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                <span className="relative flex items-center space-x-4 tracking-[0.2em] uppercase text-lg">
                    <span>Apply for Membership</span>
                    <ArrowRight className="w-6 h-6" />
                </span>
            </button>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                <FlipCard 
                    title="PRE-SALE" 
                    subtitle="(BY INVITATION)" 
                    detail="$8000 USD" 
                />
                <FlipCard 
                    title="PRIVATE SALE" 
                    subtitle="(401-1000)" 
                    detail="PRICE TBD" 
                />
                <FlipCard 
                    title="LIMITED" 
                    subtitle="(DIGITAL ASSET)"
                    detail="1000 TOTAL EVER" 
                />
            </div>
        </div>
    </section>
  );
};

export default Join;
