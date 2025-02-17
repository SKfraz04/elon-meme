import React, { useEffect } from 'react'
import { motion } from "framer-motion";
import { Righteous } from "next/font/google";
import { FaTwitter, FaTelegram, FaFacebook } from 'react-icons/fa';
import { RiTwitterXFill } from "react-icons/ri";

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
      className={`${righteous.className} fixed w-full top-0 z-50 bg-black/50 backdrop-blur-md`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold gradient-text font-magistral"
        >
          IELON
        </motion.div>
        <div className="hidden md:flex space-x-8">
          {[
            { name: "About", href: "#about" },
            { name: "Tokenomic", href: "#token-allocation" },
            { name: "TokenUtility", href: "#token-utility" },
            { name: "Faqs", href: "#faqs" },
          ].map((item) => (
            <motion.a
              key={item.name}
              whileHover={{ y: -2 }}
              className="text-gray-300 hover:gradient-text transition-colors font-magistral"
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
            >
              {item.name}
            </motion.a>
          ))}
          <motion.a
            whileHover={{ y: -2 }}
            className="text-gray-300 hover:gradient-text transition-colors font-magistral"
            href="/assets/IELON-WHITEPAPER.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Whitepaper
          </motion.a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="https://twitter.com/yourproject" target="_blank" rel="noopener noreferrer"
            className="text-white hover:text-primary-500 transition-colors">
            <RiTwitterXFill size={24} />
          </a>
          <a href="https://t.me/yourproject" target="_blank" rel="noopener noreferrer"
            className="text-white hover:text-primary-500 transition-colors">
            <FaTelegram size={24} />
          </a>
          <a href="https://facebook.com/yourproject" target="_blank" rel="noopener noreferrer"
            className="text-white hover:text-primary-500 transition-colors">
            <FaFacebook size={24} />
          </a>
        </div>
      </div>
    </motion.nav>
  );
}

export default Header 