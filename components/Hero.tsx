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
    navigator.clipboard.writeText('ABC123...XYZ789');
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden py-24">
      {/* Background elements */}
      <div className="hero-gradient" />
      <div className="purple-blur purple-blur-1" />
      <div className="purple-blur purple-blur-2" />

      {/* Particles container with fixed height */}
      <div className="absolute inset-0 h-full">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: ["#9333EA", "#4F46E5", "#2563EB"],
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                },
                value: 30,
              },
              opacity: {
                value: 0.5,
                animation: {
                  enable: true,
                  speed: 1,
                  minimumValue: 0.1,
                },
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 },
                animation: {
                  enable: true,
                  speed: 2,
                  minimumValue: 0.1,
                },
              },
            },
            detectRetina: true,
          }}
          className="h-full w-full"
        />
      </div>

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
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Secure Your
                </span>
                <br />
                <span className="text-base-content gradient-text relative">
                  THE ONLY
                  OFFICIAL
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
              Welcome to SecCoin - Where innovation meets security. Experience the next
              generation of cryptocurrency management with enterprise-grade protection
              and intuitive controls.
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

            {/* Infinite Scrolling Ticker */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="w-full overflow-hidden bg-base-200/30 backdrop-blur-sm py-3 rounded-xl"
            >
              <div className="ticker-container relative flex whitespace-nowrap">
                <div className="animate-ticker flex items-center gap-8">
                  {/* Ticker Item 1 */}
                  <div className="flex items-center gap-2">
                    <Image
                      src="/assets/founder.jpeg"
                      alt="Community"
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <span className="text-xl font-bold text-base-content">JOIN THE COMMUNITY</span>
                  </div>

                  {/* Ticker Item 2 */}
                  <div className="flex items-center gap-2">
                    <Image
                      src="/assets/founder.jpeg"
                      alt="Elon"
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <span className="text-xl font-bold text-base-content">ELON MUSK</span>
                  </div>

                  {/* Ticker Item 3 */}
                  <div className="flex items-center gap-2">
                    <Image
                      src="/assets/founder.jpeg"
                      alt="Fight"
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <span className="text-xl font-bold text-base-content">FIGHT FIGHT</span>
                  </div>

                  {/* Duplicate items for seamless loop */}
                  <div className="flex items-center gap-2">
                    <Image
                      src="/assets/founder.jpeg"
                      alt="Community"
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <span className="text-xl font-bold text-base-content">JOIN THE COMMUNITY</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Image
                      src="/assets/founder.jpeg"
                      alt="Elon"
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <span className="text-xl font-bold text-base-content">ELON MUSK</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/assets/founder.jpeg"
                      alt="Elon"
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <span className="text-xl font-bold text-base-content">DOGE(Department of Government Efficency)</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Image
                      src="/assets/founder.jpeg"
                      alt="Fight"
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <span className="text-xl font-bold text-base-content">FIGHT FIGHT</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 w-full max-w-md md:max-w-xl mx-auto pt-8 md:pt-0"
          >
            <div className="relative w-full aspect-[4/5] md:aspect-[3/4] rounded-[2rem] overflow-hidden 
                          transform hover:scale-[1.02] transition-all duration-500
                          shadow-[0_0_60px_rgba(0,0,0,0.1)] backdrop-blur-sm
                          before:absolute before:inset-0 before:z-10 before:bg-gradient-to-t 
                          before:from-black/40 before:via-transparent before:to-transparent">
              <Image
                src="/assets/f1.jpg"
                alt="Founder"
                fill
                className="object-cover rounded-[2rem] transition-transform duration-700 hover:scale-110"
                priority
              />
              <div className="absolute bottom-8 left-8 z-20 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm">
                  Meet our Founder
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </div>


  );
};

export default Hero; 