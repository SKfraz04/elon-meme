import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import toast from 'react-hot-toast';

const Hero: React.FC = () => {
  // Initialize particles
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);
  

  const handleCopy = () => {
    toast.success('Copied...');
    navigator.clipboard.writeText('ABC123XYZ789');
  };

  return (
    <div className="hero-section  min-h-screen flex items-center justify-center overflow-hidden py-24">
      {/* Background elements */}
      <div className="" />
      <div className="purple-blur purple-blur-1" />
      <div className="purple-blur purple-blur-2" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-center">
          {/* Left Content Side */}
          <div className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left 
                        space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold mb-4 mt-4 leading-tight">
                <span className="text-base-content text-white">
                  OFFICIAL
                </span>{" "}
                <span className="text-base-content gradient-text relative">
                  IELON
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl leading-relaxed text-base-content/80 max-w-xl"
            >
              Welcome to IELON – Innovating cryptocurrency management with enterprise-grade security, intuitive controls, and a focus on recovering misused public funds.
            </motion.p>

            {/* Adding Buy Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 w-full max-w-md"
            >
              <button className="gradient-button px-10 py-3 bg-yellow-500 text-black rounded-full font-bold hover:bg-yellow-400 transition-colors">
                <span className="relative z-10">Buy Now</span>
              </button>
            </motion.div>

            {/* Contract Address Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="w-full max-w-md bg-base-200/50 backdrop-blur-sm rounded-xl p-4 border border-white/10"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-base-content/60 mb-1">Contract Address (Solana)</p>
                  <p className="text-sm font-mono text-base-content/80">
                    ABC123...XYZ789
                  </p>
                </div>
                <button
                  onClick={() => {
                    handleCopy();
                    // You might want to add a toast notification here
                  }}
                  className="p-2 hover:bg-base-300 rounded-lg transition-colors duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-base-content/60 hover:text-base-content"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>

           

          </div>

        </div>
      </div>

    </div>


  );
};

export default Hero; 