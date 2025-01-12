import AboutUs from "@/components/aboutUs/AboutUs";
import OurProduct from "@/components/ourProduct/OurProduct";
import Banner from "@/components/shared/Banner";
import SpecialOffer from "./../components/specialOffer/SpecialOffer";
import Testimonial from "@/components/testimonial/Testimonial";
import OurBlog from "@/components/ourBlog/OurBlog";

const HomePage = () => {
  return (
    <>
      <div>
        <Banner />
        <OurProduct />
        <AboutUs />
        <SpecialOffer />
        <Testimonial />
        <OurBlog/>
      </div>
    </>
  );
};

export default HomePage;
