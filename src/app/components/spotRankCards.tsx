import SpotRankCard from "./spotRankCard";

const cards = [
    {
        title: "SpotRank",
        price: "199€",
        description:
            "Saat nopeasti käsityksen yrityksesi näkyvyydestä tekoälyhauissa ja hakukoneissa.",
        features: [
            "Oman yrityksen näkyvyysanalyysi",
            "Keskeiset vahvuudet ja kehityskohteet",
            "Yhteenveto ja suositukset seuraavista askelista",
        ],
        cta: "Aloita nyt",
        ctaLink: "https://buy.stripe.com/4gM00j4pF70Qbos6sne3e02"

    },
    {
        title: "SpotRank Rival",
        price: "499€",
        description:
            "Vertaa yrityksesi näkyvyyttä kilpailijoihin ja selvitä, missä he menestyvät paremmin sekä missä sinulla on kilpailuetua.",
        features: [
            "Oman yrityksen näkyvyysanalyysi",
            "3 kilpailijan näkyvyys ja vahvuudet",
            "Vertailu: missä kilpailijat pärjäävät paremmin",
            "Tunnistetut erot ja kehityskohteet",
            "Toimenpide-ehdotukset kilpailuedun saavuttamiseksi",
        ],
        cta: "Aloita nyt",
        ctaLink: "https://buy.stripe.com/cNi7sL6xNeti8cg5oje3e00"


    },
    {
        title: "SpotRank Boost",
        price: "1999€",
        description:
            "Henkilökohtainen suunnitelma ja suositukset näkyvyyden parantamiseksi tekoälyalustoilla ja hakukoneissa.",
        features: [
            "Oman yrityksen näkyvyysanalyysi",
            "6 kilpailijan näkyvyys ja vahvuudet",
            "Syvävertailu näkyvyydestä ja eroista",
            "Räätälöity näkyvyyden kehittämissuunnitelma",
            "Optimointi tekoäly- ja hakunäkyvyydelle",
            "Seuranta- ja kick off palaverit",
            "Quick Win -suositukset ja selkeä roadmap",
        ],
        cta: "Aloita nyt",
        ctaLink: "https://buy.stripe.com/eVq3cvcWbdpe9gkaIDe3e01"
    },
];

type SpotRankCardsProps = {
    openForm: (url: string) => void;
};

export default function SpotRankCards({ openForm }: SpotRankCardsProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mt-12">
            {cards.map((card, i) => (
                <SpotRankCard
                    key={i}
                    title={card.title}
                    price={card.price}
                    description={card.description}
                    features={card.features}
                    cta={card.cta}
                    ctaLink={card.ctaLink ?? ""}
                    openForm={card.openForm ? (url) => openForm(url) : undefined}
                />
            ))}
        </div>
    );
}
