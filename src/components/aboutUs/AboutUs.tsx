"use client";
import Image from "next/image";
import Link from "next/link";

function AboutUs() {
  return (
    <div className=" flex flex-col md:flex-row gap-12 justify-between items-center container-space mb-28 relative">
      <div className="md:w-1/2 flex justify-center items-center relative">
        {/* Man Image */}
        <Image
          src="https://i.ibb.co/1vrK97t/df06687fee7e8620f09ced01f58b28c8.png"
          alt="Man"
          width={500}
          height={500}
          className="object-contain md:scale-125 w-full rounded-br-full rounded-bl-full"
        />
        <div className="bg-white absolute p-2 rounded-md">
          <Image
            width={200}
            height={40}
            src={"https://i.ibb.co/Fx6VVGc/Logo-1.png"}
            alt="logo"
            className="max-w-full h-auto"
          />
        </div>
        <div className="absolute -bottom-16 md:-bottom-20 right-20">
          <div className="card bg-base-100 shadow-xl ">
            <figure className="relative w-full h-20 md:h-28 overflow-hidden bg-gray-100 rounded-t-xl">
              <Image
                src="https://i.ibb.co.com/h1fcC4q/b3f1f66a54bb592ed9afa4613ef6bcd8.png"
                alt="mushroom"
                fill
                className="object-cover"
              />
            </figure>
            <div className="px-4 md:px-8 py-3  flex flex-col justify-between items-center text-center">
              <h2 className="card-title text-sm font-semibold">Mushroom</h2>
              <p className="text-gray-500 text-sm">$2.3/kg</p>
              <div className=" mt-auto w-full">
                <Link href={`/products`}>
                  <button className="border border-primary text-primary text-sm p-1 rounded-md w-full hover:bg-primary hover:text-white">
                    Add To Cart
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
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
        <Link href="/about" className={`navLink-style`}>
          <button className="my-btn text-primary border-primary hover:bg-primary hover:text-white">
            Read More
          </button>
        </Link>
      </div>
      <Image
        width={300}
        height={300}
        alt=""
        src="https://i.ibb.co.com/NpT6QSw/Rectangle-removebg-preview.png"
        className=" absolute -top-20 right-2/4  scale-[0.20]  overflow-hidden "
      />
    </div>
  );
}

export default AboutUs;
