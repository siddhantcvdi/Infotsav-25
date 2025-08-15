import React, { useState } from "react";
import Card from "./Card";
import ArrowNavButton from "./ArrowNavButton";

interface CardData {
  title: string;
  description: string;
}

interface DomainProps {
  domainName: string;
  cards: CardData[];
  currentIndex: number;
  setCurrentIndex: (idx: number) => void;
}

const Domain: React.FC<DomainProps> = ({
  domainName,
  cards,
  currentIndex,
  setCurrentIndex,
}) => {
  const [direction, setDirection] = useState<"left" | "right">("right");

  const goToPrevious = () => {
    setDirection("left");
    setCurrentIndex(currentIndex === 0 ? cards.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setDirection("right");
    setCurrentIndex(currentIndex === cards.length - 1 ? 0 : currentIndex + 1);
  };

  const leftIndex = (currentIndex - 1 + cards.length) % cards.length;
  const rightIndex = (currentIndex + 1) % cards.length;

  // Helper to generate unique card IDs
  const getCardId = (idx: number) =>
    `${domainName.replace(/\s+/g, "-").toLowerCase()}-card-${idx}`;

  // Placeholder register handler
  const handleRegister = (cardIdx: number) => {
    alert(`Register for ${cards[cardIdx].title}`);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center space-y-8">
      <h2 className="text-[5vw] text-center text-gray-200 font-cattedrale tracking-wide">
        {domainName}
      </h2>

      {/* Carousel container */}
      <div className="relative h-[500px] w-[80%] max-w-[1200px] flex justify-center items-center overflow-hidden">
        {/* Left nav button */}
        <div className="absolute left-4 z-10">
          <ArrowNavButton direction="left" onClick={goToPrevious} />
        </div>

        {/* Cards wrapper */}
        <div className="flex items-center justify-center gap-8 h-full w-full">
          {/* Left card */}
          <div className="relative h-[400px] w-[300px] transform scale-75 opacity-50 transition-all duration-500 ease-out">
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black opacity-50"></div>
            <Card
              id={getCardId(leftIndex)}
              title={cards[leftIndex].title}
              description={cards[leftIndex].description}
              onRegister={() => handleRegister(leftIndex)}
            />
          </div>

          {/* Center card */}
          <div
            key={currentIndex}
            className={`h-[400px] w-[300px] transform transition-all duration-500 ease-out ${
              direction === "right" ? "translate-x-0" : "-translate-x-0"
            }`}
          >
            <Card
              id={getCardId(currentIndex)}
              title={cards[currentIndex].title}
              description={cards[currentIndex].description}
              onRegister={() => handleRegister(currentIndex)}
            />
          </div>

          {/* Right card */}
          <div className="relative h-[400px] w-[300px] transform scale-75 opacity-50 transition-all duration-500 ease-out">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-50"></div>
            <Card
              id={getCardId(rightIndex)}
              title={cards[rightIndex].title}
              description={cards[rightIndex].description}
              onRegister={() => handleRegister(rightIndex)}
            />
          </div>
        </div>

        {/* Right nav button */}
        <div className="absolute right-4 z-10">
          <ArrowNavButton direction="right" onClick={goToNext} />
        </div>
      </div>
    </div>
  );
};

export default Domain;
