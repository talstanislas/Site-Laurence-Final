import React from "react";
import "./Contact.css";

class Contact extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="container contactContainer">
        <img
          className="contactPicture1"
          src={require("../img/180921-IM-2-300DPI.jpg")}
        />
        <div className="contactInfos">
          <div className="contactMail">
            <text>laurence@gouttefangeas.com</text>
          </div>
          <div className="contactName">
            <text>Laurence Gouttefangeas - </text>
            <text> 06.13.23.52.00</text>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
