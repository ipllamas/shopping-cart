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
          <div className="cartList">
            {cartTotal.totalQuantity === 0 ?
              <p className="emptyMessage">Your cart is empty.</p> :
              <div>
                <h1 className="cartHeader">Your Cart</h1>
                <p>Item</p>
                <p>Quantity</p>
                <p>Price</p>
                {cartItems.map(item => {
                  if(item.quantity>0) {
                    return <CartItemCard className="cartItemContainer" product={item}
                      adjustQuantity={adjustQuantity}
                      key={item.id} />
                  } else{
                    return null;
                  }
                })}
                <div className="cartFooter">
                  <button>CHECKOUT</button>
                  <p>Total: ${cartTotal.totalPrice}</p>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    )
  }  

}

export default Cart;