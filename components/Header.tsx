import React, { useEffect } from 'react'
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
         <Image src={IelonLogo} alt="IELON" width={130} height={40} className='mt-3' />
        </motion.div>
      <div className="container mx-auto px-4 py-4 flex justify-center items-center bg-black/50 backdrop-blur-md rounded-[50px] max-w-[600px]">
        <div className="hidden space-x-8 md:flex">
          {[
            { name: "About", href: "#about" },
            { name: "Tokenomic", href: "#token-allocation" },
            { name: "TokenUtility", href: "#token-utility" },
            { name: "Faqs", href: "#faqs" },
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
          <motion.a
            whileHover={{ y: -2 }}
            className="text-gray-300 transition-colors hover:gradient-text font-magistral"
            href="/assets/IELON-WHITEPAPER.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Whitepaper
          </motion.a>
        </div>
        </div>
        {/* <div className="flex items-center space-x-4">
          <a href="/" target="_blank" rel="noopener noreferrer"
            className="text-white transition-colors hover:text-primary-500">
            <RiTwitterXFill size={24} />
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer"
            className="text-white transition-colors hover:text-primary-500">
            <FaTelegram size={24} />
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer"
            className="text-white transition-colors hover:text-primary-500">
            <FaFacebook size={24} />
          </a>
        </div> */}
      </div>
    </motion.nav>
  );
}

export default Header 