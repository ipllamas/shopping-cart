const CartItemCard = (props) => {
  const product = props.product
  const adjustQuantity = props.adjustQuantity;
  console.log('rendered');

  const buttonAdjustHandler = (operation) => {
    if (operation === "increment") { //increment button
      adjustQuantity(product, 1);
      //product.quantity++;
    } else if(product.quantity !== 1) { //decrement button, without deleting if at 1
      adjustQuantity(product, -1);
      //product.quantity--;
    } else { //delete button was pressed
      adjustQuantity(product, -product.quantity);
    }
  }

  return (
    <div className="cartItemContainer">
      <div>
        <img src={product.image} alt={product.name} />
        <h1>{product.name}</h1>
      </div>
      <button onClick={() => buttonAdjustHandler('decrement')}>&lt;</button>
      <p>{product.quantity}</p>
      <button onClick={() => buttonAdjustHandler('increment')}>&gt;</button>
      <p>${product.quantity*product.price}</p>
      <button onClick={() => buttonAdjustHandler('delete')}>Delete</button>
  </div>
    
  )
  
}

export default CartItemCard;