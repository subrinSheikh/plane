import React from "react";
import "./Error.css";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <>
      <div className="error_head">BackPackTravels</div>
      <div className="not">
        <span id="page">404</span>
        <br />
        <span id="page">PAGE NOT FOUND</span>
        <br />
        <span id="oops">
          Oops! The page you are looking for does not exist. It might have been
          moved or deleted.
        </span>
        <br />
        <span>
          <button className="apple"style={{ color: "white" }}>
            <Link to="/">BACK TO HOME</Link>
          </button>
        </span>
        <br />
      </div>
    </>
  );
};

export default Error;
