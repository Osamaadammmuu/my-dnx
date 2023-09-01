import Navbar from "../components/Navbar";
import News from "../components/News";
import Offers from "../components/Offers";
import Slider from "../components/Slider";
import Products from "../components/Products";
import Sale70off from "../components/Sale70Off";
import Footer from "../components/Footer";
import FooterLine from "../components/FooterLine";

//------------------------------------------------
function MainPage() {
  return (
    <div>
      <Navbar />
      <Offers />
      <Slider />
      <News/>
      <Products/>
      <Sale70off/>
      <Footer/>
      <FooterLine/>
    </div>
  );
}
export default MainPage;
