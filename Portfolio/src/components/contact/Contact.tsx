import React from "react";
import "./contact.css";
import Lottie from "lottie-react";
import animationData from "../../assets/animations/Contact.json";

export const Contact = () => {
  return (
    <section id="contact">
      <h2>Interesting in working together?</h2>
      <div className="container container__contact">
        <Lottie animationData={animationData} />
        <form>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Full Name"
            required
          />
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email Address"
            required
          />
          <input
            type="text"
            name="phone number"
            className="form-control"
            placeholder="Phone Number"
            required
          />
          <textarea
            name="message"
            className="form-control"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-outline-success">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};
