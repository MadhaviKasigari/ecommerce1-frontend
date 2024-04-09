import * as actionTypes from "../constants/cartConstants";
import axios from "axios";

const getApiBaseUrl = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  // console.log(`API URL: ${apiUrl}`);
  // Replace 'YOUR_API_KEY' with your actual API key parameter name in the API endpoint
  return apiUrl;
  console.log(getApiBaseUrl);
};

export const addToWishList = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`${getApiBaseUrl()}/${id}`);
  console.log(data);

  dispatch({
    type: actionTypes.ADD_TO_WISHLIST,
    payload: {
      product: data._id,
      name: data.name,
      img: data.img,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });
  localStorage.setItem(
    "wishlist",
    JSON.stringify(getState().wishlist.wishlistItems)
  );
};

export const removeFromWishList = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_WISHLIST,
    payload: id,
  });
  localStorage.setItem(
    "wishlist",
    JSON.stringify(getState().wishlist.wishlistItems)
  );
};
