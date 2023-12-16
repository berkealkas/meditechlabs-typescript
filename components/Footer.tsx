import Image from "next/image";
import Link from "next/link"
import { FaXTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="bg-[#63B4F3] py-20 text-white"> 
            <div className="grid md:grid-cols-2 items-center">
                <div className="flex flex-col items-center justify-between gap-y-5 w-full">
                    <div className="bg-white py-3 px-5 rounded-full md:w-2/5 w-1/2">
                        <Link href='/'>
                            <Image width={200} height={200} className="w-full" src="/logo.png" alt="Logo"/>
                        </Link>
                    </div>
                    <div className="flex items-center justify-center gap-x-3">
                        <div className="flex items-center justify-center bg-white rounded-full h-12 w-12">
                            <Link href='https://twitter.com/meditechlabs_ai'>
                                <FaXTwitter className="text-black text-2xl"/>
                            </Link>
                        </div>
                        <div className="flex items-center justify-center bg-white rounded-full h-12 w-12">
                            <Link href='https://www.linkedin.com/company/meditechlabs/'>
                                <FaLinkedinIn className="text-[#0A66C2] text-2xl"/>
                            </Link>
                        </div>
                        <div className="flex items-center justify-center bg-white rounded-full h-12 w-12">
                            <Link href='https://github.com/MediTechLabs'>
                                <FaGithub className="text-[#171515] text-2xl"/>
                            </Link>
                        </div>
                    </div>
                    <p>
                        Copyright © 2023 
                        <Link href='/' className="ml-1 hover:text-gray-700 hover:duration-200 duration-200">
                            MediTechLabs.
                        </Link>
                    </p>
                </div>
                <div className="flex items-center justify-center w-full mt-10 pl-14 md:p-0 md:m-0">
                    <div className="flex flex-col items-start justify-center gap-y-4 w-full">
                        <span className="text-lg">Site Haritası</span>
                        <Link href='/about'>Hakkımızda</Link>
                        <Link href='/autonote'>AutoNote</Link>
                        <Link href='/voice2report'>Voice2Report</Link>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-y-4 w-full">
                        <span className="text-lg">Diğer Linkler</span>
                        <Link href='/'>KVKK</Link>
                        <Link href='/'>Sağlık Rehberi</Link>
                        <Link href='/contact'>İletişim</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}