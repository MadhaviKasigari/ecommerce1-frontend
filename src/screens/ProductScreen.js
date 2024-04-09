import "./ProductScreen.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Star from "../components/Star";

// Actions
import { productDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";
import { addToWishList } from "../redux/actions/wishlistActions";

const ProductScreen = () => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(productDetails(id));
  }, [dispatch, id]);

  const productDetailsState = useSelector((state) => state.productDetails);
  console.log("getproductdetails:", productDetailsState);
  const { loading, error, product } = productDetailsState;

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    console.log(addToCartHandler);
    navigate("/cart");
  };

  const addToWishListHandler = () => {
    dispatch(addToWishList(product._id));
    console.log(product._id);
    navigate("/wishlist");
  };

  return (
    <div className="productscreen">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="productscreen_left">
            <div className="left_image">
              <img src={product.img} alt={product.name} />
            </div>
            <div className="left_info">
              <p className="left_name">{product.name}</p>
              <p>Price: ${product.price}</p>
              <p>
                countInStock: <span>{product.countInStock}</span>
              </p>
              <p>
                category: <span>{product.category}</span>
              </p>
              <p>
                <span>
                  <Star ratings={product.ratings} reviews={product.reviews} />
                </span>
              </p>
            </div>
          </div>
          <div className="productscreen_right">
            <div className="right_info">
              <p>
                Price : <span>${product.price}</span>
              </p>
              <p>
                Status:{" "}
                <span>
                  {product.countInStock > 0 ? "In Stock" : "Out of stock"}
                </span>
              </p>
              <p>
                Qty
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option keys={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                <button type="button" onClick={addToCartHandler}>
                  Add To Cart
                </button>
              </p>
              <p>
                <button type="button" onClick={addToWishListHandler}>
                  Add To Wishlist
                </button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductScreen;
