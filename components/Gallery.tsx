'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css/bundle';

const galleryItems = [
  {
    id: 1,
    image: '/assets/g1.webp',
    title: 'Project Alpha',
    description: 'Revolutionary blockchain solution for enterprise',
  },
  {
    id: 2,
    image: '/assets/g2.webp',
    title: 'Smart Contracts',
    description: 'Secure and efficient smart contract implementation',
  },
  {
    id: 3,
    image: '/assets/g3.webp',
    title: 'DeFi Integration',
    description: 'Seamless integration with DeFi protocols',
  },
  // Add more gallery items as needed
];

const Gallery = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Our Gallery
        </h2>
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="gallery-swiper"
        >
          {galleryItems.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-gray-800 rounded-xl overflow-hidden transform transition-transform hover:scale-105 duration-300">
                <div className="relative h-64">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Gallery; 