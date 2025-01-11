import { useState } from "react";
import Image from "next/image";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

interface Product {
  images: string[]; // Array of image URLs
  // other product details
}

const ProductDetailsSlider = ({ product }: { product: Product }) => {
              
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle next image
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === product?.images?.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle previous image
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? product?.images?.length - 1 : prevIndex - 1
    );
  };

  if (!product || !product.images || product.images.length === 0) {
    return <p>No images available</p>;
  }
  

  return (
    <div className="relative">
      {/* Main image display with zoom and pan */}
      <div className="md:w-1/2 relative border">
        <TransformWrapper
        //   defaultScale={1}
          minScale={1}
          maxScale={3}
          wheel={{ step: 0.1 }}
        //   zoomIn={{ step: 0.1 }}
        //   zoomOut={{ step: 0.1 }}
        >
          {({ zoomIn, zoomOut, resetTransform }) => (
            <>
              {/* Zoom in/out buttons */}
              <div className="absolute top-2 right-2 z-20  flex gap-5 items-center">
                <button
                  onClick={() => zoomIn()}
                  className="my-btn bg-gray-100"
                >
                  +
                </button>
                <button
                  onClick={() => zoomOut()}
                  className="my-btn bg-gray-100"
                >
                  -
                </button>
                <button
                  onClick={() => resetTransform()}
                  className="my-btn bg-gray-100" 
                >
                  Reset
                </button>
              </div>

              {/* Image with zooming and panning */}
           <TransformComponent>
                <div className="relative">
                  <Image
                    width={500} // Adjust width and height as needed
                    height={300}
                    alt={`Product Image ${currentIndex + 1}`}
                    src={product?.images[currentIndex] || ''}
                    className="w-full object-cover"
                  />
                </div>
              </TransformComponent>
            </>
          )}
        </TransformWrapper>
        {/* Left arrow button */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 my-btn rounded-full"
        >
          &lt;
        </button>
        {/* Right arrow button */}
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 my-btn rounded-full"
        >
          &gt;
        </button>
      </div>

      {/* Thumbnail preview */}
      <div className="flex space-x-2 mt-4">
        {product?.images?.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`${
              currentIndex === index ? "border-2 border-[#FF6A1A]" : "border"
            }`}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              width={80}
              height={50}
              className="cursor-pointer object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductDetailsSlider;
