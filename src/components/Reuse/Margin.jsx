import React from "react";
import reuse from "components/Reuse/reuse.module.css";

export default function Margin({ children }) {
	return <div className={reuse.margin}>{children}</div>;
}
