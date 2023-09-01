import { useEffect } from "react";
import "../styles/products.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../rtk/slices/product-slice";
import { addToCard } from "../rtk/slices/card-slice";
import SpecialProducts from "./SpecialProducts";
import BestProducts from "./BestProducts";

//--------------------------------------
function Products() {
  const products = useSelector((state) => state.products);
  console.log(products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <section className="products">
      <container className="container">
        <h1 className="head-one">Featured Products</h1>
        <div className="All-data">
          {products.map((product) => (
            <div className="data" key={product.id}>
              <span className="bagmark" onClick={() => dispatch(addToCard(product))}><i class="fa-solid fa-bag-shopping"></i></span>
              <img src={product.image} alt="1" />
              <h4 className="tit">{product.title}</h4>
              <span>{product.category}</span>
              <p>$ {product.price}</p>
            </div>
          ))}
        </div>
        <SpecialProducts/>
        <BestProducts/>
      </container>
    </section>
  );
}
export default Products;
