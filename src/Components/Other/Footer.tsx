export default function Footer() {
    return (
        <footer className="w-full relative bg-black/25 overflow-hidden py-8 border-t-6 border-blue-700/10 poppins-thin">
            {/* Background Image */}
            <img
                className="absolute inset-0 w-full h-full object-cover"
                src="/assets/Backgrounds/footer.png"
                alt="Footer Background"
            />

            {/* Main Content Container */}
            <div className="relative z-10 w-full mx-auto px-[10%] flex flex-col items-stretch justify-center text-center ">
                {/* Get In Touch Title */}
                <h2 className="text-white text-6xl md:text-7xl mb-8 font-cattedrale">
                    Get In Touch
                </h2>

                {/* Social Media Icons */}
                <div className="flex justify-center items-center gap-8 mb-16">
                    {/* LinkedIn */}
                    <div className="w-6 h-6">
                        <img src="/assets/Images/Home/Footer/linkedin.svg" />
                    </div>
                    {/* Insta */}
                    <div className="w-6 h-6">
                        <img src="/assets/Images/Home/Footer/insta.svg" />
                    </div>
                    {/* Twitter/X */}
                    <div className="w-6 h-6">
                        <img src="/assets/Images/Home/Footer/x.svg" />
                    </div>
                    {/* Email */}
                    <div className="w-6 h-6">
                        <img src="/assets/Images/Home/Footer/email.svg" />
                    </div>
                </div>

                {/* Three Column Layout */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 lg:gap-8 mb-16">
                    {/* Left: Join Us Now */}
                    <div className="flex flex-col justify-center items-center">
                        <h3 className="text-white text-3xl md:text-4xl capitalize mb-6">
                            Join Us Now!
                        </h3>
                        <button className="px-6 py-3 rounded-full border border-white poppins-regular cursor-pointer text-white text-base capitalize hover:bg-white hover:text-black transition-colors duration-300 flex items-center gap-3">
                            Register Now
                            <div className="w-3 h-3">
                                <div className="w-2 h-2 border border-white bg-black rounded-full"></div>
                            </div>
                        </button>
                    </div>

                    {/* Center: Logo */}
                    <div className="flex justify-center lg:justify-center border-8 rounded-full border-neutral-950">
                        <img
                            className="w-32 h-32 scale-105"
                            src="/assets/Images/Home/Footer/logo.png"
                            alt="Infotsav Logo"
                        />
                    </div>

                    {/* Right: Contact Us */}
                    <div className="flex flex-col items-center justify-center">
                        <h3 className="text-white text-3xl md:text-4xl capitalize mb-6">
                            Contact Us
                        </h3>
                        <div className="space-y-2 text-white text-base w-full ">
                            <div className="flex gap-4 w-full ">
                                <span>Samyak Choudhary:</span>
                                <span>9999999999</span>
                            </div>
                            <div className="flex gap-4 ">
                                <span>Shashank Gour:</span>
                                <span>9999999999</span>
                            </div>
                            
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center">
                    <p className="text-white text-xs">
                        Copyright © Infotsav 2025
                    </p>
                </div>
            </div>
        </footer>
    );
}
