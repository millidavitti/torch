import React from "react";
import reuse from "components/Reuse/reuse.module.css";

export default function Sticky({ children }) {
	return <div className={reuse.stick}>{children}</div>;
}
