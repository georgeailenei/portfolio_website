import React from "react";
import "./header.css";
import { Buttons } from "./Buttons";
import { Socials } from "./Socials";

export const Header = () => {
  return (
    <header>
      <div>
        <h6> Hi, I am</h6>
        <h1> George </h1>
        <h6> a software developer</h6>
        <Buttons />
        <Socials />
      </div>
    </header>
  );
};
