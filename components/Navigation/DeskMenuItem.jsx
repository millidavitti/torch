import React, { useState } from "react";
import Link from "next/link";
import { CSSTransition } from "react-transition-group";
import post from "../Reuse/CSS/post.module.css";
import DropDown from "./DropDown";
import DropMenu from "./DropMenu";
export default function DeskMenuItem({ attributes }) {
	const { path, name, isDropDown } = attributes;
	const [showDrop, setShowDrop] = useState(false);
	let drops;

	// IDN: IDentification Name
	if (isDropDown) {
		drops = attributes[attributes.IDD]?.data.map(({ id, attributes }) => (
			<DropMenu key={id} IDN={attributes.IDN} path={attributes.path} />
		));
	}

	return (
		<li
			style={{
				display: "flex",
				alignItem: "center",
			}}
		>
			{isDropDown ? (
				<div
					className='desk-menu-item'
					onMouseEnter={() => setShowDrop(true)}
					onMouseLeave={() => setShowDrop(false)}
				>
					{name}
					{/* For Dropdown Menus */}
					<CSSTransition
						in={showDrop}
						unmountOnExit={true}
						timeout={300}
						classNames={post}
					>
						<DropDown>{drops}</DropDown>
					</CSSTransition>
				</div>
			) : (
				<Link href={`${path}`}>
					<a className='desk-menu-item'>{name}</a>
				</Link>
			)}
		</li>
	);
}
