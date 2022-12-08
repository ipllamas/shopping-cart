const Cart = (props) => {
  //const cartItems = props.cartItems;
  const cartShown = props.cartShown;

  if(!cartShown) {
    return null;
  }else {
    return (
      <div className='shoppingCart'>
        <div className="cartContainer">
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