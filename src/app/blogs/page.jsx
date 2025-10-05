import BlogCard from "@/components/BlogCard";
import InnerBanner from "@/components/layouts/InnerBanner";
import WhatWeProvide from "@/components/WhatWeProvide";
import Link from "next/link";

export const metadata = {
  title: "Blog | Princeton Connective",
  description: "Empowering businesses with cost-effective voice, data, and connectivity solutions. Backed by global partnerships and local support for seamless IT performance.",
};

const InnerBannerData = {
    title: "<span>Our</span> Blog",
    discription: "Stay in touch with the latest innovations in tech, we’ll keep you connected in all the latest trends and most recent events.",
    backgroundImage: "./blogs-banner.png"
}

export default function Page() {
    return (
        <>
            <InnerBanner title={InnerBannerData.title} discription={InnerBannerData.discription} backgroundImage={InnerBannerData.backgroundImage} />
            <div className="py-9 lg:pt-[74px] lg:pb-[102px] bg-[linear-gradient(180deg,#ffffff_0%,#d7dde9_100%)]">
                <div className="container">
                    <div className="flex flex-wrap lg:flex-nowrap items-start">
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-[30px] lg:pr-7">
                            <BlogCard link="blogs/what-is-a-dns-security-threat" />
                        </div>
                        <div className="lg:max-w-[316px] w-full pr-[30px] pb-9 mt-10 lg:mt-0 lg:ml-auto border-r-[1px] border-[rgba(0,0,0,.1)]">
                            <form className="flex items-center relative lg:mb-9 mb-5">
                                <input type="text" className="border-[1px] border-[#ddd] bg-white text-[#666] rounded-[3px] outline-none pl-2 pr-16 h-10 w-full" />
                                <button className="absolute right-0 top-0 z-20 p-2 bg-[#DDDDDD] text-[#666666] text-[14px] h-full">Search</button>
                            </form>
                            <h4 className="text-[#333] text-[28px] font-medium">Categories</h4>
                            <ul className="border-b-[1px] border-[rgba(0,0,0,.1)] pb-3.5 lg:mt-6 mt-3 gap-y-2 flex flex-col">
                                <li><Link href="#" className="text-lg text-[#cc1d2e] font-medium">Cybersecurity <span>(1)</span></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <WhatWeProvide />
        </>
    )
}