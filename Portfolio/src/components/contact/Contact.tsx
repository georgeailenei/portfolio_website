import React from "react";
import "./contact.css";
import contact from "../../assets/images/contact.jpg";

export const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <div className="container container__contact">
        <img src={contact} className="contact__img" />
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
          <button type="submit" className="btn btn-success">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};
