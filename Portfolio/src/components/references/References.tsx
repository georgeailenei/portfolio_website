import React from "react";
import "./references.css";
import profile_picture from "../../assets/images/profile_photo.jpg";

export const References = () => {
  return (
    <section id="references">
      <h2>References</h2>

      <div className="container container__references">
        <div className="reference__profile">
          <div className="reference__header">
            <img src={profile_picture} className="reference__img" />
            <div className="reference__details">
              <h6>
                <strong>George Ailenei</strong>
              </h6>
              <h6>Software Developer</h6>
            </div>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        <div className="reference__profile">
          <div className="reference__header">
            <img src={profile_picture} className="reference__img" />
            <div className="reference__details">
              <h6>
                <strong>George Ailenei</strong>
              </h6>
              <h6>Software Developer</h6>
            </div>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
        </div>

        <div className="reference__profile">
          <div className="reference__header">
            <img src={profile_picture} className="reference__img" />
            <div className="reference__details">
              <h6>
                <strong>George Ailenei</strong>
              </h6>
              <h6>Software Developer</h6>
            </div>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};
