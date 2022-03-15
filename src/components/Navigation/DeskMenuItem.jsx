import React from "react";
import { Link } from "react-router-dom";

function DeskMenuItem(props) {
  const { id, to, text } = props;
  function active(id) {
    console.log(id);
  }
  return (
    <li className='desk-menu-item' onClick={active.bind(null, id)}>
      <Link to={to}>{text}</Link>
    </li>
  );
}

export default DeskMenuItem;
