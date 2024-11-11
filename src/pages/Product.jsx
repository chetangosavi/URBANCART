import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  async function fetchProductData() {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    } catch (error) {
      return <div>{error.message}</div>;
    }
  }

  useEffect(() => {
    fetchProductData();
  }, [id]);

  if (!product) {
    return <div className="text-red-500">Product not available</div>;
  }

  const { title, image, price, description } = product;

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  return (
    <div className="w-full flex justify-center mt-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row items-center md:items-start p-8 gap-10">
        {/* Product Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={image} alt="Product" className="object-contain h-72 w-72 rounded-md " />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p className="text-2xl font-semibold text-blue-500">${price}</p>
          <p className="text-gray-600 leading-relaxed">{description}</p>

          <hr className="my-4 border-gray-300" />

          {/* Quantity Selector and Add to Cart */}
          <div className="flex items-center gap-4">
            {/* Quantity Selector */}
            <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">
              <button
                onClick={handleDecrease}
                className="p-2 transition-colors"
              >
                <AiOutlineMinus />
              </button>
              <span className="px-4 py-2 text-lg font-semibold text-gray-700">{quantity}</span>
              <button
                onClick={handleIncrease}
                className="p-2 transition-colors"
              >
                <AiOutlinePlus />
              </button>
            </div>

            {/* Add to Cart Button */}
            <button className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-full shadow-md hover:from-orange-500 hover:to-orange-600 transition-transform transform hover:scale-105">
              <BsCart3 className="text-xl" />
              <span className="text-lg font-medium">Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
