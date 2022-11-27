import Nav from "../components/Nav";
import hero from "../assets/starrysky.jpg";

const Home = () => {
  return (
    <div className="wrapper">
      <Nav />
      <div className="hero" style = {{backgroundImage: `url(${hero})`}}>
        <div className="heroText">
          <h1>Gaze</h1>
          <p>Stargazing for all levels of hobbyists</p>
        </div>
      </div>
      <div className="infoWrapper">
        <div className="infoImage">
          <h3>image here</h3>
          <p>placeholder text</p>
        </div>
        <div className="infoImage">
          <h3>image here</h3>
          <p>placeholder text</p>
        </div>
        <div className="infoImage">
          <h3>image here</h3>
          <p>placeholder text</p>
        </div>
      </div>
    </div>
    
  )

}

export default Home;