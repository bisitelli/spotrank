// LogoStrip.jsx
import React from "react";

export default function LogoStrip() {
    const logos = [
        { src: "/logos/openai.svg", alt: "ChatGPT", color: "#74AA9C" },
        { src: "/logos/googlegemini.svg", alt: "Gemini", color: "#8E75B2" },
        { src: "/logos/claude.svg", alt: "Claude", color: "#D97757" },
        { src: "/logos/perplexity.svg", alt: "Perplexity", color: "#1FB8CD" },
        { src: "/logos/meta.svg", alt: "Meta AI", color: "#0467DF" },
        { src: "/logos/mistralai.svg", alt: "Mistral", color: "#FA520F" },
    ];

    return (
        <div className="py-8">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-6">
                    <p className="text-sm font-medium text-subtle-light">
                        
                    </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-6">
                    {logos.map((logo) => (
                        <div
                            key={logo.src}
                            className="flex items-center justify-center w-28 h-16"
                        >
                            <div
                                className="w-28 h-16 max-h-10 object-contain transition-all duration-300"
                                style={{
                                    WebkitMask: `url(${logo.src}) no-repeat center`,
                                    mask: `url(${logo.src}) no-repeat center`,
                                    WebkitMaskSize: "contain",
                                    maskSize: "contain",
                                    backgroundColor: "#000",
                                    transition: "background-color 0.3s",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = logo.color ?? "#000")}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#000")}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
