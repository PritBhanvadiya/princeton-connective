import Link from "next/link";

const ProvideCard = ({ provideContent }) => {
    
    return (
        <div className="bg-[#CC6A73] rounded-[10px] p-5 md:px-10 md:py-[34px] shadow-[11px_11px_18px_0px_rgba(0,0,0,0.3)] lg:w-1/3 text-center">
            <h3 className="md:text-4xl text-3xl tracking-tight text-white font-bold text-shadow-[0em_0.1em_0.1em_rgba(0,0,0,0.4)] md:mb-7 mb-3.5">{provideContent?.title}</h3>
            <p>{provideContent?.description}</p>
            <div className="flex items-center justify-center md:mt-7 mt-3">
                <Link href="#" className="flex items-center px-[22px] py-2 md:py-[10px] justify-center rounded-[20px] border-[1px] border-white hover:border-transparent hover:bg-[rgba(0,0,0,.05)] transition-all duration-300">{provideContent?.likeText}</Link>
            </div>
        </div>
    )
}

export default ProvideCard;