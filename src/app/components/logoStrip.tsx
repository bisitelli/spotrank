// LogoStrip.jsx
import React from "react";

export default function LogoStrip() {
    const logos = [
        { src: "/logos/openai.svg", alt: "ChatGPT" },
        { src: "/logos/googlegemini.svg", alt: "Gemini" },
        { src: "/logos/claude.svg", alt: "Claude" },
        { src: "/logos/perplexity.svg", alt: "Perplexity" },
        { src: "/logos/githubcopilot.svg", alt: "Microsoft Copilot" },
        { src: "/logos/meta.svg", alt: "Meta AI" },
        { src: "/logos/mistralai.svg", alt: "Mistral" },
    ];

    return (
        <div className="py-8">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-6">
                    <p className="text-sm font-medium text-subtle-light">
                        Analysoimme näkyvyytesi suurimmilla alustoilla
                    </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-6">
                    {logos.map((logo) => (
                        <div
                            key={logo.src}
                            className="flex items-center justify-center w-28 h-16"
                        >
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                className="max-h-10 object-contain"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
