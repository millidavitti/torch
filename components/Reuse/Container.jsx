import React from "react";
import reuse from "./reuse.module.css";

export default function Container({ children }) {
	return <div className={reuse.max}>{children}</div>;
}
