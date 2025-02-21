import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import { Righteous } from "next/font/google";
import { FaTwitter, FaTelegram, FaFacebook } from 'react-icons/fa';
import { RiTwitterXFill } from "react-icons/ri";
import Image from 'next/image';
import IelonLogo from '../public/assets/logo.svg';
const righteous = Righteous({
  weight: '400',
  subsets: ['latin'],
})

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`${righteous.className} fixed w-full top-0 z-50 mt-5`}
    >
      <div className="flex">
        <motion.div
          className="flex items-center ms-5"
          style={{ position: 'absolute'}}
        >
          <Image src={IelonLogo} alt="IELON" width={130} height={40} className='mt-4' />
        </motion.div>
        
        {/* Mobile menu button */}
        <button
          className="absolute top-6 right-6 z-50 text-white md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:block container mx-auto px-4 py-4 flex justify-center items-center bg-black/50 backdrop-blur-md rounded-[50px] max-w-[600px]">
          <div className="flex space-x-8">
            {[
              { name: "About", href: "#about" },
              { name: "How to buy", href: "#how-to-buy" },
              { name: "Tokenomic", href: "#token-allocation" },
              { name: "TokenUtility", href: "#token-utility" },
              { name: "Faqs", href: "#faqs" },
              // { name: "Contract", href: "#contract" },
            ].map((item) => (
              <motion.a
                key={item.name}
                whileHover={{ y: -2 }}
                className="text-gray-300 transition-colors hover:gradient-text font-magistral"
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
              >
                {item.name}
              </motion.a>
            ))}
            
            {/* More Dropdown */}
            <div className="relative">
              <motion.button
                whileHover={{ y: -2 }}
                className="text-gray-300 transition-colors hover:gradient-text font-magistral"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                More ▼
              </motion.button>
              
              {isDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-black/90 backdrop-blur-md rounded-lg shadow-lg py-2">
                  <motion.a
                    whileHover={{ y: -2 }}
                    className="block px-4 py-2 text-gray-300 hover:gradient-text font-magistral"
                    href='https://ielon-whitepaper.vercel.app/docs/Introduction'
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Whitepaper
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -2 }}
                    className="block px-4 py-2 text-gray-300 hover:gradient-text font-magistral"
                    href='#contract'
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contract            
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -2 }}
                    className="block px-4 py-2 text-gray-300 hover:gradient-text font-magistral"
                    href='#contract'
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contract            
                  </motion.a>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Mobile menu overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-40 backdrop-blur-md md:hidden bg-black/95">
            <div className="flex flex-col justify-center items-center space-y-8 h-full">
              {[
                { name: "About", href: "#about" },
                { name: "Tokenomic", href: "#token-allocation" },
                { name: "TokenUtility", href: "#token-utility" },
                { name: "Faqs", href: "#faqs" },
              ].map((item) => (
                <motion.a
                  key={item.name}
                  whileHover={{ y: -2 }}
                  className="text-xl text-gray-300 transition-colors hover:gradient-text font-magistral"
                  href={item.href}
                  onClick={(e) => {
                    scrollToSection(e, item.href);
                    setIsMenuOpen(false);
                  }}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                whileHover={{ y: -2 }}
                className="text-xl text-gray-300 transition-colors hover:gradient-text font-magistral"
                href='https://ielon-whitepaper.vercel.app/docs/Introduction'
                target="_blank"
                rel="noopener noreferrer"
              >
                Whitepaper
              </motion.a>
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  );
}

export default Header 