import React from 'react';

const ItemCard = (props) => {
  return(
    <div className='itemCard'>
      <img src={props.image} alt={props.name} />
      <div>
        <h1>{props.name}</h1>
        <button>Add to Cart</button>
      </div>
    </div>
  )
}

export default ItemCard;