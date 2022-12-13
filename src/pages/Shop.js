import Nav from "../components/Nav";
import ItemCard from '../components/ItemCard';
import Cart from "../components/Cart";

const Shop = (props) => {
  const productList = props.products;
  const cartItems = props.cartItems;
  const addToCart = props.addToCart;
  const cartShown = props.cartShown;
  const toggleCart = props.toggleCart;

  return (
    <div className="container shopContainer">
      <Nav toggleCart={toggleCart}/>
      <Cart toggleCart={toggleCart} cartItems={cartItems} cartShown={cartShown}/>
      <div className="productContainer"> 
        {productList.map((product) => {
          return (
            <ItemCard image={product.image}
              name={product.name}
              addCart={() => addToCart(product)}
              key={product.id}/>
          )
        })}
      </div>
    </div>
  )

}

export default Shop;