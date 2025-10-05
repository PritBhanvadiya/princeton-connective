import Link from 'next/link';
import Image from 'next/image';

import Icon1 from '../../../public/svg/facebook-svgrepo-com.svg'
import Icon2 from '../../../public/svg/instagram-svgrepo-com.svg'
import Icon3 from '../../../public/svg/logo--x.svg'
import footerLogo from '../../../public/footer-logo.png'
import callIcon from '../../../public/call-img.png'

const Footer = () => {
    return (
        <div className="bg-[url('../../public/footer-bg.jpg')] bg-no-repeat bg-cover">
            <div className="container lg:p-0">
                <div className="flex flex-wrap md:flex-nowrap">
                    <div className="flex w-full flex-wrap footer-ul py-9 lg:py-20 order-2 md:order-1">
                        <div className="lg:w-1/3 w-full">
                            <Link href="#">
                                <Image src={footerLogo} alt='footerLogo' width={197} height={54} />
                            </Link>
                        </div>
                        <div className="lg:w-1/3 w-full">
                            <h4 className='text-[18px] font-semibold pb-[10px]'>Voice</h4>
                            <ul>
                                <li><Link href="#">Cellular</Link></li>
                                <li><Link href="#">VOIP</Link></li>
                            </ul>
                            <h4 className='text-[18px] font-semibold pb-[10px] mt-7'>Services</h4>
                            <ul>
                                <li><Link href="#">Mobile Device Management</Link></li>
                                <li><Link href="#">Network Cabling</Link></li>
                                <li><Link href="#">Racking & Stacking</Link></li>
                                <li><Link href="#">Security</Link></li>
                                <li><Link href="#">Break-Fix</Link></li>
                            </ul>
                        </div>
                        <div className="lg:w-1/3 w-full">
                            <h4 className='text-[18px] font-semibold pb-[10px]'>Data</h4>
                            <ul>
                                <li><Link href="#">Data</Link></li>
                            </ul>
                            <h4 className='text-[18px] font-semibold pb-[10px] mt-7'>Unified Communications</h4>
                            <ul>
                                <li><Link href="#">Microsoft 365</Link></li>
                                <li><Link href="#">Google Workspace</Link></li>
                            </ul>
                            <h4 className='text-[18px] font-semibold pb-[10px] mt-7'>Company</h4>
                            <ul>
                                <li><Link href="/about-us">About Us</Link></li>
                                <li><Link href="/contact-us">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="max-w-[612px] w-full bg-[#0e335a] px-6 py-10 mx-auto lg:py-20 lg:px-9 ml-auto order-1 md:order-2 mt-4 lg:mt-0">
                        <div className="flex items-center justify-between">
                            <div className="fixed bottom-0 right-0 text-0 opacity-0 invisible">This Code by Prit Bhanvadiya</div>
                            <h4 className='font-bold uppercase'>Contact Us</h4>
                            <ul className="flx gap-3">
                                <li className='rounded-xl bg-[#0b5090] w-10 h-10 flex items-center justify-center'>
                                    <Link href="#" className="flex items-center justify-center w-7 h-7">
                                        <Image src={Icon1} alt="ICon1" width={24} height={24} />
                                    </Link>
                                </li>
                                <li className='rounded-xl bg-[#0b5090] w-10 h-10 flex items-center justify-center'>
                                    <Link href="#" className="flex items-center justify-center w-7 h-7">
                                        <Image src={Icon2} alt="ICon2" width={24} height={24} />
                                    </Link>
                                </li>
                                <li className='rounded-xl bg-[#0b5090] w-10 h-10 flex items-center justify-center'>
                                    <Link href="#" className="flex items-center justify-center w-7 h-7 brightness-100 invert">
                                        <Image src={Icon3} alt="ICon3" width={24} height={24} />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <form className='footer-form gap-y-6 flex flex-col'>
                            <div className="flex gap-3.5">
                                <div className="w-1/2">
                                    <input type="text" className='rounded-tl-[10px]' placeholder='Full Name' />
                                </div>
                                <div className="w-1/2">
                                    <input type="email" className='rounded-tr-[10px]' placeholder='Business Email' />
                                </div>
                            </div>
                            <div className="flex gap-3.5">
                                <div className="w-1/2">
                                    <input type="text" className='rounded-tl-[10px]' placeholder='Company Name' />
                                </div>
                                <div className="w-1/2">
                                    <input type="text" className='rounded-tr-[10px]' placeholder='Job Title' />
                                </div>
                            </div>
                            <div className="flex gap-3.5">
                                <div className="w-1/2">
                                    <input type="text" className='rounded-tl-[10px]' placeholder='City' />
                                </div>
                                <div className="w-1/2">
                                    <input type="text" className='rounded-tr-[10px]' placeholder='State' />
                                </div>
                            </div>
                            <div className="flex gap-3.5">
                                <div className="w-full">
                                    <input type="number" className='rounded-[10px]' placeholder='Contact Number' />
                                </div>
                            </div>
                            <div className="flex gap-3.5">
                                <div className="w-full">
                                    <textarea className='min-h-20 appearance-none rounded-b-[10px]'></textarea>
                                </div>
                            </div>
                            <div className="flex">
                                <button className='text-[15px] text-white leading-4 font-bold h-11 px-6 bg-[linear-gradient(180deg,#CC1D2E_0%,#56101C_100%)] rounded-lg cursor-pointer'>Contact Us</button>
                            </div>
                            <Link href="#" className='mt-2 text-xl  lg:text-2xl text-[#D7DDE9] leading-8'>500 Alexander Park, #301, Princeton, NJ 08540.</Link>
                            <div className="mt-2 flex">
                                <Image src={callIcon} width={217} height={63} alt='callIcon' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;