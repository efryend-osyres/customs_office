import Image from "next/image";

const Card_1 = "/img/cards/card_1.png";
const Card_2 = "/img/cards/card_2.png";
const Card_3 = "/img/cards/card_3.png";
const Card_4 = "/img/cards/card_4.png";
const Card_5 = "/img/cards/card_5.png";
const Card_6 = "/img/cards/card_6.png";
const Card_7 = "/img/cards/card_7.png";

export default function Section8() {
    return (
        <div className="container mx-auto space-y-5 py-24">
            <div className="space-y-2">
                <div className="text-2xl font-NokoraBold">
                    Nuestra Especialidad
                </div>
                <div className="text-lg text-brand-carbon-400">
                    Padron de importadores de sectores específicos:
                </div>
            </div>
            <div>Padron de importadores de sectores específicos:</div>
            <div className="grid grid-cols-2 gap-x-10 gap-y-2">
                <div className="text-white bg-brand-tertiary h-[5.5rem] flex items-center rounded-r-3xl">
                    <div className="relative w-4/12 h-full flex-shrink-0 overflow-hidden rounded-r-[20rem]">
                        <Image
                            src={Card_1}
                            alt="card_1"
                            fill
                            objectFit="cover"
                        />
                    </div>
                    <div className="w-full text-center text-2xl font-NokoraBold">
                        Automotriz
                    </div>
                </div>

                <div className="text-white bg-brand-secundary h-[5.5rem] flex items-center rounded-r-3xl">
                    <div className="relative w-4/12 h-full flex-shrink-0 overflow-hidden rounded-r-[20rem]">
                        <Image
                            src={Card_2}
                            alt="card_2"
                            fill
                            objectFit="cover"
                        />
                    </div>
                    <div className="w-full text-center text-2xl font-NokoraBold">
                        Minerales
                    </div>
                </div>

                <div className="text-white bg-brand-primary h-[5.5rem] flex items-center rounded-r-3xl">
                    <div className="relative w-4/12 h-full flex-shrink-0 overflow-hidden rounded-r-[20rem]">
                        <Image
                            src={Card_3}
                            alt="card_3"
                            fill
                            objectFit="cover"
                        />
                    </div>
                    <div className="w-full text-center text-2xl font-NokoraBold">
                        Textiles / Ropa
                    </div>
                </div>

                <div className="text-white bg-brand-tertiary h-[5.5rem] flex items-center rounded-r-3xl">
                    <div className="relative w-4/12 h-full flex-shrink-0 overflow-hidden rounded-r-[20rem]">
                        <Image
                            src={Card_4}
                            alt="card_4"
                            fill
                            objectFit="cover"
                        />
                    </div>
                    <div className="w-full text-center text-2xl font-NokoraBold">
                        Juguetes
                    </div>
                </div>

                <div className="text-white bg-brand-secundary h-[5.5rem] flex items-center rounded-r-3xl">
                    <div className="relative w-4/12 h-full flex-shrink-0 overflow-hidden rounded-r-[20rem]">
                        <Image
                            src={Card_5}
                            alt="card_5"
                            fill
                            objectFit="cover"
                        />
                    </div>
                    <div className="w-full text-center text-2xl font-NokoraBold">
                        Calzado
                    </div>
                </div>

                <div className="text-white bg-brand-primary h-[5.5rem] flex items-center rounded-r-3xl">
                    <div className="relative w-4/12 h-full flex-shrink-0 overflow-hidden rounded-r-[20rem]">
                        <Image
                            src={Card_6}
                            alt="card_6"
                            fill
                            objectFit="cover"
                        />
                    </div>
                    <div className="w-full text-center text-2xl font-NokoraBold">
                        Maquinaria
                    </div>
                </div>

                <div className="text-white bg-brand-tertiary h-[5.5rem] flex items-center rounded-r-3xl">
                    <div className="relative w-4/12 h-full flex-shrink-0 overflow-hidden rounded-r-[20rem]">
                        <Image
                            src={Card_7}
                            alt="card_7"
                            fill
                            objectFit="cover"
                        />
                    </div>
                    <div className="w-full text-center text-2xl font-NokoraBold">
                        Herramientas
                    </div>
                </div>
            </div>
        </div>
    );
}
