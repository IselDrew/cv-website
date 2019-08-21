import React from "react";

function Header({ titles }) {
  const headerElements = titles.map(item => (
    <li className="header-li" key={item.id}>
      <a className="header-a" href={item.url}>
        {item.name}
      </a>
    </li>
  ));

  return <ul className="header-ul">{headerElements}</ul>;
}

export default Header;
