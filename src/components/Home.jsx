import React, { useEffect } from "react";
import logo1 from "./images/proxy1.jpg";
import logo2 from "./images/proxy.jpg";
import logo3 from "./images/proxy2.jpg";
import logo5 from "./images/Hamburger.jpg";
import "./Styles.css";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  });
  return (
    <div>
      <div className="container">
        <div data-aos="fade-down">
          <h1 className="text-center mb-3">Food For You </h1>
          <div className="d-flex justify-content-center mb-5">
            <div className="animate1"></div>
            <h1 className="text-center mx-3">Welcomes you all the time</h1>
            <div className="animate2"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 text-center">
            <img
              className="img img-fluid"
              src={logo1}
              alt="Food"
              data-aos="fade-right"
            />
          </div>
          <div className="col-md-4 text-center" data-aos="fade-left">
            <h2>Good Food Choices are Good Investments</h2>
            <h3 className="mb-4">
              Check our Food and Contact us if you like it
            </h3>
            <Link to="/Food" className="btn btn-danger mb-3 ">
              Explore our Foods
            </Link>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row mt-3">
          <div className="col-md-8 text-center">
            <img
              className="img img-fluid"
              src={logo2}
              alt="pride"
              data-aos="fade-right"
            />
          </div>
          <div
            className="col-md-4  text-center text-gray fw-bold mt-5"
            data-aos="fade-left"
          >
            <h2 className="text-black ">
              We Make Everything By Hand<br></br> With The Best Possible
              Ingredients
            </h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-8 text-center">
            <img
              className="img img-fluid"
              src={logo3}
              alt="food"
              data-aos="fade-right"
            />
          </div>
          <div className="col-md-4  text-center fw-bold  " data-aos="fade-left">
            <h2 className="mt-5">
              We Pride ourselves on<br></br> making real from<br></br> the best
              ingredients
            </h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-8 text-center">
            <img
              className="img img-fluid"
              src={logo5}
              alt="food"
              data-aos="fade-right"
            />
          </div>

          <div className="col-md-4 text-center" data-aos="fade-left">
            <h2 className="fw-bold mt-5">
              When a Men's Stomach is<br></br> full it makes no whether<br></br>{" "}
              he is rich or poor
            </h2>
            <Link to="/Contact" className="btn btn-danger mb-4">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
