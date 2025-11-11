// components/Sidebar.tsx
"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
    Home,
    BarChart2,
    Smile,
    List,
    Lightbulb,
    Settings,
} from "lucide-react";
import Link from "next/link";

const navItems = [
    { name: "Overview", href: "/dashboard", icon: Home },
    { name: "Visibility Metrics", href: "/dashboard/metrics", icon: BarChart2 },
    { name: "Sentiment Analysis", href: "/dashboard/sentiment", icon: Smile },
    { name: "Prompt Tracking", href: "/dashboard/prompts", icon: List },
    { name: "Recommendations", href: "/dashboard/recommendations", icon: Lightbulb },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="h-screen w-64 bg-white border-r border-[#dbe2e6] flex flex-col fixed left-0 top-0">
            {/* Logo */}
            <div className="px-6 py-6 flex items-center gap-2">
                <div className="text-primary size-7">
                    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z" fill="currentColor"></path>
                    </svg>
                </div>
                <h2 className="text-xl font-bold">SpotRank</h2>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4">
                <ul className="space-y-1">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;

                        return (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                                        isActive
                                            ? "bg-[#e9f7fd] text-[#25aff4]"
                                            : "text-[#607c8a] hover:bg-[#f5f7f8] hover:text-[#111618]"
                                    )}
                                >
                                    <Icon size={18} />
                                    {item.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            {/* User section */}
            <div className="px-4 py-4 border-t border-[#dbe2e6]">
                <div className="flex items-center gap-3">
                    {/* Profiilikuva */}
                    <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=SpotUser"
                        alt="User avatar"
                        className="w-8 h-8 rounded-full border border-[#dbe2e6]"
                    />

                    {/* Käyttäjätiedot */}
                    <div className="flex flex-col">
                        <span className="text-sm font-medium text-[#111618]">Testi Oy</span>
                    </div>

                    {/* Valikkoikoni (asetukset tms.) */}
                    <Settings
                        size={18}
                        className="ml-auto text-[#607c8a] hover:text-[#25aff4] cursor-pointer transition"
                    />
                </div>
            </div>

        </aside>
    );
}
