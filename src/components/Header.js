import React from "react";

function Header({ titles }) {
  const headerElements = titles.map(item => (
    <li className="header-element" key={item.id}>
      <a className="header-element-name" href={item.url}>
        {item.name}
      </a>
    </li>
  ));

  return <ul className="header">{headerElements}</ul>;
}

export default Header;
