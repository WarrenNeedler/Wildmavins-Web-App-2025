

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Membership from './components/Membership';
import Collection from './components/Collection';
import Partners from './components/Partners';
import Markets from './components/Markets';
import Join from './components/Join';
import Footer from './components/Footer';
import { TERMS_TEXT, PRIVACY_TEXT } from './constants';

function App() {
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const openApplication = () => setIsApplicationOpen(true);
  const closeApplication = () => setIsApplicationOpen(false);

  const openTerms = () => setIsTermsOpen(true);
  const closeTerms = () => setIsTermsOpen(false);

  const openPrivacy = () => setIsPrivacyOpen(true);
  const closePrivacy = () => setIsPrivacyOpen(false);

  return (
    <div className="bg-mavins-black min-h-screen text-mavins-white selection:bg-mavins-neon selection:text-black">
      <Navigation />
      
      <main>
        <Hero onApply={openApplication} />
        <Manifesto />
        <Membership />
        <Collection />
        <Partners />
        <Markets />
        <Join onApply={openApplication} />
      </main>

      <Footer onOpenTerms={openTerms} onOpenPrivacy={openPrivacy} />

      {/* JOTFORM MODAL - Global Application Modal */}
      <AnimatePresence>
            {isApplicationOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-8"
                >
                    <motion.div 
                        initial={{ scale: 0.95, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.95, y: 20 }}
                        className="relative w-full max-w-4xl h-full max-h-[90vh] bg-mavins-dark border border-mavins-neon shadow-[0_0_50px_rgba(255,200,0,0.2)] flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center p-4 border-b border-mavins-gray/50 bg-mavins-black">
                             <div className="flex items-center space-x-2">
                                <span className="w-2 h-2 bg-mavins-neon rounded-full animate-pulse"></span>
                                <span className="font-mono text-xs text-mavins-neon tracking-widest uppercase">Application Protocol</span>
                             </div>
                             <button 
                                onClick={closeApplication}
                                className="text-mavins-silver hover:text-mavins-neon transition-colors"
                             >
                                <X size={24} />
                             </button>
                        </div>

                        {/* Iframe Container */}
                        <div className="flex-1 w-full h-full bg-white overflow-hidden">
                             <iframe
                                src="https://form.jotform.com/243515723903051"
                                title="Wildmavins Application"
                                className="w-full h-full border-0"
                                style={{ minHeight: '500px' }}
                                allow="camera; microphone; autoplay; fullscreen"
                             />
                        </div>
                    </motion.div>
                </motion.div>
            )}
      </AnimatePresence>

      {/* TERMS MODAL */}
      <AnimatePresence>
          {isTermsOpen && (
              <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-8"
                  onClick={closeTerms}
              >
                  <motion.div 
                      initial={{ scale: 0.95, y: 20 }}
                      animate={{ scale: 1, y: 0 }}
                      exit={{ scale: 0.95, y: 20 }}
                      onClick={(e) => e.stopPropagation()}
                      className="relative w-full max-w-4xl h-full max-h-[85vh] bg-mavins-dark border border-mavins-gray shadow-2xl flex flex-col"
                  >
                      {/* Header */}
                      <div className="flex justify-between items-center p-6 border-b border-mavins-gray/50 bg-mavins-black">
                           <span className="font-mono text-xs text-mavins-neon tracking-[0.2em] uppercase">Terms & Conditions</span>
                           <button 
                              onClick={closeTerms}
                              className="text-mavins-silver hover:text-mavins-neon transition-colors"
                           >
                              <X size={24} />
                           </button>
                      </div>

                      {/* Scrollable Content */}
                      <div className="flex-1 overflow-y-auto p-8 custom-scrollbar bg-mavins-black">
                          <pre className="whitespace-pre-wrap font-sans text-sm md:text-base text-mavins-silver leading-relaxed font-light">
                              {TERMS_TEXT}
                          </pre>
                      </div>
                  </motion.div>
              </motion.div>
          )}
      </AnimatePresence>

      {/* PRIVACY MODAL */}
      <AnimatePresence>
          {isPrivacyOpen && (
              <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-8"
                  onClick={closePrivacy}
              >
                  <motion.div 
                      initial={{ scale: 0.95, y: 20 }}
                      animate={{ scale: 1, y: 0 }}
                      exit={{ scale: 0.95, y: 20 }}
                      onClick={(e) => e.stopPropagation()}
                      className="relative w-full max-w-4xl h-full max-h-[85vh] bg-mavins-dark border border-mavins-gray shadow-2xl flex flex-col"
                  >
                      {/* Header */}
                      <div className="flex justify-between items-center p-6 border-b border-mavins-gray/50 bg-mavins-black">
                           <span className="font-mono text-xs text-mavins-neon tracking-[0.2em] uppercase">Privacy Policy</span>
                           <button 
                              onClick={closePrivacy}
                              className="text-mavins-silver hover:text-mavins-neon transition-colors"
                           >
                              <X size={24} />
                           </button>
                      </div>

                      {/* Scrollable Content */}
                      <div className="flex-1 overflow-y-auto p-8 custom-scrollbar bg-mavins-black">
                          <pre className="whitespace-pre-wrap font-sans text-sm md:text-base text-mavins-silver leading-relaxed font-light">
                              {PRIVACY_TEXT}
                          </pre>
                      </div>
                  </motion.div>
              </motion.div>
          )}
      </AnimatePresence>
    </div>
  );
}

export default App;