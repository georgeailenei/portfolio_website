import React from "react";
import { useState } from "react";

import "./nav.css";
import { SiGooglehome } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { VscReferences } from "react-icons/vsc";
import { MdContactSupport } from "react-icons/md";
import { MdWorkHistory } from "react-icons/md";

export const Navigation = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <SiGooglehome />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <MdDesignServices />
      </a>
      <a
        href="#work"
        onClick={() => setActiveNav("#work")}
        className={activeNav === "#work" ? "active" : ""}
      >
        <MdWorkHistory />
      </a>
      <a
        href="#references"
        onClick={() => setActiveNav("#references")}
        className={activeNav === "#references" ? "active" : ""}
      >
        <VscReferences />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <MdContactSupport />
      </a>
    </nav>
  );
};
