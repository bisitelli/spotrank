import { useState } from "react";

const faqs = [
    {
        question: "How does SpotRank analyze your website?",
        answer: "SpotRank evaluates your company’s visibility across major AI platforms and search engines. It assesses how well your content, metadata, and site structure support discoverability — and provides concrete recommendations to improve your visibility."
    },
    {
        question: "Why is AI search optimization important for my business?",
        answer: "AI-driven searches are growing rapidly, and more customers are discovering products and services through AI platforms and search engines. By optimizing your visibility in these environments, you ensure your business appears in the right contexts, attracts more customers, and gains a competitive advantage."
    },
    {
        question: "Can AI search optimization improve my visibility?",
        answer: "Yes! We provide practical recommendations to enhance your content and site structure, ensuring your business is easier to find across AI platforms and search engines — increasing your reach and potential customer base."
    },
    {
        question: "How does competitor visibility affect my business?",
        answer: "Competitor analysis reveals where others perform better — and where you have the opportunity to stand out. This helps you focus your actions where they’ll have the greatest impact on visibility and customer acquisition."
    },
    {
        question: "How can I reach the right customers in the right markets?",
        answer: "SpotRank enables targeted analysis by country and language, ensuring your business appears in the most relevant markets and audiences — where visibility drives the highest impact and return."
    },
    {
        question: "How can I ensure my visibility keeps improving?",
        answer: "Regular tracking helps identify what works and what needs attention. With SpotRank, you can monitor visibility development in real time and act before competitors overtake you."
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
