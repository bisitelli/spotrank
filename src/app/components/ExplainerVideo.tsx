// components/ExplainerVideo.tsx

import { AiFillPlayCircle } from 'react-icons/ai';

export default function ExplainerVideo() {
    return (
        <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
            <div
                className="relative w-full aspect-video bg-gray-300 flex items-center justify-center bg-cover bg-center"
                // Placeholder for the image seen in the screenshot. Replace with a real image URL or local asset.
                style={{
                    backgroundImage: 'url(/images/video-placeholder.jpg)', // You would need to add an image at public/images/video-placeholder.jpg
                    minHeight: '400px', // Ensures a good minimum size
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex items-center justify-center">
                    {/* Play Button Icon */}
                    <button
                        aria-label="Play video"
                        className="text-white hover:text-blue-400 transition duration-200"
                    >
                        <AiFillPlayCircle className="w-20 h-20 opacity-90" />
                    </button>
                </div>
            </div>
        </div>
    );
}