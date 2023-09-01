import { useDispatch, useSelector } from "react-redux";
import "../styles/card.scss";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { clear, deleteFromCard } from "../rtk/slices/card-slice";
import Sale70off from "../components/Sale70Off";
import Footer from "../components/Footer";
import FooterLine from "../components/FooterLine";
//-----------------------------------------------
function Card() {
  const cart = useSelector((state) => state.card);
  const dispatch = useDispatch();
  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);
  const multiplyPrice = cart.reduce((acc, product) => {
    acc = product.price * product.quantity;
    console.log(product.price);
    console.log(product.quantity);
    console.log(acc);
    return acc;
  }, 0);
  return (
    <div className="cards">
      <Navbar />
      <div className="all-cart">
        <container className="container">
          <h3>Cart</h3>
          <table className="all-table">
            <thead className="head-table">
              <tr className="thee">
                <th className="theq">picture</th>
                <th className="theq">product</th>
                <th className="theq">price</th>
                <th className="theq">quantity</th>
                <th className="theq">subtotal</th>
                <th className="theq">Delete</th>
              </tr>
            </thead>
            {cart.map((product) => (
              <tbody className="body-table" key={product.id}>
                <tr>
                  
                  <td className="td-image">
                    <img src={product.image} alt="0" />
                  </td>
                  <td>{product.title}</td>
                  <td>$ {product.price}</td>
                  <td>
                    <span className="quan">{product.quantity}</span>
                  </td>
                  <td>$ {multiplyPrice}</td>
                  <td>
                    <i
                      onClick={() => dispatch(deleteFromCard(product))}
                      class="mark-delete fa-sharp fa-solid fa-xmark"
                    ></i>
                  </td>
                </tr>
              </tbody>
            ))}
            <div className="capoun">
              <div className="capoun-content">
                <input placeholder="Caupon code" />
                <button>Apply coupen</button>
              </div>
              <button className="clearr" onClick={() => dispatch(clear())}>
                clear
              </button>
            </div>
          </table>
          <div className="checkout">
            <div className="content">
              <h4>Card totals</h4>
              <div className="tot">
                <span>subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="tot">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <Link className="checkk" to="checkout">
                checkout
              </Link>
            </div>
          </div>
        </container>
      </div>
      <Sale70off />
      <Footer />
      <FooterLine />
    </div>
  );
}
export default Card;
