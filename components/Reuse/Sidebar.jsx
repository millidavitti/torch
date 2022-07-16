import React from "react";
import reuse from "./reuse.module.css";

export default function Sidebar({ children }) {
	return <div className={reuse.sidebar}>{children}</div>;
}
