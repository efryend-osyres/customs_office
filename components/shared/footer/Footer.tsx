const IconFacebook = "/svg/social/facebook.svg";
const IconInstagram = "/svg/social/instagram.svg";
const IconTiktock = "/svg/social/tiktock.svg";
const IconSpotify = "/svg/social/spotify.svg";
const IconLinken = "/svg/social/linkendin.svg";
const IconYoutube = "/svg/social/youtube.svg";

const Logo = "/svg/logo_1.svg";

export function Footer() {
    return (
        <div className="bg-brand-primary py-12 text-white">
            <div className="container mx-auto">
                <div className="flex justify-between">
                    <div className="flex space-x-8">
                        <div>
                            <a href="https://www.google.com/">
                                <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center hover:bg-brand-secundary/20 transition-all duration-200 cursor-pointer">
                                    <object
                                        className="h-6"
                                        type="image/svg+xml"
                                        data={IconFacebook}
                                        aria-label="hero">
                                        svg-facebook
                                    </object>
                                </div>
                            </a>
                        </div>
                        <div>
                            <a href="https://www.google.com/">
                                <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center hover:bg-brand-secundary/20 transition-all duration-200 cursor-pointer">
                                    <object
                                        className="h-6"
                                        type="image/svg+xml"
                                        data={IconInstagram}
                                        aria-label="hero">
                                        svg-facebook
                                    </object>
                                </div>
                            </a>
                        </div>
                        <div>
                            <a href="https://www.google.com/">
                                <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center hover:bg-brand-secundary/20 transition-all duration-200 cursor-pointer">
                                    <object
                                        className="h-7"
                                        type="image/svg+xml"
                                        data={IconTiktock}
                                        aria-label="hero">
                                        svg-facebook
                                    </object>
                                </div>
                            </a>
                        </div>
                        <div>
                            <a href="https://www.google.com/">
                                <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center hover:bg-brand-secundary/20 transition-all duration-200 cursor-pointer">
                                    <object
                                        className="h-7"
                                        type="image/svg+xml"
                                        data={IconSpotify}
                                        aria-label="hero">
                                        svg-facebook
                                    </object>
                                </div>
                            </a>
                        </div>
                        <div>
                            <a href="https://www.google.com/">
                                <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center hover:bg-brand-secundary/20 transition-all duration-200 cursor-pointer">
                                    <object
                                        className="h-7"
                                        type="image/svg+xml"
                                        data={IconLinken}
                                        aria-label="hero">
                                        svg-facebook
                                    </object>
                                </div>
                            </a>
                        </div>
                        <div>
                            <a href="https://www.google.com/">
                                <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center hover:bg-brand-secundary/20 transition-all duration-200 cursor-pointer">
                                    <object
                                        className="h-7"
                                        type="image/svg+xml"
                                        data={IconYoutube}
                                        aria-label="hero">
                                        svg-facebook
                                    </object>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="h-28 w-28 bg-white rounded-full p-2">
                        <object
                            className="h-full w-full"
                            type="image/svg+xml"
                            data={Logo}
                            aria-label="hero">
                            svg-logo
                        </object>
                    </div>
                </div>

                <div className="text-base text-center mt-3">
                    © 2025 GRUPO PAMA LOGISTICA Y COMERCIO EXTERIOR
                </div>
                {/* <div className="text-xs text-center mt-4">
                    Patente Aduanal : Francisco Javier Lares Hopkins [3262] ,
                    Servicios Aduanales de GALA
                </div> */}
            </div>
        </div>
    );
}
