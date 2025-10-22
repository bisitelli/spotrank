import { useState } from "react";

const faqs = [
    {
        question: "Miten SpotRank analysoi verkkosivusi?",
        answer: "SpotRankin tarkastelee yrityksesi näkyvyyttä suurimmilla tekoälyalustoilla ja hakukoneissa. Se arvioi, miten hyvin sisältösi, metatiedot ja sivuston rakenne tukevat löydettävyyttä, ja antaa konkreettisia ehdotuksia näkyvyyden parantamiseksi."
    },
    {
        question: "Miksi tekoälyhakuoptimointi on tärkeää yritykselleni?",
        answer: "Tekoälyhaut yleistyvät nopeasti, ja yhä useampi asiakas löytää palvelut AI-alustojen ja hakukoneiden kautta. Optimoimalla näkyvyytesi näissä hauissa voit varmistaa, että yrityksesi löytyy oikeissa yhteyksissä, houkutella lisää asiakkaita ja saada kilpailuetua markkinoilla."
    },
    {
        question: "Voiko tekoälyhakuoptimointi parantaa näkyvyyttäni?",
        answer: "Kyllä! Annamme konkreettisia suosituksia, joilla voit parantaa sisältöäsi ja sivustosi rakennetta. Näin varmistat, että yrityksesi löytyy helpommin AI-alustoilta ja hakukoneista, mikä lisää potentiaalisten asiakkaiden määrää."
    },
    {
        question: "Miten kilpailijoiden näkyvyys vaikuttaa minun yritykseeni?",
        answer: "Kilpailijoiden analyysi paljastaa, missä he menestyvät paremmin ja missä sinulla on mahdollisuus erottua. Näin voit kohdentaa toimenpiteesi sinne, missä niistä on suurin vaikutus näkyvyyteen ja asiakashankintaan."
    },
    {
        question: "Miten voin tavoittaa oikeat asiakkaat oikeassa paikassa?",
        answer: "SpotRank mahdollistaa kohdennetun analyysin maittain ja kielittäin. Näin varmistat, että yrityksesi näkyy juuri niillä markkinoilla ja kohderyhmillä, joilla sillä on suurin vaikutus ja tuotto."
    },
    {
        question: "Kuinka voin varmistaa, että näkyvyyteni kehittyy jatkuvasti?",
        answer: "Säännöllinen seuranta auttaa tunnistamaan nopeasti, mikä toimii ja missä on parannettavaa. SpotRankin avulla näet näkyvyyden kehityksen reaaliajassa ja voit reagoida ennen kuin kilpailijat ehtivät ohittaa sinut."
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="mt-12 md:mt-12 max-w-2xl mx-auto p-6">
            <h2 className="text-4xl font-bold mb-6 text-foreground-light text-center">FAQ</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border border-border-light rounded-lg overflow-hidden">
                        <button
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="w-full text-left px-4 py-3 flex justify-between items-center bg-background-light hover:bg-primary transition-colors duration-500"
                            style={{
                                color: openIndex === index ? "#fff" : "#111618",
                                backgroundColor: openIndex === index ? "#25aff4" : "#f5f7f8",
                            }}
                        >
                            <span className="font-medium">{faq.question}</span>
                            <span className="ml-2 text-4xl color-light">{openIndex === index ? "-" : "+"}</span>
                        </button>
                        <div
                            className={`px-4 text-subtle-light transition-max-h duration-500 ease-in-out`}
                            style={{
                                maxHeight: openIndex === index ? "200px" : "0px",
                                color: "#607c8a",
                            }}
                        >
                            {faq.answer}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
