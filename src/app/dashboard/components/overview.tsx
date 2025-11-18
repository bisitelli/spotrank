'use client';

import React, { ReactNode } from 'react';
import {
    MousePointerClick,
    Database,
    Eye,
    ScrollText,
    Lightbulb,
    ShieldCheck,
} from "lucide-react";


// Simuloitu data
const overviewData = {
    globalScore: 70,
    // ... muu data
    agentScores: [
        { title: 'Click-Path', score: 45, insight: 'Insight: Buying requires 8 clicks - Reduce to 4.', icon: MousePointerClick },
        { title: 'Data Health', score: 78, insight: 'Insight: Schema is well-structured and crawlable.', icon: Database },
        { title: 'Content Clarity', score: 62, insight: 'Insight: Content readability is good, but could be more concise.', icon: ScrollText },
        { title: 'Technical Readability', score: 85, insight: 'Insight: No major technical blockers', icon: Eye },
        { title: 'Recommendation Fit', score: 51, insight: 'Insight: Product descriptions lack detail', icon: Lightbulb },
        { title: 'Agent Trust', score: 92, insight: 'Insight: Site is trusted and cited by', icon: ShieldCheck },
    ],
};

// cardprop
interface CardProps {
    children: ReactNode;
    className?: string;
}

// agentscoreprop
interface AgentScoreItemProps {
    title: string;
    score: number;
    insight: string;
    icon: React.ComponentType<any>
}

// Card-komponentti
const Card: React.FC<CardProps> = ({ children, className = '' }) => (
    <div className={`bg-white p-4 rounded-lg shadow-sm border border-gray-200 ${className}`}>
        {children}
    </div>
);

// GlobalReadinessCard-komponentti
const GlobalReadinessCard: React.FC<{ score: number }> = ({ score }) => (
    <Card className="flex flex-col items-center justify-center col-span-1 lg:col-span-1">
        <h3 className="text-xl font-semibold mb-6 text-gray-800">Global AI Readiness Score</h3>
        <div className="relative flex items-center justify-center w-32 h-32 mb-4">
            {/* Tähän SVG/kaavio */}
            <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-blue-600">
                {score}
                <span className="text-xl font-normal text-gray-500">/100</span>
            </div>
            <div className={`w-full h-full rounded-full border-8 border-gray-100`}>
                {/* Simuloitu ympyräkuvaaja */}
                <div className="w-full h-full rounded-full border-8 border-blue-500/50" style={{
                    clipPath: `inset(0 0 0 50%)`,
                    transform: `rotate(${score * 3.6}deg)`
                }}></div>
            </div>
        </div>
        <p className="mt-2 text-center text-sm text-gray-500">
            Your website is <span className='font-bold'>{score}%</span> AI-ready.<br />Aggregate of all AI agent evaluations.
        </p>
    </Card>
);

// ReadinessTrendCard-komponentti
const ReadinessTrendCard = () => (
    <Card className="col-span-2 lg:col-span-2">
        <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-gray-800">Readiness Over Time</h3>
            <div className="flex space-x-1 text-sm font-medium text-gray-600 border border-gray-300 rounded-md p-1 bg-gray-50">
                {['30D', '90D', '1Y'].map(time => (
                    <button key={time} className={`px-2 py-1 rounded-md ${time === '30D' ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}>
                        {time}
                    </button>
                ))}
            </div>
        </div>
        <p className="text-sm text-gray-500 mb-2">Score trend for the last 30 days.</p>
        <div className="h-48 w-full">

        </div>
    </Card>
);

// 3. KORJATTU: AgentScoreItem-komponentti käyttää AgentScoreItemProps-tyypitystä.
const AgentScoreItem = ({ title, score, insight, icon: IconComponent }: AgentScoreItemProps) => {

    let colorClass = 'text-gray-600';
    let bgClass = 'bg-gray-100';

    switch (title) {
        case 'Click-Path':
            colorClass = 'text-blue-600';
            bgClass = 'bg-blue-50';
            break;
        case 'Data Health':
            colorClass = 'text-emerald-600';
            bgClass = 'bg-emerald-50';
            break;
        case 'Content Clarity':
            colorClass = 'text-purple-600';
            bgClass = 'bg-purple-50';
            break;
        case 'Technical Readability':
            colorClass = 'text-amber-600';
            bgClass = 'bg-amber-50';
            break;
        case 'Recommendation Fit':
            colorClass = 'text-indigo-600';
            bgClass = 'bg-indigo-50';
            break;
        case 'Agent Trust':
            colorClass = 'text-rose-600';
            bgClass = 'bg-rose-50';
            break;
        default:
            break;
    }

    return (
        <Card className="flex flex-col col-span-3 sm:col-span-1 hover:border-blue-200 cursor-default">
            {/* YLÄRIVI: Ikoni + Otsikko (vasen) ja Pisteet (oikea) */}
            <div className="flex items-center mb-4">

                {/* Vasen puoli: Ikoni ja Otsikko */}
                <div className="flex items-center space-x-1">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-xl ${bgClass} ${colorClass}`}>
                        <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-m font-semibold text-gray-800 leading-tight">{title}</span>
                </div>

                {/* Oikea puoli: Pisteet (ml-auto työntää tämän oikeaan reunaan) */}
                <div className="ml-auto text-2xl font-bold text-gray-900">
                    {score}
                </div>
            </div>

            {/* ALARIVI: Insight */}
            <p className="text-sm text-gray-500 leading-relaxed">
                {insight}
            </p>
        </Card>
    );
};

export default function Overview() {
    return (
        <div className="flex-1">
            {/* Otsikko ja yläpaneeli (kellokuvake) */}
            <div className="flex justify-between items-start mb-2">
                <h1 className="text-3xl font-bold text-gray-900">Overview</h1>
                {/* Kellokuvake */}
                <button className="text-gray-400 hover:text-gray-600 focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                </button>
            </div>

            {/* Pääsisältö alkaa */}
            <main className="space-y-4">
                {/* YLEMPI RIVI (Global Score + Readiness Trend) */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <GlobalReadinessCard score={overviewData.globalScore} />
                    <ReadinessTrendCard />
                </div>

                {/* ALARIVI (Agent Scores) */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Agent Scores</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {overviewData.agentScores.map((agent) => (
                            <AgentScoreItem key={agent.title} {...agent} />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}