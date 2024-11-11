import "./App.css";
import Navbar from "./components/Narbar";
import { Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Dashboard from "./pages/Dashboard";
import Cart from "./pages/Cart";
import Fotter from "./components/Fotter";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      {/* <Fotter/> */}
    </>
  );
}

export default App;
