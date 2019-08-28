import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { paragraphs } from "../ResumeData";

class HomePage extends Component {
  render() {
    const settings = {
      slideToShow: 1,
      centerMode: true,
      dots: true,
      arrows: true,
      autoplay: true,
      variableWidth: true
    };

    const paragraphElements = paragraphs.map(item => (
      // const paragraphElements = this.props.paragraphs.map(item => (
      <div className="paragraph-element" key={item.id}>
        <img className="paragraph-image" src={item.img} alt="ParagraphImage" />
        <span className="paragraph-text">{item.text}</span>
      </div>
    ));

    return (
      <div>
        <Slider {...settings}>
          <div>
            <img
              src="https://cdn.dribbble.com/users/72506/screenshots/4935260/dramatic-vector-landscapes.jpg"
              alt="slide"
            />
          </div>
          <div>
            <img
              src="https://img.freepik.com/free-vector/tree-mountain-landscape_1048-9294.jpg?size=626&ext=jpg"
              alt="slide"
            />
          </div>
          <div>
            <img
              src="https://i.ytimg.com/vi/yWYBIYD4JNo/maxresdefault.jpg"
              alt="slide"
            />
          </div>
        </Slider>

        <br />

        <div>{paragraphElements}</div>
      </div>
    );
  }
}

export default HomePage;
