import { useRef, useState } from "react";
import Slider, { Settings } from "react-slick";

import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

import "./styles.css";

export type SliderSettings = Settings;

export const SliderComponent = () => {
  const sliderRef = useRef<Slider>(null);

  const [position, setPosition] = useState(0);

  const testeSlider = [
    {
      img: "before-and-after-1.webp",
      description: "Imagem pessoa antes e depois",
    },
    {
      img: "before-and-after-2.jpg",
      description: "Imagem pessoa antes e depois",
    },
    {
      img: "before-and-after-3.jpg",
      description: "Imagem pessoa antes e depois",
    },
    {
      img: "before-and-after-4.jpg",
      description: "Imagem pessoa antes e depois",
    },
    {
      img: "before-and-after-5.png",
      description: "Imagem pessoa antes e depois",
    },
    {
      img: "before-and-after-6.png",
      description: "Imagem pessoa antes e depois",
    },
    {
      img: "before-and-after-7.jpg",
      description: "Imagem pessoa antes e depois",
    },
    {
      img: "before-and-after-8.jpg",
      description: "Imagem pessoa antes e depois",
    },
    {
      img: "before-and-after-9.jpg",
      description: "Imagem pessoa antes e depois",
    },
    {
      img: "before-and-after-10.jpg",
      description: "Imagem pessoa antes e depois",
    },
  ];

  const settings: SliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    pauseOnFocus: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: setPosition,
  };

  const handleNext = () => sliderRef.current?.slickNext();

  const handlePrev = () => sliderRef.current?.slickPrev();

  return (
    <div className="slider__container">
      <p className="slider__pearson-name">Solange Alvez - 38 anos</p>

      <Slider ref={sliderRef} {...settings}>
        {testeSlider.map((item) => (
          <div className="slider__img-container">
            <img
              src={item.img}
              alt={item.description}
              className="slider__img"
            />
          </div>
        ))}
      </Slider>

      <span className="slider__quantity-weight">-7Kg em 14 dias</span>

      <section className="slider__left-icon-box">
        {position !== 0 && (
          <div onClick={handlePrev}>
            <FaAngleLeft color="rgb(227, 227, 227)" size={30} />
          </div>
        )}
      </section>

      <section className="slider__right-icon-box">
        <div onClick={handleNext}>
          <FaAngleRight color="rgb(227, 227, 227)" size={30} />
        </div>
      </section>
    </div>
  );
};
