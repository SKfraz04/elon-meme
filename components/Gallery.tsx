'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css/bundle';

const galleryItems = [
  {
    id: 1,
    image: '/assets/g1.webp',
  },
  {
    id: 2,
    image: '/assets/g2.webp',
  },
  {
    id: 3,
    image: '/assets/g3.webp',
  },
  {
    id: 4,
    image: '/assets/g4.webp',
  },
  {
    id: 5,
    image: '/assets/g5.jpg',
  },{
    id: 6,
    image: '/assets/g6.png',
  },
  {
    id: 7,
    image: '/assets/g7.webp',
  },
  {
    id: 8,
    image: '/assets/g8.png',
  },
];

const Gallery = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Our Gallery
        </h2>
        
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ 
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          speed={3000}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="gallery-swiper [&_.swiper-slide]:transition-transform [&_.swiper-slide]:duration-300"
        >
          {galleryItems.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative h-96 group">
                <Image
                  src={item.image}
                  alt={`Gallery image ${item.id}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover rounded-3xl border-2 border-purple-500/30 shadow-xl shadow-purple-500/20 
                    transition-all duration-300 group-hover:scale-105 group-hover:border-purple-500/50"
                  priority
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Gallery; 