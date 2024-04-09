import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// import storage from "redux-persist/lib/storage";

//  Reducers
import { getcatalogReducer } from "./reducers/catalogReducers";
import { cartReducer } from "./reducers/cartReducers";
import { wishlistReducer } from "./reducers/wishlistReducers";
import {
  getProductDetailsReducer,
  getProductsReducer,
  // getProducts,
} from "./reducers/productReducers";
import { addToOrderTrackReducer } from "./reducers/ordertrackReducers";
import { securityReducer } from "./reducers/securityReducers";

var allReducers = combineReducers({
  cart: cartReducer,
  products: getProductsReducer,
  productDetails: getProductDetailsReducer,
  wishlist: wishlistReducer,
  category: getcatalogReducer,
  ordertrack: addToOrderTrackReducer,
  login: securityReducer,
});

const middleware = [{ thunk }];

const categoryFromLocalStorage = localStorage.getItem("category")
  ? JSON.parse(localStorage.getItem("category"))
  : [];
const INITIAL_STATE = {
  category: {
    categoryItems: categoryFromLocalStorage,
  },
};
const store = legacy_createStore(
  allReducers,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
