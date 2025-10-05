import Link from "next/link";

const Btn = ({ link, text }) => {
    return (
        <Link href={link} className="h-10 px-6 bg-[#b12024] flx rounded-full lg:text-[14px] uppercase">{text}</Link>
    )
}

export default Btn;