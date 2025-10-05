import Link from "next/link";

const ProvideCardV2 = ({ provideContent }) => {

    return (
        <div className="bg-[linear-gradient(180deg,#ffffff_0%,#d7dde9_100%)] rounded-[10px] px-10 py-[34px] text-center flex flex-col justify-between">
            <div>
                <h3 className="md:text-4xl text-3xl tracking-tight text-[#1f2933] font-medium md:mb-7 mb-3">{provideContent?.title}</h3>
                <p className="text-[#1f2933] font-medium">{provideContent?.description}</p>
            </div>
            <div className="flex items-center justify-center md:mt-7 mt-3">
                <Link href="#" className="flex items-center px-[22px] py-[10px] justify-center rounded-[20px] bg-[linear-gradient(180deg,#cc1d2e_0%,#56101c_100%)] font-semibold">{provideContent?.likeText}</Link>
            </div>
        </div>
    )
}

export default ProvideCardV2;