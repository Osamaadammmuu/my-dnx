import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import FooterLine from "../components/FooterLine";
import Navbar from "../components/Navbar";
import Sale70off from "../components/Sale70Off";
import '../styles/checkout.scss';
function Checkout() {
  const cart = useSelector((state) => state.card);
  const showPrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);
  return <div className="check-o">
    <Navbar />
    <div className="main">
      <div className="container">
        <h4>checkout</h4>
        <div className="returnnn">
          <i class="fa-solid fa-box"></i>
          <span>Returning customer?</span>
          <button>Click here to login</button>
        </div>
        <div className="info-section">
          <div className="left-side">
            <h3 className="bill-s">Billing details</h3>
            <div className="first-last">
              <div className="s">
                <label className="lab">First name</label>
                <input type="text" />
              </div>
              <div className="s">
                <label className="lab">last name</label>
                <input type="text" />
              </div>
            </div>
            <div className="all-input">
              <label className="inp">Company name (optional)</label>
              <input type="text" />
              <label className="inp">Country / Region *</label>
              <input type="text" />
              <label className="inp">Street address *</label>
              <input className="sx" type="text" placeholder="House Number and Street Name" />
              <input type="text" placeholder="Apartement, Suite,unit, etc. (optional)" />
              <label className="inp">Town / City *</label>
              <input type="text" />
              <label className="inp">Postcode / ZIP *</label>
              <input type="text" />
              <label className="inp">Phone *</label>
              <input type="text" />
              <label className="inp">Email address *</label>
              <input type="text" />
            </div>
            <h3 className="heed-s">Additional information</h3>
            <label className="label-e">Order notes (optional)</label>
            <input className="input-e" placeholder="Notes about your order" />
          </div>
          <div className="right-side">
            <div className="content">
              <h3>your order</h3>
              <div className="recipe">
                <div className="rec">
                  <span className="span-title">product</span>
                  <span className="span-money">suptotal</span>
                </div>
                <div className="rec">
                  <span className="span-title"></span>
                  <span className="span-money"></span>
                </div>
                <div className="rec">
                  <span className="span-title">subtotal</span>
                  <span className="span-money">${showPrice.toFixed(2)}</span>
                </div>
                <div className="rec">
                  <span className="span-title">total</span>
                  <span className="span-money">${showPrice.toFixed(2)}</span>
                </div>
                <button className="place-holder">Place holder</button>
              </div>
            
            
            
            </div>

          </div>
        </div>
      </div>
    </div>
    <Sale70off/>
    <Footer/>
    <FooterLine/>
  </div>;
}

export default Checkout;