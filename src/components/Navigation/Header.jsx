import React, { useState } from "react";
// Components
import MobileNav from "components/Navigation/MobileNav";
import DeskItems from "components/Navigation/DeskItems";

import { ReactComponent as Logo } from "assets/logo.svg";
function Header() {
  const [menuItems] = useState([
    { id: 1, to: "/", text: "Home" },
    { id: 2, to: "category", text: "Category" },
    { id: 3, to: "/", text: "Author" },
    { id: 4, to: "/", text: "Archive" },
  ]);
  return (
    <header>
      <Logo className='logo' />
      <MobileNav Logo={Logo} menuItems={menuItems} />
      <DeskItems menuItems={menuItems} />
    </header>
  );
}

export default Header;
