import InnerBanner from "@/components/layouts/InnerBanner";
import Image from "next/image";
import howWeImg from '../../../public/how-we-opret.jpg'
import SupportImg from '../../../public/support-img.jpg'
import TrustSec from "@/components/TrustSec";
import WhatWeProvide from "@/components/WhatWeProvide";

export const metadata = {
  title: "Princeton Connective | Reliable Voice, Data &amp; Connectivity Solutions for all Business",
  description: "Empowering businesses with cost-effective voice, data, and connectivity solutions. Backed by global partnerships and local support for seamless IT performance.",
};

const InnerBannerData = {
    title: "Get to Know <span>Us</span>",
    discription: "Our experts in Princeton Connective cater to clients across the <br /> globe, providing them with solutions with the latest technology.",
    backgroundImage: "./about-banner.png"
}

export default function Page() {
    return (
        <>
            <InnerBanner title={InnerBannerData.title} discription={InnerBannerData.discription} backgroundImage={InnerBannerData.backgroundImage} />

            <div className="lg:py-10 xl:py-32 py-12 bg-[linear-gradient(180deg,#ffffff_0%,#d7dde9_100%)]">
                <div className="container">
                    <div className="flex flex-wrap lg:flex-nowrap items-center gap-6 lg:gap-10 xl:gap-28">
                        <div className="lg:w-1/2 w-full">
                            <Image src={howWeImg} className="rounded-3xl w-full shadow-[7px_5px_18px_0px_rgba(0,0,0,0.3)]" alt="AltImg1" width={675} height={434} />
                        </div>
                        <div className="lg:w-1/2 w-full">
                            <h2 className="mb-[15px]">How <span className="text-[#CC1D2E]">We</span> Operate</h2>
                            <p className="lg:max-w-[495px] text-[#1f2933] text-[17px] leading-7 font-medium">Princeton Connective operates with a client-centric approach, prioritizing the betterment of our clients at every step. We begin by understanding our clients’ unique needs and challenges, then tailor our connectivity solutions to address them effectively. Our team of skilled professionals leverages the latest technologies and best practices to deliver innovative and reliable services that enhance efficiency, productivity, and growth. With proactive monitoring, timely support, and continuous improvement, we strive to exceed client expectations, fostering long-term partnerships built on trust, collaboration, and mutual success.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[linear-gradient(180deg,#ffffff_0%,#d7dde9_100%)] py-11 lg:py-20 xl:py-[132px]">
                <div className="container">
                    <div className="flex flex-wrap-reverse md:flex-nowrap items-start max-w-[1100px] mx-auto gap-5 md:gap-0">
                        <div className="md:w-1/2 w-full">
                            <h2 className="!font-semibold">Best <span className="text-[#CC1D2E]">Connectivity <br /> Support</span> for your <br /> Success</h2>
                            <ul className="alt-sec-nav">
                                <li>Device Enrollment</li>
                                <li>Mobile Device Management</li>
                                <li>Remote Monitoring</li>
                                <li>Office 365 Migration</li>
                                <li>Network Security</li>
                            </ul>
                        </div>
                        <div className="md:w-1/2 w-full">
                            <Image src={SupportImg} className="rounded-3xl w-full shadow-[7px_5px_18px_0px_rgba(0,0,0,0.3)] max-h-[342px]" alt="AltImg2" width={675} height={342} />
                        </div>
                    </div>
                </div>
            </div>

            <WhatWeProvide />

            <div className="lg:mt-[127px] mt-9">
                <TrustSec />
            </div>

        </>
    )
}