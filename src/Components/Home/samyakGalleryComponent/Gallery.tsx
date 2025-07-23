import React, { useState } from 'react';
import { LayoutGrid } from '../../ui/layout-grid';
import {
    Calendar,
    Users,
    Trophy,
    Zap,
    ChevronLeft,
    ChevronRight,
    Music,
    Star,
} from 'lucide-react';

const Gallery = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const allCards = [
        {
            id: 1,
            content: (
                <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">Pronite 1</h3>
                    <p className="text-sm opacity-80">
                        Cultural night celebration
                    </p>
                    <div className="flex items-center mt-2">
                        <Music className="w-4 h-4 mr-2" />
                        <span className="text-xs">Cultural</span>
                    </div>
                </div>
            ),
            className: 'col-span-2 row-span-2',
            thumbnail: '/src/assets/EventImages/Pronite_1.JPG',
        },
        {
            id: 2,
            content: (
                <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">Pinnacle</h3>
                    <p className="text-sm opacity-80">
                        Ultimate coding showdown
                    </p>
                    <div className="flex items-center mt-2">
                        <Trophy className="w-4 h-4 mr-2" />
                        <span className="text-xs">Flagship</span>
                    </div>
                </div>
            ),
            className: 'col-span-1 row-span-1',
            thumbnail: '/src/assets/EventImages/Pinnacle.JPG',
        },

        {
            id: 3,
            content: (
                <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">Code Rush</h3>
                    <p className="text-sm opacity-80">
                        Fast-paced coding competition
                    </p>
                    <div className="flex items-center mt-2">
                        <Zap className="w-4 h-4 mr-2" />
                        <span className="text-xs">Competition</span>
                    </div>
                </div>
            ),
            className: 'col-span-1 row-span-1',
            thumbnail: '/src/assets/EventImages/Code_rush.JPG',
        },
        {
            id: 4,
            content: (
                <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">RoboWars</h3>
                    <p className="text-sm opacity-80">Epic robot battles</p>
                    <div className="flex items-center mt-2">
                        <Trophy className="w-4 h-4 mr-2" />
                        <span className="text-xs">Robotics</span>
                    </div>
                </div>
            ),
            className: 'col-span-1 row-span-1',
            thumbnail: '/src/assets/EventImages/Robowars.JPG',
        },
        {
            id: 5,
            content: (
                <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">Pronite 2</h3>
                    <p className="text-sm opacity-80">Musical extravaganza</p>
                    <div className="flex items-center mt-2">
                        <Music className="w-4 h-4 mr-2" />
                        <span className="text-xs">Cultural</span>
                    </div>
                </div>
            ),
            className: 'col-span-1 row-span-2',
            thumbnail: '/src/assets/EventImages/Pronite_2.JPG',
        },
        {
            id: 6,
            content: (
                <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">Hackatron</h3>
                    <p className="text-sm opacity-80">
                        24-hour coding marathon
                    </p>
                    <div className="flex items-center mt-2">
                        <Trophy className="w-4 h-4 mr-2" />
                        <span className="text-xs">Hackathon</span>
                    </div>
                </div>
            ),
            className: 'col-span-1 row-span-2',
            thumbnail: '/src/assets/EventImages/Hackatron.JPG',
        },

        // Page 2 - Mixed Events
        {
            id: 7,
            content: (
                <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">RoboMaze</h3>
                    <p className="text-sm opacity-80">
                        Autonomous robot navigation
                    </p>
                    <div className="flex items-center mt-2">
                        <Zap className="w-4 h-4 mr-2" />
                        <span className="text-xs">Robotics</span>
                    </div>
                </div>
            ),
            className: 'col-span-2 row-span-2',
            thumbnail: '/src/assets/EventImages/RoboMaze.JPG',
        },
        {
            id: 8,
            content: (
                <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">Pronite 3</h3>
                    <p className="text-sm opacity-80">Dance and performance</p>
                    <div className="flex items-center mt-2">
                        <Music className="w-4 h-4 mr-2" />
                        <span className="text-xs">Cultural</span>
                    </div>
                </div>
            ),
            className: 'col-span-1 row-span-1',
            thumbnail: '/src/assets/EventImages/Pronite_3.JPG',
        },
        {
            id: 9,
            content: (
                <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">
                        Closing Ceremony
                    </h3>
                    <p className="text-sm opacity-80">
                        Grand finale celebration
                    </p>
                    <div className="flex items-center mt-2">
                        <Users className="w-4 h-4 mr-2" />
                        <span className="text-xs">Ceremony</span>
                    </div>
                </div>
            ),
            className: 'col-span-1 row-span-2',
            thumbnail: '/src/assets/EventImages/Closing_ceremony.JPG',
        },
        {
            id: 10,
            content: (
                <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">Pronite 4</h3>
                    <p className="text-sm opacity-80">Final cultural night</p>
                    <div className="flex items-center mt-2">
                        <Music className="w-4 h-4 mr-2" />
                        <span className="text-xs">Cultural</span>
                    </div>
                </div>
            ),
            className: 'col-span-2 row-span-1',
            thumbnail: '/src/assets/EventImages/Pronite_4.JPG',
            imagePosition: 'object-bottom',
        },
    ];

    // Split cards into two pages (5 cards per page)
    const page1Cards = allCards.slice(0, 5);
    const page2Cards = allCards.slice(5, 10);

    const pages = [page1Cards, page2Cards];

    const nextPage = () => {
        setCurrentPage((prev) => (prev + 1) % pages.length);
    };

    const prevPage = () => {
        setCurrentPage((prev) => (prev - 1 + pages.length) % pages.length);
    };

    return (
        <div className="relative w-full h-screen">
            <div className="text-center pt-16 pb-8">
                <h2 className="text-4xl font-bold text-white mb-4">
                    Event Gallery
                </h2>
                <p className="text-gray-300 max-w-2xl mx-auto">
                    Explore our exciting events and competitions through this
                    interactive gallery
                </p>
            </div>

            <div className="relative w-full h-full overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentPage * 100}%)` }}>
                    {pages.map((pageCards, pageIndex) => (
                        <div
                            key={pageIndex}
                            className="w-full flex-shrink-0 h-full">
                            <LayoutGrid cards={pageCards} />
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={prevPage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
                    aria-label="Previous page">
                    <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                    onClick={nextPage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
                    aria-label="Next page">
                    <ChevronRight className="w-6 h-6" />
                </button>

                {/* Page Indicators */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
                    {pages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-200 ${
                                currentPage === index
                                    ? 'bg-white scale-125'
                                    : 'bg-white/50 hover:bg-white/70'
                            }`}
                            aria-label={`Go to page ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
