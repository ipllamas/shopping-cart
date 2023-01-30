import Nav from "../components/Nav";
import hero from "../assets/starrysky.jpg";
import ItemCard from '../components/ItemCard';
import Cart from "../components/Cart";

const Shop = (props) => {
  const productList = props.products;
  const cartItems = props.cartItems;
  const addToCart = props.addToCart;
  const cartShown = props.cartShown;
  const toggleCart = props.toggleCart;
  const adjustQuantity = props.adjustQuantity;

  return (
    <div className="container shopContainer" style ={{backgroundImage: `url(${hero})`}}>
      <Nav toggleCart={toggleCart}/>
      <Cart toggleCart={toggleCart} cartItems={cartItems}
      adjustQuantity={adjustQuantity} cartShown={cartShown}/>
      <div className="productContainer"> 
        {productList.map((product) => {
          return (
            <ItemCard image={product.image}
              name={product.name}
              price={product.price}
              addCart={() => addToCart(product)}
              key={product.id}/>
          )
        })}
      </div>
    </div>
  )

}

export default Shop;