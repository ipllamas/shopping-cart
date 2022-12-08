import {Link} from "react-router-dom";

const Nav = (props) => {
  
  const toggleCart = props.toggleCart;

  return (
    <div className="navbar">
      <ul>
        <li className="navItem"><Link to="/">Home</Link></li>
        <li className="navItem"><Link to="/shop">Shop</Link></li>
        <li className="navItem"><button onClick={toggleCart}>Cart</button></li>
      </ul>
    </div>
  );
};

export default Nav;