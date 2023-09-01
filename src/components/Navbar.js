import { Link } from "react-router-dom";
import "../styles/Navbar.scss";
import { useSelector } from "react-redux";
//----------------------------------------------------
function Navbar() {
  const cart = useSelector((state) => state.card);
  const showPrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);
  return (
    <div className="Nav">
      <Link to="/" className="dnk">
        <img className="dnkk" src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/logo1-free-img.png" alt="0" />
      </Link>
      <div className="menu-bar">
        <i class="fa-solid fa-bars"></i>
      </div>
      <ul className="list">
        <Link className="linkk" to="/">
          Home
        </Link>
        <Link className="linkk" to="/About">
          About
        </Link>
        <Link className="linkk" to="/Contact">
          Contact us
        </Link>
        <Link className="linkk linkk-price" to={"/card"}>
          <span className="ed">$ {showPrice.toFixed(2)}</span>
          <div className="ca">
            <i class="fa-solid fa-bag-shopping"></i>
            <span className="so">{cart.length}</span>
          </div>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
