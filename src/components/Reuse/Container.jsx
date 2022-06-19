import React from "react";
import reuse from "components/Reuse/reuse.module.css";

export default function Container({ children }) {
	return <div className={reuse.max}>{children}</div>;
}
