import ProvideCardV2 from "@/components/layouts/ProvideCardV2";

const provideData = [
    { title: "Cellular", description: "We provide a variety of plans of voice & data, all from big name carriers you trust.", likeText: "See More", link: "#" },
    { title: "VOIP", description: "Choose any of our plans to enhance your business’ communication infrastructure.", likeText: "See More", link: "#" },
    { title: "IoT", description: "We provide wireless connection for your business anywhere.", likeText: "See More", link: "#" },
    { title: "Data", description: "We provide data services for your business, including installing a dedicated T1 line.", likeText: "See More", link: "#" },
    { title: "Services", description: "All the services we provide from security to racking & stacking", likeText: "See More", link: "#" },
    { title: "Unified Communications", description: "We can provide your business with Microsoft 365 or Google Workspace.", likeText: "See More", link: "#" },
]

const WhatWeProvide = () => {
    return (
        <div className="bg-[linear-gradient(90deg,#cc1e2f_0%,#56101c_100%)] pt-[75px] pb-[94px]">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="!text-white pb-3.5">What We Provide</h2>
                    <p>With a rich history of innovation and reliability, we continue to excel in <br /> delivering top-tier solutions to our clients worldwide.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-[42px] gap-8">
                    {provideData.map((provideContent, index) => (
                        <ProvideCardV2 provideContent={provideContent} key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WhatWeProvide;