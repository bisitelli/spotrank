"use client";
import {
    CircleDot,
    FileText,
    Network,
    Code2,
    ClipboardCheck,
    Sparkles,
} from "lucide-react";

export default function WhatWeMeasure() {
    const agents = [
        {
            title: "Click-Path Agent",
            icon: <CircleDot className="size-7 text-primary" />,
            desc: "Measures how efficiently AI can complete key actions.",
        },
        {
            title: "Data Clarity Agent",
            icon: <FileText className="size-7 text-primary" />,
            desc: "Ensures your business facts are clear and extractable.",
        },
        {
            title: "Schema Agent",
            icon: <Network className="size-7 text-primary" />,
            desc: "Checks structured data completeness and accuracy.",
        },
        {
            title: "Technical Agent",
            icon: <Code2 className="size-7 text-primary" />,
            desc: "Evaluates how well AI can load and read your site.",
        },
        {
            title: "Content Agent",
            icon: <ClipboardCheck className="size-7 text-primary" />,
            desc: "Analyzes clarity and hierarchy for AI understanding.",
        },
        {
            title: "Recommendation Agent",
            icon: <Sparkles className="size-7 text-primary" />,
            desc: "Simulates how AI systems recommend your brand.",
        },
    ];

    return (
        <section className="w-full py-20 bg-background-light text-foreground-light">
            <div className="max-w-6xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold">What We Measure</h2>
                    <p className="mt-4 text-subtle-light max-w-2xl mx-auto text-lg">
                        Six specialized AI agents evaluate how clearly your website can be understood, navigated, and used by modern AI systems.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {agents.map((agent, i) => (
                        <div
                            key={i}
                            className="
                relative bg-white border border-border-light rounded-2xl p-6
                shadow-sm hover:shadow-lg hover:-translate-y-1
                transition-all duration-300 overflow-hidden"
                        >
                            {/* Decorative background dot */}
                            <div className="absolute right-4 top-4 size-20 bg-primary/5 rounded-full blur-xl opacity-50"></div>

                            <div className="flex items-center gap-4 mb-4 relative z-10">
                                {agent.icon}
                                <h3 className="text-lg font-semibold">{agent.title}</h3>
                            </div>

                            <p className="text-subtle-light leading-relaxed text-sm relative z-10">
                                {agent.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
