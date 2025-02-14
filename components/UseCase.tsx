import { motion } from 'framer-motion';
import styles from '../styles/UseCase.module.css';

const useCases = [
    {
        title: "Enterprise Solutions",
        description: "Streamline your business operations with our enterprise-grade solutions that scale with your needs.",
        icon: "🏢"
    },
    {
        title: "Data Analytics",
        description: "Transform raw data into actionable insights with our powerful analytics tools.",
        icon: "📊"
    },
    {
        title: "Cloud Integration",
        description: "Seamlessly integrate with cloud services for enhanced flexibility and performance.",
        icon: "☁️"
    },
    {
        title: "Security & Compliance",
        description: "Ensure your data stays protected with our advanced security features and compliance measures.",
        icon: "🔒"
    }
];

const UseCase = () => {
    return (
        <section className={styles.useCaseSection}>
            <div className={`${styles.container} dark-gradient`}>
                <h2 className={styles.title}>Use Cases</h2>
                <p className={styles.subtitle}>Discover how our solution can transform your business</p>
                
                <div className={styles.cardGrid}>
                    {useCases.map((useCase, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ 
                                scale: 1.05,
                                boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
                            }}
                        >
                            <div className={styles.iconContainer}>
                                <span className={styles.icon}>{useCase.icon}</span>
                            </div>
                            <h3 className={styles.cardTitle}>{useCase.title}</h3>
                            <p className={styles.cardDescription}>{useCase.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UseCase; 