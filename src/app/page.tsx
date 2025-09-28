// app/page.tsx

import { AiOutlineSearch, AiOutlineBarChart, AiOutlineSafety } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';

// Components
import Header from '@/app/components/Header';
import FeatureCard from '@/app/components/FeatureCard';
import ExplainerVideo from '@/app/components/ExplainerVideo';

// Define the structure for feature data
interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: AiOutlineSearch,
    title: 'AI Visibility Tracking',
    description: 'Monitor your presence across various AI platforms in real-time.',
  },
  {
    icon: AiOutlineBarChart,
    title: 'Performance Analytics',
    description: 'Gain insights into your AI performance with detailed analytics and reporting.',
  },
  {
    icon: AiOutlineSafety,
    title: 'Security & Compliance',
    description: 'Ensure your AI initiatives are secure and compliant with industry standards.',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-24">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Boost Your AI Visibility
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Unlock the power of AI to drive growth. SpotRank helps you track and
            improve your visibility across AI platforms, ensuring your business stands out.
          </p>
          <div className="flex justify-center">
            <div className="flex w-full max-w-xl shadow-lg rounded-lg overflow-hidden">
              <div className="flex items-center bg-white p-3 border-y border-l rounded-l-lg border-gray-200">
                <AiOutlineSearch className="text-gray-400 w-5 h-5 ml-2" />
                <input
                  type="text"
                  placeholder="Enter your website"
                  className="w-full px-4 py-2 text-gray-700 focus:outline-none"
                />
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-4 rounded-r-lg transition duration-150 ease-in-out whitespace-nowrap">
                Test Visibility
              </button>
            </div>
          </div>
        </section>

        <hr className="my-16 border-gray-100" />

        {/* Key Features Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-3">
            Key Features
          </h2>
          <p className="text-lg text-gray-500 text-center mb-12">
            SpotRank offers a comprehensive suite of tools to help you succeed in the AI landscape.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </section>

        <hr className="my-16 border-gray-100" />

        {/* Explainer Video Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
            Watch Our Explainer Video
          </h2>
          <ExplainerVideo />
        </section>
      </main>

      {/* Optional: Add a Footer component here */}
    </div>
  );
}