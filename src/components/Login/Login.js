import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <form className="centered-form">
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className=" buttons-container">
        <div className="mb-3 form-check">
          <div className="dropdown">
            <button
              className="btn btn-info dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Access type
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
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
          </div>
        </div>
        <button type="submit" className="btn btn-primary form-button">
          Submit
        </button>
        <button type="button" className="btn btn-secondary form-button">
          Request Access
        </button>
      </div>
    </form>
  );
};

export default Login;
