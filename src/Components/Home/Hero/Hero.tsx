const Hero = () => {
  return (
    <div className="w-full h-dvh max-h-[800px] relative bg-stone-950 overflow-hidden flex items-center justify-center">
      <div className="w-[1266px] h-[1266px] mx-auto top-[300px] absolute bg-gradient-to-b from-red-600/50 to-red-800/50 rounded-full blur-[250px]" />
      <div className="w-[822px] h-[822px] mx-auto top-[350px] absolute bg-gradient-to-b from-red-600 to-red-800 rounded-full blur-[200px]" />
      <div className="w-[550px] h-[550px] flex justify-center items-center absolute -bottom-25 z-10">
        <div className="w-full h-full absolute bg-red-600/30 rounded-full" />
        <img
          className="object-cover scale-118 w-full h-full -mt-18 ml-4"
          src="/assets/Images/moon.png"
          alt="moon"
        />
      </div>
      <img className="absolute z-20 w-full h-full object-cover" src={"/assets/Images/trees-bg.png"} />
      <div className="top-0 absolute w-48">
        <img src="/assets/Images/hanging-board.png" className="z-20" alt="ground" />
        <p className="text-white text-center top-[60px] left-[80px] absolute font-naluka opacity-80">Home</p>
      </div>
      <img src="/assets/Images/mind-flayer.png" className="opacity-10 z-0 w-full h-full absolute -top-50 scale-130 object-cover" alt="" />
    </div>
  );
};

export default Hero;
