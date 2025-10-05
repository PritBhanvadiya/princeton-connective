'use client'

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import TrustSec1 from '../../public/trusted-img/trusted-img-1.webp';
import TrustSec2 from '../../public/trusted-img/trusted-img-2.webp';
import TrustSec3 from '../../public/trusted-img/trusted-img-3.png';
import TrustSec4 from '../../public/trusted-img/trusted-img-4.webp';
import TrustSec5 from '../../public/trusted-img/trusted-img-5.webp';
import TrustSec6 from '../../public/trusted-img/trusted-img-6.webp';

const sliderData = [
    { link: TrustSec1 },
    { link: TrustSec2 },
    { link: TrustSec3 },
    { link: TrustSec4 },
    { link: TrustSec5 },
    { link: TrustSec6 },
    { link: TrustSec1 },
    { link: TrustSec2 },
    { link: TrustSec3 },
    { link: TrustSec4 },
    { link: TrustSec5 },
    { link: TrustSec6 },
]

const TrustSec = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className="bg-[linear-gradient(90deg,#ffffff_0%,#d7dde9_100%)] pt-[30px] mb:pb-[71px] pb-11">
            <div className="text-center">
                <h2 className="!text-black">Trusted by the <span className="text-[#CC1D2E]">Best</span></h2>
                <p className="!text-[#1f2933] text-[20px] text-center font-medium mt-1.5">Companies working with us to simplify their IT process and change the way <br /> they do business around the globe.</p>
            </div>
            <div className="container">
                <div className="relative mt-7 md:mt-16">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        loop
                        autoplay={{ delay: 1000 }}
                        slidesPerView={9}
                        spaceBetween={20}
                        breakpoints={{
                            320: { slidesPerView: 2, spaceBetween: 10 }, 
                            480: { slidesPerView: 3, spaceBetween: 10 }, 
                            640: { slidesPerView: 4, spaceBetween: 15 }, 
                            768: { slidesPerView: 5, spaceBetween: 15 }, 
                            1024: { slidesPerView: 7, spaceBetween: 20 },
                            1440: { slidesPerView: 9, spaceBetween: 20 },
                        }}
                        onInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }}
                    >
                        {sliderData.map((slide, index) => (

                            <SwiperSlide key={index}>
                                <div className="h-[74px] flex items-center justify-center border-r-[#abb4c6] border-r-1 pr-6">
                                    <Image src={slide.link} alt='Img' width={112} height={74} className='w-auto max-w-full max-h-full h-[40px]' />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
export default TrustSec;