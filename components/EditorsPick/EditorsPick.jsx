import React, { useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import editors from "../EditorsPick/editors.module.css";
import EditorTab from "./EditorTab";
import CircularBtn from "./CircularBtn";

export default function EditorsPick({ posts }) {
	const [curr, setCurr] = useState(JSON.parse(posts)[0].title);

	const pick = JSON.parse(posts).find((pick) => pick.title === curr);

	const renderBtns = JSON.parse(posts).map(({ title }) => (
		<CircularBtn
			key={title}
			id={title}
			switchPicks={switchPicks}
			isActive={curr}
		/>
	));

	function switchPicks(event) {
		const { id } = event.target;
		setCurr(id);
	}

	return (
		<SwitchTransition>
			<CSSTransition key={curr} timeout={1000} classNames={editors}>
				<EditorTab btns={renderBtns} pick={pick} />
			</CSSTransition>
		</SwitchTransition>
	);
}
