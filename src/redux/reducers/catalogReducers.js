import * as actionTypes from "../constants/productsConstants";

export const getcatalogReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_REQUEST:
      return {
        loading: true,
        ...state,
        products: [],
      };
    case actionTypes.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case actionTypes.GET_PRODUCTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getProductDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        product: {},
      };
    case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload,
      };
    case actionTypes.GET_PRODUCT_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actionTypes.GET_PRODUCT_DETAILS_RESET:
      return {
        ...state,
        product: {},
      };
    default:
      return state;
  }
};

// import * as actionTypes from "../constants/catalogConstants";

// export const catalogReducer = (state = { CategoryItems: [] }, action) => {
//   switch (action.type) {
//     case "SET_FILTER": {
//       console.log(action.payload);
//       return {
//         ...state,
//         filter: action.payload,
//       };
//     }
//     case "CLEAR_FILTER": {
//       return {
//         ...state,
//         filter: null,
//       };
//     }
//     default: {
//       return state;
//     }
//   }
// };

// // export const catalogReducer = (state = initialState.catalog, action) => {
// //   switch (action.type) {
// //     case "SET_FILTER": {
// //       return {
// //         ...state,
// //         filter: action.filter,
// //       };
// //     }
// //     case "CLEAR_FILTER": {
// //       return {
// //         ...state,
// //         filter: null,
// //       };
// //     }
// //     case "INITIALIZE_CATALOG": {
// //       return {
// //         ...state,
// //         categories: action.categories,
// //         products: action.products,
// //       };
// //     }
// //     // Handle actions to update the catalog slice
// //     default:
// //       return state;
// //   }
// // };
