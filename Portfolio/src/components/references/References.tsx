import React from "react";
import "./references.css";
import profile_picture from "../../assets/images/profile_photo.jpg";
import {
  Pagination,
  Navigation,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";

export const References = () => {
  return (
    <section id="references">
      <h2>References</h2>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        modules={[EffectCoverflow]}
        className="container container__references"
      >
        <SwiperSlide className="reference__profile">
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
        </SwiperSlide>

        <SwiperSlide className="reference__profile">
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
        </SwiperSlide>

        <SwiperSlide className="reference__profile">
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
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
