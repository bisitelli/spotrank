import SpotRankCard from "./spotRankCard";

const cards = [
    {
        title: "SpotRank",
        price: "199€",
        description:
            "Get a quick understanding of your company’s visibility across AI searches and traditional search engines.",
        features: [
            "Your company visibility analysis",
            "Key strengths and areas for improvement",
            "Summary and recommendations for next steps",
        ],
        cta: "Start Now",
        ctaLink: "https://buy.stripe.com/4gM00j4pF70Qbos6sne3e02"

    },
    {
        title: "SpotRank Rival",
        price: "499€",
        description:
            "Compare your visibility with competitors and discover where they shine — and where you have the edge.",
        features: [
            "Visibility analysis for your company",
            "Visibility and strengths of three competitors",
            "Comparison: where competitors perform better",
            "Identified differences and opportunities for improvement",
            "Recommended actions to gain a competitive edge",
        ],
        cta: "Start Now",
        ctaLink: "https://buy.stripe.com/cNi7sL6xNeti8cg5oje3e00"


    },
    {
        title: "SpotRank Boost",
        price: "1999€",
        description:
            "A personalized plan and expert recommendations to improve your visibility across AI platforms and search engines.",
        features: [
            "Visibility analysis for your company",
            "Visibility and strengths of six competitors",
            "In-depth comparison of performance and differences",
            "Tailored visibility improvement plan",
            "Optimization for AI and search visibility",
            "Follow-up and kick-off meetings",
            "Quick Win -recommendations and a clear roadmap",
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
