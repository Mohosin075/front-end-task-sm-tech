import Image from "next/image";
import Link from "next/link";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";

function Banner() {
  return (
    <div className="min-h-screen  ps-4 md:ps-10 lg:ps-28 bg-gray-100 ">
      <div className="flex justify-between pt-10 lg:pt-0 items-start lg:items-center min-h-screen gap-10  relative">
        <div className="w-1/2 space-y-4">
          <h3 className="text-secondary text-xs lg:text-sm bg-[#749B3F1A] px-2 py-1 rounded-md inline-block">
            Welcome to Fresh Harvest
          </h3>
          <h1 className="text-xl  md:text-5xl lg:text-7xl">
            Fresh Fruits and Vegetables
          </h1>
          <p className="text-xs lg:text-xl ">
            At Fresh Harvests, we are passionate about providing you with the
            freshest and most flavorful fruits and vegetables
          </p>

          <Link href="/shop" className={"navLink-style"}>
            <button className="my-btn bg-primary text-white">Shop now</button>
          </Link>

          <div className="flex justify-start  lg:justify-around gap-0 lg:gap-5">
            <div className="hidden lg:block">
              <Image
                width={100}
                height={100}
                alt=""
                src="https://i.ibb.co.com/NpT6QSw/Rectangle-removebg-preview.png"
              />
            </div>
            <div className="hidden lg:flex justify-between  lg:gap-3 items-center font-semibold p-1 lg:px-3 lg:py-2 bg-gray-200 rounded-md text-sm ">
              <div className="space-y-1">
                <h4 className="text-secondary text-xs lg:text-sm">
                  Special Offer
                </h4>
                <h4 className="text-sm lg:text-2xl">Fresh Salad</h4>
                <h4>
                  <span className="text-secondary text-xs lg:text-sm">
                    Up to
                  </span>{" "}
                  70% OFF
                </h4>
                <h4 className="bg-secondary rounded-lg px-2 py-1 text-xs lg:text-sm">
                  <span className="text-white">CODE</span> : FRESH25
                </h4>
              </div>
              <div className="">
                <Image
                  width={100}
                  height={100}
                  alt=""
                  src="https://i.ibb.co.com/Kyg8nDw/cc411928dcab6c58340e4d0518dd1595.png"
                />
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <h4 className="text-xl lg:text-2xl">Download App:</h4>
            <div className="flex items-center  gap-6">
              <div className="flex items-center gap-3 bg-black p-3 rounded-md text-white text-4xl">
                <FaApple />
                <div>
                  <p className="text-sm">Download on the</p>
                  <h4>App Store</h4>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-black p-3 rounded-md text-white text-xl lg:text-4xl">
                <BiLogoPlayStore />
                <div>
                  <p className="text-sm">Get It On</p>
                  <h4>Google Play</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-1/2 h-full absolute bottom-0 right-0 overflow-visible  box-border lg:right-10">
          <Image
            src="https://i.ibb.co.com/fNKz5jY/12399b794493c0820ab34cb4e6b433a8-1.png"
            alt=""
            width={500}
            height={300}
            className="object-cover w-full h-full overflow-visible"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
