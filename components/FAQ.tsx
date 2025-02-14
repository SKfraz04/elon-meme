import { useState } from 'react';
import styles from '../styles/FAQ.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: "What is Inspector Elon (IELON)?",
        answer: "Inspector Elon (IELON) is a Solana-based meme coin inspired by the idea of investigating government inefficiencies while having fun with memes and crypto culture. IELON is a burnable token with a fixed supply of 500 million, ensuring scarcity and value over time."
    },
    {
        question: "Where Can I Buy IELON?",
        answer: "Once launched, IELON will be available on Solana-compatible decentralized exchanges (DEXs) such as: 'Raydium', 'Orca', 'Meteora'. We will announce the exact launch details and exchange listings on our official channels. Stay tuned!"
    },
    {
        question: "What Makes IELON Different from Other Meme Coins?",
        answer: "Unlike typical meme coins, IELON has a mission—to expose inefficiencies in government spending in a fun and engaging way. We blend humor, blockchain technology, and community engagement to create a meme movement rather than just another token. Plus, no further minting ensures that your bags don’t get diluted!"
    },
    {
        question: "Is Inspector Elon (IELON) Safe?",
        answer: "Yes! IELON is built on Solana, a fast, low-fee, and highly scalable blockchain. We have a fixed supply, no minting functions, and a transparent smart contract to ensure fair and secure tokenomics. However, always DYOR (Do Your Own Research) before investing!"
    },
    {
        question: "What Are the Future Plans for IELON?",
        answer: "Future Plans for IELON: DEX & CEX Listings 🔄 | Community-Driven Burn Events 🔥 | Meme Contests & Giveaways 🎭 | Government Spending Watchlist & Tracking Tools 🕵️‍♂️ | Possible Collaborations with Other Meme Coin Projects 🤝"
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className={styles.faqSection} id="faqs">
            <div className={styles.container}>
                <h2 className={styles.title}>Frequently Asked Questions</h2>
                <div className={styles.faqContainer}>
                    {faqData.map((faq, index) => (
                        <motion.div
                            key={index}
                            className={styles.faqItem}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <button
                                className={`${styles.question} ${activeIndex === index ? styles.active : ''}`}
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                            >
                                {faq.question}
                                <motion.span
                                    className={styles.icon}
                                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                >
                                    {activeIndex === index ? <FiMinus /> : <FiPlus />}
                                </motion.span>
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        className={styles.answer}
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <p>{faq.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ; 