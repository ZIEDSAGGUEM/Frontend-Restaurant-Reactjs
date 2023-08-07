import React, { useEffect } from "react";
import Card from "./Cart";
import Foods from "../Back/Foods";
import Drinks from "../Back/Drinks";
import Specials from "../Back/specials";

const Menu = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div class="col-sm-6 col-lg-4 mb-4">
            {Foods.map((food) => {
              return <Card props={food} />;
            })}
          </div>
          <div class="col-sm-6 col-lg-4 mb-4">
            {Drinks.map((drink) => {
              return <Card props={drink} />;
            })}
          </div>
          <div class="col-sm-6 col-lg-4 mb-4">
            {Specials.map((special) => {
              return <Card props={special} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
