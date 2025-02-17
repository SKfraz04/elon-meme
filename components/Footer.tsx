import { FaFacebook, FaTelegram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
const Footer = () => {
  return (
    <footer className="bg-black/80 text-white py-8">
      <div className="container mx-auto px-4">
        <div className=" text-center">
         
          <div>
            <h3 className="text-xl font-bold mb-4">Join The Investigation!</h3>
            <div className="flex items-center justify-center space-x-4">
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
          <a href="https://facebook.com/yourproject" target="_blank" rel="noopener noreferrer" 
            className="text-white hover:text-primary-500 transition-colors">
            <img src='/assets/radium.webp' alt='radium' className='w-6 h-6' />
          </a>
        </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-300">© {new Date().getFullYear()} IELON. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 