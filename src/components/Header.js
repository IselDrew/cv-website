import React from "react"
import { Link } from "react-router-dom"

function Header(props) {
  const headerElements = props.titles.map(item => (
    <li className="navbar-li" key={item.id}>
      <Link className="navbar-a" to={item.url}>
        {item.name}
      </Link>
    </li>
  ))

  return (
    <div>
      <div className="website-title">Name of Site</div>
      <div className="navbar">
        <ul className="navbar-ul">{headerElements}</ul>
      </div>
      <br />
    </div>
  )
}

export default Header
