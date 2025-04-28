import Section4Card from "./Section4Card";

export default function Section4() {
    return (
        <div className="container mx-auto flex space-x-5 py-24">
            <div className="w-full">
                <Section4Card />
            </div>
            <div className="w-full space-y-5">
                <div className="text-2xl font-NokoraBold">
                    Servicios Marítimos
                </div>
                <div className="text-lg text-brand-carbon-400 space-y-4">
                    <p>
                        Ofrecemos el servicio como Agentes Navieros
                        consignatarios, Supervisión de Maniobras, Flete
                        Marítimo, Carga Proyecto.
                    </p>
                </div>
            </div>
        </div>
    );
}
