import React, { useEffect } from "react";
import { useForm } from "../../hooks/useForm";

import "./effect.css";

export const FormWithCustomHook = () => {
  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formValues;

  const hanndleSubmit = (e) => {
    e.preventDefault();

    console.log(formValues);
  };

  useEffect(() => {
    console.log("email changed");
  }, [email]);

  return (
    <form onSubmit={hanndleSubmit}>
      <h1>FormWithCustomHook</h1>
      <hr />

      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Your name"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="Your email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="*********"
          value={password}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">Save</button>
    </form>
  );
};
