
const IntroVideo = () => {
    return (
        <div className="flex-col w-full h-dvh max-h-[900px] max-sm:h-[300px] max-md:h-[400px] max-sm:scale-115 relative bg-black overflow-hidden flex">
            <img src="/assets/Backgrounds/blur-video.svg" className="w-full h-full absolute object-cover" alt="" />
            {/* Main video holder frame */}
            <div className="absolute w-full max-w-7xl mx-auto px-4 sm:px-10 md:px-12 flex justify-center bottom-0 -translate-x-1/2 left-1/2">
                <img
                    className="w-full max-w-6xl h-auto object-contain"
                    src='assets/Images/Home/Video/Billboard.svg'
                    alt="Video Holder Frame"
                />

                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[69%] h-[56.5%] relative top-[-2.5%]">
                        <iframe
                            className="w-full h-full rounded-lg shadow-[inset_0px_3.629072666168213px_18.054636001586914px_3.629072666168213px_rgba(0,0,0,1.00)]"
                            src="https://www.youtube.com/embed/e6_w8sQNcEo?autoplay=0&controls=1&showinfo=0&rel=0&modestbranding=1"
                            title="Infotsav 2025 Intro Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                    </div>
                </div>
                <img src="" alt="" />

            </div>

        </div>
    );
};

export default IntroVideo;