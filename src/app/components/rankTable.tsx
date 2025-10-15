"use client"

import { useState } from "react";

interface RankingItem {
    name: string;
    aiMentions: number;
    seoVisibility: number;
    contentQuality: number;
    trendScore: '↑' | '→' | '↓';
    visibilityScore: number;
}

const columnLabels: Record<keyof RankingItem, string> = {
    name: "Brand",
    aiMentions: "AI Mentions",
    seoVisibility: "SEO Visibility",
    contentQuality: "Content Quality",
    trendScore: "Trend",
    visibilityScore: "Visibility Score",
};

interface Question {
    title: string;
    rankings: RankingItem[];
}

const questions: Question[] = [
    {
        title: "Paras ravintola Helsingissä?",
        rankings: [
            { name: "Grön", aiMentions: 75, seoVisibility: 90, contentQuality: 88, trendScore: "↑", visibilityScore: 84 },
            { name: "Olo", aiMentions: 70, seoVisibility: 85, contentQuality: 90, trendScore: "↑", visibilityScore: 82 },
            { name: "Savoy", aiMentions: 60, seoVisibility: 80, contentQuality: 85, trendScore: "→", visibilityScore: 76 },
            { name: "Palace", aiMentions: 65, seoVisibility: 82, contentQuality: 82, trendScore: "↓", visibilityScore: 75 },
            { name: "Demo", aiMentions: 55, seoVisibility: 78, contentQuality: 80, trendScore: "→", visibilityScore: 71 },
        ],
    },

    {
        title: "Luotettavat autohuollot suomess?",
        rankings: [
            { name: "AutoSky", aiMentions: 85, seoVisibility: 92, contentQuality: 88, trendScore: "↑", visibilityScore: 88 },
            { name: "Autoklinikka", aiMentions: 80, seoVisibility: 90, contentQuality: 85, trendScore: "→", visibilityScore: 85 },
            { name: "AH Auto", aiMentions: 75, seoVisibility: 88, contentQuality: 82, trendScore: "↓", visibilityScore: 82 },
            { name: "InCar Helsinki", aiMentions: 70, seoVisibility: 85, contentQuality: 80, trendScore: "→", visibilityScore: 78 },
            { name: "Delta-Auto", aiMentions: 65, seoVisibility: 80, contentQuality: 75, trendScore: "↓", visibilityScore: 73 },
        ],
    },

    {
        title: "Suosituimmat verkkokaupat kodin sisustukseen?",
        rankings: [
            { name: "Kodin1", aiMentions: 90, seoVisibility: 95, contentQuality: 92, trendScore: "↑", visibilityScore: 92 },
            { name: "Finnish Design Shop", aiMentions: 85, seoVisibility: 93, contentQuality: 90, trendScore: "→", visibilityScore: 89 },
            { name: "Jotex", aiMentions: 80, seoVisibility: 88, contentQuality: 85, trendScore: "↓", visibilityScore: 82 },
            { name: "Hyvän Tuulen Puoti", aiMentions: 75, seoVisibility: 85, contentQuality: 80, trendScore: "→", visibilityScore: 78 },
            { name: "Nordic Nest", aiMentions: 70, seoVisibility: 80, contentQuality: 75, trendScore: "↓", visibilityScore: 73 },
        ],
    },
];


export default function RankTable() {
    const [selectedQuestion, setSelectedQuestion] = useState<Question>(questions[0]);
    const [showAll, setShowAll] = useState(false);

    const visibleRankings = showAll ? selectedQuestion.rankings : selectedQuestion.rankings.slice(0, 5);

    return (
        <div className="max-w-6xl mx-auto p-2">
            {/* Kysymys-tabit */}
            <div className="flex flex-wrap gap-4 mb-6 justify-center">
                {questions.map((question, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedQuestion(question)}
                        className={`px-4 py-2 rounded-full border ${selectedQuestion.title === question.title
                            ? "bg-primary text-white border-primary"
                            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                        } transition`}
                    >
                        {question.title}
                    </button>
                ))}
            </div>

            {/* Table-näkymä */}
            <div className="bg-background-light rounded-lg shadow overflow-x-auto p-4">
                <table className="w-full table-auto border-collapse text-center">
                    <thead>
                        <tr className="border-b bg-gray-100">
                            <th className="p-2">Yritys</th>
                            <th className="p-2">Trend</th>
                            <th className="p-2">AI Mentions</th>
                            <th className="p-2">SEO Visibility</th>
                            <th className="p-2">Content Quality</th>
                            <th className="p-2">Visibility Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {selectedQuestion.rankings.map((item, idx) => (
                            <tr key={idx} className="border-b hover:bg-gray-50">
                                <td className="p-2 font-medium">{item.name}</td>
                                <td className="p-2 text-lg">{item.trendScore}</td>
                                <td className="p-2">{item.aiMentions}</td>
                                <td className="p-2">{item.seoVisibility}</td>
                                <td className="p-2">{item.contentQuality}</td>
                                <td className="p-2">{item.visibilityScore}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}