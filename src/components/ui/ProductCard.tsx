import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";

function ProductCard({ product } : {product : Product}) {
  return (
    <div className="card bg-base-100 shadow-xl h-68  md:h-96">
      <figure className="relative w-full h-48 overflow-hidden bg-gray-100 rounded-t-xl">
        <Image
          src={product.images?.[0] || "https://via.placeholder.com/150"}
          alt={product.productName}
          fill
          className="object-cover"
        />
      </figure>
      <div className="p-2 md:card-body flex flex-col justify-between items-center text-center">
        <h2 className="card-title text-lg font-semibold">
          {product.productName}
        </h2>
        <p className="text-gray-500 text-sm">${product.price}/kg</p>
        <div className=" mt-auto w-full">
          <Link href={`/products/${product.id}`} className={"navLink-style"}>
            <button className="my-btn w-full hover:bg-primary hover:text-white">
              Add To Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
