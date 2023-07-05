import React from "react";
import "./nav.css";
import { SiGooglehome } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { VscReferences } from "react-icons/vsc";
import { MdContactSupport } from "react-icons/md";
import { MdWorkHistory } from "react-icons/md";

export const Navigation = () => {
  return (
    <div>
      <a href="#">
        <SiGooglehome />
      </a>
      <a href="#services">
        <MdDesignServices />
      </a>
      <a href="#worl">
        <MdWorkHistory />
      </a>
      <a href="#references">
        <VscReferences />
      </a>
      <a href="#contact">
        <MdContactSupport />
      </a>
    </div>
  );
};
