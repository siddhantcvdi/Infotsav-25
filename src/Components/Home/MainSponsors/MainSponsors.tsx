import React, { useEffect, useRef, useState } from 'react';
import HangingSponsor from '../../ui/HangingSponsor';
import { homePageMobileViewSponsers } from '@/Constants/Sponsers/PastSponsors';

const MainSponsors: React.FC = () => {
    const topPathRef = useRef<SVGPathElement>(null);
    const topSvgRef = useRef<SVGSVGElement>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [singleRopePositions, setSingleRopePositions] = useState<
        { x: number; y: number }[]
    >([]);

    const DESKTOP_SPONSOR_COUNT = 7;
    const VIEWBOX_WIDTH = 1000;
    const VIEWBOX_HEIGHT = 500;

    const checkMobile = () => {
        setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    const updateDesktopPositions = () => {
        const topPath = topPathRef.current;
        const topSvg = topSvgRef.current;
        if (!topPath || !topSvg) return;

        const rect = topSvg.getBoundingClientRect();
        const pathLength = topPath.getTotalLength();
        const hangingOffset = rect.height;
        const margin = 0.07;

        const newPositions = Array.from(
            { length: DESKTOP_SPONSOR_COUNT },
            (_, i) => {
                const pct =
                    margin +
                    (i / (DESKTOP_SPONSOR_COUNT - 1)) * (1 - 2 * margin);
                const point = topPath.getPointAtLength(pathLength * pct);

                const x = (point.x / VIEWBOX_WIDTH) * rect.width;
                const y =
                    (point.y / VIEWBOX_HEIGHT) * rect.height + hangingOffset;

                return { x, y };
            }
        );

        setSingleRopePositions(newPositions);
    };

    const updatePositions = () => {
        if (!isMobile) {
            updateDesktopPositions();
        }
    };

    useEffect(() => {
        checkMobile();
        const handleResize = () => checkMobile();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const timer = setTimeout(updatePositions, 100);
        window.addEventListener('resize', updatePositions);
        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', updatePositions);
        };
    }, [isMobile]);

    return (
        <section className="relative w-full h-screen max-h-[800px] bg-gradient-to-b from-black to-[#090928] text-white overflow-hidden">
            {/* Stars Background */}
            <img
                src="/assets/Images/Home/Sponsers/stars.png"
                alt="Stars Background"
                className="opacity-20 inset-0 w-full h-full object-cove absolute z[-1]"
            />

            <h2 className="text-7xl max-md:text-5xl font-cattedrale text-center pt-12 relative z-10">
                SPONSORS
            </h2>

            {/* Eyes - Desktop Only */}
            <div className="hidden md:flex justify-center gap-12 mt-10 relative z-10">
                <div className="w-[13%] max-sm:w-[30%] max-md:w-[20%] aspect-square  bg-white/10 border-white/20 border-[3px] rounded-full" />
                <div className="w-[13%] max-sm:w-[30%] max-md:w-[20%] aspect-square  bg-white/10 border-white/20 border-[3px] rounded-full" />
            </div>

            {/* Mobile View - Simple Grid */}
            {isMobile && (
                <div className="flex flex-col items-center mt-16 px-8 relative z-10">
                    {/* Create rows of 3 sponsors each */}
                    {Array.from(
                        {
                            length: Math.ceil(
                                homePageMobileViewSponsers.length / 3
                            ),
                        },
                        (_, rowIndex) => (
                            <div
                                key={`row-${rowIndex}`}
                                className="flex justify-center gap-8 mb-8">
                                {homePageMobileViewSponsers
                                    .slice(rowIndex * 3, rowIndex * 3 + 3)
                                    .map((sponsor, index) => (
                                        <HangingSponsor
                                            key={`mobile-${rowIndex}-${index}`}
                                            imageURL={sponsor.src}
                                            // alt={sponsor.alt}
                                        />
                                    ))}
                            </div>
                        )
                    )}
                </div>
            )}

            {/* Desktop View - Single Rope */}
            {!isMobile && (
                <>
                    <svg
                        ref={topSvgRef}
                        viewBox="0 0 1000 500"
                        preserveAspectRatio="none"
                        className="absolute top-[35%] left-0 w-full h-[35%] z-0">
                        <path
                            ref={topPathRef}
                            d="M 0 150 Q 500 700 1000 150"
                            stroke="white"
                            strokeWidth={2}
                            fill="transparent"
                        />
                    </svg>

                    {singleRopePositions.map((pos, idx) => (
                        <div
                            key={`desktop-${idx}`}
                            className="absolute flex flex-col w-full items-center z-10"
                            style={{
                                left: `${pos.x}px`,
                                top: `${pos.y}px`,
                                transform: 'translateX(-50%)',
                            }}>
                            <div className="w-0.5 h-8 bg-white" />
                            <HangingSponsor
                                imageURL={homePageMobileViewSponsers[idx]?.src}
                                // alt={homePageMobileViewSponsers[idx]?.alt}
                            />
                        </div>
                    ))}
                </>
            )}
        </section>
    );
};

export default MainSponsors;
