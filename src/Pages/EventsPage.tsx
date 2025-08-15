import Domain from "@/Components/EventsPage/Domain";
import FeaturedEvents from "@/Components/EventsPage/FeaturedEvents";
import Hero from "@/Components/EventsPage/Hero-Events";
import Footer from "@/Components/Other/Footer";

import { useState } from "react";

const EventsPage = () => {
  const data = [
    {
      domainName: "Technical Events",
      cards: [
        { title: "Hackathon", description: "A 24-hour coding competition." },
        { title: "Code Debug", description: "Find and fix bugs in the code." },
        {
          title: "Web Design",
          description: "Create a beautiful and functional website.",
        },
      ],
    },
    {
      domainName: "Gaming Events",
      cards: [
        { title: "Valorant", description: "5v5 tactical shooter tournament." },
        { title: "FIFA", description: "Virtual football championship." },
        { title: "Chess", description: "A classic test of strategy." },
      ],
    },
    {
      domainName: "Creative Events",
      cards: [
        { title: "Photography", description: "Capture the best moments." },
        {
          title: "Short Film",
          description: "Tell a story in under 5 minutes.",
        },
      ],
    },
  ];

  // State for each domain's current card index
  const [domainIndices, setDomainIndices] = useState(data.map(() => 0));

  // Setter for a specific domain index
  const setDomainIndex = (domainIdx: number, cardIdx: number) => {
    setDomainIndices((prev) => {
      const updated = [...prev];
      updated[domainIdx] = cardIdx;
      return updated;
    });
  };

  return (
    <div>
      <Hero />
      <div className="h-auto w-full py-10 md:py-30 px-[8vw] space-y-15 md:space-y-40">
        <FeaturedEvents setDomainIndex={setDomainIndex} />

        {data.map((domain, idx) => (
          <Domain
            key={idx}
            domainName={domain.domainName}
            cards={domain.cards}
            currentIndex={domainIndices[idx]}
            setCurrentIndex={(cardIdx: number) => setDomainIndex(idx, cardIdx)}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default EventsPage;
