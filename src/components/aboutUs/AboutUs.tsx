import Image from "next/image";
import SectionTitle from "../shared/SectionTitle";
import Link from "next/link";

function AboutUs() {
  return (
    <div className=" flex flex-col md:flex-row gap-8 justify-between items-center container-space ">
      <div className="md:w-1/2">
        <Image
          width={500}
          height={500}
          alt=""
          src="https://i.ibb.co.com/1vrK97t/df06687fee7e8620f09ced01f58b28c8.png"
        />
      </div>
      <div className="md:w-1/2">
        <div className="text-start space-y-1 mx-auto px-4">
          <h3 className="text-secondary text-sm lg:text-xl bg-[#749B3F1A] px-2 py-1 rounded-md inline-block font-semibold">
            About us
          </h3>
          <h1 className="text-xl md:text-3xl lg:text-5xl">
            About Fresh Harvest
          </h1>
          <p className="text-xs lg:text-sm text-[#4A4A52]">
            Welcome to Fresh Harvest, your premier destination for high-quality
            and fresh produce. We are passionate about providing you with the
            finest fruits, vegetables, and salad ingredients to nourish your
            body and delight your taste buds. With a commitment to excellence,
            sustainability, and customer satisfaction, Fresh Harvest is here to
            revolutionize your grocery shopping experience.
          </p>
        </div>
        <Link href="/about-details" className={"navLink-style"}>
          <button className="my-btn text-primary border-primary hover:bg-primary hover:text-white">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AboutUs;
