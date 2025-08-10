import React, { useState, useEffect } from 'react';
import { getAllImages, ASSET_MANIFEST } from '@/lib/assetPreloader';
import { fontManager } from '@/lib/fontManager';

interface LoadingScreenProps {
    onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
    const [progress, setProgress] = useState(0);
    // const [loadingText, setLoadingText] = useState('Initializing...');

    useEffect(() => {
        const totalAssets = getAllImages().length + ASSET_MANIFEST.fonts.length;
        let currentProgress = 0;
        let loadedImages = 0;
        let loadedFonts = 0;

        const updateProgress = (type: 'image' | 'font') => {
            if (type === 'image') loadedImages++;
            if (type === 'font') loadedFonts++;

            currentProgress = loadedImages + loadedFonts;
            const progressPercent = Math.min(
                Math.round((currentProgress / totalAssets) * 100),
                100
            );
            setProgress(progressPercent);

            // if (progressPercent < 25) {
            //     setLoadingText('Entering the Upside Down...');
            // } else if (progressPercent < 50) {
            //     setLoadingText('Loading fonts...');
            // } else if (progressPercent < 75) {
            //     setLoadingText('Preparing assets...');
            // } else if (progressPercent < 95) {
            //     setLoadingText('Optimizing experience...');
            // } else {
            //     setLoadingText('Welcome to Infotsav 25!');
            // }
        };

        const loadFonts = async () => {
            try {
                // Use FontManager for better font handling
                await fontManager.preloadWebsiteFonts();

                // Update progress for each font
                ASSET_MANIFEST.fonts.forEach(() => {
                    updateProgress('font');
                });

                console.log('🎭 All fonts preloaded successfully!');
            } catch (error) {
                console.warn('⚠️ Some fonts failed to load:', error);
                // Still update progress even if fonts fail
                ASSET_MANIFEST.fonts.forEach(() => {
                    updateProgress('font');
                });
            }
        };

        // Preload images
        const loadImages = async () => {
            const imagePromises = getAllImages().map((src) => {
                return new Promise<void>((resolve) => {
                    const img = new Image();
                    img.onload = () => {
                        updateProgress('image');
                        resolve();
                    };
                    img.onerror = () => {
                        updateProgress('image'); // Still count as loaded
                        resolve();
                    };
                    img.src = src;
                });
            });

            await Promise.all(imagePromises);
            console.log(`✅ All ${loadedImages} images preloaded!`);
        };

        // Load fonts and images in parallel
        Promise.all([loadFonts(), loadImages()])
            .then(() => {
                console.log(
                    `🚀 All assets loaded: ${loadedImages} images, ${loadedFonts} fonts`
                );

                // Ensure we reach 100%
                if (currentProgress < totalAssets) {
                    setProgress(100);
                    // setLoadingText('Welcome to Infotsav 25!');
                }

                // Small delay to show completion message
                setTimeout(() => {
                    onLoadingComplete();
                }, 1200);
            })
            .catch((error) => {
                console.warn('⚠️ Some assets failed to preload:', error);
                // Continue anyway after a delay
                setTimeout(() => {
                    setProgress(100);
                    // setLoadingText('Ready!');
                    setTimeout(onLoadingComplete, 800);
                }, 1000);
            });

        return () => {
            // Cleanup if component unmounts
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
                {/* Loading text with typewriter effect
                <h2 className="text-white text-xl md:text-2xl font-bold mb-8 tracking-wider font-stranger">
                    {loadingText}
                </h2> */}
                {/* Progress bar container */}
                <div className="w-full max-w-xs mx-auto mb-4 relative">
                    {/* Background glow */}
                    <div className="absolute inset-0 bg-red-500/20 blur-sm rounded-full"></div>

                    {/* Progress bar background */}
                    {/* <div className="relative bg-gray-800/50 rounded-full h-3 overflow-hidden border border-red-900/50">
                        Progress fill with animation 
                        <div
                            className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 h-full transition-all duration-300 ease-out relative overflow-hidden"
                            style={{ width: `${progress}%` }}>
                            Moving shimmer effect 
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                        </div>
                    </div> */}
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
