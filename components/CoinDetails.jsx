import { motion } from 'framer-motion';
import { FiCopy } from 'react-icons/fi';
import { useState } from 'react';
import toast from 'react-hot-toast';
import Image from 'next/image';
import { ContractAdr } from './Common/Common';

const CoinDetails = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (ContractAdr) => {
    toast.success('Copied...');
    navigator.clipboard.writeText(ContractAdr);
  };

  return (
    <section className="md:py-10">
      <div className='flex justify-end items-center' id='how-to-buy'>
        <motion.div
          className="container px-4 pb-8 mx-auto"
        >
          <img src='/assets/How2.png' alt='How to buy' className='hidden md:block w-full' />
          <img src='/assets/How2m.png' alt='How to buy' className='md:hidden w-full' />
        </motion.div>
      </div>
      <img src='/assets/Blueshadow.png' alt='tokenomics' className='h-full w-50' style={{ position: 'absolute' }} />
      <div className="container px-4 mx-auto">
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
            <div className="relative mx-auto aspect-square">
              <img src='/assets/token2.png' alt='tokenomics' className='w-75' />
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-12 text-center"
          id="contract"
        >
          <h3 className="mb-5 GradientText">Solana Contract Address</h3>
           <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="p-4 w-full max-w-md mx-auto mb-5 rounded-xl border backdrop-blur-sm bg-base-200/50 border-white/10"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="mb-1 text-sm text-base-content/60">Contract Address (Solana)</p>
                  <p className="font-mono text-sm text-base-content/80">
                    {ContractAdr.slice(0, 5)}...{ContractAdr.slice(-5)}
                  </p>
                </div>
                <button
                  onClick={() => {
                    handleCopy(ContractAdr);
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
          <p className='mx-auto md:w-3/4 text-gray-400'>Inspector Elon (IELON) is designed to revolutionize cryptocurrency management with enterprise-grade security, intuitive controls, and a commitment to recovering misused public funds. It is not intended to function as an investment opportunity, investment contract, or security of any kind. IELON operates independently and is not affiliated with any political campaign, political office, or governmental entity.</p>
        </motion.div>
      </div>
      <div className='flex justify-end items-center'>
        <img
          src='/assets/Blueshadow.png'
          alt='tokenomics'
          className='h-full w-50'
          style={{
            position: 'absolute',
            transform: 'rotate(180deg)'
          }}
        />
      </div>
    </section>
  );
};

export default CoinDetails; 