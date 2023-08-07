import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Cart = ({ props }) => {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  });
  return (
    <div class="card mb-3" data-aos="fade-up">
      <img
        class="bd-placeholder-img card-img-top"
        style={{ height: "350px", width: "100%" }}
        src={props.image}
        alt={props.name}
      ></img>
      <div class="card-body text-center">
        <h5 class="card-title ">{props.name}</h5>
        <p class="card-tex ">
          <small class="text-body-secondary">Price:{props.price}$</small>
        </p>
      </div>
    </div>
  );
};

export default Cart;
