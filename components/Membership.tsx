
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface UnlockItem {
  label: string;
  id: string;
  desc: string;
  image?: string;
  video?: string;
}

const Membership: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const points = [
    {
      id: "01",
      title: "OWNERSHIP",
      subtitle: "LIFETIME MEMBERSHIP",
      desc: "You don't join Wildmavins, you own it. Founders have no Annual Dues. No Expiry."
    },
    {
      id: "02",
      title: "SCARCITY",
      subtitle: "LIMITED FOUNDERS SEATS",
      desc: "Once they are gone, the only way will be to acquire one from an existing Founder."
    },
    {
      id: "03",
      title: "COMMUNITY",
      subtitle: "UNLOCK A NEW WORLD",
      desc: "Ownership unlocks a private network of global enthusiasts, bespoke collections, and off-market opportunities."
    }
  ];

  const unlocks: UnlockItem[] = [
    { 
        label: "Globally exclusive collections", 
        id: "UNLK-01",
        desc: "Access to products not available to the public.",
        image: "https://res.cloudinary.com/dm9jvuh0p/image/upload/v1765376909/4591E311-25E8-4497-9C48-79E751DE8DFD_pnluzj.jpg"
    },
    { 
        label: "Localized IRL experiences", 
        id: "UNLK-02",
        desc: "Events in major cities worldwide.",
        image: "https://res.cloudinary.com/dm9jvuh0p/image/upload/v1765410357/Wildmavins_x_TechCayman-_The_First_Taste_29_of_85_mjmofk.jpg"
    },
    { 
        label: "Founders only platform", 
        id: "UNLK-03",
        desc: "Digital dashboard for portfolio management.",
        image: "https://res.cloudinary.com/dm9jvuh0p/image/upload/v1765378536/wm-iphone_mockup_copy_4_no7kok.png"
    },
    { 
        label: "Full asset ownership", 
        id: "UNLK-04",
        desc: "True digital ownership on the blockchain.",
        image: "https://res.cloudinary.com/dm9jvuh0p/image/upload/v1765406514/IMG_4626_smlwi1.jpg"
    },
    { 
        label: "Loyalty and rewards", 
        id: "UNLK-05",
        desc: "Earning mechanisms for active participation.",
        image: "https://res.cloudinary.com/dm9jvuh0p/image/upload/v1765410501/Note_ppzbm1.jpg"
    },
    { 
        label: "Partner privileges", 
        id: "UNLK-06",
        desc: "Benefits from our global partner network.",
        image: "https://res.cloudinary.com/dm9jvuh0p/image/upload/v1765407490/SnapInsta.to_409738706_18406454527050283_7637025601212425701_n_r0gtge.jpg"
    },
  ];

  const handleCardClick = (id: string) => {
    setActiveCard(activeCard === id ? null : id);
  };

  return (
    <section id="membership" className="bg-mavins-dark py-24 relative border-t border-mavins-gray overflow-hidden">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="mb-20 text-center md:text-left">
                <span className="font-elegant font-bold text-xs text-mavins-silver tracking-widest mb-4 block">THREE PILLARS OF VALUE</span>
                <h2 className="font-sans font-black text-6xl md:text-8xl uppercase text-mavins-white tracking-tight leading-none">
                    The <span className="text-mavins-neon">Utility</span>
                </h2>
            </div>

            {/* REVAMPED UTILITY SECTION: Elegant Interactive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 border border-mavins-gray mb-32 bg-mavins-black">
                {points.map((point) => (
                    <motion.div 
                        key={point.id} 
                        className="group relative min-h-[250px] md:h-[350px] p-8 md:p-10 flex flex-col justify-end border-b md:border-b-0 md:border-r border-mavins-gray last:border-r-0 overflow-hidden cursor-pointer hover:bg-mavins-white/5 transition-colors duration-500"
                        onMouseEnter={() => { if(window.innerWidth >= 768) setActiveCard(point.id) }}
                        onMouseLeave={() => { if(window.innerWidth >= 768) setActiveCard(null) }}
                        onClick={() => handleCardClick(point.id)}
                        animate={activeCard === point.id ? "active" : "rest"}
                    >
                        {/* Top Number Indicator - DOT REMOVED HERE */}
                        <div className="absolute top-8 left-8 flex items-center gap-2">
                            <span className="font-elegant font-bold text-xs text-mavins-silver group-hover:text-mavins-neon transition-colors duration-300">/{point.id}</span>
                        </div>

                        {/* Mobile Tap Indicator */}
                        <div className="absolute top-8 right-8 md:hidden text-mavins-neon/50 text-[10px] tracking-widest font-elegant font-bold">
                            {activeCard === point.id ? "- CLOSE" : "+ REVEAL"}
                        </div>

                        {/* Content Wrapper */}
                        <div className="relative z-10 transform-gpu">
                             {/* Title & Subtitle Group */}
                             <motion.div 
                                variants={{
                                    rest: { y: 0 },
                                    active: { y: -110 }
                                }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} 
                             >
                                <h3 className="font-sans font-black text-4xl lg:text-5xl text-mavins-white uppercase leading-[0.9] mb-3 group-hover:text-mavins-neon transition-colors duration-300">
                                    {point.title}
                                </h3>
                                <p className="font-elegant font-bold text-[10px] text-mavins-silver tracking-[0.2em] uppercase border border-mavins-gray/50 inline-block px-2 py-1 rounded-sm group-hover:border-mavins-neon/50 group-hover:text-mavins-white transition-colors duration-300">
                                    {point.subtitle}
                                </p>
                             </motion.div>

                             {/* Reveal Description */}
                             <motion.div 
                                className="absolute top-full left-0 w-full pt-4"
                                variants={{
                                    rest: { opacity: 0, y: 10 },
                                    active: { opacity: 1, y: -110 } 
                                }}
                                transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                             >
                                <p className="font-serif text-lg lg:text-xl text-mavins-white leading-tight">
                                    {point.desc}
                                </p>
                             </motion.div>
                        </div>

                        {/* Hover Gradient Shine */}
                        <div className="absolute inset-0 bg-gradient-to-t from-mavins-neon/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    </motion.div>
                ))}
            </div>

            {/* HORIZONTAL SCROLL UNLOCKS */}
            <div className="w-full pt-16 border-t border-mavins-gray/30">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 px-6">
                    <div>
                        <h3 className="font-elegant font-bold text-xs text-mavins-neon mb-2 uppercase tracking-[0.3em]">
                            // Global Collective
                        </h3>
                        <h2 className="font-sans font-black text-5xl md:text-6xl text-mavins-white uppercase tracking-tight leading-none">
                            Membership Unlocks
                        </h2>
                    </div>
                    
                    <div className="flex items-center space-x-2 mt-4 md:mt-0 text-mavins-silver animate-pulse">
                        <span className="font-mono text-[10px] uppercase tracking-widest">Scroll to Explore</span>
                        <ArrowRight size={14} />
                    </div>
                </div>

                {/* Horizontal Scroll Container */}
                <div 
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto space-x-6 pb-12 snap-x snap-mandatory scrollbar-hide cursor-grab active:cursor-grabbing px-6"
                >
                    {unlocks.map((item, i) => (
                        <div 
                            key={i} 
                            className="group relative flex-shrink-0 w-[300px] md:w-[350px] h-[450px] bg-mavins-black border border-mavins-gray snap-start flex flex-col justify-between p-8 transition-all duration-500 hover:border-mavins-neon overflow-hidden"
                        >
                            {/* Background Image/Video */}
                            {(item.image || item.video) && (
                                <>
                                    <div className="absolute inset-0 z-0">
                                        {item.video ? (
                                            <video
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            >
                                                <source src={item.video} type="video/mp4" />
                                            </video>
                                        ) : (
                                            <img 
                                                src={item.image} 
                                                alt={item.label}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        )}
                                    </div>
                                    <div className="absolute inset-0 z-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500"></div>
                                </>
                            )}

                            {/* Background Number */}
                            <span className={`absolute top-4 right-4 font-sans font-black text-8xl transition-colors duration-500 select-none z-0 ${item.image || item.video ? 'text-white/10' : 'text-mavins-gray/10 group-hover:text-mavins-neon/10'}`}>
                                {i + 1}
                            </span>

                            {/* Top Section */}
                            <div className="relative z-10">
                                <div className="flex justify-between items-center mb-8">
                                    <span className={`font-mono text-[10px] tracking-widest border px-2 py-1 ${item.image || item.video ? 'text-mavins-white border-mavins-white/50' : 'text-mavins-neon border-mavins-neon/30'}`}>
                                        {item.id}
                                    </span>
                                </div>
                            </div>

                            {/* Bottom Section */}
                            <div className="relative z-10">
                                <h4 className="font-sans font-bold text-3xl uppercase text-mavins-white leading-none mb-4 group-hover:translate-x-1 transition-transform duration-300">
                                    {item.label}
                                </h4>
                                <div className="w-8 h-[1px] bg-mavins-gray group-hover:w-full group-hover:bg-mavins-neon transition-all duration-700 mb-4"></div>
                                <p className={`font-serif text-lg leading-relaxed transition-colors ${item.image || item.video ? 'text-mavins-white/90' : 'text-mavins-silver group-hover:text-mavins-white'}`}>
                                    {item.desc}
                                </p>
                            </div>

                            {/* Hover Active Background (Only if no image or video) */}
                            {!item.image && !item.video && (
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-mavins-neon/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            )}
                        </div>
                    ))}
                    
                    <div className="w-12 flex-shrink-0"></div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Membership;
