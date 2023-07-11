import React from "react";
import "./experience.css";
import { SiJavascript } from "react-icons/si";
import { DiHtml5 } from "react-icons/di";
import { SiCss3 } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { TbSql } from "react-icons/tb";

export const Experience = () => {
  return (
    <section id="experience">
      <h1>Skills</h1>
      <p>As a developer, I possess a diverse skill set that enables me to create
        innovative and efficient solutions. I constantly strive to stay at the
        forefront of technological advancements, and my skills reflect my
        commitment to delivering high-quality work. Here are some of the key
        skills that I bring to the table.</p>
      <div className="container experience__container">
        <article className="experience_details">
          <DiHtml5 />
          <h6>HTML</h6>
        </article>
        <article className="experience_details">
          <SiCss3 />
          <h6>CSS</h6>
        </article>
        <article className="experience_details">
          <FaBootstrap />
          <h6>Bootstrap</h6>
        </article>
        <article className="experience_details">
          <SiJavascript />
          <h6>JavaScript</h6>
        </article>
        <article className="experience_details">
          <FaReact />
          <h6>React</h6>
        </article>
        <article className="experience_details">
          <FaVuejs />
          <h6>Vue.js</h6>
        </article>
        <article className="experience_details">
          <FaPython />
          <h6>Python</h6>
        </article>
        <article className="experience_details">
          <SiDjango />
          <h6>Django</h6>
        </article>
        <article className="experience_details">
          <TbSql />
          <h6>SQL</h6>
        </article>
      </div>
    </section>
  );
};
