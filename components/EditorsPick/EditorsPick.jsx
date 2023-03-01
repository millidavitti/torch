import React, { useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import editors from "../EditorsPick/editors.module.css";
import EditorTab from "./EditorTab";
import CircularBtn from "./CircularBtn";

import { mockPosts } from "../../serverless/mock";

export default function EditorsPick() {
	const [curr, setCurr] = useState(mockPosts[0].title);

	const pick = mockPosts.find((pick) => pick.title === curr);

	const renderBtns = mockPosts.map(({ title, isActive }) => (
		<CircularBtn key={title} id={title} Fn={switchPicks} isActive={isActive} />
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
