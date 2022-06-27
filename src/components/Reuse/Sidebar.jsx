import React from "react";
import reuse from "components/Reuse/reuse.module.css";

export default function Sidebar({ children }) {
	return <div className={reuse.sidebar}>{children}</div>;
}
