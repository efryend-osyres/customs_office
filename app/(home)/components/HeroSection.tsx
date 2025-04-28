import ParallaxIMage from "./ParallaxIMage";

const Logo = "/svg/logo.svg";

export default function HeroSection() {
    return (
        <div className="relative mt-20  h-fullBar overflow-hidden">
            {/* <div className="absolute w-full h-full top-0 left-0">
                <Image src={Back} alt="back" fill objectFit="cover" />
            </div> */}
            <ParallaxIMage />

            <div className="back-data absolute left-0 top-0 h-full w-7/12 rounded-br-[100rem] z-[1]" />

            <div className="relative container mx-auto flex items-center h-full z-[2]">
                <div className="w-5/12">
                    <div>
                        <object
                            className="h-20"
                            type="image/svg+xml"
                            data={Logo}
                            aria-label="hero">
                            svg-logo
                        </object>
                    </div>
                    <div className="my-10">
                        <h1 className="text-5xl text-brand-primary font-NokoraBold">
                            GRUPO PAMVA
                        </h1>
                        <h2 className="text-2xl font-NokoraBold">
                            SOLUCIONES INTEGRALES EN LOGISTICA
                        </h2>
                    </div>
                    <div className="text-sm text-brand-carbon-400">
                        Brindamos soluciones innovadoras y personalizadas que
                        otorguen a nuestros clientes un servicio y valor
                        agregado. Para nosotros los valores son muy importantes,
                        de los cuales nos caracterizan:
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
}
