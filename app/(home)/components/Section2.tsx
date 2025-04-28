import Section2Card from "./Section2Card";

export default function Section2() {
    return (
        <div className="container mx-auto flex space-x-5 py-24">
            <div className="w-full">
                <Section2Card />
            </div>
            <div className="w-full space-y-5">
                <div className="text-2xl font-NokoraBold">
                    Despacho Aduanero
                </div>
                <div className="text-lg text-brand-carbon-400 space-y-4">
                    <p>
                        Nos especializamos en ofrecer soluciones aduanales
                        integrales, facilitando la importación de productos
                        desde cualquier parte del mundo hacia México. Nuestra
                        oficina aduanal garantiza un proceso de importación más
                        rápido y efectivo, asegurando el éxito y la satisfacción
                        de nuestros clientes.
                    </p>
                    <p>
                        <span className="font-NokoraBold text-brand-tertiary">
                            Nuestra misión:
                        </span>{" "}
                        Facilitar el comercio en México, Latinoamérica y Asia,
                        fortaleciendo así la economía local y ofreciendo
                        soluciones aduanales integrales, rápidas y seguras. Nos
                        esforzamos por simplificar el proceso de importación
                        para nuestros clientes, asegurando el éxito y la
                        eficiencia en cada operación.
                    </p>
                    <p>
                        Nuestra visión: Ser reconocidos como líderes en
                        servicios aduanales en México y Latinoamérica,
                        distinguidos por nuestra innovación, fiabilidad y
                        excelencia en el servicio. Aspiramos a transformar el
                        sector aduanal, estableciendo nuevos estándares de
                        rapidez, seguridad y transparencia en el proceso de
                        importación, contribuyendo así al crecimiento y
                        desarrollo sostenible de nuestros clientes y de la
                        comunidad.
                    </p>
                </div>
            </div>
        </div>
    );
}
