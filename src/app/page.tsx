import AboutUs from "@/components/aboutUs/AboutUs";
import OurProduct from "@/components/ourProduct/OurProduct";
import Banner from "@/components/shared/Banner";

const HomePage = () => {
  return (
    <>
      <div>
        <Banner/>
        <OurProduct/>
        <AboutUs/>
      </div>
    </>
  );
};

export default HomePage;
