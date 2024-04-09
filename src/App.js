import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginForm from "./components/Login";
// import CategoryItem from "./components/categoryItem";

// components
import Navbar from "./components/Navbar";
import WishList from "./components/wishlist";
// import Backdrop from "./components/Backdrop";
import SideDrawer from "./components/SideDrawer";
import AddressBook from "./components/Addressbook";
import Login from "./components/Login";
import OrderTrack from "./components/OrderTrack";
import { useDispatch } from "react-redux";
import Signup from "./components/Signup";
// import Payment from "./components/payment";

function App() {
  const [sideToggle, setSideToggle] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <Router>
        {/* <Backdrop show={sideToggle} click={() => setSideToggle(false)} /> */}
        {sideToggle && (
          <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
        )}
        <Navbar click={() => setSideToggle(!sideToggle)} />;
        <main>
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/addressbook" element={<AddressBook />} />
            <Route exact path="/wishlist" element={<WishList />} />
            {/* <Route exact path="/payment" element={<Payment />} /> */}
            <Route exact path="/products/order" element={<OrderTrack />} />
            <Route exact path="/products/:id" element={<ProductScreen />} />
            {/* <Route
              exact
              path="/:category/category"
              // element={<CategoryItem />}
            /> */}
            <Route exact path="/cart" element={<CartScreen />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
