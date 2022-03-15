import React, { useState } from "react";
// import { Route, Routes } from "react-router-dom";

// Components
import MobileNav from "components/MobileNav";
import DeskItems from "components/DeskItems";

import { ReactComponent as Logo } from "assets/logo.svg";

export default function App() {
  const [menuItems] = useState([
    { id: 1, to: "/", text: "Home" },
    { id: 2, to: "/", text: "Category" },
    { id: 3, to: "/", text: "Author" },
    { id: 4, to: "/", text: "Archive" },
  ]);

  return (
    <main className='container'>
      <header>
        <Logo className='logo' />
        <MobileNav Logo={Logo} menuItems={menuItems} />
        <DeskItems menuItems={menuItems} />
      </header>
    </main>
  );
}
