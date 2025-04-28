import Section7Card from "./Section7Card";

export default function Section7() {
    return (
        <div className="container mx-auto flex space-x-5 py-24">
            <div className="w-full space-y-5">
                <div className="text-2xl font-NokoraBold">
                    Seguros y custodia
                </div>
                <div className="text-lg text-brand-carbon-400 space-y-4">
                    <p>
                        Asegurar su mercancía es muy importante ya que como
                        importador y exportador se encuentra expuesto a las
                        imperfecciones del comercio internacional; proteja sus
                        inversiones y déjenos brindarle tranquilidad.
                    </p>
                    <div className="pl-3 mt-2 space-y-1">
                        <div>• SEGURO AL CONTENEDOR</div>
                        <div>• SEGURO A LA MERCANCIA</div>
                        <div>• GPS</div>
                        <div>• CUSTODIA</div>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <Section7Card />
            </div>
        </div>
    );
}
