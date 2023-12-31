import React from "react";
import "./header.css";
import { Buttons } from "./Buttons";
import { Socials } from "./Socials";
import profile_picture from "../../assets/images/profile_photo.png";
import { motion } from "framer-motion";

export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <motion.h6
          animate={{ x: 0 }}
          initial={{ x: -2000 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Hi. I am George Ailenei.
        </motion.h6>
        <motion.h1
          animate={{ x: 0 }}
          initial={{ x: 2000 }}
          transition={{ duration: 1, delay: 1 }}
        >
          An aspiring programmer.
        </motion.h1>
        <div>
          <motion.img
            className="profile-picture"
            src={profile_picture}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, delay: 1 }}
          />
        </div>
        <div className="about-text">
          <motion.p
            animate={{ x: 0 }}
            initial={{ x: -2000 }}
            transition={{ duration: 1, delay: 1 }}
          >
            A 31-year-old graduate student from Manchester Metropolitan
            University. With a background in Business Management, I discovered
            my passion for programming during my studies in Data Analytics and
            other technological units. After graduating with top honours, I am
            deeply interested in technology, design, and the fusion of software
            engineering with UI/UX.
          </motion.p>

          <motion.p
            animate={{ x: 0 }}
            initial={{ x: 2000 }}
            transition={{ duration: 1, delay: 1 }}
          >
            In addition to my tech pursuits, I enjoy sports, self-development
            books, economics, and travelling. I enjoy doing different things
            that help me learn and grow. For example, I like playing sports and
            being active, which makes me feel good and healthy. I'm excited
            about the future because I want to use my passion for technology,
            design, sports, books and economics to do beneficial things.{" "}
          </motion.p>
        </div>
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Buttons />
          <Socials />
        </motion.div>
      </div>
    </header>
  );
};
