import React from "react";
import reuse from "./reuse.module.css";

export default function Grid({ children }) {
	return <div className={reuse.grid}>{children}</div>;
}
