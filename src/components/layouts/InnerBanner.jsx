'use client'

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const InnerBanner = ({ title, backgroundImage, discription }) => {
  const bannerRef = useRef(null);

  useEffect(() => {
    const elements = bannerRef.current.querySelector(".fadeUp");

    gsap.fromTo(
      elements,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <div
      ref={bannerRef}
      className="w-full xl:py-32 py-16 bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container">
        <div className="lg:px-28 px-10 fadeUp">
          <h1
            dangerouslySetInnerHTML={{ __html: title }}
            className="font-bold text-[40px] text-white [&>span]:text-[#CC1D2E] pb-[22px]"
          ></h1>
          <p
            dangerouslySetInnerHTML={{ __html: discription }}
            className="font-semibold text-white"
          ></p>
        </div>
      </div>
    </div>
  );
};

export default InnerBanner;
