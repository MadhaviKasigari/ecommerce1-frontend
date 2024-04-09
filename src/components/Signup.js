import React, { useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUp } from "../redux/actions/loginActions";
import Input from "./Input";
import "./Signup.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   const { error } = useSelector(state => state.errors, shallowEqual);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmitHandler = () => {
    if (name && email && password && password === password) {
      dispatch(signUp(name, email, password));
      navigate("/");
    }
  };
  return (
    <div className="form-container">
      <h2 className="title">Signup</h2>
      <div className="register-form">
        <Input
          type="text"
          label="Name"
          onInput={(e) => setName(e.target.value)}
          value={name}
          //   hasError={error}
        />

        <Input
          type="text"
          label="E-Mail"
          onInput={(e) => setEmail(e.target.value)}
          value={email}
          //   hasError={error}
        />

        <Input
          type="password"
          label="Password"
          onInput={(e) => setPassword(e.target.value)}
          value={password}
          //   hasError={error}
        />
        <button onClick={onSubmitHandler}>Done!</button>
      </div>
    </div>
  );
};

export default Signup;
