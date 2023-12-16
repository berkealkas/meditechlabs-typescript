'use client'

import Link from "next/link"
import { useState } from "react"
import { NavLink } from "./NavLink"
import { IoMenu, IoCloseOutline } from "react-icons/io5";
import Image from "next/image";

export default function Navbar() {
    const [submenu, setSubmenu] = useState(false)
    const [menu, setMenu] = useState(false)

    const handleMouseOver = () => {
        setSubmenu(true)
    }

    const handleMouseLeave = () => {
        setSubmenu(false)
    }

    const handleMenu = () => {
        setMenu(!menu)
    }

    return (
        <nav className="fixed top-0 w-full z-10 bg-white pb-7 pt-2 shadow">
            <div className="container mx-auto">
                <div className="md:flex justify-between items-center mt-6 hidden">
                    <Link href='/'>
                        <Image width={300} height={300} className="" src="/logo.png" alt="Logo" />
                    </Link>
                    <div className="flex items-center gap-x-5 text-lg font-bold text-gray-500">
                        <NavLink href='/about'>
                            Hakkımızda
                        </NavLink>
                        <div onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} className="cursor-pointer relative hover:text-gray-700">
                            Çözümlerimiz
                            {submenu && (
                                <div className="flex flex-col absolute gap-y-3 p-3 bg-white" onMouseLeave={handleMouseLeave}>
                                    <NavLink href='/autonote'>AutoNote</NavLink>
                                    <NavLink href='/voice2report'>Voice2Report</NavLink>
                                </div>
                            )}
                        </div>
                        <NavLink href='/contact'>
                            İletişim
                        </NavLink>
                        <button className="hover:text-gray-700">En</button>
                    </div>
                </div>
                
                {/* Mobile */}
                <div className="pt-5 md:hidden pr-5">
                    <div className="flex justify-between items-center">
                        <Link href='/'>
                            <Image width={300} height={100} className="" src="/logo.png" alt="Logo" />
                        </Link>
                        <div>
                            <button onClick={handleMenu} className="text-gray-500">
                                {menu ? <IoCloseOutline className="text-3xl" /> : <IoMenu className="text-3xl" />}
                            </button>
                        </div>
                    </div>
                    {menu && (
                        <div className="flex flex-col items-start gap-y-5 p-5 text-gray-500 font-bold text-lg">
                            <NavLink href='/about'>
                                Hakkımızda
                            </NavLink>
                            <div onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} className="cursor-pointer relative hover:text-gray-700">
                                Çözümlerimiz
                                {submenu && (
                                    <div className="flex flex-col items-start gap-y-5 mt-2 pl-2" onMouseLeave={handleMouseLeave}>
                                        <NavLink href='/autonote'>AutoNote</NavLink>
                                        <NavLink href='/voice2report'>Voice2Report</NavLink>
                                    </div>
                                )}
                            </div>
                            <NavLink href='/contact'>
                                İletişim
                            </NavLink>
                            <button className="hover:text-gray-700">En</button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}