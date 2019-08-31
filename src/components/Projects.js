import React from "react"
import { projectsList } from "../ResumeData"

function Projects() {
  const projectsListElements = projectsList.map(item => (
    <div className='projects-list-element' key={item.id}>
      <img className='projects-list-img' src={item.img} alt={item.title} />
      <br />
      <span className='projects-list-title'>{item.title}</span>
      <hr className='projects-list-hr'/>
      <div className='projects-list-text'>
      <span>{item.text}</span>
      </div>
    </div>
  ))
  return (
    <div className="projects-component">
      <span className="projects-title">Projects</span>
      <hr />
      <span className="projects-paragraph">
        I'm a paragraph. Click here to add your own text and edit me. It’s easy.
        Just click “Edit Text” or double click me to add your own content and
        make changes to the font. Feel free to drag and drop me anywhere you
        like on your page. I’m a great place for you to tell a story and let
        your users know a little more about you. ​
      </span>
      <span className="projects-paragraph">
        This is a great space to write long text about your company and your
        services. You can use this space to go into a little more detail about
        your company. Talk about your team and what services you provide. Tell
        your visitors the story of how you came up with the idea for your
        business and what makes you different from your competitors. Make your
        company stand out and show your visitors who you are.
      </span>

      <div className='projects-list'>{projectsListElements}</div>
    </div>
  )
}

export default Projects
