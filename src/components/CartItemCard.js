const CartItemCard = (props) => {
  const product = props.product
  const adjustQuantity = props.adjustQuantity;
  const className = props.className
  console.log('rendered');

  const buttonAdjustHandler = (operation) => {
    if (operation === "increment") { //increment button
      adjustQuantity(product, 1);
      //product.quantity++;
    } else if(product.quantity !== 1 && operation === "decrement") { //decrement button, without deleting if at 1
      adjustQuantity(product, -1);
      //product.quantity--;
    } else { //delete button was pressed
      adjustQuantity(product, -product.quantity);
    }
  }

  return (
    <div className={className}>
      <div className="leftCartDisplay">
        <button className="deleteItemBtn"
          onClick={() => buttonAdjustHandler('delete')}>D</button>
        <div className="cartItemDisplay">
          <img src={product.image} alt={product.name} />
          <p>{product.name}</p>
        </div>
      </div>
      <div className="rightCartDisplay">
      <div className="quantityControl">
        <button onClick={() => buttonAdjustHandler('decrement')}>&lt;</button>
        <p>{product.quantity}</p>
        <button onClick={() => buttonAdjustHandler('increment')}>&gt;</button>
      </div>
      <p className="itemPrice">${product.quantity*product.price}</p>
      </div>
      

      
  </div>
    
  )
}

export default CartItemCard;