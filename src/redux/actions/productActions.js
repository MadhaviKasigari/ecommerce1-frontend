import * as actionTypes from "../constants/productsConstants";
import axios from "axios";
// import { getCategories } from "../components/Product";
// import { useParams } from "react-router-dom";

// Define a function to get the API base URL including the API key
const getApiBaseUrl = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  // console.log(`API URL: ${apiUrl}`);
  // Replace 'YOUR_API_KEY' with your actual API key parameter name in the API endpoint
  return apiUrl;
};
// const { id } = useParams();

export const products = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST });
    const { data } = await axios.get(getApiBaseUrl());
    console.log(data);
    dispatch({
      type: actionTypes.GET_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const productDetails = (id) => async (dispatch) => {
  console.log(id);

  try {
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_REQUEST,
    });

    const { data } = await axios.get(`${getApiBaseUrl()}/${id}`);
    console.log(data);
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removeProductDetails = () => (dispatch) => {
  dispatch({
    type: actionTypes.GET_PRODUCT_DETAILS_RESET,
  });
};
