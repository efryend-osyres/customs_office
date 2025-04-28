import Section5Card from "./Section5Card";

export default function Section5() {
    return (
        <div className="container mx-auto flex space-x-5 py-24">
            <div className="w-full space-y-5">
                <div className="text-2xl font-NokoraBold">
                    Asesoría Jurídica
                </div>
                <div className="text-lg text-brand-carbon-400 space-y-4">
                    <p>
                        El comercio exterior requiere de un alto nivel de
                        conocimientos por su entorno y, complejidad normativa en
                        sus diferentes ámbitos, por lo que ofrecemos los
                        siguientes servicios:
                    </p>
                    <div className="pl-3 mt-2 space-y-1">
                        <div>
                            • Asesoría Jurídica, Aduanera y de Comercio Exterior
                        </div>
                        <div>• Asesoría en Gestión Marítima Portuaria</div>
                        <div>• Asesoría Fiscal de Comercio Exterior</div>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <Section5Card />
            </div>
        </div>
    );
}
