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
        <div>
          <div>
            <form>
              <input type="text" placeholder="Name *" />
              <br />
              <input type="text" placeholder="Email *" />
              <br />
              <input type="text" placeholder="Subject" />
              <input type="text" placeholder="Message" />
              <button>send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
