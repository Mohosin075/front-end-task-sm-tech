import { useGetProductQuery } from "@/redux/api/baseApi";
import SectionTitle from "../shared/SectionTitle"
import { Product } from "@/types";
import ProductCard from "../ui/ProductCard";

function RelatedProduct() {
      const { data: products, isLoading } = useGetProductQuery("");
    
  return (
    <div  className="my-10 md:my-20">
        <SectionTitle
        title="Related products"
        description="We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients."
        subtitle="Our Product"
      />
      <div className="grid grid-cols-2  lg:grid-cols-4  gap-5 my-5">
        {products?.data?.slice(0, 4).map((product : Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default RelatedProduct