import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useState} from 'react';
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import productList from "./assets/Products";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartShown, setCartShown] = useState(false);
  const addToCart = () => {

  }

  const toggleCart = () => {
    setCartShown(prevState => !prevState);
  }



  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/"
            element={<Home
              products={productList}
              cartItems={cartItems}
              cartShown={cartShown}
              toggleCart={toggleCart} />}
          />
          <Route path="/shop"
            element={<Shop 
              products={productList}
              cartItems={cartItems}
              addToCart={addToCart}
              cartShown={cartShown}
              toggleCart={toggleCart} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
