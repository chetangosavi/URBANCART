import React, { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartItem = ({ product }) => {
  const { setProductData } = useContext(CartContext);

  const removeItem = () => {
    setProductData((prev) =>
      prev.filter((item) => item.item.id !== product.item.id)
    );
    toast.success('Product Removed Successfully!',{ position:'bottom-right'})
   
  };

  return (
    <div className="relative w-full bg-white p-4 mt-5 rounded-lg shadow-md">
      {/* Delete Icon */}
      <button
        onClick={removeItem}
        className="absolute top-2 right-2 border p-2 hover:text-red-700"
      >
        <FaTrashAlt />
      </button>

      <div className="flex items-center">
        {/* Product Image */}
        <div className="w-24 h-24 rounded overflow-hidden mr-4">
          <img
            className="w-full h-full object-contain"
            src={product.item.image}
            alt={product.item.title}
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-between flex-1">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              {product.item.title}
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              Category: {product.item.category}
            </p>
          </div>

          {/* Price and Quantity */}
          <div className="mt-3 flex items-center justify-between">
            <p className="text-lg font-bold text-blue-600">
              ${product.item.price}
            </p>
            <p className="text-gray-600">Quantity: {product.quantity}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
