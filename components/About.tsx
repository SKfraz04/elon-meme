import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../styles/About.module.css';

const About = () => {
  const cards = [
    {
      title: "Mission Recovery",
      description: "Using cutting-edge meme technology to track and recover misused government funds.",
      icon: "🔍"
    },
    {
      title: "Laser Focus",
      description: "Employing laser-eyed determination to investigate and optimize government spending.",
      icon: "👀"
    },
    {
      title: "Meme Power",
      description: "Harnessing the power of viral memes to bring transparency to public finances.",
      icon: "🚀"
    },
    {
      title: "Crypto Sleuths",
      description: "Utilizing blockchain and AI to expose inefficiencies and hold agencies accountable.",
      icon: "💰"
    }
  ];

  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.headerContainer}
        >
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`${styles.title} `}
          >
            Inspector Elon (IELON) – The Government's Only Hope!
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={styles.subheading}
          >
            The Mission: Recovering US Government Funds, One Meme at a Time!
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className={styles.description}
          >
            In a world full of wasted budgets, endless investigations, and questionable spending, 
            only one hero can bring order to the chaos… Inspector Elon! With his laser-eyed determination, 
            flame-throwing tweets, and meme-powered detective skills, he's here to sniff out inefficiency 
            and recover lost taxpayer dollars like a true government watchdog.
          </motion.p>
        </motion.div>
        
        <div className={styles.content}>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={styles.imageContainer}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/assets/founder.jpeg"
              alt="Inspector Elon"
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
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                className={styles.card}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
                }}
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