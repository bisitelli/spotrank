// components/Header.tsx

import Link from 'next/link';
import { AiOutlineRocket } from 'react-icons/ai'; // Using a generic icon for the logo

export default function Header() {
    const navItems = ['Product', 'Solutions', 'Resources', 'Pricing'];

    return (
        <header className="border-b border-gray-100 shadow-sm sticky top-0 z-50 bg-white">
            <div className="container mx-auto px-4 flex justify-between items-center h-20">
                {/* Logo */}
                <Link href="/" className="flex items-center text-xl font-bold text-gray-900">
                    {/* A simple placeholder logo using text and an icon */}
                    <AiOutlineRocket className="text-blue-600 w-6 h-6 mr-1" />
                    SpotRank
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8 text-gray-600 font-medium">
                    {navItems.map((item) => (
                        <Link key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-600 transition duration-150">
                            {item}
                        </Link>
                    ))}
                </nav>

                {/* Get Started Button */}
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full transition duration-150 ease-in-out shadow-md">
                    Get Started
                </button>
            </div>
        </header>
    );
}