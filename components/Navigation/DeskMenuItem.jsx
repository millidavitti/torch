import React, { useState } from "react";
import Link from "next/link";
import { CSSTransition } from "react-transition-group";
import post from "../Reuse/CSS/post.module.css";
import DropDown from "./DropDown";
import DropMenu from "./DropMenu";

export default function DeskMenuItem({ menu: parent }) {
	const [showDrop, setShowDrop] = useState(false);

	return (
		<li
			style={{
				display: "flex",
				alignItem: "center",
			}}
		>
			{parent.isdropDown ? (
				<div
					className='desk-menu-item'
					onMouseEnter={() => setShowDrop(true)}
					onMouseLeave={() => setShowDrop(false)}
				>
					{parent.name}

					{/* For Dropdown Menus  */}
					<CSSTransition
						in={showDrop}
						unmountOnExit={true}
						timeout={300}
						classNames={post}
					>
						{/* Replace categories with menu.dropItems */}
						<DropDown>
							{parent.dropItems.map((menu) => (
								<DropMenu key={menu._id} menu={menu} parent={parent} />
							))}
						</DropDown>
					</CSSTransition>
				</div>
			) : (
				<Link href={`${parent.id}`}>
					<a className='desk-menu-item'>{parent.name}</a>
				</Link>
			)}
		</li>
	);
}
