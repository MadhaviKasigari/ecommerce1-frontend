import axios from "axios";
import * as type from "../constants/authConstants";

export const signIn = (email, password) => async (dispatch) => {
  console.log("signin message:", signIn);
  await axios
    .post("https://ecommerce-op80.onrender.com/api/users/login", {
      Email: email,
      Password: password,
    })
    .then((response) => {
      console.log("response:", response);
      if (response.status === 200) {
        dispatch({ type: "LOGIN_SUCCESS" });
      } else {
        dispatch({ type: "LOGIN_FAILURE" });
      }
    });
};

export const signUp = (name, email, password) => async (dispatch) => {
  axios
    .post("https://ecommerce-op80.onrender.com/api/users/signup", {
      Name: name,
      Email: email,
      Password: password,
    })
    .then((response) => {
      console.log(response.status);
      dispatch({ type: "SIGNUP_SUCCESS" });
    });
};
