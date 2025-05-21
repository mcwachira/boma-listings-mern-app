import HeroSection from "@/app/(nandashboard)/landing/HeroSection";
import FeaturesSection from "./FeaturesSection";
import DiscoverSection from "./DiscoverSection";
import CallToActionSection from "@/app/(nandashboard)/landing/CallToActionSection";
import FooterSection from "@/app/(nandashboard)/landing/FooterSection";

const Landing = () => {
  return <div>
    <HeroSection />
    <FeaturesSection />
    <DiscoverSection />
    <CallToActionSection/>
    <FooterSection/>
  </div>;
};

export default Landing;
