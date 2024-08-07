import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./products";
import ProductDetails from "./productDetails";
import { createContext, useState } from "react";
import Home from "./Home";
import Navbar from "./navbar";
import Cart from "./cart";
import Nopage from "./nopage";
import Checkout from "./checkout";

export const itemContext = createContext();

function App() {
  const [cart, setCart] = useState([]);

  return (
    <itemContext.Provider value={{ cart, setCart }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="*" element={<Nopage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </itemContext.Provider>
  );
}

export default App;
