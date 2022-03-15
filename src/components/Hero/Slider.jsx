import React, { useEffect, useState } from "react";
import hero from "components/Hero/hero.module.css";
import Slide from "components/Hero/Slide";
import { Circle } from "phosphor-react";
function Slider() {
  const slidesInfo = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

  const [max, setMax] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [slides, setSlides] = useState([]);

  function getSlide(currentSlide) {
    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
    });
  }
  function slideThru() {
    if (currentSlide === max - 1) setCurrentSlide(0);
    else setCurrentSlide((pre) => pre + 1);
    getSlide(currentSlide);
  }

  useEffect(() => {
    const slides = document.querySelectorAll(`.${hero.slide}`);
    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${100 * index}%)`;
    });
    setMax(slides.length);
    setSlides(slides);
  }, []);

  const renderSlides = slidesInfo.map((slide) => (
    <Slide key={slide.id} id={slide.id} hero={hero} />
  ));
  return (
    <section className={hero.hero}>
      <div className={hero.slider}>
        <div className={hero.slides}>{renderSlides}</div>
        <Circle className={hero.slideBtn} onClick={slideThru}>
          {currentSlide ? currentSlide : max}
        </Circle>
      </div>
    </section>
  );
}

export default Slider;
