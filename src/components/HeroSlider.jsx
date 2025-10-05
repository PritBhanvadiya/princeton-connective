'use client'

import React, { useRef } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import gsap from 'gsap';

import ArrowLeft from '../../public/left-arrow.png'
import ArrowRight from '../../public/right-arrow.png'
import Image from 'next/image';

const slides = [
  {
    title: "Welcome to <br/> Princeton Connective",
    description: "We offer small businesses affordability and accessibility in the realm of tech. <br/> Click “See More” to learn more about Princeton Connective.",
    button: "See More",
    image: "./slider-img/slider-img-1.jpg"
  },
  {
    title: "Your Voice, Your Plan",
    description: "We provide multiple cellular & VOIP options for your small business <br/> from big name carriers and trusted providers. Click “See More” to learn more.",
    button: "Learn More",
    image: "./slider-img/slider-img-2.jpg"
  },
  {
    title: "Data Done Right",
    description: "From data center connectivity to a dedicated T1 Line, <br/> see what Princeton Connective can offer for your business.",
    button: "Learn More",
    image: "./slider-img/slider-img-3.jpg"
  },
  {
    title: "Stay Connected with <br/> Your Team",
    description: "Princeton Connective provides your small business with unified communications <br/> services. Click “See More” to learn more.",
    button: "Learn More",
    image: "./slider-img/slider-img-4.jpg"
  },
  {
    title: "From Hardware to <br/> Software, and <br/> Everything in Between",
    description: "Princeton Connective offers a multitude of tech services for your business. <br/> services. Click “See More” to learn more.",
    button: "Learn More",
    image: "./slider-img/slider-img-5.jpg"
  },
  {
    title: "Stay Connected <br/> Everywhere",
    description: "We offer small businesses reliable wireless connectivity everywhere. <br/> services. Click “See More” to learn more.",
    button: "Learn More",
    image: "./slider-img/slider-img-6.jpg"
  },
];

const HeroSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const animateSlide = (swiper) => {
    const activeSlide = swiper.slides[swiper.activeIndex];
    const textEls = activeSlide.querySelectorAll('.fade-up');

    gsap.fromTo(
      textEls,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.15,
        delay: 0.3
      }
    );
  };

  const animateImage = (swiper) => {
    const activeSlide = swiper.slides[swiper.activeIndex];
    const imgEl = activeSlide.querySelector('.fade-image');

    if (imgEl) {
      gsap.fromTo(
        imgEl,
        { scale: 1.1, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: 'power2.out',
        }
      );
    }
  };

  return (
    <div className="relative hero-slider">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop
        autoplay={{ delay: 5000 }}
        pagination={{
          el: '.custom-pagination',
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} w-3 h-3 mx-1 bg-white rounded-full inline-block"></span>`;
          }
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();

          animateSlide(swiper);
          animateImage(swiper);
        }}
        onSlideChangeTransitionStart={(swiper) => {
          animateSlide(swiper);
          animateImage(swiper);
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-[432px] bg-cover bg-center flex items-center"
            >
              <div className="top-0 left-0 w-full h-full absolute fade-image"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(45, 51, 44, 0.6) 0%, rgba(99, 109, 108, 0.62) 100%), url(${slide.image})`,
                  backgroundPosition: 'center bottom',
                }}
              ></div>
              <div className="bg-opacity-50 w-full h-full flex items-center">
                <div className="text-white max-w-xl px-5 md:!px-[120px] container z-30">
                  <h1 className="fade-up text-4xl md:text-[44px] leading-12 font-bold mb-6 text-shadow-[0_1px_3px_rgba(0,0,0,.3)]" dangerouslySetInnerHTML={{ __html: slide.title }} />
                  <p className="fade-up font-bold text-shadow-[0_1px_3px_rgba(0,0,0,.3)]" dangerouslySetInnerHTML={{ __html: slide.description }} />
                  <div className="fade-up flex items-center mt-5">
                    <Link href="#" className="h-[45px] px-6 bg-[#b12024] flex rounded-full font-bold items-center justify-center shadow-[6px_6px_18px_0px_rgba(0,0,0,0.3)]">
                      {slide.button}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Arrows */}
      <button ref={prevRef} className="custom-arrow z-30 arrow-left absolute top-1/2 left-10 transform -translate-y-1/2 p-3 cursor-pointer brightness-100 invert">
        <Image src={ArrowLeft} alt="ArrowLeft" width={20} height={20} />
      </button>
      <button ref={nextRef} className="custom-arrow z-30 arrow-right absolute top-1/2 right-10 transform -translate-y-1/2 p-3 cursor-pointer brightness-100 invert">
        <Image src={ArrowRight} alt="ArrowRight" width={20} height={20} />
      </button>

      {/* Custom Dots */}
      <div className="custom-pagination absolute left-1/2 bottom-5 z-30 flex items-center justify-center" />
    </div>
  );
};

export default HeroSlider;
