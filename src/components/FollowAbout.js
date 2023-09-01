import "../styles/FollowAbout.scss";
import BestProducts from "./BestProducts";
import Sale70off from "./Sale70Off";

//------------------------------------------
function FollowAbout() {
  return (
    <div className="S">
      <div className="follow">
        <div className="overlay">
          <div className="container">
            <div className="conten">
              <h4>Follow us</h4>
              <div className="icons">
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-google"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BestProducts/>
      <Sale70off/>
    </div>
  );
}
export default FollowAbout;
