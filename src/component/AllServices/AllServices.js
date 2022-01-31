import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AllServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allServices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <div>
          <h1 className="ms-5 ps-5">All Services</h1>
          <br />
          <h2>Here You find our all category services</h2>
        </div>
      </div>
      <div className="services">
        <div className="row">
          {services?.map((pd) => (
            <div className="col-md-4">
              <div className="service border border rounded-3 p-3">
                <div className="services-img ">
                  <img className="w-100 h-180px" src={pd?.image} alt="" />
                </div>

                <h6>Item Type : {pd?.type}</h6>
                <h4>Delivery Purpose : {pd?.model}</h4>
                <p>{pd?.description}</p>
                <h3 className="text-danger"> Total Cost : {pd?.price}</h3>
                <Link to={`/booking/${pd._id}`}>
                  <button className="btn btn-success">Add To Wishlist</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllServices;
