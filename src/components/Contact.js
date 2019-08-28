import React from "react";

function Contact() {
  return (
    <div>
      <span>Contact Me</span>
      <hr />
      <div>
        <div>
          <span>Tel: 123-456-7890 Fax: 123-456-7890</span>
          <hr />
          <span>
            500 Terry Francois St. San Francisco, CA 94158 info@mysite.com
          </span>
          <hr />
        </div>
        <div>
          <div>
            <input type="text" placeholder="Name *" />
            <br />
            <input type="text" placeholder="Email *" />
            <br />
            <input type="text" placeholder="Subject" />
            <input type="text" placeholder="Message" />
          </div>
          <button>send</button>
        </div>
      </div>
      <div>map</div>
    </div>
  );
}

export default Contact;
