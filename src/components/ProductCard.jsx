import React, { useContext,useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { CartContext } from '../context/CartContext';
import { toast } from "react-toastify";



const ProductCard = ({ product }) => {

  const {setProduct } = useContext(CartContext);
  

  const [isShowing, setIsShowing] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  if (!product) {
    return <div className="text-red-500">Product not available</div>;
  }

  const { title, image, price, rating, description } = product;

  const handleIncrease = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };

  return (
    <div className="shadow bg-white p-4 space-y-2 items-start flex flex-col justify-between border transition-all duration-300 hover:scale-105 rounded-md relative">
      {/* image */}
      <div className="w-full h-28">
        <img
          onClick={() => navigate(`/product/${product.id}`)}
          src={product.image}
          alt="Product Image"
          className="w-full h-full object-contain cursor-pointer"
        />
      </div>
      {/* favourite Icon */}
      <div className="absolute right-2 top-0 text-xl">
        <div><CiHeart /></div>
      </div>
      {/* titile */}
      <div>
        <h1 className="font-bold text-sm">{product.title}</h1>
      </div>

      {/* Price and Rating */}
      <div className="flex items-center justify-between w-full">
        <div className="text-xl text-blue-600">${product.price}</div>
        <div className="flex items-center ">
          <FaStar className="text-yellow-500" />
          <span className="ml-1 text-sm">{product.rating.rate}</span>
        </div>
      </div>

      {/* Description */}
      <div className="">
        {isShowing ? (
          <>
            <div>
              <p className="text-xs">
                {product.description.slice(0, 120)}...
                <span
                  className="text-blue-500  cursor-pointer ml-2"
                  onClick={() => setIsShowing(!isShowing)}
                >
                  show more
                </span>
              </p>
            </div>
          </>
        ) : (
          <>
            <div>
              <p className="text-xs">
                {product.description}...
                <span
                  className="text-blue-500 cursor-pointer ml-2"
                  onClick={() => setIsShowing(!isShowing)}
                >
                  show less
                </span>
              </p>
            </div>
          </>
        )}
      </div>

      {/* Button - Addtocart */}
      <div className="self-baseline flex justify-between w-full ">
        <button onClick={()=>{setProduct(product,quantity); toast.success("Product Added Successfylly",{
          position: "bottom-right",
          autoClose: 5000
        })}} className="bg-blue-500 text-white py-2 px-4 rounded-full shadow hover:bg-orange-500">
          <BsCart3 />
        </button>
        {/* Quantity Selector */}
        <div className="flex items-center space-x-2 text-xs">
          <button
            onClick={handleDecrease}
            className="p-1 border rounded-full hover:bg-gray-200 transition"
          >
            <AiOutlineMinus />
          </button>
          <span className="text-sm">{quantity}</span>
          <button
            onClick={handleIncrease}
            className="p-1 border rounded-full hover:bg-gray-200 transition"
          >
            <AiOutlinePlus />
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default ProductCard;
