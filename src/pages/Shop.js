import Nav from "../components/Nav";
import ItemCard from '../components/ItemCard';
import Cart from "../components/Cart";

const Shop = (props) => {
  const productList = props.products;
  const addCart = props.addCart;

  return (
    <div className="container shopContainer">
      <Nav />
      <Cart />
      <div className="productContainer"> 
        {productList.map((product) => {
          return (
            <ItemCard image={product.image}
              name={product.name}
              addCart={addCart}
              key={product.id}/>
          )
        })}
      </div>
    </div>
  )

}

export default Shop;