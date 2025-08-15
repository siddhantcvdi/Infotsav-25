import { useState } from "react";
import technicalEvents from "@/Constants/Events/TechnicalEvents.json";
import managerialEvents from "@/Constants/Events/ManagerialEvents.json";
import roboticsEvents from "@/Constants/Events/RoboticsEvents.json";
import Domain from "@/Components/EventsPage/Domain";
import FeaturedEvents from "@/Components/EventsPage/FeaturedEvents";
import Hero from "@/Components/EventsPage/Hero-Events";
import Footer from "@/Components/Other/Footer";

// Extend the Window interface to include __DOMAIN_EVENTS__
declare global {
  interface Window {
    __DOMAIN_EVENTS__?: any;
  }
}

const domainJsons = [
  { domainName: "Managerial Events", events: managerialEvents },
  { domainName: "Robotics Events", events: roboticsEvents },
];

const EventsPage = () => {
  // State for each domain's current card index
  const [domainIndices, setDomainIndices] = useState(domainJsons.map(() => 0));

  // Setter for a specific domain index
  const setDomainIndex = (domainIdx: number, cardIdx: number) => {
    setDomainIndices((prev) => {
      const updated = [...prev];
      updated[domainIdx] = cardIdx;
      return updated;
    });
  };

  // Expose domain events for navigation
  // @ts-ignore
  if (typeof window !== "undefined") {
    window.__DOMAIN_EVENTS__ = domainJsons.map((domain) => domain.events);
  }

  return (
    <div>
      <Hero />
      <div className="h-auto w-full py-10 md:py-30 px-[8vw] space-y-15 md:space-y-40">
        <FeaturedEvents setDomainIndex={setDomainIndex} />

        {domainJsons.map((domain, idx) => (
          <Domain
            key={idx}
            domainName={domain.domainName}
            cards={domain.events.map((event: any) => ({
              title: event.name,
              description: event.about,
            }))}
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
