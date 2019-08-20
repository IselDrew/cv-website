import React, {Component} from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <span>NAME OF THE SITE</span>

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
      </div>
    );
  }
}

export default Header;
