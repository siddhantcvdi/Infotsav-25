const Main = () => {
  return (
    <div className="relative w-full bg-gradient-to-b from-sky-950 to-teal-700 flex items-center justify-center h-[30vh] md:h-screen overflow-hidden">
      {/* Main text */}
      <h1 className="text-[26vw] tracking-wide font-cattedrale z-[1]">
        Events
      </h1>
      {/* Responsive images */}
      <img
        src="/assets/Images/test-events-page.png"
        className="absolute top-[7%] left-[18%] h-[18vw]"
      />
      <img
        src="/assets/Images/test-events-page.png"
        className="absolute bottom-[12%] left-[5%] h-[18vw]"
      />
      <img
        src="/assets/Images/test-events-page.png"
        className="absolute top-[15%] right-[45%] h-[14vw] md:z-[1]"
      />
      <img
        src="/assets/Images/test-events-page.png"
        className="absolute top-[12%] right-[22%] h-[18vw]"
      />
      <img
        src="/assets/Images/test-events-page.png"
        className="absolute top-[50%] right-[7%] h-[18vw]"
      />
      <img
        src="/assets/Images/test-events-page.png"
        className="absolute bottom-[5%] left-[30%] h-[15vw] md:z-[1]"
      />
      <img
        src="/assets/Images/test-events-page.png"
        className="absolute bottom-[3%] right-[28%] h-[20vw]"
      />
    </div>
  )
}

export default Main
