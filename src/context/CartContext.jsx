import { createContext, useEffect, useState } from "react";


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [productData, setProductData] = useState(()=>{
    const storedcart = localStorage.getItem("cart");
    return storedcart ? JSON.parse(storedcart):[];
  });

  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(productData))
  },[productData]);


  const setProduct = (product, quantity) => {
    setProductData((prev) => {
      const existingProductIndex = prev.findIndex(item => item.item.id === product.id);
  
      if (existingProductIndex !== -1) {
        const updatedProducts = [...prev];
        updatedProducts[existingProductIndex] = {
          ...updatedProducts[existingProductIndex],
          quantity: updatedProducts[existingProductIndex].quantity + quantity,
        };
        return updatedProducts;
      } else {
        return [...prev, { item: product, quantity }];
      }
    });
  };
  
  
//   console.log(productData);

  return (
    <CartContext.Provider value={{ productData, setProductData, setProduct }}>
      {children}
    </CartContext.Provider>
  );
};

