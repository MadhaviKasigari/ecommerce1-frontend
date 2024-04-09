import * as actionTypes from "../constants/authConstants";

export const securityReducer = (state = { users: [], errors: [] }, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        email: action.payload,
      };

    // case actionTypes.LOGIN_FAILURE: {
    //   state.errors = state.errors.concat(action.payload);
    // }

    case actionTypes.LOGIN_FAILURE:
      return {
        ...state,
        errors: state.errors.concat(action.payload),
      };
    default:
      return state;
  }
};
