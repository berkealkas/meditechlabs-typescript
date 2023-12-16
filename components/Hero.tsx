import Image from "next/image";

export default function Hero() {
    return (
        <section className="mt-20 xl:min-h-[70vh] min-h-[50vh]">
            <div className="flex items-center w-full container mx-auto">
                <div className="mt-24 w-full text-center md:text-start mx-6 md:mx-0">
                    <h1 className="text-4xl font-bold">
                        Sağlık Hizmetlerinize Çağ Atlatın
                    </h1>
                    <p className="my-8 w-90 text-lg font-light leading-7 text-gray-500">
                        Sağlık hizmetlerinizi derin öğrenme ve doğal dil işleme teknolojilerinizi kullanarak daha verimli daha kaliteli ve daha erişilebilir hale getiriyoruz.
                    </p>

                    <button className="bg-blue-500 rounded-full px-8 py-4 text-lg text-white font-semibold">Demo Randevusu</button>
                </div>
                    <div className="w-full md:flex items-center mt-10 hidden">
                        <Image width={300} height={300} className="w-full" src="/hero.gif" alt="robot" />
                    </div>

            </div>
        </section>
    )
}