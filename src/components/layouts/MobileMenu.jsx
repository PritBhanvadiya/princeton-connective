'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import Search from '../../../public/search.png'

export default function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdowns, setOpenDropdowns] = useState({
    voice: false,
    cellular: false,
    voip: false,
    services: false,
    communications: false,
    company: false,
  })

  const toggleDropdown = (menu) => {
    setOpenDropdowns((prev) => ({ ...prev, [menu]: !prev[menu] }))
  }

  return (
    <div className="lg:hidden block relative z-[60]">
      {/* Hamburger Icon */}
      <div
        onClick={() => setMenuOpen(!menuOpen)}
        className="flex flex-col justify-center w-8 h-6 cursor-pointer gap-[5px]"
      >
        <span
          className={`h-[2px] w-full bg-[#272b34] transition-all duration-300 ${
            menuOpen ? 'rotate-45 translate-y-[6px]' : ''
          }`}
        ></span>
        <span
          className={`h-[2px] w-full bg-[#272b34] transition-all duration-300 ${
            menuOpen ? 'opacity-0' : ''
          }`}
        ></span>
        <span
          className={`h-[2px] w-full bg-[#272b34] transition-all duration-300 ${
            menuOpen ? '-rotate-45 -translate-y-[6px]' : ''
          }`}
        ></span>
      </div>

      {/* Slide Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-[80%] h-screen bg-white text-[#272b34] overflow-y-auto p-6"
          >
            <div className="flex flex-col gap-5 mt-10">
              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full h-10 pl-10 pr-4 rounded-full border border-[#1f2933] text-[#1f2933] text-[15px] outline-none"
                />
                <Image
                  src={Search}
                  width={18}
                  height={18}
                  alt="Search"
                  className="absolute left-3 top-1/2 -translate-y-1/2"
                />
              </div>

              {/* Navigation */}
              <ul className="flex flex-col gap-4 mt-6">
                {/* Voice */}
                <li>
                  <button
                    onClick={() => toggleDropdown('voice')}
                    className="w-full text-left font-medium text-[16px] flex justify-between items-center"
                  >
                    Voice <span>{openDropdowns.voice ? '-' : '+'}</span>
                  </button>
                  {openDropdowns.voice && (
                    <ul className="pl-4 mt-2 flex flex-col gap-2 text-[14px]">
                      <li>
                        <button
                          onClick={() => toggleDropdown('cellular')}
                          className="w-full text-left flex justify-between items-center"
                        >
                          Cellular <span>{openDropdowns.cellular ? '-' : '+'}</span>
                        </button>
                        {openDropdowns.cellular && (
                          <ul className="pl-4 mt-1 flex flex-col gap-1">
                            <li><Link href="#">AT &amp; T</Link></li>
                            <li><Link href="#">T-Mobile</Link></li>
                            <li><Link href="#">US Cellular</Link></li>
                            <li><Link href="#">Cradlepoint</Link></li>
                          </ul>
                        )}
                      </li>
                      <li>
                        <button
                          onClick={() => toggleDropdown('voip')}
                          className="w-full text-left flex justify-between items-center"
                        >
                          VOIP <span>{openDropdowns.voip ? '-' : '+'}</span>
                        </button>
                        {openDropdowns.voip && (
                          <ul className="pl-4 mt-1 flex flex-col gap-1">
                            <li><Link href="#">Tech365</Link></li>
                            <li><Link href="#">Nextiva</Link></li>
                            <li><Link href="#">RingCentral</Link></li>
                            <li><Link href="#">8×8</Link></li>
                            <li><Link href="#">M365 Teams</Link></li>
                          </ul>
                        )}
                      </li>
                    </ul>
                  )}
                </li>

                {/* Services */}
                <li>
                  <button
                    onClick={() => toggleDropdown('services')}
                    className="w-full text-left font-medium text-[16px] flex justify-between items-center"
                  >
                    Services <span>{openDropdowns.services ? '-' : '+'}</span>
                  </button>
                  {openDropdowns.services && (
                    <ul className="pl-4 mt-2 flex flex-col gap-1 text-[14px]">
                      <li><Link href="#">Mobile Device Management</Link></li>
                      <li><Link href="#">Network Cabling</Link></li>
                      <li><Link href="#">Racking &amp; Stacking</Link></li>
                      <li><Link href="#">Security</Link></li>
                      <li><Link href="#">Break-Fix</Link></li>
                      <li><Link href="#">Fixed Wireless Solution</Link></li>
                    </ul>
                  )}
                </li>

                {/* Data */}
                <li><Link href="#">Data</Link></li>

                {/* Communications */}
                <li>
                  <button
                    onClick={() => toggleDropdown('communications')}
                    className="w-full text-left font-medium text-[16px] flex justify-between items-center"
                  >
                    Communications <span>{openDropdowns.communications ? '-' : '+'}</span>
                  </button>
                  {openDropdowns.communications && (
                    <ul className="pl-4 mt-2 flex flex-col gap-1 text-[14px]">
                      <li><Link href="#">Microsoft 365</Link></li>
                      <li><Link href="#">Google Workspace</Link></li>
                    </ul>
                  )}
                </li>

                {/* Company */}
                <li>
                  <button
                    onClick={() => toggleDropdown('company')}
                    className="w-full text-left font-medium text-[16px] flex justify-between items-center"
                  >
                    Company <span>{openDropdowns.company ? '-' : '+'}</span>
                  </button>
                  {openDropdowns.company && (
                    <ul className="pl-4 mt-2 flex flex-col gap-1 text-[14px]">
                      <li><Link href="/about-us">About Us</Link></li>
                      <li><Link href="/blogs">Blog</Link></li>
                      <li><Link href="/contact-us">Contact Us</Link></li>
                    </ul>
                  )}
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
