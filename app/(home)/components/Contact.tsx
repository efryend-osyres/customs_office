import { Mail, Phone } from "lucide-react";
import { ContactForm } from "../forms/ContactForm";
import ParallaxIContact from "./ParallaxIContact";

export default function Contact() {
    return (
        <>
            <div className="container  mx-auto mt-40 mb-5">
                <div className="text-2xl font-NokoraBold">
                    Mándanos un mensaje
                </div>
            </div>

            <div className="relative min-h-fullBar overflow-hidden">
                <ParallaxIContact />

                <div className="absolute w-full z-[2] flex h-full top-0 left-0">
                    <div className="w-6/12"></div>

                    <div className="relative w-6/12 back-data-bottom px-40 py-20 h-full "></div>
                </div>

                <div className="relative container mx-auto flex z-[3]">
                    <div className="w-6/12 px-10 py-10">
                        <div className="relative bg-brand-primary w-full border border-brand-secundary rounded-xl py-5 px-10 space-y-5 text-white">
                            <div>
                                <a href="tel:+5555555555">
                                    <div className="flex space-x-3">
                                        <div>
                                            <Phone size={20} />
                                        </div>
                                        <div> (443) 697 3464</div>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a href="mailto:test@correo.com">
                                    <div className="flex space-x-3">
                                        <div>
                                            <Mail size={20} />
                                        </div>
                                        <div>contacto@logisticapama.com</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="relative w-6/12 px-40 py-20 h-full">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </>
    );
}
