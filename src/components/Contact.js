import React from "react"

function Contact() {
  return (
    <div className="contact-component">
      <span className="contact-title">Contact Me</span>
      <hr />
      <div className="contact-container">
        <div className="contact-information">
          <div className="contact-numbers">
            <span>Tel: 123-456-7890</span>
            <br />
            <span>Fax: 123-456-7890</span>
          </div>
          <hr className="contact-hr" />
          <div className="contact-address">
            <span>500 Terry Francois St.</span>
            <br />
            <span>San Francisco, CA 94158</span>
            <br />
            <span>info@mysite.com</span>
          </div>
          <hr className="contact-hr" />
        </div>

        <div className="contact-form">
          <div className="inputs-textarea-container">
            <div className="inputs-container">
              <input className="input" type="text" placeholder="Name *" />
              <input className="input" type="text" placeholder="Email *" />
              <input className="input" type="text" placeholder="Subject *" />
            </div>
            <div className="message-textarea">
              <textarea className="message-area" placeholder="Message" />
            </div>
          </div>
          <div className="validation-container">
            <span className="warning">Please provide a valid email</span>
            <input className="send-button" type="submit" value="Send" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
