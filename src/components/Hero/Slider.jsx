import React, { useEffect, useRef, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { Circle } from "phosphor-react";
import Slide from "components/Hero/Slide";
import hero from "components/Hero/hero.module.css";
import { Spinner } from "phosphor-react";
import { MoonLoader } from "react-spinners";

const GET_SLIDES = gql`
	query ($var: PostFiltersInput) {
		posts(filters: $var) {
			data {
				id
				attributes {
					title
					publishedAt
					thumb {
						data {
							attributes {
								url
							}
						}
					}
				}
			}
		}
	}
`;

export default function Slider() {
	const { data, loading } = useQuery(GET_SLIDES, {
		variables: {
			var: {
				slide: {
					eq: true,
				},
			},
		},
	});

	// Slide's DOM Refrence
	const sld = useRef([]);
	// Number Of Slides
	const [max, setMax] = useState(0);
	// Current Slide Position
	const [currentSlide, setCurrentSlide] = useState(1);
	// Actual Slides
	const [slides, setSlides] = useState([]);

	useEffect(() => {
		const slides = sld.current;

		slides.forEach((slide, index) => {
			slide.style.transform = `translateX(${100 * index}%)`;
		});
		setMax(slides.length);
		setSlides(slides);
		console.log("Log 1");
		if (!loading) console.log("Log 2");

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [loading]);

	if (loading)
		return (
			<div className={hero.slider} style={{ display: "flex" }}>
				<MoonLoader
					cssOverride={{ margin: "0 auto" }}
					color='var(--secondary)'
					size={25}
				/>
			</div>
		);
	const {
		posts: { data: slideInfo },
	} = data;

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

	const renderSlides = slideInfo?.map(({ id, attributes }) => (
		<Slide ref={sldRefs} key={id} id={id} attributes={attributes} />
	));

	return (
		<div className={hero.slider}>
			<div className={hero.slides}>{renderSlides}</div>
			<Circle className={hero.slideBtn} onClick={slideThru} />
		</div>
	);
}
