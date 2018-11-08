import React from "react";
import "./Book.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Book extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="container clientsPicture ">
        <Link to="/européene-du-condiment">
          <div className="wrapper firstWrap">
            <img
              className="picture"
              src="https://res.cloudinary.com/talstanislas/image/upload/w_0.4,c_scale/v1541388719/site-laurence-images/Book-Images/181102-EDC-M4M-CARRE-300DPI.jpg"
            />
            <div className="overlay">
              <div className="campagnTitle">
                EUROPÉENE DU <br /> CONDIMENT
              </div>
            </div>
          </div>
        </Link>

        <Link to="/international-mill">
          <div className="wrapper firstWrap firstWrap1">
            <img
              className="picture"
              src="https://res.cloudinary.com/talstanislas/image/upload/w_0.4,c_scale/v1541388722/site-laurence-images/Book-Images/181102-IM-CARRE-300DPI.jpg"
            />
            <div className="overlay">
              <div className="campagnTitle">INTERNATIONAL MILL</div>
            </div>
          </div>
        </Link>

        <Link to="/patisen">
          <div className="wrapper firstWrap firstWrap2">
            <img
              className="picture"
              src="https://res.cloudinary.com/talstanislas/image/upload/w_0.4,c_scale/v1541388721/site-laurence-images/Book-Images/181102-PATISEN-CARRE-300DPI.jpg"
            />
            <div className="overlay">
              <div className="campagnTitle">PATISEN</div>
            </div>
          </div>
        </Link>

        <Link to="/guyader">
          <div className="wrapper">
            <img
              className="picture"
              src="https://res.cloudinary.com/talstanislas/image/upload/w_0.4,c_scale/v1541388721/site-laurence-images/Book-Images/181102-GUYADER-CARRE-300DPI.jpg"
            />
            <div className="overlay">
              <div className="campagnTitle">GUYADER </div>
            </div>
          </div>
        </Link>

        <Link to="/silverenia">
          <div className="wrapper">
            <img
              className="picture"
              src="https://res.cloudinary.com/talstanislas/image/upload/w_0.4,c_scale/v1541388721/site-laurence-images/Book-Images/181102-SILVERENIA-CARRE-300DPI.jpg"
            />
            <div className="overlay">
              <div className="campagnTitle">SILVERENIA</div>
            </div>
          </div>
        </Link>

        <Link to="/guerlain">
          <div className="wrapper">
            <img
              className="picture"
              src="https://res.cloudinary.com/talstanislas/image/upload/w_0.4,c_scale/v1541388718/site-laurence-images/Book-Images/181102-GUERLAIN-CARRE-300DPI.jpg"
            />
            <div className="overlay">
              <div className="campagnTitle">GUERLAIN</div>
            </div>
          </div>
        </Link>

        <Link to="/medicis">
          <div className="wrapper">
            <img
              className="picture"
              src="https://res.cloudinary.com/talstanislas/image/upload/w_0.4,c_scale/v1541388719/site-laurence-images/Book-Images/181102-MEDICIS-CARRE-300DPI.jpg"
            />
            <div className="overlay">
              <div className="campagnTitle">MEDICIS</div>
            </div>
          </div>
        </Link>

        <Link to="/unesco">
          <div className="wrapper ">
            <img
              className="picture"
              src="https://res.cloudinary.com/talstanislas/image/upload/w_0.4,c_scale/v1541388721/site-laurence-images/Book-Images/181102-UNESCO-CARRE-300DPI.jpg"
            />
            <div className="overlay">
              <div className="campagnTitle">UNESCO</div>
            </div>
          </div>
        </Link>

        <Link to="/erie-europe">
          <div className="wrapper">
            <img
              className="picture"
              src="https://res.cloudinary.com/talstanislas/image/upload/w_0.4,c_scale/v1541388719/site-laurence-images/Book-Images/181102-ERIE-EUROPE-CARRE-300DPI.jpg"
            />
            <div className="overlay">
              <div className="campagnTitle">ERIE EUROPE </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
export default Book;
