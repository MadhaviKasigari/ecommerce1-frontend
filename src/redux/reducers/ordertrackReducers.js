import * as actionTypes from "../constants/cartConstants";

export const addToOrderTrackReducer = (
  state = { ordertrackItems: [] },
  action
) => {
  switch (action.type) {
    case actionTypes.ADD_TO_ORDERTRACK:
      const item = action.payload;

      const existItem = state.ordertrackItems.find(
        (x) => x.product === item.product
      );

      if (existItem) {
        return {
          ...state,
          ordertrackItems: state.ordertrackItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          ordertrackItems: [...state.ordertrackItems, item],
        };
      }
    // case actionTypes.REMOVE_FROM_CART:
    //   return {
    //     ...state,
    //     cartItems: state.cartItems.filter((x) => x.product !== action.payload),
    //   };

    default:
      return state;
  }
};
