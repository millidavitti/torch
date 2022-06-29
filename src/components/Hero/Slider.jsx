import React, { useEffect, useRef, useState } from "react";
import { Circle } from "phosphor-react";
import Slide from "components/Hero/Slide";

export default function Slider(props) {
	const { css } = props;
	const slidesInfo = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
	// Number Of Slides
	const [max, setMax] = useState(0);
	// Current Slide Position
	const [currentSlide, setCurrentSlide] = useState(1);
	// Actual Slides
	const [slides, setSlides] = useState([]);
	// Slide's DOM Refrence
	const sld = useRef([]);

	// Makes an array of slide's DOM refrences
	function sldRefs(el) {
		if (el && !sld.current.includes(el)) sld.current.push(el);
	}

	// Gets a particular slide
	function getSlide(current) {
		slides.forEach((slide, index) => {
			slide.style.transform = `translateX(${
				100 * (index - current)
			}%)`;
		});
	}

	// Callback function for navigating the slides
	function slideThru() {
		if (currentSlide === max - 1) setCurrentSlide(0);
		else setCurrentSlide((pre) => pre + 1);
		getSlide(currentSlide);
	}

	useEffect(() => {
		const slides = sld.current;

		slides.forEach((slide, index) => {
			slide.style.transform = `translateX(${100 * index}%)`;
		});
		setMax(slides.length);
		setSlides(slides);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const renderSlides = slidesInfo?.map((slide) => (
		<Slide
			ref={sldRefs}
			key={slide.id}
			id={slide.id}
			css={css}
			Fn={slideThru}
		/>
	));

	return (
		<div className={css.slider}>
			<div className={css.slides}>{renderSlides}</div>
			<Circle className={css.slideBtn} onClick={slideThru} />
		</div>
	);
}
