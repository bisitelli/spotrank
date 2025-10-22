import React from 'react';

// Määritellään tyypit listojen kohteille
type Step = {
    id: number;
    text: string;
    isFaded: boolean;
};

type NewWayStep = {
    id: number;
    text: string;
};

const oldWaySteps: Step[] = [
    { id: 1, text: "Manuaalinen avainsanatutkimus", isFaded: true },
    { id: 2, text: "Sisällön optimointi vanhoilla menetelmillä", isFaded: true },
    { id: 3, text: "Linkkien rakentaminen perinteisin keinoin", isFaded: true },
    { id: 4, text: "Rajoitettu seuranta ja raportointi", isFaded: true },
];

// Data "Uusi tapa" -listalle
const newWaySteps: NewWayStep[] = [
    { id: 1, text: "Lähtötason auditointi" },
    { id: 2, text: "Täsmällinen näkyvyyssuunnitelma" },
    { id: 3, text: "Toteutetaan tekoälyoptimointi" },
    { id: 4, text: "Seuranta ja jatkuva kasvu" },
];

/**
 * Pieni komponentti listan askeleille
 */
const StepItem: React.FC<{ step: Step | NewWayStep; isNewWay: boolean }> = ({ step, isNewWay }) => {
    const isFaded = !isNewWay && 'isFaded' in step && step.isFaded;

    // Vanhan tavan numeroiden ja tekstin tyylit
    const oldNumberBg = isFaded ? 'bg-subtle-light/50' : 'bg-foreground-light';
    const oldNumberText = isFaded ? 'text-subtle-light' : 'text-white';
    const oldText = isFaded ? 'text-subtle-light' : 'text-foreground-light';
    const oldLine = isFaded ? 'bg-subtle-light/50' : 'bg-foreground-light';

    // Uuden tavan numeroiden ja tekstin tyylit
    const newNumberBg = 'bg-primary';
    const newNumberText = 'text-white';
    const newText = 'text-white';
    const newLine = 'bg-primary';

    // Valitaan tyylit sen mukaan, onko kyseessä vanha vai uusi tapa
    const numberBg = isNewWay ? newNumberBg : oldNumberBg;
    const numberText = isNewWay ? newNumberText : oldNumberText;
    const textColor = isNewWay ? newText : oldText;
    const lineColor = isNewWay ? newLine : oldLine;

    return (
        <div className="flex items-start mb-4 relative">
            {/* Pystysuuntainen viiva (paitsi viimeiselle askeleelle) */}
            {step.id < (isNewWay ? newWaySteps.length : oldWaySteps.length) && (
                <div className={`absolute left-5 top-0 w-0.5 h-full transform translate-y-2 ${lineColor}`}></div>
            )}

            {/* Numeropallo */}
            <div className={`z-10 w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold mr-4 shrink-0 ${numberBg} ${numberText}`}>
                {step.id}
            </div>

            {/* Askeleen teksti */}
            <div className={`text-lg font-medium ${textColor}`}>
                {step.text}
            </div>
        </div>
    );
};

/**
 * Pääkomponentti vertailunäkymälle
 */
const SeoComparison: React.FC = () => {
    return (
        // Pääkontaineri käyttää kevyttä taustaväriä ja sisältää kaksi saraketta.
        <div className="min-h-screen mt-6 py-16 px-4 sm:px-6 lg:px-8 bg-background-light">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                {/* Vasemmalla teksti */}
                <div className="flex-1">
                    <h2 className="text-3xl md:text-6xl font-bold text-gray-900 mb-8">
                        AI-optimointi – <span className="font-playfair italic font-normal">kuin yrityksesi ylimääräinen myyjä</span>
                    </h2>
                    <p className="text-gray-700">
                        AI-optimointi (AIO) on hakukoneoptimoinnin uusi vaihe. Se auttaa yrityksiä näkymään paremmin generatiivisissa hakupalveluissa.
                        Me olemme kumppanisi tässä: mittaamme näkyvyyden, paljastamme kehityskohteet ja annamme konkreettiset ohjeet brändisi AI-lukukelpoisuuden parantamiseen.
                    </p>
                </div>

                {/* ******************* OIKEA SARAKE: UUSI TAPA ******************* */}
                <div className="p-8 rounded-lg bg-foreground-light text-white">
                    <div className="flex items-center gap-1 mb-6">
                        <div className="text-primary size-7">
                            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z" fill="currentColor"></path>
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold">SpotRank Boost</h2>
                    </div>
                    <p className="text-lg mb-12 text-subtle-light">
                        Tekoälynäkyvyyden kasvun kumppanisi. Datavetoinen suunnitelman näkyvyyden kasvattamiseen.
                        Räätälöity roadmap, tekoälyoptimoitu sisältöstrategia ja kuukausittaiset asiantuntijapalaverit pitävät brändisi jatkuvassa nousussa.
                    </p>

                    {/* Askelten listaus */}
                    <div className="ml-1">
                        {newWaySteps.map((step) => (
                            <StepItem key={step.id} step={step} isNewWay={true} />
                        ))}
                    </div>

                    {/* Lomake/CTA-alue */}
                    <div className="w-full max-w-2xl mt-12">
                        <form className="flex flex-col sm:flex-row w-full items-stretch sm:items-center gap-2 rounded-lg bg-white dark:bg-background-dark border border-border-light dark:border-border-dark p-2 shadow-md">


                            <input
                                type="text"
                                placeholder="Syötä yrityksesi URL"
                                className="flex-1 border-none bg-transparent text-foreground-light dark:text-foreground-dark focus:outline-none focus:ring-0 text-base px-2 py-2"
                            />

                            <button type="button" className="flex-shrink-0 sm:w-auto cursor-pointer flex items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold shadow-sm hover:opacity-90 transition-opacity">
                                Varaa konsultaatio
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SeoComparison;