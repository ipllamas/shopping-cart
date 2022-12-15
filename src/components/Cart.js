import { useState, useEffect } from "react";
import CartItemCard from './CartItemCard.js';

const Cart = (props) => {
  const toggleCart = props.toggleCart;
  const cartItems = props.cartItems;
  const cartShown = props.cartShown;
  const adjustQuantity = props.adjustQuantity;
  const [cartTotal, setCartTotal] = useState({totalQuantity: 0, totalPrice: 0});

  useEffect(() => {
    let [newQuantity, newPrice] = [0, 0];
    cartItems.forEach(item => {
      newQuantity += item.quantity;
      newPrice += item.price;
    });
    setCartTotal({totalQuantity: newQuantity, totalPrice: newPrice});
  }, [cartItems])

  if(!cartShown) {
    return null;
  }else {
    return (
      <div onClick={toggleCart} className='shoppingCart'>
        <div onClick={e => e.stopPropagation()} className="cartContainer">
          <h1>Your Cart</h1>
            <div className="cartList">
              {cartTotal.totalQuantity === 0 ? <p>Your cart is empty.</p> :
              cartItems.map(item => {
                if(item.quantity>0) {
                  /* return <p>{item.name}</p>; */
                  return <CartItemCard product={item}
                    adjustQuantity={adjustQuantity}
                    key={item.id} />
                } else{
                  return null;
                }
              }
              )}
            </div>
        </div>
      </div>
    )
  }  

}

export default Cart;