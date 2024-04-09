import "./wishlist.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import WishListItem from "./wishlistitem";
import {
  addToWishList,
  removeFromWishList,
} from "../redux/actions/wishlistActions";

const WishList = () => {
  // const [wishlistItems, setWishlistItems] = useState([]);
  const [totalBill, setTotalBill] = useState(0);
  const dispatch = useDispatch();

  const wishList = useSelector((state) => state.wishlist);
  const { wishlistItems } = wishList;

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToWishList(id, qty));
  };

  const removeHandler = (id) => {
    dispatch(removeFromWishList(id));
  };

  const getWishListCount = () => {
    return wishlistItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const calculateTotalBill = (wishlistItems) => {
    let totalBill = 0;
    wishlistItems.forEach((item, price) => {
      totalBill += item.price * item.qty + price;
    });
    return totalBill;
  };

  // useEffect(() => {
  //   // Fetch the wishlist items from the server
  //   const fetchWishlistItems = async () => {
  //     const response = await fetch("/api/wishlist");
  //     const data = await response.json();
  //     setWishlistItems(data);
  //     console.log(fetchWishlistItems);
  //   };

  //   fetchWishlistItems();
  // }, []);

  useEffect(() => {
    console.log(wishlistItems);
    // Calculate the total bill
    setTotalBill(calculateTotalBill(wishlistItems));
  }, [wishlistItems]);

  return (
    <div className="wishlist">
      <div className="wishlist_left">
        <h2>WishList</h2>
        {/* {!Array.isArray(wishlistItems) ? ( */}
        {wishlistItems && wishlistItems.length === 0 ? (
          <div>
            No items in wishlist <Link to="/">GO Back</Link>
          </div>
        ) : (
          wishlistItems &&
          wishlistItems.map((item) => (
            <WishListItem
              key={item.product}
              item={item}
              qtyChangeHandler={qtyChangeHandler}
              removeHandler={removeHandler}
            />
          ))
        )}
      </div>
      <div className="wishlist_right">
        <div className="wishlist_info">
          <p>Subtotal ({getWishListCount()}) items</p>
          {/* <p>${getWishListSubTotal().toFixed(2)}</p> */}
          <p>Total Bill: ${totalBill}</p>
        </div>
      </div>
    </div>
  );
};
export default WishList;
