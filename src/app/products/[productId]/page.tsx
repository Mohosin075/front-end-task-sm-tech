"use client";
import Rating from "@/components/Rating/Rating";
import { GiSelfLove } from "react-icons/gi";
import {
  useGetSingleCategoriesQuery,
  useGetSingleProductQuery,
} from "@/redux/api/baseApi";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaCartArrowDown } from "react-icons/fa6";
import SingleProductReview from "@/components/singleProductReview/SingleProductReview";
import SingleProductBanner from "@/components/singleProductBanner/SingleProductBanner";
import RelatedProduct from "@/components/relatedProduct/RelatedProduct";

type ProductDetailsProps = {
  params: Promise<{ productId: string }>;
};

const ProductDetails = ({ params }: ProductDetailsProps) => {
  const [productId, setProductId] = useState<string>("");

  useEffect(() => {
    const fetchProductId = async () => {
      const { productId } = await params;
      setProductId(productId);
    };
    fetchProductId();
  }, [params]);
  const { data, error, isLoading } = useGetSingleProductQuery({ productId });

  const { data: singleCategory, isLoading: categoryLoading } =
    useGetSingleCategoriesQuery({ categoryId: data?.data?.categoryId });

  if (isLoading || categoryLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-space my-10 md:my-20">
      {data?.data && <SingleProductBanner product={data?.data} category={singleCategory?.data}/>}

      <SingleProductReview />
      <RelatedProduct/>
    </div>
  );
};

export default ProductDetails;
