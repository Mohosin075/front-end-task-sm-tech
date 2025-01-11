"use client"
import SectionTitle from "@/components/shared/SectionTitle";
import ProductCard from "@/components/ui/ProductCard";
import { useGetCategoriesQuery, useGetProductQuery } from "@/redux/api/baseApi";
import { Category, Product } from "@/types";
import Link from "next/link";
import { useState } from "react";

function ProductsPage() {
  const { data: products, isLoading } = useGetProductQuery("");
  const { data: categories } = useGetCategoriesQuery("");
  const [activeTab, setActiveTab] = useState("");

  const handleTabClick = (categoryName: string) => {
    setActiveTab(categoryName);
  };
  return (
    <div className="my-10 container-space ">
      <SectionTitle
        title="Our Fresh Products"
        description="We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients."
        subtitle="Our Product"
      />
      {/* tabs */}
      <div className="md:w-6/12 mx-auto mt-6 px-4">
        <div role="tablist" className="tabs tabs-lifted">
          <a
            role="tab"
            className={`tab ${
              activeTab === "" ? "tab-active bg-secondary" : ""
            }`}
            onClick={() => handleTabClick("")}
          >
            All
          </a>
          {categories?.data?.map((cat : Category) => (
            <a
              key={cat.id}
              role="tab"
              className={`tab ${
                activeTab === cat.categoryName ? "tab-active" : ""
              }`}
              onClick={() => handleTabClick(cat.categoryName)}
            >
              {cat.categoryName}
            </a>
          ))}
        </div>
      </div>
      {/* products */}
      <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4  gap-5 my-5">
        {products?.data?.map((product : Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div>
      </div>
    </div>
  );
}

export default ProductsPage;
