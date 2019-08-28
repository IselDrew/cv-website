import React from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";

function Header(props) {
  const headerElements = props.titles.map(item => (
    <li className="header-li" key={item.id}>
      <Link className="header-a" to = {item.url}>{item.name}</Link>
    </li>
  ));

  return (
    <div>
      <h1 className="website-title">Name of Site</h1>
        <ul className="header-ul">{headerElements}</ul>
      <br />
    </div>
  );
}

export default Header;
