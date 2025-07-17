import SvgImageMap from "./SvgImageMap";

const areas: {
  name: string;
  href: string;
  coords: [number, number][];
  style: { transition: string };
}[] = [
  {
    name: "Area 1",
    href: "/events",
    coords: [
      [117, 176],
      [277, 178],
      [315, 153],
      [279, 127],
      [120, 132],
    ],
    style: {
      transition: "fill 0.2s, stroke 0.2s",
    },
  },
  {
    name: "Area 2",
    href: "/sponsors",
    coords: [
      [71, 217],
      [109, 190],
      [268, 204],
      [272, 249],
      [110, 245],
    ],
    style: {
      transition: "fill 0.2s, stroke 0.2s",
    },
  },
  {
    name: "Area 3",
    href: "/gallery",
    coords: [
      [276, 263],
      [311, 285],
      [278, 313],
      [103, 318],
      [100, 270],
    ],
    style: {
      transition: "fill 0.2s, stroke 0.2s",
    },
  },
  {
    name: "Area 4",
    href: "/contact",
    coords: [
      [84, 358],
      [114, 333],
      [272, 334],
      [272, 378],
      [112, 383],
    ],
    style: {
      transition: "fill 0.2s, stroke 0.2s",
    },
  },
];

const Hero = () => {
  return (
    <div className="w-full h-dvh max-h-[800px] relative bg-stone-950 overflow-hidden flex items-center justify-center">
      {/* <div className="w-[1266px] h-[1266px] mx-auto top-[300px] absolute bg-gradient-to-b from-red-600/50 to-red-800/50 rounded-full blur-[250px]" /> */}
      <div className="w-[822px] h-[822px] mx-auto top-[350px] absolute bg-gradient-to-b from-red-600 to-red-800 rounded-full blur-[200px]" />
      <img
        src="/assets/Images/hero-blur1.png"
        alt=""
        className="absolute w-full h-full object-cover"
      />
      {/* <img src="/assets/Images/hero-blur2.png" alt="" className="absolute w-full h-full object-cover" /> */}
      <div className="w-[550px] h-[550px] flex justify-center items-center absolute -bottom-25 z-10">
        <div className="w-full h-full absolute bg-red-600/30 rounded-full" />
        <img
          className="object-cover scale-118 w-full h-full -mt-18 ml-4"
          src="/assets/Images/moon.png"
          alt="moon"
        />
      </div>
      <img
        className="absolute z-20 w-full h-full object-cover"
        src={"/assets/Images/trees-bg.png"}
      />
      <div className="top-0 absolute w-52">
        <img
          src="/assets/Images/hanging-board.png"
          className="z-20"
          alt="ground"
        />
        <p className="text-white text-center top-[65px] left-[82px] text-xl absolute font-naluka opacity-80">
          Home
        </p>
      </div>
      <img
        src="/assets/Images/mind-flayer1.png"
        className="opacity-5 z-0 w-full top-5 h-full absolute object-cover"
        alt=""
      />
      <img
        src="/assets/Images/Infotsav25.png"
        className="z-20 bottom-30 scale-85 max-sm:bottom-50 absolute object-cover"
        alt=""
      />
      <img src="/assets/Images/sign-board.png" className="block w-48 bottom-10 scale-150 right-[15%] h-auto absolute z-10" alt="Sign Board" />
      <div className="absolute bottom-10 scale-150 right-[15%] z-30 w-48">
        <SvgImageMap
          src="/assets/Images/sign-board.png"
          alt="Interactive Map"
          className="w-full h-auto"
          areas={areas}
        />
      </div>
    </div>
  );
};

export default Hero;
