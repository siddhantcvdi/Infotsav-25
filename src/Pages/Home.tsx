import MainSponsors from '../Components/Home/MainSponsors/MainSponsors';
import AboutUs from '../Components/Home/AboutUs/AboutUs';
import Hero from '../Components/Home/Hero/Hero';
import IntroVideo from '../Components/Home/IntroVideo/IntroVideo';
import Gallery from '@/Components/Home/Gallery/Gallery';
import Footer from '@/Components/Other/Footer';

const Home = () => {
    return (
        <div className="smooth-flow">
            <section id="hero">
                <Hero />
            </section>
            <div className="w-full max-sm:h-[20px] max-md:h-[80px] h-[120px] bg-black" />
            <section id="about">
                <AboutUs />
            </section>
            <section id="intro-video">
                <IntroVideo />
            </section>
            <section id="gallery">
                <Gallery />
            </section>
            <section id="sponsors">
                <MainSponsors />
            </section>
            <section id="footer">
                <Footer />
            </section>
        </div>
    );
};

export default Home;
