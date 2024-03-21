import React from "react";
import "./contact.css";
import Lottie from "lottie-react";
import animationData from "../../assets/animations/Contact.json";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { useRef } from "react";
import emailjs from "emailjs-com";
import ModalContact from "./ModalContact";

export default function Contact() {
  const form = useRef();
  const [modalShow, setModalShow] = React.useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_trz0vci",
      "template_25zvki2",
      form.current,
      "kwKxCxO4UqIJHdlpN"
    );
    e.target.reset();
    setModalShow(true);
  };

  return (
    <>
      <section id="contact">
        <div className="container container__contact">
          <h2>Interesting in working together?</h2>
          <div className="contact__form">
            <Lottie animationData={animationData} />
            <form ref={form} onSubmit={sendEmail}>
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
                name="phone-number"
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
              <button type="submit" className="btn btn-outline-secondary">
                Send
              </button>
              <a
                className="btn btn-outline-success"
                href="https://wa.me/+447577203818"
              >
                <span className="whatsapp__text">WhatsApp</span>
                <AiOutlineWhatsApp />
              </a>
            </form>
            <ModalContact show={modalShow} onHide={() => setModalShow(false)} />
          </div>
        </div>
      </section>
    </>
  );
}
