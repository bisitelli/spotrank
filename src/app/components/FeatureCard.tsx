// components/FeatureCard.tsx

import React from 'react';

interface FeatureCardProps {
    icon: React.ElementType;
    title: string;
    description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
    return (
        <div className="p-6 bg-white border border-gray-100 rounded-xl shadow-lg transition duration-300 hover:shadow-xl hover:border-blue-100">
            <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                    <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            </div>
            <p className="text-gray-600">{description}</p>
        </div>
    );
}