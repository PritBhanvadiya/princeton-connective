'use client'

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import Btn from "./Btn";
import MobileMenu from './MobileMenu'

import Icon1 from '../../../public/svg/facebook-svgrepo-com.svg'
import Icon2 from '../../../public/svg/instagram-svgrepo-com.svg'
import Icon3 from '../../../public/svg/logo--x.svg'
import USIcon from '../../../public/united-states.webp'
import logo from '../../../public/princeton-logo1.png'
import Search from '../../../public/search.png'

export default function Header() {
    const pathname = usePathname();

    const isActive = (href) => pathname === href;

    return (
        <header className="w-full fixed top-0 left-0 h-[72px] md:h-[104px] z-50 bg-white">
            {/* Top Bar */}
            <div className="bg-[#272b34] h-[32px] w-full hidden md:flex items-center justify-between">
                <div className="container !px-[60px]">
                    <div className="flex items-center justify-between">
                        <p className="text-[12px] text-white">Cellular, Data, VOIP</p>
                        <div className="flex items-center gap-6">
                            <ul className="flex items-center gap-2">
                                <li>
                                    <Link href="#" className="flex items-center justify-center w-7 h-7">
                                        <Image src={Icon1} alt="Icon1" width={24} height={24} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="flex items-center justify-center w-7 h-7">
                                        <Image src={Icon2} alt="Icon2" width={24} height={24} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="flex items-center justify-center w-7 h-7 brightness-100 invert">
                                        <Image src={Icon3} alt="Icon3" width={24} height={24} />
                                    </Link>
                                </li>
                            </ul>
                            <p className="text-[12px] text-white">Call Us Today!</p>
                            <span className="flex text-[12px] items-center justify-center gap-2.5 text-white">
                                <Image src={USIcon} width="16" height="16" alt="US" />
                                732-TECH-365 (USA)
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="container lg:!px-[60px] px-12">
                <div className="flex items-center justify-between h-18">
                    <div>
                        <Link href="/"><Image src={logo} width={163} height={54} alt="Logo" /></Link>
                    </div>
                    {/* Mobile Menu */}
                    <MobileMenu />
                    <nav className="hidden lg:flex items-center lg:gap-2 gap-4">
                        <ul className="nav-main">
                            <li>
                                <Link href="#" className={isActive('/voice') ? 'text-[#ff4d6a] font-semibold' : ''}>Voice</Link>
                                <ul>
                                    <li>
                                        <Link href="#" className={isActive('/cellular') ? 'text-[#ff4d6a] font-semibold' : ''}>Cellular</Link>
                                        <ul>
                                            <li><Link href="#" className={isActive('/att') ? 'text-[#ff4d6a] font-semibold' : ''}>AT &amp; T</Link></li>
                                            <li><Link href="#" className={isActive('/t-mobile') ? 'text-[#ff4d6a] font-semibold' : ''}>T-Mobile</Link></li>
                                            <li><Link href="#" className={isActive('/us-cellular') ? 'text-[#ff4d6a] font-semibold' : ''}>US Cellular</Link></li>
                                            <li><Link href="#" className={isActive('/cradlepoint') ? 'text-[#ff4d6a] font-semibold' : ''}>Cradlepoint</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link href="#" className={isActive('/voip') ? 'text-[#ff4d6a] font-semibold' : ''}>VOIP</Link>
                                        <ul>
                                            <li><Link href="#" className={isActive('/tech365') ? 'text-[#ff4d6a] font-semibold' : ''}>Tech365</Link></li>
                                            <li><Link href="#" className={isActive('/nextiva') ? 'text-[#ff4d6a] font-semibold' : ''}>Nextiva</Link></li>
                                            <li><Link href="#" className={isActive('/ringcentral') ? 'text-[#ff4d6a] font-semibold' : ''}>RingCentral</Link></li>
                                            <li><Link href="#" className={isActive('/8x8') ? 'text-[#ff4d6a] font-semibold' : ''}>8×8</Link></li>
                                            <li><Link href="#" className={isActive('/m365-teams') ? 'text-[#ff4d6a] font-semibold' : ''}>M365 Teams</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <Link href="#" className={isActive('/services') ? 'text-[#ff4d6a] font-semibold' : ''}>Services</Link>
                                <ul>
                                    <li><Link href="#" className={isActive('/mobile-device-management') ? 'text-[#ff4d6a] font-semibold' : ''}>Mobile Device Management</Link></li>
                                    <li><Link href="#" className={isActive('/network-cabling') ? 'text-[#ff4d6a] font-semibold' : ''}>Network Cabling</Link></li>
                                    <li><Link href="#" className={isActive('/racking-stacking') ? 'text-[#ff4d6a] font-semibold' : ''}>Racking &amp; Stacking</Link></li>
                                    <li><Link href="#" className={isActive('/security') ? 'text-[#ff4d6a] font-semibold' : ''}>Security</Link></li>
                                    <li><Link href="#" className={isActive('/break-fix') ? 'text-[#ff4d6a] font-semibold' : ''}>Break-Fix</Link></li>
                                    <li><Link href="#" className={isActive('/fixed-wireless') ? 'text-[#ff4d6a] font-semibold' : ''}>Fixed Wireless Solution</Link></li>
                                </ul>
                            </li>

                            <li><Link href="#" className={isActive('/data') ? 'text-[#ff4d6a] font-semibold' : ''}>Data</Link></li>

                            <li>
                                <Link href="#" className={isActive('/communications') ? 'text-[#ff4d6a] font-semibold' : ''}>Communications</Link>
                                <ul>
                                    <li><Link href="#" className={isActive('/microsoft-365') ? 'text-[#ff4d6a] font-semibold' : ''}>Microsoft 365</Link></li>
                                    <li><Link href="#" className={isActive('/google-workspace') ? 'text-[#ff4d6a] font-semibold' : ''}>Google Workspace</Link></li>
                                </ul>
                            </li>

                            <li>
                                <Link href="#" className={isActive('/company') ? 'text-[#ff4d6a] font-semibold' : ''}>Company</Link>
                                <ul>
                                    <li><Link href="/about-us" className={isActive('/about-us') ? 'text-[#ff4d6a] font-semibold' : ''}>About Us</Link></li>
                                    <li><Link href="/blogs" className={isActive('/blogs') ? 'text-[#ff4d6a] font-semibold' : ''}>Blog</Link></li>
                                    <li><Link href="/contact-us" className={isActive('/contact-us') ? 'text-[#ff4d6a] font-semibold' : ''}>Contact Us</Link></li>
                                </ul>
                            </li>
                        </ul>

                        <div className="flex items-center justify-center">
                            <Btn link="#" text="Contact Us" />
                        </div>

                        <form action="" className="flex relative items-center">
                            <input
                                type="text"
                                className="border-1 rounded-full h-10 border-[#1f2933] text-[15px] text-[#1f2933] w-24 lg:w-[216px] outline-0 pl-10"
                                placeholder="Search..."
                            />
                            <div className="absolute left-2.5">
                                <Image src={Search} width={20} height={20} alt="Search" />
                            </div>
                        </form>
                    </nav>
                </div>
            </div>
        </header>
    );
}
