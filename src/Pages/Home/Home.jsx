import React, { useState } from "react";
import "./Home.css";
import Navbarjs from "../../Components/Navbar/Navbarjs";
import Products from "../../Components/Products/Products";
import Footer from "../../Components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Components//Navbar/Navbarjs.jsx";
import About from "../../Components/About/About";

const Home = () => {
  return (
    <React.Fragment>
      <Navbarjs />
      <div className="home_carousel_img">
        <About />
      </div>
      <div className="Home_contain">
        <Products />
      </div>
      <section id="Contact">
        <Footer />
      </section>
    </React.Fragment>
  );
};

export default Home;
