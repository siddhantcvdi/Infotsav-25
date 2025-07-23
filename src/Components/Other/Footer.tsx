export default function Footer() {
    return (
        <footer className="w-full relative bg-black/25 border-t-[5px] border-indigo-500/20 overflow-hidden py-16">
            {/* Background Image */}
            <img
                className="absolute inset-0 w-full h-full object-cover opacity-30"
                src="/assets/Images/Home/Footer/octopus.png"
                alt="Footer Background"
            />

            {/* Main Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-8">
                {/* Get In Touch Title */}
                <div className="text-center mb-12">
                    <h2 className="text-white text-6xl md:text-7xl font-normal font-['Cattedrale-Demo']">
                        Get In Touch
                    </h2>
                </div>

                {/* Social Media Icons */}
                <div className="flex justify-center items-center gap-8 mb-16">
                    {/* LinkedIn */}
                    <div className="w-12 h-12">
                        <img src="/assets/Images/Home/Footer/linkedin.svg" />
                    </div>
                    {/* Insta */}
                    <div className="w-12 h-12">
                        <img src="/assets/Images/Home/Footer/insta.svg" />
                    </div>
                    {/* Twitter/X */}
                    <div className="w-12 h-12">
                        <img src="/assets/Images/Home/Footer/x.svg" />
                    </div>
                    {/* Email */}
                    <div className="w-14 h-10">
                        <img src="/assets/Images/Home/Footer/email.svg" />
                    </div>
                </div>

                {/* Three Column Layout */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 lg:gap-8 mb-16">
                    {/* Left: Join Us Now */}
                    <div className="flex flex-col items-start lg:items-start">
                        <h3 className="text-white text-3xl md:text-4xl font-['Aileron'] capitalize mb-6">
                            Join Us Now!
                        </h3>
                        <button className="px-6 py-3 rounded-full border border-white text-white text-base font-extralight font-['Inter'] capitalize hover:bg-white hover:text-black transition-colors duration-300 flex items-center gap-3">
                            Register Now
                            <div className="w-3 h-3">
                                <div className="w-2 h-2 border border-white rounded-full"></div>
                            </div>
                        </button>
                    </div>

                    {/* Center: Logo */}
                    <div className="flex justify-center lg:justify-center">
                        <img
                            className="w-32 h-32"
                            src="/assets/Images/Home/Footer/logo.png"
                            alt="Infotsav Logo"
                        />
                    </div>

                    {/* Right: Contact Us */}
                    <div className="flex flex-col items-start lg:items-end">
                        <h3 className="text-white text-3xl md:text-4xl font-['Aileron'] capitalize mb-6">
                            Contact Us
                        </h3>
                        <div className="space-y-2 text-white text-base font-extralight font-['Inter']">
                            <div className="flex gap-4">
                                <span>Name A:</span>
                                <span>9999999999</span>
                            </div>
                            <div className="flex gap-4">
                                <span>Name B:</span>
                                <span>9999999999</span>
                            </div>
                            <div className="flex gap-4">
                                <span>Name C:</span>
                                <span>9999999999</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center">
                    <p className="text-white text-xl md:text-2xl font-['Aileron']">
                        Copyright © Infotsav 2025
                    </p>
                </div>
            </div>
        </footer>
    );
}
