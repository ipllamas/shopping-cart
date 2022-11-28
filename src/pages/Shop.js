import Nav from "../components/Nav";
import ItemCard from '../components/ItemCard';
import productList from "../assets/Products";

const Shop = () => {


  return (
    <div className="container shopContainer">
      <Nav />
      <div className="productContainer">
        {productList.map((product) => {
          return (
            <ItemCard image={product.image} name={product.name} key={product.id}/>
          )
        })}
      </div>
    </div>
  )

}

export default Shop;