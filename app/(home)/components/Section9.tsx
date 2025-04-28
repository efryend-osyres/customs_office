import Image from "next/image";

const Map = "/img/sections/map.png";

export default function Section9() {
    return (
        <>
            <div className="container mx-auto">
                <div className="text-2xl font-NokoraBold">Cobertura</div>
            </div>
            <div className="relative h-fullBar w-full mt-2">
                <div className="absolute top-0 left-0 w-full h-full">
                    <Image src={Map} alt="Map" fill objectFit="contain" />
                </div>

                <div className="back-data-bottom absolute right-0 bottom-0 bg-white h-full w-6/12 rounded-tl-[100rem] z-[1] " />

                <div className="relative container mx-auto flex h-full items-center z-[2] ">
                    <div className="w-full"></div>
                    <div className="w-5/12 flex-shrink-0 flex items-center justify-end ">
                        <div className="text-3xl space-y-2 font-NokoraBold w-fit">
                            <div>TERRESTRE</div>
                            <div>MARÍTIMA</div>
                            <div>FERROVIARIA</div>
                        </div>
                        <div className="text-brand-primary text-3xl font-NokoraBold transform rotate-90 w-fit">
                            CONECTIVIDAD
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
