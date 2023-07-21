import React from "react";
import "./contact.css";

export const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <div className="container container__contact">
        <img />
        <div>
          <form>
            <input type="text" name="name" placeholder="Full Name" required />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />
            <input
              type="text"
              name="phone number"
              placeholder="Phone Number"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-success">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
