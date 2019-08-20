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
        	<div><img src='https://avatars2.githubusercontent.com/u/9293098?s=88&v=4' /></div>
        	<div><img src='https://avatars2.githubusercontent.com/u/9293098?s=88&v=4' /></div>
        	<div><img src='https://avatars2.githubusercontent.com/u/9293098?s=88&v=4' /></div>
        </Slider>
      </div>
    );
  }
}

export default HomePage;
