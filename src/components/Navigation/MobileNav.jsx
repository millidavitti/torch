import React, { useState } from "react";
import { List, XCircle, FacebookLogo, TwitterLogo } from "phosphor-react";

import MobileMenuItem from "components/Navigation/MobileMenuItem";

function MobileNav(props) {
  const { Logo, menuItems } = props;

  const [mobileMenuState, setMobileMenuState] = useState({ isClosed: true });
  function showMenu() {
    setMobileMenuState((pre) => ({ ...pre, isClosed: !pre.isClosed }));
  }

  function closeMenu() {
    setMobileMenuState((pre) => ({ ...pre, isClosed: !pre.isClosed }));
  }

  const show = mobileMenuState.isClosed ? "" : "show";
  const hideOverlay = !mobileMenuState.isClosed ? "hide-overlay" : "";

  const renderMenuItems = menuItems.map((item) => (
    <MobileMenuItem key={item.id} id={item.id} to={item.to} text={item.text} Fn={closeMenu}/>
  ));

  return (
    <nav className='mobile-nav'>
      <List className='ham' size={35} weight='bold' onClick={showMenu} />
      <div className={`mobile-menu-items ${show}`}>
        <div className='menu-top'>
          <div className='logo-socials'>
            <Logo fill='#273136' width='60px' height='60px' />
            <div>
              <FacebookLogo size={30} color='#000000' />
              <TwitterLogo size={30} color='#000000' />
            </div>
          </div>
          <XCircle className='close' weight='thin' onClick={closeMenu} />
        </div>
        <div className='mobile-items-wrap'>
          <ul>{renderMenuItems}</ul>
        </div>
      </div>
      <div className={`overlay ${hideOverlay}`}></div>
    </nav>
  );
}

export default MobileNav;