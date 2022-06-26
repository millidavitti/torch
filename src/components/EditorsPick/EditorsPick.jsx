import React, { useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import three from "assets/images/three.jpg";

import five from "assets/images/five.jpg";
import six from "assets/images/six.jpg";

import editors from "components/EditorsPick/editors.module.css";

import SectionHeader from "components/Reuse/SectionHeader";
import EditorTab from "./EditorTab";

import CircularBtn from "./CircularBtn";

export default function EditorsPick() {
	const array = [
		{
			id: 1,
			author: "Donald Abua",
			category: "Fashion",
			date: "Jan 17, 2019",
			src: three,
			title: "Every Level Of Your Life Will Demand A Different You!",
			preview: "Fashion ipsum dolor sit amet consectetur adipisicing elit. Autem corrupti ad impedit? Incidunt, corrupti sequi.",
			isActive: true,
		},

		{
			id: 2,
			author: "Vegan Bake",
			category: "Ganja",
			date: "Dec 16, 2020",
			src: five,
			title: "We Are All in the Gutter, but Some of Us Are Looking at the Stars",
			preview: "Ganja ipsum dolor sit amet consectetur adipisicing elit. Autem corrupti ad impedit? Incidunt, corrupti sequi.",
			isActive: false,
		},
		{
			id: 3,
			author: "Ukwun Abua ",
			category: "Drums",
			date: "Mar 28, 2020",
			src: six,
			title: "That Which Does Not Kill Us Makes Us Stronger",
			preview: "David ipsum dolor sit amet consectetur adipisicing elit. Autem corrupti ad impedit? Incidunt, corrupti sequi.",
			isActive: false,
		},
	];

	const [picks, setPicks] = useState(array);
	const [idd, setIdd] = useState(1);

	const renderBtns = picks.map(({ id, isActive }) => (
		<CircularBtn key={id} id={id} Fn={switchPicks} isActive={isActive} />
	));

	function switchPicks(id) {
		setIdd(id);
		setPicks((pre) =>
			pre.map((pick) =>
				pick.id === id
					? { ...pick, isActive: true }
					: { ...pick, isActive: false },
			),
		);
	}

	const pick = picks.find((pick) => pick.id === idd);

	return (
		<section className={editors.editorsPick}>
			<SectionHeader
				text={`Editor's Pick`}
				description='Lorem ipsum dolor sit amet adipisicing elit.'
			/>
			<SwitchTransition>
				<CSSTransition
					key={idd}
					timeout={1000}
					classNames={editors}
				>
					<EditorTab
						css={editors}
						author={pick.author}
						category={pick.category}
						date={pick.date}
						title={pick.title}
						preview={pick.preview}
						btns={renderBtns}
						src={six}
						thumb={pick.src}
					/>
				</CSSTransition>
			</SwitchTransition>
		</section>
	);
}
