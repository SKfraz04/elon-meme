import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Partners.module.css';

const Partners = () => {
  const partners = [
    {
      name: 'Partner 1',
      logo: '/assets/slide1.png',
    },
    {
      name: 'Partner 2',
      logo: '/assets/slide2.png',
    },
    {
      name: 'Partner 3',
      logo: '/assets/slide3.png',
    },
    {
      name: 'Partner 4',
      logo: '/assets/slide4.png',
    },
    {
      name: 'Partner 5',
      logo: '/assets/slide5.png',
    },
    {
      name: 'Partner 6',
      logo: '/assets/slide6.png',
    },
  ];

  return (
    <section className="patners-section">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Trusted Partners</h2>
        
        <div className={styles.slider}>
          <div className={styles.slideTrack}>
            {[...partners, ...partners].map((partner, index) => (
              <div key={index} className={styles.slide}>
                <div className="relative w-32 h-20">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners; 