import React from "react";
import { useState } from "react";
import { signIn } from "../redux/actions/loginActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Input from "./Input";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const errors = useSelector((state) => state.errors);
  // const { error } = useSelector(state => state.login.errors, shallowEqual);
  const errors = useSelector((state) => state?.login?.errors);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginError = useSelector((state) => state.login.errors);
  const userDetails = useSelector((state) => state.login.users);

  console.log(error);
  const onSubmitHandler = () => {
    if (email && password && password === password) {
      dispatch(signIn(email, password));
      setEmail("");
      setPassword("");
      navigate("/");
    }
  };

  return (
    <div className="form-container">
      <h2 className="title">Login</h2>
      <form className="register-form">
        <div className="form-space">
          <Input
            label="E-Mail"
            type="text"
            onInput={(e) => setEmail(e.target.value)}
            value={email}
            // hasError={error}
          />

          <Input
            label="Password"
            type="password"
            onInput={(e) => setPassword(e.target.value)}
            value={password}
            // hasError={error}
          />

          <button className="btn" onClick={onSubmitHandler}>
            Go!
          </button>
        </div>
      </form>
      {loginError &&
        loginError(
          <div className="login-failure-window">
            Incorrect email or password.
          </div>
        )}
    </div>
  );
}
