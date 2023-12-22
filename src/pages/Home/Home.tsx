import { useEffect } from "react";
import Footer from "../../components/Footer";
import HeroSection from "./HeroSection";
import { getPartners } from "../../slices/PartnerSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";

function Home() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getPartners());
  }, []);
  return (
    <div>
      <HeroSection />
      {/* <AboutOneCenter />
      <Features />
      <Faqs />
      <Footer /> */}
      <Footer />
    </div>
  );
}

export default Home;
