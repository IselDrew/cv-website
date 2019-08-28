import React from "react";
import { teamList } from "../ResumeData";

function About() {
  const teamListElements = teamList.map(item => (
    <div>
      <img src={item.img} alt={item.name} />
      <br />
      <span>{item.name}</span>
      <hr />
      <span>{item.title}</span>
      <br />
      <span>{item.text}</span>
    </div>
  ));

  return (
    <div>
      <span>About</span>
      <hr />
      <span>
        I'm a paragraph. Click here to add your own text and edit me. It’s easy.
        Just click “Edit Text” or double click me to add your own content and
        make changes to the font. Feel free to drag and drop me anywhere you
        like on your page. I’m a great place for you to tell a story and let
        your users know a little more about you.
      </span>
      <br />
      <span>Team</span>
      <hr />

      {teamListElements}
    </div>
  );
}

export default About;
