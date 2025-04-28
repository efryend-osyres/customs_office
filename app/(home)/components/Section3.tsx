import Section3Card from "./Section3Card";

export default function Section3() {
    return (
        <div className="container mx-auto flex space-x-5 py-24">
            <div className="w-full space-y-5">
                <div className="text-2xl font-NokoraBold">
                    Regímenes Aduanales
                </div>
                <div className="text-lg text-brand-carbon-400 space-y-4">
                    <p>
                        Atendemos operaciones Aduanales especiales, cambios de
                        regímenes, regularización y actualizaciones:
                    </p>
                    <div className="pl-3 mt-2 space-y-1">
                        <div>• Definitivo A1</div>
                        <div>• Temporales F4</div>
                        <div>• Immex IN</div>
                        <div>• Deposito Fiscal A4</div>
                        <div>• Recinto Fiscalizado Estratégico M3</div>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <Section3Card />
            </div>
        </div>
    );
}
