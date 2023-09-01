import FollowAbout from "../components/FollowAbout";
import Footer from "../components/Footer";
import FooterLine from "../components/FooterLine";
import Navbar from "../components/Navbar";
import OffersAbout from "../components/OffersAbout";
import OurTeamAbout from "../components/OutTeamAbout";
import WhoAbout from "../components/WhoAbout";
import "../styles/About.scss";

//--------------------------------------------
function About() {
  return (
    <div className="Aboutt">
      <Navbar />
      <OffersAbout />
      <WhoAbout />
      <OurTeamAbout />
      <FollowAbout />
      <Footer/>
      <FooterLine/>
    </div>
  );
}

export default About;
