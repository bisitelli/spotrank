// components/AIOSection.tsx
import React from "react";

interface AIOSectionProps {
    imageSrc: string;
    imageAlt?: string;
}

const AIOSection: React.FC<AIOSectionProps> = ({ imageSrc, imageAlt = "AI Visibility Illustration" }) => {
    return (
        <section className="bg-background-light py-16 px-6">
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-6 md:px-0">
                {/* Vasemmalla teksti */}
                <div className="flex-1">
                    <h2 className="text-3xl md:text-6xl font-bold text-gray-900 mb-8">
                        AI-optimointi – <span className="font-playfair italic font-normal">kuin yrityksesi ylimääräinen myyjä</span>
                    </h2>
                    <p className="text-gray-700">
                        AI-optimointi (AIO) on hakukoneoptimoinnin uusi vaihe. Se auttaa yrityksiä näkymään paremmin generatiivisissa hakupalveluissa.
                        Me olemme kumppanisi tässä: mittaamme näkyvyyden, paljastamme kehityskohteet ja annamme konkreettiset ohjeet brändisi AI-lukukelpoisuuden parantamiseen.
                    </p>
                </div>

                {/* Oikealla kuva */}
                <div className="flex-1">

                </div>
            </div>
        </section>
    );
};

export default AIOSection;
