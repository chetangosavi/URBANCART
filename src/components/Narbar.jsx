import React, { useContext } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import DropdownMenu from "./Dropdown";

const Narbar = () => {
  const { productData } = useContext(CartContext);
  console.log(productData.length);
  const categories = ["Electronics", "Clothing", "Home", "Sports"];

  return (
    <div className="shadow-lg bg-white sticky top-0 z-10">
      <div className="max-w-[1600px] m-auto flex justify-between py-3 px-20 items-center gap-3">
        <Link to="/">
          <h1 className="text-[28px] font-extrabold">URBANCART</h1>
        </Link>
        <div className="relative">
          <input
            type="text"
            placeholder="Search for products, brands, and more..."
            className="px-4 py-2 rounded-full w-[600px] border"
          />
          <IoSearchOutline className="absolute bottom-3 right-8" />
        </div>
        <div className="text-xl cursor-pointer relative flex items-center gap-6">
          <div className="flex gap-8 text-[16px] ">
            <a className="hover:text-blue-600 uppercase">Favourites</a>
            <DropdownMenu categories={categories} />
          </div>
          <Link to="/cart">
            <BsCart3/>
            {
              productData.length>0 ? <div className="absolute top-[-20px] right-[-10px] h-[18px] w-auto rounded-full p-2 text-xs">{ productData.length }</div> : ''
            }
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Narbar;
