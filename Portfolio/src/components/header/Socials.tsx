import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

export const Socials = () => {
  return (
    <div className="socials">
      <a href="https://linkedin.com/in/georgeailenei1992" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/georgeailenei" target="_blank">
        <BsGithub />
      </a>
    </div>
  );
};
