import "../styles/footer.scss";
//-------------------------------------------
function Footer() {
  return (
    <section className="footer">
      <container className="container">
        <div className="content">
          <div className="dnkk">
            <img alt="0" src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/logo@2x-free-img.png"/>
            <h3>The best look anytime, anywhere.</h3>
          </div>
          <div className="same-div">
            <h3>for her</h3>
            <p>Women Jeans</p>
            <p>Tops and Shirts</p>
            <p>Women Jackets</p>
            <p>Heels and Flats</p>
            <p>Women Accessories</p>
          </div>
          <div className="same-div">
            <h3>for him</h3>
            <p>Men Jeans</p>
            <p>Men Shirts</p>
            <p>Men Shoes</p>
            <p>Men Accessories</p>
            <p>Men Jackets</p>
          </div>
          <div className="sub">
            <h3>Subscribe</h3>
            <input type="email" placeholder="Your email address ..." />
            <button>Subscribe</button>
          </div>
        </div>
      </container>
    </section>
  );
}
export default Footer;
