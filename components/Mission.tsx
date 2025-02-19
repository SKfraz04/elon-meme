import Image from 'next/image';
import { motion } from 'framer-motion';

const Mission = () => {


    return (
        <section className="min-h-screen bg-[url('/assets/MissionBG.png')] bg-cover bg-center bg-blend-overlay">
            <div className="px-4 py-16 mx-auto max-w-6xl">
                <div className='flex flex-col gap-8 items-center md:flex-row'>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="md:w-1/2"
                    >
                        <Image
                            src="/assets/MissionElon.png"
                            alt="Inspector Elon"
                            width={600}
                            height={800}
                            className="rounded-lg"
                        />
                    </motion.div>
                    <div className="space-y-6 text-white md:w-1/2">
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-5xl font-['Bruno_Ace_SC'] text-purple-500 mb-4"
                        >
                            THE MISSION
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-xl font-['Bruno_Ace_SC'] mb-6"
                        >
                            RECOVERING US GOVERNMENT FUNDS, ONE MEME AT A TIME!
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="text-sm leading-relaxed text-gray-300"
                        >
                            In a world full of wasted budgets, endless investigations, and questionable spending, only one hero can bring order to the chaos… Inspector Elon! With his laser-eyed determination, flame-throwing tweets, and meme-powered detective skills, he's here to sniff out inefficiency and recover lost taxpayer dollars like a true government watchdog.
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission; 