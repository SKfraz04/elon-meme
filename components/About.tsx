import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../styles/About.module.css';

const About = () => {
  const cards = [
    {
      title: "Mission Recovery",
      description: "Using cutting-edge meme technology to track and recover misused government funds.",
      icon: <Image src="/assets/MissionRecovery.svg" alt="Mission" width={81} height={81} />
    },
    {
      title: "Laser Focus",
      description: "Employing laser-eyed determination to investigate and optimize government spending.",
      icon: <Image src="/assets/LoserFocus.svg" alt="Mission" width={81} height={81} />
    },
    {
      title: "Meme Power",
      description: "Harnessing the power of viral memes to bring transparency to public finances.",
      icon: <Image src="/assets/Memepower.svg" alt="Mission" width={81} height={81} />
    },
    {
      title: "Crypto Sleuths",
      description: "Utilizing blockchain and AI to expose inefficiencies and hold agencies accountable.",
      icon: <Image src="/assets/cryptosleuths.svg" alt="Mission" width={81} height={81} />
    }
  ];

  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`${styles.headerContainer} px-4`}
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`${styles.gradientText} uppercase font-['Bruno_Ace_SC'] text-3xl md:text-4xl`}
          >
            Inspector Elon (IELON)
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`${styles.subheading} uppercase font-['Bruno_Ace_SC'] text-lg md:text-xl`}
          >
            The Government's Only Hope!
          </motion.p>
        </motion.div>
        <div className={styles.content}>
          <div className={styles.cardsContainer}>
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                className={`${styles.card} flex flex-col items-center`}
                whileHover={{
                  // scale: 1.05,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
                }}
              >
                <div className={styles.cardIcon}>{card.icon}</div>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDescription}>{card.description}</p>
              </motion.div>
            ))}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`${styles.imageContainer} hidden md:block`}
          >
            <Image
              src="/assets/aboutelon.png"
              alt="Inspector Elon"
              width={323}
              height={612}
              className={styles.image}
              priority
            />
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 