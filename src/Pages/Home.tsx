import MainSponsors from "../Components/Home/MainSponsors/MainSponsors";
import AboutUs from "../Components/Home/AboutUs/AboutUs";
import Hero from "../Components/Home/Hero/Hero";
import IntroVideo from "../Components/Home/IntroVideo/IntroVideo";
import Gallery from "@/Components/Home/Gallery/Gallery";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="w-full max-sm:h-[20px] max-md:h-[80px] h-[120px] bg-black" />
      <AboutUs />
      <IntroVideo />
      <Gallery />
      <MainSponsors />
    </div>
  );
};

export default Home;
