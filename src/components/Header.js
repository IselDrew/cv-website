import React, {Component} from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <div>LOGO</div>

        <div>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
