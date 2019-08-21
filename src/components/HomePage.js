import React, {Component} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class HomePage extends Component {
  render() {
    let settings = {
    	dots: true
    }
    return (
      <div className='container'>
      	<Slider {...settings}>
        	<div><img src='https://cdn.dribbble.com/users/72506/screenshots/4935260/dramatic-vector-landscapes.jpg' /></div>
        	<div><img src='https://cdn.dribbble.com/users/72506/screenshots/4935260/dramatic-vector-landscapes.jpg' /></div>
        	<div><img src='https://cdn.dribbble.com/users/72506/screenshots/4935260/dramatic-vector-landscapes.jpg' /></div>
        </Slider>

        <div className='image-list'>
          <img src='https://avatars2.githubusercontent.com/u/9293098?s=88&v=4'></img>
          <span>
            I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
          </span>
        </div>

      </div>
    );
  }
}

export default HomePage;
