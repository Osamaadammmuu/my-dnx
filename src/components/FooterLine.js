import "../styles/footerLine.scss";
//----------------------------------------------
function FooterLine() {
  return (
    <section className="footer-line">
      <container className="container">
        <div className="con">
          <span className="copyright">
            Copyright © 2023 Brandstore. Powered by Brandstore.
          </span>
          <div className="icons">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-google"></i>
          </div>
        </div>
      </container>
    </section>
  );
}
export default FooterLine;
