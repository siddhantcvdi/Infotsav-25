import React, { useState, useEffect, useRef } from "react";

const slides = [
  {
    id: 1,
    title: "Hackathon",
    description: "A 24-hour coding challenge.",
    leftColor: "bg-green-800",
    rightColor: "bg-red-800",
    domain: "Technical Events",
    cardIdx: 0,
  },
  {
    id: 2,
    title: "Valorant Tournament",
    description: "Compete in a 5v5 tactical shooter.",
    leftColor: "bg-blue-800",
    rightColor: "bg-yellow-800",
    domain: "Gaming Events",
    cardIdx: 0,
  },
  {
    id: 3,
    title: "Photography Contest",
    description: "Capture and share your best shots.",
    leftColor: "bg-purple-800",
    rightColor: "bg-pink-800",
    domain: "Creative Events",
    cardIdx: 0,
  },
];

// Create a new array with the first slide cloned at the end
const carouselSlides = [...slides, slides[0]];

interface FeaturedEventsProps {
  setDomainIndex: (domainIdx: number, cardIdx: number) => void;
}

const FeaturedEvents: React.FC<FeaturedEventsProps> = ({ setDomainIndex }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true); // State to control transition
  const slideInterval = useRef<NodeJS.Timeout | null>(null);

  const startAutoSlide = () => {
    slideInterval.current = setInterval(() => {
      // Just increment the index. The useEffect will handle the loop.
      setCurrentIndex((prev) => prev + 1);
    }, 5000);
  };

  const stopAutoSlide = () => {
    if (slideInterval.current) clearInterval(slideInterval.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  // This effect handles the seamless loop logic
  useEffect(() => {
    // When we reach the cloned slide at the end
    if (currentIndex === slides.length) {
      // Wait for the transition to finish (700ms)
      const timer = setTimeout(() => {
        setIsTransitioning(false); // Disable transition
        setCurrentIndex(0); // Instantly jump back to the first slide
      }, 700); // This duration must match the CSS transition duration

      return () => clearTimeout(timer);
    }

    // After jumping back to the first slide, re-enable the transition
    if (currentIndex === 0 && !isTransitioning) {
      // A tiny timeout allows the browser to process the index change
      // before re-enabling the transition.
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, isTransitioning]);

  // Scroll to the corresponding card in the domain carousel and set focus
  const handleSlideClick = (slide: (typeof slides)[0]) => {
    // Find domain index
    const domainMap = ["Technical Events", "Gaming Events", "Creative Events"];
    const domainIdx = domainMap.findIndex((d) => d === slide.domain);
    if (domainIdx !== -1) {
      setDomainIndex(domainIdx, slide.cardIdx);
      setTimeout(() => {
        const cardId = `${slide.domain
          .replace(/\s+/g, "-")
          .toLowerCase()}-card-${slide.cardIdx}`;
        const cardElement = document.getElementById(cardId);
        if (cardElement) {
          cardElement.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 100); // Wait for carousel to update
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center space-y-[3vw]">
      <h2 className="w-full font-cattedrale text-[6vw] text-center">
        Featured Events
      </h2>

      <div className="relative w-full h-[30vw] min-h-[250px] overflow-hidden rounded-md">
        <div
          className={`flex h-full ${
            isTransitioning
              ? "transition-transform duration-700 ease-in-out"
              : ""
          }`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {/* Map over the new array with the cloned slide */}
          {carouselSlides.map((slide, index) => (
            <div
              key={index}
              className="flex w-full h-full flex-shrink-0 cursor-pointer"
              onClick={() => handleSlideClick(slide)}
            >
              <div
                className={`h-full w-3/5 ${slide.leftColor} flex items-center justify-center`}
              >
                <h3 className="text-white text-4xl font-bold">{slide.title}</h3>
              </div>
              <div
                className={`h-full w-2/5 ${slide.rightColor} flex items-center justify-center p-4`}
              >
                <p className="text-white text-lg">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedEvents;
