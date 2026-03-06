import React from 'react';
import { IMAGES } from './constants';

function App() {
  return (
    <div className="bg-mavins-black min-h-screen flex flex-col items-center justify-center text-mavins-white selection:bg-mavins-neon selection:text-black">
      <div className="flex flex-col items-center space-y-12">
        {/* Logo */}
        <div className="w-40 h-40 md:w-56 md:h-56 relative flex items-center justify-center">
          <img 
            src={IMAGES.logoIcon} 
            alt="Wildmavins Logo" 
            className="w-full h-full object-contain filter brightness-0 invert"
          />
        </div>
        
        {/* Button */}
        <a 
          href="https://www.wildmavins.com"
          className="bg-mavins-neon text-black font-sans text-xl md:text-2xl font-bold uppercase tracking-widest px-10 py-4 hover:bg-mavins-neonLight transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(255,200,0,0.3)] hover:shadow-[0_0_30px_rgba(255,200,0,0.5)]"
        >
          Enter Wildmavins
        </a>
      </div>
    </div>
  );
}

export default App;
