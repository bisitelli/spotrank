import React from 'react';
import {
    Users,
    Layers,
    CircleAlert,
    TrendingUp,
} from 'lucide-react'

const AIVisibilityMatters = () => {
    const cards = [
        {
            icon: Users,
            title: 'The New Customer Journey',
            description: 'Customers are already asking AI for local services and product recommendations.'
        },
        {
            icon: Layers,
            title: 'AI Needs Structure',
            description: 'AI can only recommend businesses it clearly understands. Your website wasn`t build for that.'
        },
        {
            icon: CircleAlert,
            title: 'Most Websites Fail',
            description: 'Over 95% of businesses websites are not structured in a way that AI systems can read effectively.'
        },
        {
            icon: TrendingUp,
            title: 'The New SEO',
            description: 'Being readable to AI is next evolution of search engine optimization'
        }
    ];

    return (
        <section className="py-16 bg-background-light">
            <div className="container mx-auto px-4 text-center">

                {/* Otsikko ja Selitys */}
                <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
                    Why AI Visibility Matters Today
                </h2>
                <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
                    AI is the new search engine. If it can't understand your business, it can't recommend you to the millions of customers who already using it.
                </p>

                {/* Kortit (AI-ominaisuudet) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="p-6 bg-white border border-gray-100 rounded-lg shadow-md text-left transition-shadow duration-300 hover:shadow-lg"
                        >
                            <div className="text-3xl text-primary mb-3"><card.icon/></div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {card.title}
                            </h3>
                            <p className="text-gray-500 text-sm">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* AI-valmiiden sivujen tilasto */}
                <div className="max-w-md mx-auto p-8 bg-primary/20 rounded-lg">
                    <p className="text-6xl font-extrabold text-gray-900 mb-2">
                        95%
                    </p>
                    <p className="text-base text-gray-700">
                        of business websites are not AI-readable.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default AIVisibilityMatters;