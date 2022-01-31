import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../../hooks/useAuth";

const Booking = () => {
  const { user } = useAuth();
  const { serviceId } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    fetch(`https://morning-gorge-72713.herokuapp.com/singleProduct/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  console.log(service);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.email = user.email;
    data.status = "pending";

    fetch("https://morning-gorge-72713.herokuapp.com/orders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    console.log(data);
  };

  return (
    <div>
      <h1>Please Confirm your Booking</h1>
      <div>
        <div className="row">
          <div className="col-md-6">
            <div className="details-img">
              <img className="w-75" src={service?.image} alt="" />
            </div>
            <h2>{service?.type}</h2>
            <p className="text-start">{service?.description}</p>
            <h1> price: {service?.price}</h1>
            <h1 className="text-danger"> Delivery Purpose: {service?.model}</h1>
          </div>
          <div className="col-md-6">
            <h1>booking Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("name")}
                defaultValue={service?.type}
                className="p-2 m-2 w-50"
              />
              <br />
              <input
                {...register("date")}
                // placeholder="Name"
                type="date"
                className="p-2 m-2 w-50"
              />
              <br />
              <input
                {...register("comments")}
                placeholder="comments"
                className="p-2 m-2 w-50"
              />
              <br />

              <input
                {...register("price", { required: true })}
                defaultValue={service?.price}
                className="p-2 m-2 w-50"
              />
              <br />
              <input
                {...register("image", { required: true })}
                defaultValue={service?.image}
                className="p-2 m-2 w-50"
              />
              <br />
              <select {...register("model")} className="p-2 m-2 w-50">
                <option value={service?.model}>{service?.model}</option>
                <option value="Personal">Personal</option>
                <option value="Business">Business</option>
                <option value="Organization">Organization</option>
              </select>
              <br />
              {errors.exampleRequired && <span>This field is required</span>}
              <input
                type="submit"
                value="Book Now"
                className="btn btn-danger w-50"
              />
            </form>           
            {/* <Alert>Submitted</Alert> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
