import React, { Component } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { paragraphs } from "../ResumeData"

import testImg1 from "../images/slick1.png"
import testImg2 from "../images/slick2.png"
import testImg3 from "../images/slick3.png"

class HomePage extends Component {
  render() {
    const sliderSettings = {
      slideToShow: 1,
      dots: false,
      arrows: true,
      autoplay: true,
      adaptiveWidth: true,
    }

    const paragraphElements = paragraphs.map(item => (
      <div className="paragraph-element" key={item.id}>
        <div className="paragraph-title-container">
          <span className="paragraph-title">{item.title}</span>
        </div>
        <div className="paragraph-image-container">
          <img
            className="paragraph-image"
            src={item.img}
            alt="ParagraphImage"
          />
        </div>
        <div className="paragraph-text">{item.text}</div>
      </div>
    ))

    return (
      <div>
        <Slider {...sliderSettings}>
          <img className="slick-image" src={testImg1} alt="slide" />
          <img className="slick-image" src={testImg2} alt="slide" />
          <img className="slick-image" src={testImg3} alt="slide" />
        </Slider>

        <div className="paragraphs">{paragraphElements}</div>
      </div>
    )
  }
}

export default HomePage
