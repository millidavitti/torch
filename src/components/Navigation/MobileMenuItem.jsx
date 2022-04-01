import React from "react";
import { Link } from "react-router-dom";

function MobileMenuItem(props) {
  const { to, text, Fn } = props;

  return (
    <li className='mobile-menu-item'>
      <Link to={to} onClick={Fn}>{text}</Link>
    </li>
  );
}

export default MobileMenuItem;
