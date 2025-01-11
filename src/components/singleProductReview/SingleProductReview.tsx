function SingleProductReview() {
  return (
    <div>
      <div className="text-xl flex items-center gap-6 mt-10">
        <button className="my-btn btn-sm bg-secondary text-white">
          Description
        </button>
        <button className="my-btn btn-sm">Reviews (1)</button>
      </div>
      <div className="mt-5 p-5 bg-gray-100 space-y-3 rounded-md text-xs md:text-sm text-justify">
        <p>
          Our coconuts are sustainably grown, ensuring the best quality and
          taste. Each coconut is handpicked and carefully prepared, offering you
          the freshest product possible. Rich in healthy fats, electrolytes, and
          essential nutrients, coconuts provide both hydration and nourishment.
          Whether you’re using the water, flesh, or milk, our coconuts bring
          versatility to your kitchen while supporting healthy living
        </p>
        <p>
          Perfect for smoothies, desserts, curries, and more — let the natural
          sweetness of the coconut elevate your recipes. Enjoy the tropical
          goodness in its purest form, directly from nature.
        </p>
      </div>
    </div>
  );
}

export default SingleProductReview;
