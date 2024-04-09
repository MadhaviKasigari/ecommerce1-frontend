import { useState } from "react";
import "./Addressbook.css";

import React from "react";

const AddressBook = () => {
  const [check, setcheck] = useState(false);
  const [state, setState] = useState({
    deliveryName: "",
    deliveryLastName: "",
    deliveryAddress: "",
    deliveryPhone: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="address-book">
      <form>
        <h1>Delivery Address</h1>
        <input
          className="input-font"
          type="text"
          name="deliveryName"
          placeholder="First Name"
          autoComplete="(false)"
          onChange={onChange}
        />
        <input
          className="input-font"
          type="text"
          name="deliveryLastName"
          placeholder="Last Name"
          autoComplete="(false)"
          onChange={onChange}
        />
        <input
          className="input-font"
          type="text"
          name="deliveryAddress"
          placeholder="Address"
          autoComplete="(false)"
          onChange={onChange}
        />
        <input
          className="input-font"
          type="text"
          name="deliveryPhone"
          placeholder="Phone"
          autoComplete="(false)"
          onChange={onChange}
        />

        <h1>Billing Address</h1>
        <div className="check">
          <label htmlfor="checkbox">Same as Delivery Address</label>
          <input
            type="checkbox"
            value="false"
            name="checkbox"
            onChange={() => setcheck(!check)}
          />
        </div>
        <input
          className="input-font"
          type="text"
          name="billingName"
          placeholder="First Name"
          value={check ? state.deliveryName : ""}
        />
        <input
          className="input-font"
          type="text"
          name="billingLastName"
          placeholder="Last Name"
          value={check ? state.deliveryLastName : ""}
        />
        <input
          className="input-font"
          type="text"
          name="billingAddress"
          placeholder="Address"
          value={check ? state.deliveryAddress : ""}
        />
        <input
          className="input-font"
          type="text"
          name="billingPhone"
          placeholder="Phone"
          value={check ? state.deliveryPhone : ""}
        />
        <input type="button" className="btn" value="Submit" />
      </form>
    </div>
  );
};

export default AddressBook;
