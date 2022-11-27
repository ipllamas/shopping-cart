import Nav from "../components/Nav";
import hero from "../assets/starrysky.jpg";
import stargaze from "../assets/stargazing.png";
import productList from "../assets/Products";

const Home = () => {
  return (
    <div className="container">
      <Nav />
      <div className="hero" style = {{backgroundImage: `url(${hero})`}}>
        <div className="heroText">
          <h1>Gaze</h1>
          <p>Stargazing for all levels of hobbyists</p>
        </div>
      </div>
      <div className="contentContainer">
        <div className="imageContainer">
          <div className="itemImage">
            <img src={productList[0][0]} alt={productList[0][1]}/>
          </div>
          <div className="itemImage">
          <img src={productList[1][0]} alt={productList[1][1]}/>
          </div>
          <div className="itemImage">
          <img src={productList[2][0]} alt={productList[2][1]}/>
          </div>
        </div>
        <div className="infoContainer">
          <img src={stargaze}/>
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