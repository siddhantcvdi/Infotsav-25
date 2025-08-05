import Masonry from "@/Components/ui/Masonry";

const Gallery = () => {
  const items = [
    {
      id: "1",
      img: "/assets/Images/Home/Gallery/EventImages/Closing_ceremony.JPG",
      url: "/assets/Images/Home/Gallery/EventImages/Closing_ceremony.JPG",
      height: 400,
    },
    {
      id: "2",
      img: "/assets/Images/Home/Gallery/EventImages/Code_rush.JPG",
      url: "/assets/Images/Home/Gallery/EventImages/Code_rush.JPG",
      height: 250,
    },
    {
      id: "3",
      img: "/assets/Images/Home/Gallery/EventImages/Hackatron.JPG",
      url: "/assets/Images/Home/Gallery/EventImages/Hackatron.JPG",
      height: 600,
    },

    {
      id: "4",
      img: "/assets/Images/Home/Gallery/EventImages/Pinnacle.JPG",
      url: "/assets/Images/Home/Gallery/EventImages/Pinnacle.JPG",
      height: 600,
    },

    {
      id: "5",
      img: "/assets/Images/Home/Gallery/EventImages/Pronite_1.JPG",
      url: "/assets/Images/Home/Gallery/EventImages/Pronite_1.JPG",
      height: 600,
    },

    {
      id: "6",
      img: "/assets/Images/Home/Gallery/EventImages/Pronite_2.JPG",
      url: "/assets/Images/Home/Gallery/EventImages/Pronite_2.JPG",
      height: 600,
    },

    {
      id: "7",
      img: "/assets/Images/Home/Gallery/EventImages/Pronite_3.JPG",
      url: "/assets/Images/Home/Gallery/EventImages/Pronite_3.JPG",
      height: 600,
    },

    {
      id: "8",
      img: "/assets/Images/Home/Gallery/EventImages/Pronite_4.JPG",
      url: "/assets/Images/Home/Gallery/EventImages/Pronite_4.JPG",
      height: 680,
    },

    {
      id: "9",
      img: "/assets/Images/Home/Gallery/EventImages/RoboMaze.JPG",
      url: "/assets/Images/Home/Gallery/EventImages/RoboMaze.JPG",
      height: 680,
    },

    {
      id: "10",
      img: "/assets/Images/Home/Gallery/EventImages/Robowars.JPG",
      url: "/assets/Images/Home/Gallery/EventImages/Robowars.JPG",
      height: 680,
    },
    {
      id: "11",
      img: "/assets/Images/Home/Gallery/EventImages/Closing_ceremony.JPG",
      url: "/assets/Images/Home/Gallery/EventImages/Closing_ceremony.JPG",
      height: 400,
    },
    {
      id: "12",
      img: "/assets/Images/Home/Gallery/EventImages/Code_rush.JPG",
      url: "/assets/Images/Home/Gallery/EventImages/Code_rush.JPG",
      height: 250,
    },
  ];
  return (
    <div
      className="w-full h-dvh max-h-[800px] relative bg-stone-950 overflow-hidden flex items-center justify-center p-6 overflow-y-scroll"
      style={{
        overflow: "scroll",
        scrollbarWidth: "none", // Firefox
        msOverflowStyle: "none", // IE 10+
      }}
    >
      <Masonry
        items={items}
        ease="power3.out"
        duration={0.6}
        stagger={0.05}
        animateFrom="bottom"
        scaleOnHover={true}
        hoverScale={0.95}
        blurToFocus={true}
        colorShiftOnHover={false}
      />
    </div>
  );
};

export default Gallery;
