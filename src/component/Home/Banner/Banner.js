import React from "react";
import "./banner.css";
import background from "../../../images/banner.jpg";

const banner = {
  background: `url(${background})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  //   //background: "#a2cf6e",
  backgroundBlendMode: "darken, luminosity",
  width: "100%",
  height: "600px",
  position: "relative",
  color: "Black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "bold",
};

const Banner = () => {
  return (
    <div style={banner}>
      <div className="overlay">
        <h1>Welcome to Our Delivery System</h1>
        <h3>We are waiting to serve you a best service</h3>
      </div>
    </div>
  );
};

export default Banner;
