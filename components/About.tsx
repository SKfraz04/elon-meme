import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../styles/About.module.css';

const About = () => {
  const cards = [
    {
      title: "X Coin",
      description: "The revolutionary cryptocurrency by Elon Musk, designed to transform digital payments and financial inclusion.",
      icon: "🚀"
    },
    {
      title: "Innovation",
      description: "Built on cutting-edge blockchain technology, offering unprecedented speed and security.",
      icon: "💡"
    },
    {
      title: "Ecosystem",
      description: "Seamlessly integrated with X (formerly Twitter) and Tesla's future payment systems.",
      icon: "🌐"
    }
  ];

  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.container}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`${styles.title} gradient-text`}
        >
          About X Coin
        </motion.h2>
        
        <div className={styles.content}>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.imageContainer}
          >
            <Image
              src="/assets/founder.jpeg"
              alt="Elon Musk"
              width={400}
              height={400}
              className={styles.image}
            />
          </motion.div>
          <div className={styles.cardsContainer}>
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={styles.card}
              >
                <div className={styles.cardIcon}>{card.icon}</div>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDescription}>{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 