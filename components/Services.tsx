import Image from "next/image";
import { services } from "@/lib/data";

export default function Services() {
    return (
        <section className="min-h-screen mx-10">
            <div className="container mx-auto my-28">
                <div className="flex flex-col items-center justify-center gap-y-7">
                    <h1 className="text-4xl font-bold text-center">
                        Yapay Zeka ile Sağlık Hizmetlerinizi Birlikte Mükemmelleştirelim
                    </h1>
                    <div className="border-b-2 border-black w-40"/>
                </div>
                <div className="mt-20 text-center md:text-start space-y-20">
                    {
                        services.map((item, index) => (
                            <div key={index} className={index % 2 == 1 ? `flex flex-col md:flex-row-reverse items-center justify-center gap-10` : 'flex flex-col md:flex-row items-center justify-center gap-10'}>
                                <Image width={300} height={300} className="w-full md:w-1/2" src={item.image} alt="services"/>
                                <div className="flex flex-col gap-y-7 items-center justify-center md:items-start">
                                    <h1 className="text-4xl font-bold">
                                        {item.title}
                                    </h1>
                                    <div className="border-b-2 border-black w-20"/>
                                    <p className="text-gray-500 leading-loose">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}