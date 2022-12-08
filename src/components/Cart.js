const Cart = (props) => {
  //const cartItems = props.cartItems;
  const toggleCart = props.toggleCart;
  const cartShown = props.cartShown;

  if(!cartShown) {
    return null;
  }else {
    return (
      <div onClick={toggleCart} className='shoppingCart'>
        <div onClick={e => e.stopPropagation()} className="cartContainer">
          <h1>Your Cart</h1>
          {/* <div className="cartList">
            <p>{cartItems.length === 0 && 'Your cart is empty.'}</p>
          </div> */}
        </div>
      </div>
    )
  }  

}

export default Cart;