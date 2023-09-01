import TypeComplaints from "./TypeComplaints";
import '../styles/content-product.scss';
import InputContact from "./InputContact";
//---------------------------------------------
function ContentProduct() {
  return <div className="content-contact">
    <div className="container">
      <span className="con-con">Have any queries?</span>
      <h4 className="head-contact">We're here to help.</h4>
      <TypeComplaints />
      <InputContact/>
    </div>
  </div>;
}

export default ContentProduct;