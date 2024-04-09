import * as actionTypes from "../constants/cartConstants";
import axios from "axios";

const getApiBaseUrl = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  // console.log(`API URL: ${apiUrl}`);
  // Replace 'YOUR_API_KEY' with your actual API key parameter name in the API endpoint
  return apiUrl;
};

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`${getApiBaseUrl()}/${id}`);
  console.log(data);

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      product: data._id,
      name: data.name,
      img: data.img,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });
  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });
  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
