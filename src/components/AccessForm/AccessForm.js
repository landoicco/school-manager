import React from "react";
import "./AccessForm.css";

const AccessForm = () => {
  return (
    <>
      <form className="centered-form">
        <h2 className="centered-title">Request Access Form</h2>
        <label for="exampleFormControlInput1" className="form-label">
          Full name
        </label>
        <input
          className="form-control"
          type="text"
          placeholder="ex. John Steven Smith"
          aria-label="default input example"
        />
        <label for="exampleFormControlInput1" className="form-label">
          Phone number
        </label>
        <input
          className="form-control"
          type="text"
          placeholder="ex. +(52) 5544337722"
          aria-label="default input example"
        />
        <label for="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="ex. name@example.com"
        />
        <label for="exampleFormControlInput1" className="form-label">
          Security token
        </label>
        <input
          className="form-control"
          type="text"
          placeholder="ex. 73645"
          aria-label="default input example"
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
            <button type="button" className="btn btn-lg btn-primary form-button">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AccessForm;
