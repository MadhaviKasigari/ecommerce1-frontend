import "./Product.css";
import { Link } from "react-router-dom";
// import { Route, Redirect } from "react-router-dom";

const Product = ({ img, name, price, category, countInStock, productId }) => {
  return (
    <div className="product">
      <img src={img} alt={name} />
      <div className="product_info">
        <p className="product_name">{name}</p>
        <p className="product_price">{price}</p>
        <p className="product_category">{category}</p>
        <p className="product_countinstock">{countInStock}</p>
        <Link to={`/products/${productId}`} className="product_button">
          View
        </Link>

        {/* <Link to={`/product?redirect=${productId.pathname}${productId.search}`}>
          View
        </Link> */}
      </div>
    </div>
  );
};

export default Product;
