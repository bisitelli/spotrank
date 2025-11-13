import { useState } from "react";

const faqs = [
    {
        question: "How does SpotRank analyze my website?",
        answer:
            "SpotRank uses six specialized AI agents to evaluate how clearly your website can be understood, navigated, and used by modern AI systems. Our analysis covers data clarity, schema quality, technical readability, content structure, actionability, and how likely AI systems are to recommend your brand."
    },
    {
        question: "What exactly do your AI agents measure?",
        answer:
            "Each agent focuses on a different part of AI readiness: click-path efficiency, data consistency, schema completeness, technical accessibility, content clarity, and recommendation strength. Together, they reveal how AI interprets your site and where improvement is needed."
    },
    {
        question: "Why is AI readiness important for my business?",
        answer:
            "AI systems are becoming the primary way customers discover and decide between businesses. If AI cannot read your site, extract key information, or complete basic tasks, it simply won’t recommend you — even if you offer the best service."
    },
    {
        question: "What kind of improvements does SpotRank recommend?",
        answer:
            "You’ll receive a prioritized list of improvements, such as shortening the buying path, fixing missing business data, improving schema markup, restructuring unclear content, or removing technical blockers like pop-ups and JS-only rendering."
    },
    {
        question: "Do you compare my website to competitors?",
        answer:
            "Yes. SpotRank benchmarks your AI readiness against your competitors to reveal where they outperform you, and where you already have an advantage. This helps you understand which changes provide the biggest competitive gain."
    },
    {
        question: "How do I know if my website is improving over time?",
        answer:
            "Your dashboard tracks readiness scores, agent results, and key improvements over time. You can quickly see what has improved, what still needs attention, and how changes affect your AI performance on a monthly basis."
    }
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
