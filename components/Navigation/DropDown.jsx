import React from "react";

export default function DropDown({ children, toggleMenu }) {
	return (
		<div className='drop-down' onClick={toggleMenu}>
			{children}
		</div>
	);
}
