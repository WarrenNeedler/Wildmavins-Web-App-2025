
import React from 'react';

const Markets: React.FC = () => {
  const markets = [
    "LONDON", "NEW YORK", "DUBAI", "ZURICH", "PRAGUE", 
    "GRAND CAYMAN", "DALLAS", "MIAMI", "LOS ANGELES", 
    "TORONTO", "TOKYO", "AND MORE..."
  ];

  return (
    <section className="bg-mavins-black pt-20 pb-4" data-nav-color="white">
       {/* Header */}
       <div className="container mx-auto px-6 mb-8 text-center">
            <h3 className="font-elegant font-bold text-mavins-silver text-xs md:text-sm uppercase tracking-[0.3em] opacity-80">
                Wildmavins Members Can Be Found Globally
            </h3>
       </div>

       {/* Scrolling Banner */}
       <div className="bg-mavins-neon py-3 overflow-hidden border-y-4 border-black" data-nav-color="black">
           <div className="animate-marquee whitespace-nowrap flex items-center">
              {markets.map((market, i) => (
                 <div key={i} className="flex items-center mx-6">
                    <span className="font-sans text-3xl md:text-5xl font-black text-black uppercase">{market}</span>
                    <span className="ml-6 w-3 h-3 bg-black rotate-45"></span>
                 </div>
              ))}
              {/* Duplicate for seamless loop */}
              {markets.map((market, i) => (
                 <div key={`dup-${i}`} className="flex items-center mx-6">
                    <span className="font-sans text-3xl md:text-5xl font-black text-black uppercase">{market}</span>
                    <span className="ml-6 w-3 h-3 bg-black rotate-45"></span>
                 </div>
              ))}
           </div>
       </div>
    </section>
  );
};

export default Markets;
