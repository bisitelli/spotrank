import SpotRankCard from "./spotRankCard";

const cards = [
    {
        title: "SpotRank",
        price: "199€",
        description:
            "Get a quick understanding of how clearly your website is interpreted and evaluated by modern AI systems.",
        features: [
            "AI-readiness analysis of your website",
            "Key strengths and strategic improvement areas",
            "Clear, actionable steps to elevate your AI readiness",
        ],
        cta: "Start Now",
        ctaLink: "https://buy.stripe.com/4gM00j4pF70Qbos6sne3e02"

    },
    {
        title: "SpotRank Rival",
        price: "499€",
        description:
            "Compare your AI readiness with competitors and see where their sites excel — and where your strengths clearly outperform theirs.",
        features: [
            "AI-readiness analysis of your website",
            "AI clarity and structural strengths of three competitors",
            "Side-by-side comparison of where competitors outperform you",
            "Key gaps and high-value opportunities for improvement",
            "Recommended actions to strengthen your competitive position",
        ],
        cta: "Start Now",
        ctaLink: "https://buy.stripe.com/cNi7sL6xNeti8cg5oje3e00"


    },
    {
        title: "SpotRank Boost",
        price: "1999€",
        description:
            "A personalized plan with expert guidance to strengthen how clearly AI systems interpret and recommend your website.",
        features: [
            "Comprehensive AI-readiness analysis of your website",
            "AI clarity and structural strengths of six competitors",
            "In-depth comparison of performance and differences",
            "A tailored AI-readiness improvement plan",
            "Optimization guidance for both AI interpretation and search visibility",
            "Dedicated kick-off and follow-up expert sessions",
            "Quick-Win recommendations and a clear, actionable roadmap",
        ],
        cta: "Start Now",
        ctaLink: "https://buy.stripe.com/eVq3cvcWbdpe9gkaIDe3e01"
    },
];


export default function SpotRankCards(){
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
                    ctaLink={card.ctaLink}
                />
            ))}
        </div>
    );
}
