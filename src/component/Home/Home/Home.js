import React from "react";
import AllServices from "../../AllServices/AllServices";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import ChooseUs from "../ChooseUs/ChooseUs";
import ContactUs from "../Contactus/ContactUs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AllServices></AllServices>
      <ChooseUs></ChooseUs>
      <hr />
      <ContactUs></ContactUs>
      <hr />
      <hr />
      <Footer></Footer>
    </div>
  );
};

export default Home;
