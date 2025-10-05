import Image from 'next/image';
import img from '../../public/dns-security.webp'
import calendarIcon from '../../public/calender-icon.jpg'
import Link from 'next/link';

const BlogCard = ({ link }) => {
    return (
        <div className="w-full rounded-[20px] overflow-hidden">
            <div className="max-h-[200px] h-full">
                <Image src={img} alt='img' width={434} height={351} className='h-full w-full object-cover' />
            </div>
            <div className="p-3.5 bg-white">
                <Link href={link} className='text-[#1f2933] leading-[42px] lg:text-[32px] text-2xl font-bold' >What is a DNS Security Threat?</Link>
                <div className="flex items-center gap-1 mt-[10px] mb-[18px]">
                    <Image src={calendarIcon} alt='img' width={18} height={18} />
                    <span className='text-[#1f2933] block'>July 17, 2024</span>
                </div>
                <p className='text-[#1f2933] pb-5'>In the vast expanse of the internet, the Domain Name System (DNS)...</p>
            </div>
        </div>
    )
}

export default BlogCard;