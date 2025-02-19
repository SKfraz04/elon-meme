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
    <div className="flex overflow-hidden justify-center items-center py-24 min-h-screen hero-section">
      {/* Background elements */}
      <div className="" />
      <div className="purple-blur purple-blur-1" />
      <div className="purple-blur purple-blur-2" />
      <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 items-center w-full md:grid-cols-2">
          {/* Left Content Side */}
          <div className="flex flex-col order-2 items-center space-y-6 text-center md:order-1 md:items-start md:text-left md:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="mt-4 mb-4 text-4xl font-bold leading-tight md:text-6xl lg:text-6xl">
                <span className="text-white text-base-content">
                  OFFICIAL
                </span>{" "}
                <span className="relative text-base-content gradient-text">
                  IELON
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl text-lg leading-relaxed md:text-xl text-base-content/80"
            >
              Welcome to IELON – Innovating cryptocurrency management with enterprise-grade security, intuitive controls, and a focus on recovering misused public funds.
            </motion.p>

            {/* Adding Buy Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col gap-4 w-full max-w-md sm:flex-row"
            >
              <button className="px-10 py-3 font-bold text-black bg-yellow-500 rounded-full transition-colors gradient-button hover:bg-yellow-400">
                <span className="relative z-10">Buy Now</span>
              </button>
            </motion.div>

            {/* Contract Address Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="p-4 w-full max-w-md rounded-xl border backdrop-blur-sm bg-base-200/50 border-white/10"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="mb-1 text-sm text-base-content/60">Contract Address (Solana)</p>
                  <p className="font-mono text-sm text-base-content/80">
                    ABC123...XYZ789
                  </p>
                </div>
                <button
                  onClick={() => {
                    handleCopy();
                    // You might want to add a toast notification here
                  }}
                  className="p-2 rounded-lg transition-colors duration-200 hover:bg-base-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-base-content/60 hover:text-base-content"
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