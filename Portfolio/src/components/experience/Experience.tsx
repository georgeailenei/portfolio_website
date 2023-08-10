import React from "react";
import "./experience.css";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoHtml5 } from "react-icons/bi";
import { BiLogoCss3 } from "react-icons/bi";
import { BiLogoBootstrap } from "react-icons/bi";
import { BiLogoReact } from "react-icons/bi";
import { BiLogoVuejs } from "react-icons/bi";
import { BiLogoPython } from "react-icons/bi";
import { BiLogoDjango } from "react-icons/bi";
import { TbSql } from "react-icons/tb";
import Lottie from "lottie-react";
import animationData from "../../assets/animations/Experience.json";

export const Experience = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="container container__experience">
        <div className="container__two_collums">
          <div className="experience__animation">
            <Lottie animationData={animationData} />
          </div>
          <p className="experience__text">
            As a developer, I possess a diverse skill set that enables me to
            create innovative and efficient solutions. I constantly strive to
            stay at the forefront of technological advancements, and my skills
            reflect my commitment to delivering high-quality work. Here are some
            of the key skills that I bring to the table.
          </p>
        </div>
        <div className="experience__icons">
          <article className="experience_details">
            <BiLogoHtml5 />
            <h6>HTML</h6>
          </article>
          <article className="experience_details">
            <BiLogoCss3 />
            <h6>CSS</h6>
          </article>
          <article className="experience_details">
            <BiLogoBootstrap />
            <h6>Bootstrap</h6>
          </article>
          <article className="experience_details">
            <BiLogoJavascript />
            <h6>JavaScript</h6>
          </article>
          <article className="experience_details">
            <BiLogoReact />
            <h6>React</h6>
          </article>
          <article className="experience_details">
            <BiLogoVuejs />
            <h6>Vue.js</h6>
          </article>
          <article className="experience_details">
            <BiLogoPython />
            <h6>Python</h6>
          </article>
          <article className="experience_details">
            <BiLogoDjango />
            <h6>Django</h6>
          </article>
          <article className="experience_details">
            <TbSql />
            <h6>SQL</h6>
          </article>
        </div>
      </div>
    </section>
  );
};
