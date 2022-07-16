import React from "react";
import hero from "./hero.module.css";

export default function Hero({ children }) {
	return <section className={hero.hero}>{children}</section>;
}
