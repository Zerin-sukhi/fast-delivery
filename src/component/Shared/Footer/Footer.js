import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div style={{ width: "90%", bg: "warning" }} className="row ms-5">
      <div class="col">
        <h5 className="text-white">Quick links</h5>
        <ul className="list-styled text-muted text-decoration-none">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Get Started</Link>
          </li>
          <li>
            <Link to="/">FaQ</Link>
          </li>
        </ul>
      </div>
      <div class="col">
        <h5 className="h1 text-white">FB.</h5>
        <p className="small text-muted">
          Please stay tuned with us. Thank you.
        </p>
        <p className="small text-muted mb-0">
          &copy; Copyrights. All rights reserved. Zerin
        </p>
      </div>
      <div class="col">
        <h5 className="text-white mb-3">Newsletter</h5>
        <p className="small text-muted">
          For more updates. Please subscribe here to get updates.
        </p>
        <form action="#">
          <div>
            <input
              className="form-control"
              type="teemailxt"
              placeholder="Recipient's email address"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <br />
            <button
              style={{ width: "50%" }}
              className="btn btn-danger"
              id="button-addon2"
              type="button"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Footer;
