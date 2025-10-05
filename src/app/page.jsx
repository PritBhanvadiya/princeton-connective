import HeroSlider from "@/components/HeroSlider";
import ProvideCard from "@/components/layouts/ProvideCard";
import Marquee from "@/components/Marquee";
import Image from "next/image";
import AltImg1 from "../../public/alt-img-1.jpg"
import AltImg2 from "../../public/alt-img-2.webp"
import TrustSec from "@/components/TrustSec";

const companyLogos = [
  './marquee-logos/marquee-logo-1.png',
  './marquee-logos/marquee-logo-2.png',
  './marquee-logos/marquee-logo-3.png',
  './marquee-logos/marquee-logo-4.png',
  './marquee-logos/marquee-logo-5.png',
  './marquee-logos/marquee-logo-6.png',
  './marquee-logos/marquee-logo-7.png',
  './marquee-logos/marquee-logo-8.png',
  './marquee-logos/marquee-logo-9.png',
  './marquee-logos/marquee-logo-10.png',
];

const provideData = [
  { title: "Cellular", description: "We provide a variety of plans of voice & data, all from big name carriers you trust.", likeText: "See More", link: "#" },
  { title: "VOIP", description: "Choose any of our plans to enhance your business’ communication infrastructure.", likeText: "See More", link: "#" },
  { title: "IoT", description: "We provide wireless connection for your business anywhere.", likeText: "See More", link: "#" },
  { title: "Data", description: "We provide data services for your business, including installing a dedicated T1 line.", likeText: "See More", link: "#" },
  { title: "Services", description: "All the services we provide from security to racking & stacking", likeText: "See More", link: "#" },
  { title: "Unified Communications", description: "We can provide your business with Microsoft 365 or Google Workspace.", likeText: "See More", link: "#" },
]

export default function Home() {
  return (
    <>
      <HeroSlider />

      <div className="py-[51px]">
        <div className="text-center">
          <h2 className="text-[#25313c]">Our Partners</h2>
          <p className="text-[#3b414e] text-lg font-medium">Our global partnerships, where innovation knows no boundaries</p>
        </div>
        <Marquee logoSrcs={companyLogos} />
      </div>

      <div className="bg-[#ad1a2b] py-10 md:pt-[75px] md:pb-[94px] mx-[6px]">
        <div className="container">
          <div className="text-center md:mb-12 mb-8">
            <h2 className="!text-white pb-3.5">What We Provide</h2>
            <p>With a rich history of innovation and reliability, we continue to excel in <br /> delivering top-tier solutions to our clients worldwide.</p>
          </div>
          <div className="flex flex-col lg:flex-row gap-[42px]">
            {provideData.slice(0, 3).map((provideContent, index) => (
              <ProvideCard provideContent={provideContent} key={index} />
            ))}
          </div>

          <div className="flex flex-col lg:flex-row gap-[42px] mt-11 lg:px-[77px]">
            {provideData.slice(3).map((provideContent, index) => (
              <ProvideCard provideContent={provideContent} key={index + 3} />
            ))}
          </div>
        </div>
      </div>

      <div className="py-5 md:py-[50px] alt-sec">
        <div className="container">

          <div className="flex flex-wrap items-center md:mb-[68px] mb-8">
            <div className="lg:w-1/2 w-full">
              <Image src={AltImg1} className="rounded-3xl w-full shadow-[7px_5px_18px_0px_rgba(0,0,0,0.3)]" alt="AltImg1" width={675} height={434} />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-20 xl:pt-0 pt-6">
              <h2 className="mb-[15px]">What <span>is</span> Princeton <br /> Connective?</h2>
              <p className="max-w-[500px]">Princeton Connective is a division of Princeton IT Services, we provide network & data connectivity to all sides of business. Located in Princeton, New Jersey, we make it easy for businesses to find affordable and accessible services.</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center">
            <div className="lg:w-1/2 w-full">
              <h2>Best <span>Connectivity <br /> Support</span> for your <br /> Success</h2>
              <ul className="alt-sec-nav">
                <li>Device Enrollment</li>
                <li>Mobile Device Management</li>
                <li>Remote Monitoring</li>
                <li>Office 365 Migration</li>
                <li>Network Security</li>
              </ul>
            </div>
            <div className="lg:w-1/2 w-full xl:pl-20 xl:pt-0 pt-6">
              <Image src={AltImg2} className="rounded-3xl w-full shadow-[7px_5px_18px_0px_rgba(0,0,0,0.3)]" alt="AltImg2" width={675} height={434} />
            </div>
          </div>

        </div>
      </div>

      <TrustSec />

    </>
  );
}
