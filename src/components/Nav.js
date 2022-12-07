import {Link} from "react-router-dom";

const Nav = (props) => {
  
  const cartToggle = () => {
    const cartSelector = document.querySelector('.shoppingCart');
    cartSelector.classList.toggle('visible')
  }

  return (
    <div className="navbar">
      <ul>
        <li className="navItem"><Link to="/">Home</Link></li>
        <li className="navItem"><Link to="/shop">Shop</Link></li>
        <li className="navItem"><button onClick={cartToggle}>Cart</button></li>
      </ul>
    </div>
  );
};

export default Nav;