import React from "react";
import { useState } from "react";

import "./nav.css";
import { AiFillAppstore } from "react-icons/ai";
import { AiFillExperiment } from "react-icons/ai";
import { AiFillMessage } from "react-icons/ai";
import { AiFillFolderOpen } from "react-icons/ai";

export const Navigation = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiFillAppstore />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <AiFillExperiment />
      </a>
      <a
        href="#work"
        onClick={() => setActiveNav("#work")}
        className={activeNav === "#work" ? "active" : ""}
      >
        <AiFillFolderOpen />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <AiFillMessage />
      </a>
    </nav>
  );
};
