const Hero = () => {
  return (
    <div className="w-full h-dvh max-h-[800px] relative bg-stone-950 overflow-hidden flex items-center justify-center">
      {/* <div className="w-[1266px] h-[1266px] mx-auto top-[300px] absolute bg-gradient-to-b from-red-600/50 to-red-800/50 rounded-full blur-[250px]" /> */}
      <div className="w-[822px] h-[822px] mx-auto top-[350px] absolute bg-gradient-to-b from-red-600 to-red-800 rounded-full blur-[200px]" />
      <img src="/assets/Images/hero-blur1.png" alt="" className="absolute w-full h-full object-cover" />
      {/* <img src="/assets/Images/hero-blur2.png" alt="" className="absolute w-full h-full object-cover" /> */}
      <div className="w-[550px] h-[550px] flex justify-center items-center absolute -bottom-25 z-10">
        <div className="w-full h-full absolute bg-red-600/30 rounded-full" />
        <img
          className="object-cover scale-118 w-full h-full -mt-18 ml-4"
          src="/assets/Images/moon.png"
          alt="moon"
        />
      </div>
      <img className="absolute z-20 w-full h-full object-cover" src={"/assets/Images/trees-bg.png"} />
      <div className="top-0 absolute w-52">
        <img src="/assets/Images/hanging-board.png" className="z-20" alt="ground" />
        <p className="text-white text-center top-[65px] left-[82px] text-xl absolute font-naluka opacity-80">Home</p>
      </div>
      <img src="/assets/Images/mind-flayer1.png" className="opacity-5 z-0 w-full top-5 h-full absolute object-cover" alt="" />
      <img src="/assets/Images/Infotsav25.png" className="z-20 bottom-30 scale-85 max-sm:bottom-50 absolute object-cover" alt="" />
    </div>
  );
};

export default Hero;
