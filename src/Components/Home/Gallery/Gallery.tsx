const Gallery = () => {
    return (
        <section className="w-full h-dvh max-h-[800px] relative bg-stone-950 overflow-hidden flex items-center justify-center">
            {/* Red blurred background circle */}
            <div className="absolute w-[2578px] h-[2516px] left-[-425px] top-[600px] rounded-full blur-[401.26px] bg-gradient-to-b from-red-600/90 to-red-800/90" />

            {/* Left Tree Image - zoomed out */}
            <img
                src="/assets/Images/tree1.png"
                alt="Tree left"
                className="absolute w-[420px] h-auto left-[20px] top-0 transform scale-[0.7] origin-top-left"
            />

            {/* Right Tree Image - zoomed out */}
            <img
                src="/assets/Images/tree5.png"
                alt="Tree right"
                className="absolute w-[450px] h-auto right-[20px] top-0 transform scale-[0.8] origin-top-right"
            />

            {/* Floating images */}
            <img
                src="/assets/Images/man-stand.png"
                alt="Gallery item 1"
                className="absolute w-44 h-auto left-[100px] bottom-[-27px] transform scale-[0.75]"
            />
            <img
                src="/assets/Images/man-cycling-1.png"
                alt="Gallery item 3"
                className="absolute w-44 h-auto left-[550px] bottom-[-25px] transform scale-[0.75]"
            />
            <img
                src="/assets/Images/man-cycling.png"
                alt="Gallery item 2"
                className="absolute w-44 h-auto right-[100px] bottom-[-27px] transform scale-[0.75]"
            />

            {/* Heading and Gallery Photo Grid */}
            <div className="z-50 max-w-5xl px-6 text-center flex flex-col items-center justify-center">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-['Cattedrale-Demo-Regular'] text-white">
                    Gallery
                </h1>
            </div>
        </section>
    );
};

export default Gallery;