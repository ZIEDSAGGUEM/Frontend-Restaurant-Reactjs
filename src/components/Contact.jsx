import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  });
  return (
    <div
      className="container justify-content-center align-items-center text-center"
      data-aos="fade-down"
    >
      <h1 className="mb-5">Contact Us</h1>
      <form>
        <input
          placeholder="FirstName"
          type="text"
          name="firstname"
          className="py-2 my-2 w-50"
        />
        <br></br>
        <input
          type="text"
          placeholder="LastName"
          name="Lastname"
          className="py-2 my-2 w-50"
        />
        <br></br>
        <input
          type="tel"
          placeholder="PhoneNumber"
          name="Phone"
          className="py-2 my-2 w-50"
        />
        <br></br>
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="py-2 my-2 w-50"
        />
        <br></br>
        <input
          type="text"
          placeholder="Text Our to give you what you want"
          name="text"
          className="py-2 my-2 w-50"
        />
        <br></br>
        <input
          type="button"
          name="firstname"
          className="btn btn-danger my-2 w-25"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default Contact;
