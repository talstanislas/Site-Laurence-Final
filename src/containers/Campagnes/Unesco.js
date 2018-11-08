import React from "react";
import "./Patisen.css";

class Unesco extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="container">
        <div class="carousel-inner firstRow ">
          <div class="carousel-item active">
            <img
              class="w-100"
              src="https://res.cloudinary.com/talstanislas/image/upload/v1541038647/site-laurence-images/Unesco/181022-UNESCO-1-300DPI.jpg"
              alt="First slide"
            />
            <div className="overlay">
              <div className="campagneTitle2">UNESCO</div>
              <div className="campagneDescription2">
                <text>Conception branding pour la décennie 2021/2030</text>
                <br />
                <br />
                <text>Brand design for decade 2021/2030</text>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-inner ">
          <div class="carousel-item active">
            <img
              class="w-101"
              src="https://res.cloudinary.com/talstanislas/image/upload/v1541038647/site-laurence-images/Unesco/181022-UNESCO-2-300DPI.jpg"
              alt="First slide"
            />
          </div>
        </div>
        <div class="carousel-inner lastImage ">
          <div class="carousel-item active">
            <img
              class="w-101"
              src="https://res.cloudinary.com/talstanislas/image/upload/v1541038645/site-laurence-images/Unesco/181022-UNESCO-3-300DPI.jpg"
              alt="First slide"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Unesco;
