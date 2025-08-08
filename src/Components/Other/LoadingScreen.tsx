import React, { useState, useEffect } from 'react';
import {
    preloadCriticalAssets,
    getAllImages,
    ASSET_MANIFEST,
} from '@/lib/assetPreloader';

interface LoadingScreenProps {
    onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
    const [progress, setProgress] = useState(0);
    const [loadingText, setLoadingText] = useState('Initializing...');

    useEffect(() => {
        const totalAssets = getAllImages().length + ASSET_MANIFEST.fonts.length;
        let currentProgress = 0;

        const updateProgress = (increment: number = 1) => {
            currentProgress += increment;
            const progressPercent = Math.min(
                Math.round((currentProgress / totalAssets) * 100),
                100
            );
            setProgress(progressPercent);

            // Update loading text based on progress
            if (progressPercent < 20) {
                setLoadingText('Entering the Upside Down...');
            } else if (progressPercent < 40) {
                setLoadingText('Preparing experience...');
            } else if (progressPercent < 60) {
                setLoadingText('Configuring interface...');
            } else if (progressPercent < 80) {
                setLoadingText('Optimizing performance...');
            } else if (progressPercent < 95) {
                setLoadingText('Almost ready...');
            } else {
                setLoadingText('Welcome to Infotsav 25!');
            }
        };

        // Start preloading
        preloadCriticalAssets()
            .then(([images, fonts]) => {
                console.log(
                    `✅ Preloaded ${images.length} images and ${fonts.length} fonts`
                );

                // Ensure we reach 100%
                const remaining = totalAssets - currentProgress;
                if (remaining > 0) {
                    updateProgress(remaining);
                }

                // Small delay to show completion message
                setTimeout(() => {
                    onLoadingComplete();
                }, 1000);
            })
            .catch((error) => {
                console.warn('⚠️ Some assets failed to preload:', error);
                // Continue anyway after a delay
                setTimeout(() => {
                    setProgress(100);
                    setLoadingText('Ready!');
                    setTimeout(onLoadingComplete, 500);
                }, 1000);
            });

        // Simulate progress for individual asset loading
        const progressInterval = setInterval(() => {
            if (currentProgress < totalAssets * 0.9) {
                updateProgress(0.5); // Slower increment for smooth animation
            }
        }, 100);

        return () => {
            clearInterval(progressInterval);
        };
    }, [onLoadingComplete]);

    return (
        <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center overflow-hidden">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-black to-red-800/20 animate-pulse"></div>

            {/* Particle effect background */}
            <div className="absolute inset-0 opacity-10">
                {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-red-400 rounded-full animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 4}s`,
                        }}></div>
                ))}
            </div>

            {/* Main content */}
            <div className="relative z-10 text-center max-w-md mx-auto px-4">
                {/* Logo with glow effect */}
                <div className="mb-8 relative">
                    <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-full"></div>
                    <img
                        src="/assets/Images/Infotsav25.svg"
                        alt="Infotsav 25"
                        className="relative w-64 h-auto mx-auto opacity-90 drop-shadow-2xl"
                        onLoad={() => console.log('Logo loaded')}
                    />
                </div>

                {/* Loading text with typewriter effect */}
                <h2 className="text-white text-xl md:text-2xl font-bold mb-8 tracking-wider font-stranger">
                    {loadingText}
                </h2>

                {/* Progress bar container */}
                <div className="w-full max-w-xs mx-auto mb-4 relative">
                    {/* Background glow */}
                    <div className="absolute inset-0 bg-red-500/20 blur-sm rounded-full"></div>

                    {/* Progress bar background */}
                    <div className="relative bg-gray-800/50 rounded-full h-3 overflow-hidden border border-red-900/50">
                        {/* Progress fill with animation */}
                        <div
                            className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 h-full transition-all duration-300 ease-out relative overflow-hidden"
                            style={{ width: `${progress}%` }}>
                            {/* Moving shimmer effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                        </div>
                    </div>
                </div>

                {/* Progress percentage */}
                <p className="text-red-400 text-lg font-bold font-mono mb-8">
                    {progress}%
                </p>

                {/* Loading dots animation */}
                <div className="flex justify-center space-x-3">
                    {[...Array(3)].map((_, i) => (
                        <div
                            key={i}
                            className="w-3 h-3 bg-red-500 rounded-full animate-bounce"
                            style={{
                                animationDelay: `${i * 0.2}s`,
                                animationDuration: '1s',
                            }}></div>
                    ))}
                </div>

                {/* Stranger Things style flicker */}
                <div className="mt-8 text-red-400 text-xs opacity-60 font-mono animate-pulse">
                    Connection established...
                </div>
            </div>

            {/* Bottom ambient lighting */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-red-900/30 to-transparent"></div>
        </div>
    );
};

export default LoadingScreen;
