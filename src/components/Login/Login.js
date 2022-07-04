import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <form className="centered-form">
      <h2 className="centered-title">Login</h2>
      <label for="exampleFormControlInput1" className="form-label">
        Email address
      </label>
      <input
        type="email"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="ex. name@example.com"
      />
      <label for="inputPassword5" class="form-label">
        Password
      </label>
      <input
        type="password"
        id="inputPassword5"
        className="form-control"
        aria-describedby="passwordHelpBlock"
      />

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
        <Link to="../AccessForm/AccessForm">
          <button type="button" className="btn btn-secondary form-button">
            Request Access
          </button>
        </Link>
      </div>
    </form>
  );
};

export default Login;
