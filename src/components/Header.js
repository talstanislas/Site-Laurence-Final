import React from "react";
import { NavLink, withRouter, Link } from "react-router-dom";
import "../App.css";

class Header extends React.Component {
  render() {
    return (
      <div className="container header">
        <div className="Logo">
          <Link to="/">
            <img className="logoHeader" src={require("../img/lbc.png")} />
          </Link>
        </div>
        <div className="buttons">
          <ul>
            <li>
              <Link to="/book" className="headerButton book">
                Book
              </Link>
            </li>
            <li>
              <Link to="/agence" className="Agence">
                Agence
              </Link>
            </li>
            <li>
              <Link to="/contact" className="Contact lastButton">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
