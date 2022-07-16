import React from "react";
import reuse from "./reuse.module.css";

export default function GridLeft({ children }) {
	return <div className={reuse.left}>{children}</div>;
}
