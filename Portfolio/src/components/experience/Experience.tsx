import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { SiJavascript } from "react-icons/si";
import { DiHtml5 } from "react-icons/di";
import { SiCss3 } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import { TbSql } from "react-icons/tb";

export const Experience = () => {
  return (
    <section id="experience">
      <h1>Experience</h1>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h6>Frontend Development</h6>
          <BsPatchCheckFill />
          <div className="experience__content">
            <article className="experience_details">
              <DiHtml5 />
            </article>
            <article className="experience_details">
              <SiCss3 />
            </article>
            <article className="experience_details">
              <FaBootstrap />
            </article>
            <article className="experience_details">
              <SiJavascript />
            </article>
            <article className="experience_details">
              <FaReact />
            </article>
            <article className="experience_details">
              <FaVuejs />
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h6>Backend Development</h6>
          <BsPatchCheckFill />
          <div className="experience__content">
            <article className="experience_details">
              <FaPython />
            </article>
            <article className="experience_details">
              <DiDjango />
            </article>
            <article className="experience_details">
              <TbSql />
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
