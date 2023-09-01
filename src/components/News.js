import "../styles/News.scss";
//--------------------------------------
function News() {
  return (
    <section className="news">
      <container className="container">
        <div className="ads">
          <div className="poster">
            <div className="overlay">
              <div className="conte">
                <h2>20% Off On Tank Tops</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  ac dictum.
                </p>
                <button>Shop now</button>
              </div>
            </div>
          </div>
          <div className="poster">
            <div className="overlay">
              <div className="conte">
                <h2>Latest Eyewear For You</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  ac dictum.
                </p>
                <button>Shop now</button>
              </div>
            </div>
          </div>
          <div className="poster">
            <div className="overlay">
              <div className="conte">
                <h2>Let's Lorem Suit Up!</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  ac dictum.
                </p>
                <button>Shop now</button>
              </div>
            </div>
          </div>
        </div>
      </container>
    </section>
  );
}
export default News;
