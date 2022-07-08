import Header from "components/Navigation/Header";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Category from "Routes/Category";
import Home from "Routes/Home";
import Footer from "components/Footer/Footer";
import PostPage from "Routes/PostPage";

export default function App() {
	return (
		<main className='container'>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='categories/:path' element={<Category />} />
				<Route path='post/:postID' element={<PostPage />} />
				<Route path='*' element='What are you doing here?' />
			</Routes>
			<Footer />
		</main>
	);
}
