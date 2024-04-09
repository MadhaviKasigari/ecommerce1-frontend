// import { useEffect } from "react";
import { removeFromWishlist } from "../redux/actions/cartActions";
import "./wishlistitem.css";
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";

const WishListItem = ({ item, qtyChangeHandler, removeHandler }) => {
  console.log(item);
  // useEffect(() => {
  //   fetch("/api/products/:id")
  //     .then((res) => res.json())
  //     .then((data) => dispatchEvent({ type: "load-products", data }));
  // }, []);

  // const { id } = useParams();

  return (
    <div className="wishlistitem">
      <div className="wishlistitem_image">
        <img src={item.img} alt={item.name} />
      </div>
      <Link to={`/products/${item.product}`} className="wishlistitem_name">
        <p>{item.name}</p>
      </Link>
      <p className="wishlistitem_price">{item.price}</p>
      <select
        className="wishlistitem_select"
        value={item.qty}
        onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
      >
        {[...Array(item.countInStock).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </select>
      <button
        className="wishlistitem_deleteBtn"
        onClick={() => removeHandler(item.product)}
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default WishListItem;
