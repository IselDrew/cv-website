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

        <div className="form">
          <div className="inputs">
            <div className="input-fields-container">
              <input className="input-field" type="text" placeholder="Name *" />
              <br />
              <input
                className="input-field"
                type="text"
                placeholder="Email *"
              />
              <br />
              <input
                className="input-field"
                type="text"
                placeholder="Subject"
              />
            </div>
            <div className="input-message-container">
              <textarea
                className="input-message"
                type="text"
                placeholder="Message"
              />
            </div>
          </div>
          <div className="validation-container">
            <div className="warning-container">
              <span>Please provide a valid email</span>
            </div>
            <div className="button-container">
              <button className="send-button">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
