import React from "react";
import { useForm } from "react-hook-form";
//import useAuth from '../../hooks/useAuth';

const AddServices = () => {
  //const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("https://morning-gorge-72713.herokuapp.com/addServices", {
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
      <div>
        <h1 className="mt-5 text-center">Please Add Services</h1>
        <div className="login-box w-25 m-auto mt-5">
          <div className="event-box border border d-flex justify-content-center align-items-center">
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <select {...register("type")} className="p-2 m-2 w-100">
                  <option value="Product">Product</option>
                  <option value="Product">Document</option>
                  <option value="furniture">Furniture</option>
                  <option value="grocery">Grocery</option>
                  <option value="freezing">Freezing</option>
                </select>
                <br />
                <input
                  {...register("description")}
                  placeholder="Description"
                  className="p-2 m-2 w-100"
                />
                <br />

                <input
                  {...register("image", { required: true })}
                  placeholder="Image Link"
                  className="p-2 m-2 w-100"
                />
                <br />
                <input
                  {...register("price", { required: true })}
                  placeholder="Price"
                  type="number"
                  className="p-2 m-2 w-100"
                />
                <br />
                <select {...register("model")} className="p-2 m-2 w-100">
                  <option value="Personal">Personal</option>
                  <option value="business">Business</option>
                  <option value="organization">Organization</option>
                </select>
                <br />

                {errors.exampleRequired && <span>This field is required</span>}

                <input
                  type="submit"
                  value="Add"
                  className="btn btn-danger w-100"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddServices;
