import Image from "next/image"
import { FaCartArrowDown } from "react-icons/fa6"
import { GiSelfLove } from "react-icons/gi"
import Rating from "../Rating/Rating"
import { useState } from 'react';
import { Category, Product } from "@/types";
import ProductDetails from "../productDetailsSlider/ProductDetailsSlider";


type BannerProps = {
  category : Category, product : Product
}

function SingleProductBanner({category, product}  : BannerProps) {
      const [rating, setRating] = useState(3);
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="md:w-1/2">
            <ProductDetails product={product}/>
          </div>
          <div className="md:w-1/2">
            <div className="space-y-1  mx-auto px-4">
              <h3 className="text-secondary text-sm lg:text-xl bg-[#749B3F1A] px-2 py-1 rounded-md inline-block font-semibold">
                {category?.categoryName}
              </h3>
              <h3 className="flex items-center gap-2">
                <Rating value={rating} onChange={setRating} />{" "}
                <span>{rating}(1 review)</span>
              </h3>
              <h1 className="text-xl md:text-3xl lg:text-5xl">
                {product?.productName}
              </h1>
              <p className="text-xs lg:text-sm text-[#4A4A52] text-justify">
                {product?.description}
              </p>
              <div className="text-xl flex items-center gap-6 pt-10">
                Quantity
                <div className="text-sm flex items-center">
                  <button className="my-btn">-</button>
                  <button className="my-btn font-bold">{1}</button>
                  <button className="my-btn">+</button> /kg
                </div>
              </div>
              <div className="text-xl flex items-center gap-6 pt-5">
                <button className="my-btn w-full">
                  <GiSelfLove />
                  <span className="ml-1">Save to Favorite</span>
                </button>
                <button className="my-btn w-full bg-primary text-white">
                  <FaCartArrowDown />
                  <span className="ml-1">Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
  )
}

export default SingleProductBanner