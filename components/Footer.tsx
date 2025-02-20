import Image from "next/image";
import { FaFacebook, FaTelegram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
const Footer = () => {
  return (
    <footer className="py-8 text-white bg-black/80">
      <div className="container px-4 mx-auto">
        <div className="text-center">

          <div>
            <h3 className="mb-4 text-xl font-bold CommonText gradient-text">Join The Investigation!</h3>
            <div className="flex justify-center items-center space-x-4">
              <a href="https://x.com/INSPECTORELON" target="_blank" rel="noopener noreferrer"
                className="text-white transition-colors hover:text-primary-500">
                <RiTwitterXFill size={24} />
              </a>
              <a href="https://web.telegram.org/k/#@inspectorelon" target="_blank" rel="noopener noreferrer"
                className="text-white transition-colors hover:text-primary-500">
                <Image src="/assets/telegram.svg" alt="dextool" width={26} height={26} className='' />
              </a>
              <a href="https://www.dextools.io/app/en/token/psyoptron?t=1740044449227" target="_blank" rel="noopener noreferrer"
                className="text-white transition-colors hover:text-primary-500">
                <Image src="/assets/dextools.svg" alt="dextool" width={24} height={24} className='' />
              </a>
              <a href="https://raydium.io/swap/" target="_blank" rel="noopener noreferrer"
                className="text-white transition-colors hover:text-primary-500">
                <Image src='/assets/Radium.svg' alt='radium' width={24} height={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 mt-8 text-center border-t border-gray-800">
          <p className="text-gray-300 font-poppins">© {new Date().getFullYear()} IELON. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 