'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css/bundle';

const galleryItems = [
  {
    id: 1,
    image: '/assets/g1.png',
  },
  {
    id: 2,
    image: '/assets/g2.png',
  },
  {
    id: 3,
    image: '/assets/g3.png',
  },
  {
    id: 4,
    image: '/assets/g4.png',
  },
  {
    id: 5,
    image: '/assets/g8.png',
  },
  {
    id: 6,
    image: '/assets/g6.png',
  },
  {
    id: 7,
    image: '/assets/g7.png',
  },
  {
    id: 8,
    image: '/assets/g9.png',
  },
];

const Gallery = () => {
  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-4xl font-bold text-center GradientText uppercase font-['Bruno_Ace_SC']">
          Our Gallery
        </h2>
        {/* <Image src="/assets/SliderShadowL.png" alt="Gallery" fill /> */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            // delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            reverseDirection: false
          }}
          speed={3000}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 6,
            },
            1024: {
              slidesPerView: 5,
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
                  className="object-cover rounded-3xl border-2 transition-all duration-300 border-purple-500/30 group-hover:border-purple-500/50"
                  priority
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: true
          }}
          speed={3000}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 6,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          className="gallery-swiper mt-7 [&_.swiper-slide]:transition-transform [&_.swiper-slide]:duration-300"
        >
          {galleryItems.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative h-96 group">
                <Image
                  src={item.image}
                  alt={`Gallery image ${item.id}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover rounded-3xl border-2 transition-all duration-300 border-purple-500/30 group-hover:border-purple-500/50"
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