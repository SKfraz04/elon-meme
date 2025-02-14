import { useState } from 'react';
import styles from '../styles/FAQ.module.css';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: "What is ELON MEME Token?",
        answer: "ELON MEME Token is a community-driven cryptocurrency that combines meme culture with blockchain technology, offering unique features and opportunities for holders."
    },
    {
        question: "How can I buy ELON MEME Token?",
        answer: "You can buy ELON MEME Token through various decentralized exchanges (DEX) like Uniswap. Make sure you have a Web3 wallet like MetaMask set up with ETH for the transaction."
    },
    {
        question: "Is ELON MEME Token secure?",
        answer: "ELON MEME Token's smart contract has undergone thorough auditing by leading security firms. We prioritize the safety and security of our holders' investments."
    },
    {
        question: "What makes ELON MEME Token unique?",
        answer: "ELON MEME Token stands out through its strong community focus, innovative tokenomics, and commitment to long-term growth and sustainability in the crypto space."
    },
    {
        question: "What are the tokenomics?",
        answer: "Our tokenomics are designed for sustainable growth, including features like automatic liquidity generation, holder rewards, and anti-whale mechanisms."
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
                                    ↓
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