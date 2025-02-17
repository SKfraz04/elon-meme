import { motion } from 'framer-motion';
import { FiCopy } from 'react-icons/fi';
import { useState } from 'react';
import toast from 'react-hot-toast';

const CoinDetails = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = "123ABC...789XYZ";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
   toast.success('Copied to clipboard');
  };

  return (
    <section className="py-16 bg-gradient-to-b from-[#0f172a] to-black">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center"
        >
          {/* Left side - Token Details */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white mb-8">Token Details</h2>
            <div className="space-y-4">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800/50 p-4 rounded-lg"
              >
                <h3 className="text-gray-400">Token Name</h3>
                <p className="text-white text-xl">Inspector Elon</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800/50 p-4 rounded-lg"
              >
                <h3 className="text-gray-400">Symbol</h3>
                <p className="text-white text-xl">IELON</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800/50 p-4 rounded-lg"
              >
                <h3 className="text-gray-400">Decimals</h3>
                <p className="text-white text-xl">9</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800/50 p-4 rounded-lg"
              >
                <h3 className="text-gray-400">Total Supply</h3>
                <p className="text-white text-xl">500,000,000</p>
              </motion.div>
            </div>
          </div>

          {/* Right side - Circular Graph */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="relative"
          >
            <div className="w-3/4 mx-auto aspect-square relative">
             <img src='/assets/token2.jpg' alt='tokenomics' className='w-full h-full' />
            </div>
          </motion.div>
        </motion.div>

        {/* Contract Address */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-12 text-center"
        >
          <h3 className="text-gray-400 mb-2">Solana Contract Address</h3>
          <div className="inline-flex items-center bg-gray-800/50 px-8 py-2 rounded-lg">
            <span className="text-white mr-2">{contractAddress}</span>
            <button
              onClick={copyToClipboard}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FiCopy size={20} />
            </button>
          </div>
          {copied && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green-500 mt-2"
            >
              Copied to clipboard!
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default CoinDetails; 