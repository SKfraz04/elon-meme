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
    <section className="py-16">
      {/* <div className='flex justify-end items-center'>
        <div className="container px-4 py-8 mx-auto">
          <h2 className="mb-8 text-3xl text-center uppercase GradientText">How to Buy on Raydium</h2>
          <div className="mx-auto space-y-6 max-w-3xl">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-lg bg-gray-800/50"
            >
              <h3 className="mb-3 text-xl text-white">1. Connect Your Wallet</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Go to Raydium's official website</li>
                <li>• Click "Launch App"</li>
                <li>• In the top right corner, click "Connect Wallet"</li>
                <li>• Select your Solana-compatible wallet and approve the connection</li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-lg bg-gray-800/50"
            >
              <h3 className="mb-3 text-xl text-white">2. Navigate to the Swap Page</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Click on "Swap" in the navigation bar</li>
                <li>• Select the token you want to buy (if it's not listed, paste its contract address)</li>
                <li>• Select SOL as the payment currency</li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-lg bg-gray-800/50"
            >
              <h3 className="mb-3 text-xl text-white">3. Enter the Swap Amount</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Type the amount of SOL you want to swap for the token</li>
                <li>• Ensure that you leave some SOL in your wallet for gas fees</li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-lg bg-gray-800/50"
            >
              <h3 className="mb-3 text-xl text-white">4. Review and Confirm Swap</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Check the exchange rate, fees, and expected slippage</li>
                <li>• Click "Swap"</li>
                <li>• Approve the transaction in your wallet</li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-lg bg-gray-800/50"
            >
              <h3 className="mb-3 text-xl text-white">5. Verify Token in Your Wallet</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Open your Phantom/Solflare wallet</li>
                <li>• If the token is not visible, manually add the token by pasting the contract address</li>
                <li>• Confirm that you have received the tokens</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div> */}
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
          <p className='mx-auto mb-5 w-3/4 text-gray-400'>Inspector Elon (IELON) is designed to revolutionize cryptocurrency management with enterprise-grade security, intuitive controls, and a commitment to recovering misused public funds. It is not intended to function as an investment opportunity, investment contract, or security of any kind. IELON operates independently and is not affiliated with any political campaign, political office, or governmental entity.</p>
          <div className="inline-flex items-center px-8 py-2 rounded-lg bg-gray-800/50">
            <span className="mr-2 text-white">{ContractAdr.slice(0, 5)}...{ContractAdr.slice(-5)}</span>
            <button
              onClick={() => {
                handleCopy(ContractAdr);
              }}
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