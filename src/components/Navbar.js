import "./Navbar.css";
import { Link } from "react-router-dom";
// import Input from "./Input";
// import Product from "./Product";
// import Category from "./Category";
// import { useEffect, useReducer } from "react";
import { useSelector } from "react-redux";

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "load-products":
//       return { ...state, products: action.data };
//     default:
//       throw new Error();

//     case "set-search-category":
//       return {
//         ...state,
//         searchCategory: action.category,
//       };
//   }
// };

const Navbar = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
  };

  // const [state, dispatch] = useReducer(reducer, initialState);
  // const showProduct = (productId) =>
  //   dispatch({ type: "show-product", productId });

  // useEffect(() => {
  //   fetch(`/:category/${state.searchCategory}`)
  //     // fetch(`https://localhost:3000/products/category/${state.searchKeyword}`)
  //     .then((res) => res.json())
  //     .then((data) => dispatch({ type: "load-products", data: data.products }));
  // }, [state.searchCategory]);
  // const filterCategories = (category) =>
  //   dispatch({ type: "set-search-category", category });

  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <h2>shopplusPlus</h2>
      </div>

      <ul className="navbar_links">
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/addressbook">AddressBook</Link>
        </li>
        <li>
          <Link to="/products/order">OrderTrack</Link>
        </li>
        <li>
          <Link to="/wishlist">WishList</Link>
        </li>
        <li>
          <Link to="/cart" className="cart_link">
            <span>
              <i className="fas fa-shopping-cart"></i>
              Cart
              <span className="cartlogo_badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">shop</Link>
        </li>
      </ul>

      <div className="hamburger_menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};
export default Navbar;
