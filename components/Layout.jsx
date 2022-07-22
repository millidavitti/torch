import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Navigation/Header";
import Head from "next/head";
export default function Layout({ children }) {
	return (
		<>
			<Head>
				<link
					rel='icon'
					href='https://res.cloudinary.com/torch-cms-media/image/upload/v1657980657/logo_5d3d7f7c34.svg'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta name='theme-color' content='#000000' />
				<meta name='description' content='Your Number One Tech Blog' />
			</Head>
			<Header />
			<main className='container'>{children}</main>
			<Footer />
		</>
	);
}
