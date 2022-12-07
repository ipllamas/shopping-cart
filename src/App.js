import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useState} from 'react';
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import productList from "./assets/Products";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = () => {

  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"
          element={<Home products={productList} cartItems={cartItems} />}
        />
        <Route path="/shop"
          element={<Shop products={productList} cartItems={cartItems} addCart={addToCart}/>}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
