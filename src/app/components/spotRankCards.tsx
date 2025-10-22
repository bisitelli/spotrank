import SpotRankCard from "./spotRankCard";

const cards = [
    {
        title: "SpotRank",
        description:
            "Saat nopeasti käsityksen yrityksesi näkyvyydestä tekoälyhauissa ja hakukoneissa.",
        features: [
            "Oman yrityksen tekoälynäkyvyysanalyysi",
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
            "Kilpailijoiden tekoälynäkyvyys ja vahvuudet",
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
                    icon={
                        <svg fill="currentColor" height="14px" viewBox="0 0 48 48" width="14px" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z"></path>
                        </svg>
                    }
                />
            ))}
        </div>
    );
}
