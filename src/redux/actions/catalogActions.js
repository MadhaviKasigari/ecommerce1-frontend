import * as actionTypes from "../constants/catalogConstants";
import * as productactionTypes from "../constants/productsConstants";
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

export const setFilter = (category) => async (dispatch, getState) => {
  try {
    console.log("in Set filter");
    const { data } = await axios.get(`${getApiBaseUrl()}/category/${category}`);
    console.log("setfilterproduct:", data);

    dispatch({
      type: productactionTypes.GET_PRODUCTS_SUCCESS,
      payload: data,
      // payload: {
      //   product: data[0]._id,
      //   name: data[0].name,
      //   img: data[0].img,
      //   price: data[0].price,
      //   category: data[0].category,
      //   countInStock: data.countInStock,
      // },
    });
  } catch (error) {
    console.log("Error fetching products:", error);
    // localStorage.setItem(
    //   "category",
    //   JSON.stringify(getState().category.categoryItems)
    // );
  }
};

export const clearFilter = (id) => async (dispatch, getState) => {
  console.log(id);
  dispatch({
    type: actionTypes.CLEAR_FILTER,
    payload: id,
  });
  // localStorage.setItem(
  //   "category",
  //   JSON.stringify(getState().category.categoryItems)
  // );
};

export const products = () => async (dispatch) => {
  try {
    dispatch({ type: productactionTypes.GET_PRODUCTS_REQUEST });
    const { data } = await axios.get(getApiBaseUrl());
    console.log(data);
    dispatch({
      type: productactionTypes.GET_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: productactionTypes.GET_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// import { getCategories, getProducts } from "../../components/catalog";

// export const setFilter = (category) => {
//   return {
//     type: "SET_FILTER",
//     filter: category,
//   };
// };

// export const clearFilter = () => {
//   return {
//     type: "CLEAR_FILTER",
//   };
// };

// export const initCatalog = () => (dispatch, getState) => {
//   Promise.all([getCategories(), getProducts()])
//     .then((data) => {
//       console.log(data);
//       dispatch({
//         type: "INITIALIZE_CATALOG",
//         categories: data[0],
//         products: data[1],
//       });
//     })
//     .catch(() => {
//       dispatch({
//         type: "INITIALIZE_CATALOG",
//         categories: [],
//         products: [],
//       });
//     });

//   localStorage.setItem(
//     "catalog",
//     JSON.stringify(getState().catalog.categories)
//   );
// };
