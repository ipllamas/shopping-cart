import {Link} from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar">
      <ul>
        <li className="navItem"><Link to="/">Home</Link></li>
        <li className="navItem"><Link to="/shop">Shop</Link></li>
      </ul>
    </div>
  );
};

export default Nav;