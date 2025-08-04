import React from "react";
import Masonry from "@/Components/ui/Masonry";

const Gallery = () => {
  const items = [
    {
      id: "1",
      img: "/assets/Images/Gallery/EventImages/Closing_ceremony.JPG",
      url: "/assets/Images/Gallery/EventImages/Closing_ceremony.JPG",
      height: 400,
    },
    {
      id: "2",
      img: "/assets/Images/Gallery/EventImages/Code_rush.JPG",
      url: "/assets/Images/Gallery/EventImages/Code_rush.JPG",
      height: 250,
    },
    {
      id: "3",
      img: "/assets/Images/Gallery/EventImages/Hackatron.jpg",
      url: "/assets/Images/Gallery/EventImages/Hackatron.jpg",
      height: 600,
    },

    {
      id: "4",
      img: "/assets/Images/Gallery/EventImages/Pinnacle.jpg",
      url: "/assets/Images/Gallery/EventImages/Pinnacle.jpg",
      height: 600,
    },

    {
      id: "5",
      img: "/assets/Images/Gallery/EventImages/Pronite_1.jpg",
      url: "/assets/Images/Gallery/EventImages/Pronite_1.jpg",
      height: 600,
    },

    {
      id: "6",
      img: "/assets/Images/Gallery/EventImages/Pronite_2.jpg",
      url: "/assets/Images/Gallery/EventImages/Pronite_2.jpg",
      height: 600,
    },

    {
      id: "7",
      img: "/assets/Images/Gallery/EventImages/Pronite_3.jpg",
      url: "/assets/Images/Gallery/EventImages/Pronite_3.jpg",
      height: 600,
    },

    {
      id: "8",
      img: "/assets/Images/Gallery/EventImages/Pronite_4.jpg",
      url: "/assets/Images/Gallery/EventImages/Pronite_4.jpg",
      height: 600,
    },

    {
      id: "9",
      img: "/assets/Images/Gallery/EventImages/RoboMaze.jpg",
      url: "/assets/Images/Gallery/EventImages/RoboMaze.jpg",
      height: 600,
    },

    {
      id: "10",
      img: "/assets/Images/Gallery/EventImages/Robowars.jpg",
      url: "/assets/Images/Gallery/EventImages/Robowars.jpg",
      height: 600,
    },
  ];
  return (
    <div className="w-full h-dvh max-h-[800px] relative bg-stone-950 overflow-hidden flex items-center justify-center p-6">
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
