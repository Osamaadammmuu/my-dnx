import Navbar from "../components/Navbar";
import BackgroundContact from "../components/BackgroundConatct";
import ContentProduct from "../components/ContentProblem";
import Sale70off from '../components/Sale70Off';
import Footer from '../components/Footer';
import FooterLine from '../components/FooterLine';
import '../styles/contact.scss';
//----------------------------------------------
function Contact() {
  return <div className="contact-c">
    <Navbar/>
    <BackgroundContact/>
    <ContentProduct/>
    <Sale70off/>
    <Footer/>
    <FooterLine/>
  
  </div>;
}
export default Contact;
