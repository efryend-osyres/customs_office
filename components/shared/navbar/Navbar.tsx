import SectionBar from "./SectionBar";

const Logo = "/svg/logo.svg";

export function Navbar() {
    return (
        <div className="fixed w-full top-0 left-0 h-20 bg-white z-[30]">
            <div className="container mx-auto relative w-full h-full flex justify-between items-center">
                <div>
                    <object
                        className="h-12 z-[30] mx-auto"
                        type="image/svg+xml"
                        data={Logo}
                        aria-label="hero">
                        svg-logo
                    </object>
                </div>
                <div className="flex space-x-5 font-NokoraBold">
                    <div className="hover:text-brand-tertiary transition-all duration-200">
                        <a href="/#bussines">Linea de negocio</a>
                    </div>
                    <div className="hover:text-brand-tertiary transition-all duration-200">
                        <a href="/#specialty">Nuestra especialidad</a>
                    </div>
                    <div className="hover:text-brand-tertiary transition-all duration-200">
                        <a href="/#coverage">Cobertura</a>
                    </div>
                    <div className="hover:text-brand-tertiary transition-all duration-200">
                        <a href="/#contact">Contacto</a>
                    </div>
                </div>
            </div>
            {/* <div className="relative bg-brand-secundary h-4 w-full left-0 bottom-0" /> */}
            <SectionBar />
        </div>
    );
}
