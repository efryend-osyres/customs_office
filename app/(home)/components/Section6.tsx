import Section6Card from "./Section6Card";

export default function Section6() {
    return (
        <div className="container mx-auto flex space-x-5 py-24">
            <div className="w-full">
                <Section6Card />
            </div>
            <div className="w-full space-y-5">
                <div className="text-2xl font-NokoraBold">
                    Transporte y Equipo
                </div>
                <div className="text-lg text-brand-carbon-400 space-y-4">
                    <p>
                        Nuestro servicio de transporte contribuye de manera
                        eficiente en la cadena de suministro de nuestros
                        clientes.
                    </p>
                    <div className="pl-3 mt-2 space-y-1">
                        <div>
                            • 10 tracto-camiones para modalidad full y 8
                            sencillos.
                        </div>
                        <div>• 4 planas de 2 ejes</div>
                        <div>• 2 cajas secas</div>
                        <div>• 10 contenedores 40 HC</div>
                        <div>• servicio de desconsolidacion</div>
                        <div>• y mas</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
