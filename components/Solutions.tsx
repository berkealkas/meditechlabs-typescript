import Image from "next/image"
import Link from "next/link"
import { solutions } from "@/lib/data"

export default function Solutions() {
    return (
        <section className="min-h-[80vh] mx-5 mt-20">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center gap-y-7">
                    <h1 className="text-4xl font-bold">Çözümlerimiz</h1>
                    <div className="border-b-2 border-black w-20" />
                    <p className="text-gray-500 text-center lg:mx-60 leading-loose w-full md:w-auto">
                        Sağlık sektöründeki yenilikçi yapay zeka çözümlerimizle, hastaların sağlık deneyimini iyileştirmek ve sağlık profesyonellerinin karar verme süreçlerini güçlendirmek için çalışıyoruz.
                    </p>
                    <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-10 mt-5">
                        {
                            solutions.map((item) => (
                                <div key={item.title} className="flex flex-col items-start justify-center shadow-lg rounded-xl gap-y-5 p-5 hover:scale-105 hover:duration-300 duration-300">
                                    <Image width={300} height={300} className="w-40" src={item.image} alt="solutions" />
                                    <h1 className="text-xl font-bold">{item.title}</h1>
                                    <p className="text-gray-500 leading-loose">
                                        {item.description}
                                    </p>
                                    <Link href={item.url} className="bg-blue-500 text-white text-center font-semibold px-12 py-4 rounded-full">
                                        Keşfet
                                    </Link>
                                </div>
                            ))
                        }                
                    </div>
                </div>
            </div>
        </section>
    )
}