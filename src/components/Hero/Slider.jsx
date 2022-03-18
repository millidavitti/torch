import React, { useEffect, useState } from "react";
import { Circle } from "phosphor-react";
import Slide from "components/Hero/Slide";

function Slider(props) {
  const { css } = props;
  const slidesInfo = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

  const [max, setMax] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [slides, setSlides] = useState([]);

  function getSlide(current) {
    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${100 * (index - current)}%)`;
    });
  }
  function slideThru() {
    if (currentSlide === max - 1) setCurrentSlide(0);
    else setCurrentSlide((pre) => pre + 1);
    getSlide(currentSlide);
  }

  useEffect(() => {
    const slides = document.querySelectorAll(`.${css.slide}`);
    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${100 * index}%)`;
    });
    setMax(slides.length);
    setSlides(slides);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderSlides = slidesInfo?.map((slide) => (
    <Slide key={slide.id} id={slide.id} css={css} Fn={slideThru} />
  ));

  return (
    <div className={css.slider}>
      <div className={css.slides}>{renderSlides}</div>
      <Circle className={css.slideBtn} onClick={slideThru} />
    </div>
  );
}

export default Slider;
