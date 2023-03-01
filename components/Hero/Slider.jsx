import React, { useEffect, useRef, useState } from "react";
import { Circle } from "phosphor-react";
import Slide from "./Slide";
import hero from "./hero.module.css";

import { mockPosts } from "../../serverless/mock";

export default function Slider() {
	// Slide's DOM Refrence
	const sld = useRef([]);
	// Number Of Slides
	const max = mockPosts.length;
	// Current Slide Position
	const [currentSlide, setCurrentSlide] = useState(1);
	// Actual Slides
	const [slides, setSlides] = useState();

	useEffect(() => {
		const slides = sld.current;

		slides.forEach((slide, index) => {
			slide.style.transform = `translateX(${100 * index}%)`;
		});
		setSlides(slides);
	}, []);

	// Makes an array of slide's DOM refrences
	function sldRefs(el) {
		if (el && !sld.current.includes(el)) sld.current.push(el);
	}

	// Gets a particular slide
	function getSlide(current) {
		slides.forEach((slide, index) => {
			slide.style.transform = `translateX(${100 * (index - current)}%)`;
		});
	}

	// Callback function for navigating the slides
	function slideThru() {
		if (currentSlide === max - 1) setCurrentSlide(0);
		else setCurrentSlide((pre) => pre + 1);
		getSlide(currentSlide);
	}

	const renderSlides = mockPosts.map((slide) => (
		<Slide ref={sldRefs} key={slide.title} id={slide.title} slide={slide} />
	));

	return (
		<div className={hero.slider}>
			<div className={hero.slides}>{renderSlides}</div>
			<Circle className={hero.slideBtn} onClick={slideThru} />
		</div>
	);
}
