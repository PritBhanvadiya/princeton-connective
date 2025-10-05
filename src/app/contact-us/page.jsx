import InnerBanner from "@/components/layouts/InnerBanner";

export const metadata = {
  title: "Contact Us | Princeton Connective",
  description: "Empowering businesses with cost-effective voice, data, and connectivity solutions. Backed by global partnerships and local support for seamless IT performance.",
};


const InnerBannerData = {
    title: "Have Any Questions?",
    discription: "Our experts in Princeton Connective cater to clients across the globe, <br /> providing them with solutions with the latest technology.",
    backgroundImage: "./contect-banner.png"
}

export default function Page() {
    return (
        <>
            <InnerBanner title={InnerBannerData.title} discription={InnerBannerData.discription} backgroundImage={InnerBannerData.backgroundImage} />

            <div className="py-20 px-4 lg:px-0 bg-[linear-gradient(180.54deg,#ffffff_19%,#d7dde9_99%)]">
                <div className="max-w-[891px] mx-auto">
                    <div className="mb-11">
                        <h2 className="uppercase text-[55px] text-[#3b414e] !font-semibold pb-[22px]">SCHEDULE A MEETING</h2>
                        <p className="text-[#1F2933] leading-6 font-medium">Looking for some help with your database, software, cloud automation strategy, mobile application, or system security? We’ve got you covered! Fill out this form and get a FREE consultation to brainstorm with one of our experts. We will pair you with a technical expert that will work to provide the best possible solution for you and your company!</p>
                    </div>
                    <form action="" className="contect-from gap-y-[18px] flex flex-col">
                        <div className="flex gap-3.5">
                            <div className="w-1/2">
                                <input type="text" placeholder="Business Email" />
                            </div>
                            <div className="w-1/2">
                                <input type="number" className="appearance-none" placeholder="Phone Number" />
                            </div>
                        </div>
                        <div className="flex gap-3.5">
                            <div className="w-1/2">
                                <input type="text" placeholder="City" />
                            </div>
                            <div className="w-1/2">
                                <input type="text" className="appearance-none" placeholder="State" />
                            </div>
                        </div>
                        <div className="flex gap-3.5">
                            <div className="w-full">
                                <textarea className='min-h-20 appearance-none' placeholder="Tell us about your business and the products and/or services you need..."></textarea>
                            </div>
                        </div>
                        <div className="flex">
                            <button className='text-[15px] text-white leading-4 font-bold h-11 px-[46px] bg-[linear-gradient(180deg,#CC1D2E_0%,#56101C_100%)] rounded-lg cursor-pointer'>Send</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}