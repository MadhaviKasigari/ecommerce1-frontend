import * as actionTypes from "../constants/cartConstants";
import axios from "axios";

const getApiBaseUrl = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  // console.log(`API URL: ${apiUrl}`);
  // Replace 'YOUR_API_KEY' with your actual API key parameter name in the API endpoint
  return apiUrl;
};

// export const addToOrderTrack = (id, qty) => async (dispatch, getState) => {
//   const { data } = await axios.get(`${getApiBaseUrl()}/${id}`);
//   console.log(data);

//   dispatch({
//     type: actionTypes.ADD_TO_ORDERTRACK,
//     payload: {
//       product: data._id,
//       name: data.name,
//       img: data.img,
//       price: data.price,
//       countInStock: data.countInStock,
//       qty,
//     },
//   });
//   localStorage.setItem(
//     "ordertrack",
//     JSON.stringify(getState().ordertrack.ordertrackItems)
//   );
// };

export const addToOrderTrack = (productId) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post(
      "http://localhost:8000/api/products/order",
      { productId }
    );
    console.log(data);
    dispatch({
      type: actionTypes.ADD_TO_ORDERTRACK_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.ADD_TO_ORDERTRACK_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
