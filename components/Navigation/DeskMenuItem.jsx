import React, { useState } from "react";
import Link from "next/link";
import { CSSTransition } from "react-transition-group";
import post from "../Reuse/CSS/post.module.css";
import DropDown from "./DropDown";
import DropMenu from "./DropMenu";
import { categories } from "../../serverless/mock";
export default function DeskMenuItem({ menu }) {
	const [showDrop, setShowDrop] = useState(false);

	return (
		<li
			style={{
				display: "flex",
				alignItem: "center",
			}}
		>
			{menu.isdropDown ? (
				<div
					className='desk-menu-item'
					onMouseEnter={() => setShowDrop(true)}
					onMouseLeave={() => setShowDrop(false)}
				>
					{menu.name}

					{/* For Dropdown Menus */}
					<CSSTransition
						in={showDrop}
						unmountOnExit={true}
						timeout={300}
						classNames={post}
					>
						{/* Replace categories with menu.dropItems */}
						<DropDown>
							{categories.map((cat) => (
								<DropMenu key={cat.id} category={cat} />
							))}
						</DropDown>
					</CSSTransition>
				</div>
			) : (
				<Link href={`${menu.name.toLowerCase()}`}>
					<a className='desk-menu-item'>{menu.name}</a>
				</Link>
			)}
		</li>
	);
}
