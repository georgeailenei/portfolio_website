import React from "react";
import "./header.css";
import { Buttons } from "./Buttons";
import { Socials } from "./Socials";
import profile_picture from "../../assets/images/profile_photo.jpg";

export const Header = () => {
  return (
    <header>
      <div className="header__container">
        <h6>Hi. I am George Ailenei.</h6>
        <h1>A developer.</h1>
        <div>
          <img className="profile-picture" src={profile_picture} />
        </div>
        <div className="about-text">
          <p>
            A 31-year-old graduate student from Manchester Metropolitan
            University. With a background in Business Management, I discovered
            my passion for programming during my studies in Data Analytics and
            other technological units. After graduating with top honours, I am
            deeply interested in technology, design, and the fusion of software
            engineering with UI/UX.
          </p>

          <p>
            In addition to my tech pursuits, I enjoy sports, self-development
            books, economics, and travelling. I enjoy doing different things
            that help me learn and grow. For example, I like playing sports and
            being active, which makes me feel good and healthy. I'm excited
            about the future because I want to use my passion for technology,
            design, sports, books and economics to do beneficial things.{" "}
          </p>
        </div>
        <Buttons />
        <Socials />
      </div>
    </header>
  );
};
