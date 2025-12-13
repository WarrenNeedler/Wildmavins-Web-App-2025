
import React from 'react';
import { IMAGES } from '../constants';

interface FooterProps {
  onOpenTerms: () => void;
  onOpenPrivacy: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenTerms, onOpenPrivacy }) => {
  return (
    <footer className="bg-mavins-dark border-t border-mavins-gray pt-20 pb-10 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
         <div className="col-span-2">
            <img 
                src={IMAGES.hero.logo} 
                alt="WILDMAVINS" 
                className="w-full max-w-[18rem] mb-8"
                style={{ filter: 'brightness(0) invert(1)' }} // Forces image to white
            />
         </div>
         
         <div className="flex flex-col space-y-4">
            <h4 className="font-elegant font-bold text-mavins-neon text-xs uppercase tracking-widest mb-4">Social</h4>
            <a href="https://www.instagram.com/wildmavins" target="_blank" rel="noopener noreferrer" className="font-elegant text-xl text-mavins-white hover:text-mavins-neon transition-colors uppercase font-bold">
                Instagram
            </a>
            <a href="https://x.com/wildmavins" target="_blank" rel="noopener noreferrer" className="font-elegant text-xl text-mavins-white hover:text-mavins-neon transition-colors uppercase font-bold">
                Twitter / X
            </a>
            <a href="https://www.linkedin.com/company/wildmavins/" target="_blank" rel="noopener noreferrer" className="font-elegant text-xl text-mavins-white hover:text-mavins-neon transition-colors uppercase font-bold">
                LinkedIn
            </a>
         </div>

         <div className="flex flex-col space-y-4">
            <h4 className="font-elegant font-bold text-mavins-neon text-xs uppercase tracking-widest mb-4">Contact</h4>
            <a href="mailto:memberships@wildmavins.com" className="font-elegant text-xl text-mavins-white hover:text-mavins-neon transition-colors font-bold break-all">
                memberships@<br/>wildmavins.com
            </a>
         </div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row justify-between items-end border-t border-mavins-gray pt-8">
         <p className="font-elegant font-bold text-[10px] text-mavins-silver uppercase">
            © 2025 Wildmavins. All Rights Reserved.
         </p>
         <div className="flex space-x-6 mt-4 md:mt-0 font-elegant font-bold text-[10px] text-mavins-silver uppercase">
            <button onClick={onOpenTerms} className="hover:text-mavins-neon transition-colors">
                Terms
            </button>
            <button onClick={onOpenPrivacy} className="hover:text-mavins-neon transition-colors">
                Privacy
            </button>
         </div>
      </div>
    </footer>
  );
};

export default Footer;
