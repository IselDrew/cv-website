import React from "react";

function Header(props) {
  const headerElements = props.titles.map(item => (
    <li className="header-li" key={item.id}>
      <a className="header-a" href={item.url}>
        {item.name}
      </a>
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
