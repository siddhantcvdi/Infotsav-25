import Domain from "@/Components/EventsPage/Domain";
import FeaturedEvents from "@/Components/EventsPage/FeaturedEvents";
import Main from "@/Components/EventsPage/Main";
import Footer from "@/Components/Other/Footer";

const EventsPage = () => {
  const data = [
    {
      domainName: "Domain A",
      cards: [
        { title: "Event 1", description: "Description 1" },
        { title: "Event 2", description: "Description 2" },
        { title: "Event 3", description: "Description 3" },
      ],
    },
    {
      domainName: "Domain B",
      cards: [
        { title: "Event 1", description: "Description 1" },
        { title: "Event 2", description: "Description 2" },
        { title: "Event 3", description: "Description 3" },
      ],
    },
    {
      domainName: "Domain C",
      cards: [
        { title: "Event 1", description: "Description 1" },
        { title: "Event 2", description: "Description 2" },
        { title: "Event 3", description: "Description 3" },
      ],
    },
  ];

  return (
    <div>
      <Main />
      <div className="h-auto w-full py-40 px-30 space-y-40">
        <FeaturedEvents />

        {data.map((domain, idx) => (
          <Domain key={idx} {...domain} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default EventsPage;
