import React from 'react';

const ItemCard = (props) => {
  const addCart = props.addCart;
  return(
    <div className='itemCard'>
      <img src={props.image} alt={props.name} />
      <div>
        <h1>{props.name}</h1>
        <h1>${props.price}</h1>
        <button onClick={addCart}>Add to Cart</button>
      </div>
    </div>
  )
}

export default ItemCard;