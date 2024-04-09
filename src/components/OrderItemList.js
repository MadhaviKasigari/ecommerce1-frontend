import "./OrderItemList.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const OrderItemList = ({
  item,
  qtyChangeHandler,
  removeHandler,
  productId,
}) => {
  console.log(item);
  useEffect(() => {
    fetch("/api/products/:id")
      .then((res) => res.json())
      .then((data) => dispatchEvent({ type: "load-products", data }));
  }, []);

  const { id } = useParams();

  return (
    <div className="orderitemlist">
      <div className="orderitemlist_image">
        <img src={item.img} alt={item.name} />
      </div>
      <Link to={`/products/${productId}`} className="orderitemlist_name">
        <p>{item.name}</p>
      </Link>
      <p className="orderitemlist_price">{item.price}</p>
      <select
        className="orderitemlist_select"
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
        className="orderitemlist_deleteBtn"
        onClick={() => removeHandler(item.product)}
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default OrderItemList;
