import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Navigation/Header";

export default function Layout({ children }) {
	return (
		<>
			<Header />
			<main className='container'>{children}</main>
			<Footer />
		</>
	);
}
