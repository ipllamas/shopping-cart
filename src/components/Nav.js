import {Link} from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar">
      <ul>
        <li className="nav-item"><Link to="/">Home</Link></li>
        <li className="nav-item"><Link to="/shop">Shop</Link></li>
      </ul>
    </div>
  );
};

export default Nav;