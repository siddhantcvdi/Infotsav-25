const AboutUs = () => {
  return (
    <section className="w-full h-dvh max-h-[800px] relative bg-stone-950 overflow-hidden flex items-center justify-center">
      {/* Flipped Background Image */}
      <img
        src="/assets/Images/trees-bg.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-[10] rotate-180"
        loading="lazy"
      />
      {/* Background Blur Image (Teal image instead of div gradient) */}
      <img
        src="/assets/Backgrounds/about-blur.png"
        alt="Blur Background"
        className="absolute left-1/2 -translate-x-1/2 w-[1286px] h-[1286px] z-[5] pointer-events-none select-none"
        loading="lazy"
      />
      {/* Black Blur - half-circle at bottom */}
      <div
        className="absolute top-[500px] left-1/2 -translate-x-1/2 w-[3000px] h-[3000px] bg-gradient-to-b from-black to-black  blur-[150px] rounded-full
   z-[30] pointer-events-none"
      />

      {/* Foreground Decorative Image */}
      <img
        className="absolute w-40 h-64 left-[318px] top-[290px] origin-top-left -rotate-180 z-10"
        src="/assets/Images/Demogorgon.png"
        alt="Demogorgon"
        loading="lazy"
      />
      {/* Text Content - Centered */}
      <div className="relative z-50 max-w-5xl px-6 text-center flex flex-col items-center justify-center">
        <h2 className="text-red-600 text-6xl md:text-7xl lg:text-8xl font-['Cattedrale-Demo-Regular'] mb-6">
          About Us
        </h2>
        <p className="text-white text-base md:text-lg lg:text-xl font-['Naluka'] leading-relaxed">
          Infotsav is the flagship fest of ABV-IIITM, Gwalior, celebrating
          technology, management, and innovation. It ignites creativity and
          fosters competition among students from top institutions. Sponsored by
          leading tech companies, it features hackathons, coding competitions,
          quizzes, and case studies, testing technical and managerial skills.
          <br />
          <br />
          More than a competition, Infotsav offers national exposure, industry
          connections, and talent showcase. Participants can win substantial
          prizes, but the real reward is the experience and recognition. From
          October 18th to 20th, Infotsav 2024 promises three days of
          competition, learning, and networking for coders, managers,
          developers, and thinkers.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
