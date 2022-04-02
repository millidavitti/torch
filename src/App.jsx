import Header from "components/Navigation/Header";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Category from "Routes/Category";
import Home from "Routes/Home";
import Footer from "components/Footer/Footer";

export default function App() {
  return (
  <main className='container'>
  <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="category" element={<Category/>}/>
      <Route path='*' element="What are doing here?" />
    </Routes>
  <Footer />
  </main>
  );
}
