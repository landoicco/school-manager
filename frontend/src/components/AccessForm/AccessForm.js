import React from "react";
import { useState } from "react";
import { getUserJSON, emptyUserJSON } from "../../helpers/UserDataFormatter";
import "./AccessForm.css";

const AccessForm = () => {
  const [userData, setUserData] = useState(emptyUserJSON);

  // Form Data References
  const fullNameRef = React.createRef();
  const phoneRef = React.createRef();
  const emailRef = React.createRef();
  const tokenRef = React.createRef();

  const handleFormInput = (event) => {
    event.preventDefault();

    // Collect data
    let userInput = {
      fullName: fullNameRef.current.value,
      phone: phoneRef.current.value,
      email: emailRef.current.value,
      token: tokenRef.current.value,
    };

    // Ask to convert userInput in a userJSON
    let userInfoJSON = getUserJSON(userInput);

    // If user input is invalid, return!
    if (!userInfoJSON) {
      console.log("Invalid input!");
      return;
    }

    // If user input is valid, update userData state
    console.log("Valid input!");
    if (userData === emptyUserJSON) {
      setUserData(userInfoJSON);
    }

    console.log(userData);
  };

  return (
    <>
      <form className="centered-form" onSubmit={handleFormInput}>
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
          type="number"
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
          type="number"
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
