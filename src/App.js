import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useState} from 'react';
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import productList from "./assets/Products";

const App = () => {
  const INITIAL_CART = [];
  for (let i=0; i<productList.length; i++) {
    INITIAL_CART.push(productList[i]);
    INITIAL_CART[i].quantity = 0;
  }

  const [cartItems, setCartItems] = useState(INITIAL_CART);
  const [cartShown, setCartShown] = useState(false);

  const adjustQuantity = (targetProduct, quantityChange) => {
    let newQuantity = targetProduct.quantity + quantityChange;
    if (newQuantity < 0) {
      newQuantity = 0;
    }

    //Need to make a shallow copy of the cartItems array
    let newCart = cartItems.map(item => {
      if (item.id === targetProduct.id) {
        return {...item, quantity: newQuantity}
      } else {
        return item;
      }
    })

    setCartItems(newCart);
  }

  const addToCart = (productToAdd) => {
    const product = cartItems.find(item => item.name === productToAdd.name);
    adjustQuantity(product, 1);
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
