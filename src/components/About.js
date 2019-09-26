import React from "react"
import { teamList } from "../data"

const teamListElements = teamList.map(item => (
  <div className="about-list-element" key={item.id}>
    <div className="about-list-image-container">
      <img className="about-list-image" src={item.img} alt={item.name} />
    </div>
    <span className="about-list-name">{item.name}</span>
    <div className="about-list-hr" />
    <span className="about-list-title">{item.title}</span>
    <span className="about-list-text">{item.text}</span>
  </div>
))

function About() {
  return (
    <div className="about-component">
      <span className="about-title">About</span>
      <hr />
      <div className="about-paragraph">
        <span>
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. Feel free to drag and drop me
          anywhere you like on your page. I’m a great place for you to tell a
          story and let your users know a little more about you.
        </span>
      </div>
      <br />

      <span className="about-title">Team</span>
      <hr />

      <div className="about-list">{teamListElements}</div>
    </div>
  )
}

export default About
