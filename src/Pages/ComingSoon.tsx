import React from 'react';
import { useNavigate } from 'react-router-dom';

// Assuming you placed your three assets in `public/assets`:
// - /assets/CommingSoonBG.png
// - /assets/CommingSoonStrip.png
// - /assets/InfotsavStrip.png

const ComingSoon: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="fixed inset-0 w-screen h-screen overflow-hidden bg-black">
            {/* Desktop Image */}
            <img
                src="/assets/Images/ComingSoon/ComingSoonDesktop.svg"
                className="hidden md:block w-full h-full object-cover"
                alt="Coming Soon Desktop"
            />

            {/* Mobile Image */}
            <img
                src="/assets/Images/ComingSoon/ComingSoonPhone.svg"
                className="block md:hidden w-full h-full object-cover"
                alt="Coming Soon Mobile"
            />

            {/* Back to Home Button */}
            <button
                onClick={() => navigate('/')}
                className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20 bg-black/30 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 hover:bg-black/50 transition-all duration-300 group flex items-center gap-2"
                aria-label="Back to Home">
                <svg
                    className="w-5 h-5 text-white group-hover:text-gray-200 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
                <span className="text-white text-sm font-medium group-hover:text-gray-200 transition-colors">
                    Back to Home
                </span>
            </button>
        </div>
    );
};

export default ComingSoon;
