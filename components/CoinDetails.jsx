import { motion } from 'framer-motion';
import { FiCopy } from 'react-icons/fi';
import { useState } from 'react';
import toast from 'react-hot-toast';
import Image from 'next/image';

const CoinDetails = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = "123ABC...789XYZ";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    toast.success('Copied to clipboard');
  };

  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
                    <img src='/assets/Blueshadow.png' alt='tokenomics' className='h-full w-50' style={{position: 'absolute'}} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid gap-8 items-center mx-auto max-w-7xl md:grid-cols-2"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="relative"
          >
            <div className="relative mx-auto w-3/4 aspect-square">
              <img src='/assets/token2.png' alt='tokenomics' className='w-full h-full' />
            </div>
          </motion.div>
          <div className="space-y-6">
            <div className='flex justify-start'>

            <h2 className="mb-8 text-3xl uppercase GradientText">Token Details</h2>
            </div>
            <div className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-4 rounded-lg bg-gray-800/50"
              >
                <h3 className="text-gray-400">Token Name</h3>
                <p className="text-xl text-white CommonText">Inspector Elon</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-4 rounded-lg bg-gray-800/50"
              >
                <h3 className="text-gray-400">Symbol</h3>
                <p className="text-xl text-white CommonText">IELON</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-4 rounded-lg bg-gray-800/50"
              >
                <h3 className="text-gray-400">Decimals</h3>
                <p className="text-xl text-white CommonText">9</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-4 rounded-lg bg-gray-800/50"
              >
                <h3 className="text-gray-400">Total Supply</h3>
                <p className="text-xl text-white CommonText">500,000,000</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Contract Address */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-12 text-center"
        >
          <h3 className="mb-2 text-gray-400">Solana Contract Address</h3>
          <div className="inline-flex items-center px-8 py-2 rounded-lg bg-gray-800/50">
            <span className="mr-2 text-white">{contractAddress}</span>
            <button
              onClick={copyToClipboard}
              className="text-gray-400 transition-colors hover:text-white"
            >
              <FiCopy size={20} />
            </button>
          </div>
          {copied && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 text-green-500"
            >
              Copied to clipboard!
            </motion.p>
          )}
        </motion.div> */}
      </div>
    </section>
  );
};

export default CoinDetails; 