const IntroVideo = () => {
  return (
    <div className="flex-col w-full h-[900px] max-sm:h-[300px] max-md:h-[400px] max-sm:scale-115 relative bg-black overflow-hidden flex">
      <img
        src="/assets/Backgrounds/blur-video.svg"
        className="w-full h-full absolute object-cover"
        alt=""
      />
      {/* Main video holder frame */}
      <div className="absolute w-full max-w-7xl mx-auto px-4 sm:px-10 md:px-12 flex justify-center bottom-0 -translate-x-1/2 left-1/2">
        <img
          className="w-full max-w-6xl h-auto object-contain"
          src="assets/Images/Home/Video/Billboard.svg"
          alt="Video Holder Frame"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[69%] h-[56.5%] relative top-[-2.5%]">
            <iframe
              className="w-full h-full rounded-lg shadow-[inset_0px_3.629072666168213px_18.054636001586914px_3.629072666168213px_rgba(0,0,0,1.00)]"
              src="https://www.youtube.com/embed/e6_w8sQNcEo?autoplay=0&controls=1&showinfo=0&rel=0&modestbranding=1"
              title="Infotsav 2025 Intro Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <img
        src="/assets/Images/tree1.png"
        alt="Tree left"
        className="absolute h-auto -left-10 -bottom-40 scale-90 max-md:hidden origin-top-left"
      />
      <img
        src="/assets/Images/tree5.png"
        alt="Tree left"
        className="absolute h-auto -right-25  max-md:hidden -bottom-40 scale-90 origin-top-left"
      />
      <img
        src="/assets/Images/man-cycling-1.png"
        alt="Gallery item 3"
        className="absolute w-44 h-auto max-md:hidden left-40 bottom-[-25px] transform scale-[0.75]"
      />
      <img
        src="/assets/Images/man-stand.png"
        alt="Gallery item 1"
        className="absolute max-md:hidden w-44 h-auto right-[100px] bottom-[-27px] transform scale-x-[-0.75] scale-y-[0.75]"
      />
    </div>
  );
};

export default IntroVideo;
