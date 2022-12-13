import Nav from "../components/Nav";
import hero from "../assets/starrysky.jpg";
import stargaze from "../assets/stargazing.png";
import Cart from "../components/Cart";

const Home = (props) => {
  const productList = props.products;
  const cartItems = props.cartItems
  const cartShown = props.cartShown;
  const toggleCart = props.toggleCart;

  return (  
    <div className="container">
      <Nav toggleCart={toggleCart}/>
      <Cart toggleCart={toggleCart} cartItems={cartItems} cartShown={cartShown}/>
      <div className="hero" style = {{backgroundImage: `url(${hero})`}}>
        <div className="heroText">
          <h1>Gaze</h1>
          <p>Stargazing for all levels of hobbyists</p>
        </div>
      </div>
      <div className="contentContainer">
        <div className="imageContainer">
          <div className="itemImage">
            <img src={productList[0].image} alt={productList[0].name}/>
          </div>
          <div className="itemImage">
          <img src={productList[1].image} alt={productList[1].name}/>
          </div>
          <div className="itemImage">
          <img src={productList[2].image} alt={productList[2].name}/>
          </div>
        </div>
        <div className="infoContainer">
          <img src={stargaze} alt="A man looking at the sky with a telescope"/>
          <div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nullam luctus massa nec erat venenatis sodales. Quisque 
            ac odio et libero sodales suscipit. Nulla non lobortis 
            lorem, at lacinia libero.
            </p>
          </div>
        </div>
      </div>
    </div>
    
  )

}

export default Home;