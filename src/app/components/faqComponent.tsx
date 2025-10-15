import { useState } from "react";

const faqs = [
    {
        question: "Mitä tarkoittaa AI Visibility Score?",
        answer: "AI Visibility Score yhdistää Googlen näkyvyyden ja verkkosisällön laadun arvioinnin, antaen kokonaiskuvan yrityksesi online-näkyvyydestä."
    },
    {
        question: "Miten AI analysoi yritykseni verkkosivun?",
        answer: "Tekoäly tarkastelee metatietoja, otsikoita, schema.org-dataa, palveluiden relevanssia ja käyttäjäkokemusta arvioidakseen sivustosi näkyvyyttä."
    },
    {
        question: "Voiko AI Visibility Score parantaa hakukonenäkyvyyttäni?",
        answer: "Score ei suoraan muuta sijoituksia, mutta antaa konkreettisia parannusehdotuksia, joiden avulla voit optimoida sivustosi."
    },
    {
        question: "Mitä tarkoittaa Google Visibility Analysis?",
        answer: "Analyysi tarkistaa, kuinka usein yrityksesi domain näkyy hakutuloksissa tärkeimmillä avainsanoilla ja arvioi sen näkyvyyden vahvuuden."
    },
    {
        question: "Kuinka usein minun tulisi seurata AI Visibility Scorea?",
        answer: "Suositeltavaa on seurata kuukausittain tai uusien sivujen lisäyksen jälkeen, jotta näet kehityksen ja muutokset näkyvyydessä."
    },
    {
        question: "Voinko kohdistaa hakuanalyysin tiettyyn maahan tai kieleen?",
        answer: "Kyllä, Custom Search API mahdollistaa maakohtaisen haun, mikä on tärkeää paikalliselle liiketoiminnalle."
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="mt-12 md:mt-24 max-w-2xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-6 text-foreground-light text-center">FAQ</h2>
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
