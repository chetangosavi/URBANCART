import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";

const Cart = () => {
  const { productData } = useContext(CartContext);
  console.log(productData);

  const total = productData.reduce((acc, cur) => {
    if ("item" in cur && "price" in cur.item && "quantity" in cur) {
      return acc + cur.item.price * cur.quantity;
    }
    return acc;
  }, 0).toFixed(2);

  return (
    <div className="w-full ">
      <div className="max-w-[1200px] grid grid-cols-12 mx-auto gap-3">
        {productData.length > 0 ? (
          <>
            <div className="h-screen w-full  col-span-9">
              {productData.map((elm, idx) => (
                <CartItem key={idx} product={elm} />
              ))}
            </div>
            <div className="col-span-3">
              <div className="bg-white mt-5 p-4 rounded-lg">
                <div className=" flex gap-3">
                  Subtotal: <p className="font-bold text-blue-500">${total}</p>
                </div>
                <Link to="/checkout">
                  <div className="bg-blue-500 text-center p-1 text-white rounded-full mt-2 hover:bg-orange-400 transition-all duration-200">
                    <button>Proceed to Buy</button>
                  </div>
                </Link>
              </div>
            </div>
          </>
        ) : (
          <div className="col-span-12 h-screen">
            <div className="flex justify-center items-center mt-72 gap-2 text-xl ">
              <p>Your cart is empty!</p>
              <span>
                <BsCart3 />
              </span>
            </div>
            <div className="flex justify-center items-center text-sm">
              <p>Explore our wide selection and find something you like</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
