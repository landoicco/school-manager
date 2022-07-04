import React from "react";
import { useState } from "react";
import "./AccessForm.css";

const AccessForm = () => {
  const [userData, setUserData] = useState({
    fullName: "",
    phone: "",
    email: "",
    token: "",
  });

  // Form Data References
  const fullNameRef = React.createRef();
  const phoneRef = React.createRef();
  const emailRef = React.createRef();
  const tokenRef = React.createRef();

  const updateState = () => {
    setUserData({
      fullName: fullNameRef.current.value,
      phone: phoneRef.current.value,
      email: emailRef.current.value,
      token: tokenRef.current.value,
    });
  };

  const validateFormInput = (event) => {
    event.preventDefault();
    updateState();
    console.log(userData);
  };
  return (
    <>
      <form className="centered-form" onSubmit={validateFormInput}>
        <h2 className="centered-title">Request Access Form</h2>
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Full name
        </label>
        <input
          className="form-control"
          type="text"
          placeholder="ex. John Steven Smith"
          aria-label="default input example"
          ref={fullNameRef}
        />
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Phone number
        </label>
        <input
          className="form-control"
          type="text"
          placeholder="ex. +(52) 5544337722"
          aria-label="default input example"
          ref={phoneRef}
        />
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="ex. name@example.com"
          ref={emailRef}
        />
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Security token
        </label>
        <input
          className="form-control"
          type="text"
          placeholder="ex. 73645"
          aria-label="default input example"
          ref={tokenRef}
        />
        <div className="form-button-container">
          <div className="btn-group">
            <button
              className="btn btn-secondary btn-lg dropdown-toggle form-button"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Access Type
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Security
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Administrator
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Resident
                </a>
              </li>
            </ul>

            <button
              type="submit"
              className="btn btn-lg btn-primary form-button"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AccessForm;
