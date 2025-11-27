"use client";
import {
    ScanText,
    Layers2,
    TrendingUp
} from "lucide-react";

export default function WhatWeMeasure() {
    const agents = [
        {
            title: "Automatic Translation",
            icon: <ScanText className="size-7 text-primary" />,
            desc: "We read your HTML and re-author it into semantic, hallucination-resistant JSON. No configuration needed.",
        },
        {
            title: "Agent Action Layer",
            icon: <Layers2 className="size-7 text-primary" />,
            desc: "Static text becomes executable actions. Turn 'Book' or 'Reserve' into an API endpoint that an AI Agent can trigger.",
        },
        {
            title: "Future-Proof SEO",
            icon: <TrendingUp className="size-7 text-primary" />,
            desc: "Search is changing. Be the first recommendation when a user asks their AI assistant for a solution.",
        }
    ];

    return (
        <section className="w-full py-20 bg-background-light text-foreground-light">
            <div className="max-w-6xl mx-auto px-6">

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {agents.map((agent, i) => (
                        <div
                            key={i}
                            className="
                                relative bg-white border border-border-light rounded-2xl p-6
                                shadow-sm hover:shadow-lg hover:-translate-y-1
                                transition-all duration-300 overflow-hidden opacity-80"
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
