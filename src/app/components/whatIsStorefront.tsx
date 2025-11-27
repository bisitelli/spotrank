import React from 'react';
// Lucide Icons -kirjasto tarjoaa nämä kuvakkeet:
import { Check } from 'lucide-react';

const AIStorefrontAndWorkflow = () => {
    
    // AI Storefront -osan luettelokohdat
    const storefrontFeatures = [
        'Clear business description, services and categories',
        'Uses business description, services, and categories for AI-agent queries.',
        'Uses differentiation and structured data for AI.',
        'Improves results for organic people and robot buy.'
    ];


    return (
        <section className="py-10 bg-background-light w-full">
            <div className="container mx-auto px-4">

                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    
                    {/* Kuva (Vasemmalla suuremmilla näytöillä) */}
                    <div className="lg:w-1/2">
                        <img
                            src="storefrontmockup.png" // Korvaa oikealla polulla
                            alt="AI Storefront Mockup"
                            className="w-full h-auto rounded-lg bg-background-light"
                        />
                         {/*  */}
                    </div>

                    {/* Teksti ja Luettelo (Oikealla suuremmilla näytöillä) */}
                    <div className="lg:w-1/2">
                        <h3 className="text-3xl font-bold text-gray-800 mb-6">
                            What is an AI Storefront?
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Your AI Storefront is a structured profile that explains your business to AI systems - your services, facts, strenghts, hours, location, and more. It helps AI understand and recommend you.
                        </p>
                        
                        <ul className="space-y-4">
                            {storefrontFeatures.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    {/* Käytetään Check-kuvaketta listamerkkinä */}
                                    <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AIStorefrontAndWorkflow;