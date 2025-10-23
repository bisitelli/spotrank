import SpotRankCard from "./spotRankCard";

const cards = [
    {
        title: "SpotRank",
        description:
            "Saat nopeasti käsityksen yrityksesi näkyvyydestä tekoälyhauissa ja hakukoneissa.",
        features: [
            "Oman yrityksen näkyvyysanalyysi",
            "Keskeiset vahvuudet ja kehityskohteet",
            "Yhteenveto ja suositukset seuraavista askelista",
        ],
        cta: "Tee ilmainen analyysi",
    },
    {
        title: "SpotRank Rival",
        description:
            "Vertaa yrityksesi näkyvyyttä kilpailijoihin ja selvitä, missä he menestyvät paremmin sekä missä sinulla on kilpailuetua.",
        features: [
            "Oman yrityksen näkyvyysanalyysi",
            "Kilpailijoiden näkyvyys ja vahvuudet",
            "Vertailu: missä kilpailijat pärjäävät paremmin",
            "Toimenpide-ehdotukset kilpailuedun saavuttamiseksi",
        ],
        cta: "Tilaa kilpailija-analyysi",
    },
    {
        title: "SpotRank Boost",
        description:
            "Henkilökohtainen suunnitelma ja suositukset näkyvyyden parantamiseksi tekoälyalustoilla ja hakukoneissa.",
        features: [
            "Räätälöity näkyvyyden kehittämissuunnitelma",
            "Optimointi tekoälyhaun ja hakukoneiden kannalta",
            "Asiantuntijapalaverit ja seuranta",
            "Selkeä roadmap tavoitteiden saavuttamiseksi",
        ],
        cta: "Varaa konsultaatio",
    },
];

export default function SpotRankCards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mt-12">
            {cards.map((card, i) => (
                <SpotRankCard
                    key={i}
                    title={card.title}
                    description={card.description}
                    features={card.features}
                    cta={card.cta}
                />
            ))}
        </div>
    );
}
