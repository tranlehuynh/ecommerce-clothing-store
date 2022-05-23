import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const HeroSlider = (props) => {
  const data = props.data;
  const [activeSlide, setActiveSlide] = useState(2);

  const nextSlide = () => {
    const index = activeSlide + 1 === data.length ? 0 : activeSlide + 1;
    setActiveSlide(index);
  };

  const prevSlide = () => {
    const index = activeSlide - 1 < 0 ? data.length - 1 : activeSlide - 1;
    setActiveSlide(index);
  };

  return (
    <div className="hero-slider">
      {data.map((item, index) => {
        return (
          //   <HeroSliderItem key={index} items={item} />
          <div
            className={`hero-slider__item ${
              index === activeSlide ? "active" : ""
            }`}
            key={index}
          >
            <div className="hero-slider__item__info">
              <div
                className={`hero-slider__item__info__title color color-${item.color}`}
              >
                <span>{item.title}</span>
              </div>
              <div className="hero-slider__item__info__description">
                <span>{item.description}</span>
              </div>
              <div className="hero-slider__item__info__btn">
                <Link to={item.path}>
                  <button>Xem chi tiết</button>
                </Link>
              </div>
            </div>
            <div className="hero-slider__item__image">
              <div className={`shape bg-${item.color}`}></div>
              <img src={item.img} alt="infoImage" />
            </div>
          </div>
        );
      })}

      {props.control ? (
        <div className="hero-slider__control">
          <div className="hero-slider__control__item" onClick={prevSlide}>
            <i className="bx bx-chevron-left"></i>
          </div>
          <div className="hero-slider__control__item">
            <div className="index">
              {activeSlide + 1}/{data.length}
            </div>
          </div>
          <div className="hero-slider__control__item" onClick={nextSlide}>
            <i className="bx bx-chevron-right"></i>
          </div>
        </div>
      ) : null}
    </div>
  );
};

HeroSlider.propTypes = {
  data: PropTypes.array.isRequired,
  control: PropTypes.bool,
  auto: PropTypes.bool,
  timeOut: PropTypes.number,
};

// const HeroSliderItem = (props) => {
//   <div className="hero-slider__item">
//     <div className="hero-slider__item__info">
//       <div className="hero-slider__item__info__title">
//         <span>{props.items.title}</span>
//       </div>
//       <div className="hero-slider__item__info__description">
//         <span>{props.items.description}</span>
//       </div>
//       <div className="hero-slider__item__info__btn">
//         <Link to={props.items.path}>
//           <button>Xem chi tiết</button>
//         </Link>
//       </div>
//       <div className="hero-slider__item__info__img">
//         <img src={props.items.img} alt="infoImage" />
//       </div>
//     </div>
//   </div>;
// };

export default HeroSlider;
