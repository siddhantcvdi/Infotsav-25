import VideoHolder from '/assets/Images/Home/Video/VideoHolder.png';

const IntroVideo = () => {
    return (
        <div className="flex-col w-full h-dvh max-h-[800px] relative bg-black overflow-hidden flex items-center justify-center">
            {/* Background gradient blur - positioned like Figma */}
            <div className="absolute left-[-9%] top-[77%] w-[118%] h-[118%] bg-gradient-to-b from-red-600/50 to-red-800/20 rounded-full blur-[200px] md:blur-[400px]" />

            {/* Main video holder frame */}
            <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
                <img
                    className="w-full max-w-6xl h-auto object-contain"
                    src={VideoHolder}
                    alt="Video Holder Frame"
                />

                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[48%] h-[39.5%] relative top-[-5%]">
                        <iframe
                            className="w-full h-full rounded-lg shadow-[inset_0px_3.629072666168213px_18.054636001586914px_3.629072666168213px_rgba(0,0,0,1.00)]"
                            src="https://www.youtube.com/embed/e6_w8sQNcEo?autoplay=0&controls=1&showinfo=0&rel=0&modestbranding=1"
                            title="Infotsav 2025 Intro Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                    </div>
                </div>

                <div className="absolute top-[19%] left-1/2 transform -translate-x-1/2 text-center">
                    <h2 className="text-white sm:text-4xl md:text-5xl lg:text-5xl font-normal font-['Naluka'] tracking-[2.81px] [text-shadow:_0px_1px_5px_rgb(0_0_0_/_1.00)]">
                        Intro
                    </h2>
                </div>
            </div>

            {/* Bottom shadow bar */}
            {/* <div className="bottom-0 left-0 w-full h-16 sm:h-20 bg-stone-950 shadow-[inset_0px_12px_20px_0px_rgba(0,0,0,0.50)]" /> */}
            <div className="w-[1200px] h-20 bg-stone-950 shadow-[inset_0px_12px_20px_0px_rgba(0,0,0,0.50)]" />
        </div>
    );
};

export default IntroVideo;
