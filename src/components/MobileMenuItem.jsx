import React from "react";
import { Link } from "react-router-dom";

function MobileMenuItem(props) {
  const { to, text } = props;

  return (
    <li className='mobile-menu-item'>
      <Link to={to}>{text}</Link>
    </li>
  );
}

export default MobileMenuItem;
