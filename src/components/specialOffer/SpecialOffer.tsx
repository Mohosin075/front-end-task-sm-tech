import Image from "next/image";

function SpecialOffer() {
  return (
    <div className="  container-space bg-gray-100 py-20 rounded-md relative overflow-hidden">
      <div className="flex flex-col justify-center text-center md:text-start items-center md:flex-row md:justify-between  md:items-start lg:items-center gap-10 ">
        <div className="md:w-1/2 space-y-4">
          <h3 className="text-secondary text-xs lg:text-sm bg-[#749B3F1A] px-2 py-1 rounded-md inline-block">
            Special Offer
          </h3>
          <h1 className="text-2xl  md:text-5xl lg:text-7xl">
            Seasonal Fruit Bundle
          </h1>
          <h1 className="text-xl  md:text-2xl">
            Discount up to <span className="text-primary">80% OFF</span>
          </h1>
          <div>
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
              <div className="flex flex-col p-2 bg-white rounded-box">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 15 }}></span>
                </span>
                days
              </div>
              <div className="flex flex-col p-2 bg-white rounded-box">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 10 }}></span>
                </span>
                hours
              </div>
              <div className="flex flex-col p-2 bg-white rounded-box">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 24 }}></span>
                </span>
                min
              </div>
              <div className="flex flex-col p-2 bg-white rounded-box">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 5 }}></span>
                </span>
                sec
              </div>
            </div>
          </div>
          <h4 className="bg-[#176D38] text-[#FAC714] rounded-lg px-3 py-2 inline-block">
            <span className="text-white">CODE</span> : FRESH25
          </h4>
        </div>
        <div className="hidden md:block md:w-1/2 h-full">
          <Image
            src="https://i.ibb.co.com/wK0G5d0/Footer-Section.png"
            alt=""
            width={500}
            height={100}
            className="object-cover w-full h-full overflow-visible"
          />
        </div>
      </div>
      <Image
        width={300}
        height={300}
        alt=""
        src="https://i.ibb.co/ZXnh03c/Rectangle-1-removebg-preview.png"
        className="blur-md absolute -left-20 -bottom-20 scale-50 overflow-hidden"
      />
      <Image
        width={300}
        height={300}
        alt=""
        src="https://i.ibb.co.com/NpT6QSw/Rectangle-removebg-preview.png"
        className=" absolute -right-20 -bottom-20 scale-50 overflow-hidden"
      />
      <Image
        width={300}
        height={300}
        alt=""
        src="https://i.ibb.co.com/NpT6QSw/Rectangle-removebg-preview.png"
        className=" absolute -top-20 right-1/2 scale-50 overflow-hidden rotate-90"
      />
    </div>
  );
}

export default SpecialOffer;
