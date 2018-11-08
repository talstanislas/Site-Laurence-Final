import React from "react";
import "./Patisen.css";

class Guerlain extends React.Component {
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
              src="https://res.cloudinary.com/talstanislas/image/upload/v1541038703/site-laurence-images/Guerlain/181026-GUERLAIN-1-300DPI.jpg"
              alt="First slide"
            />
            <div className="overlay">
              <div className="campagneTitle2">SHALIMAR</div>

              <div className="campagneDescription3">
                <text>Conception packaging / Packaging design</text>
                <br />
                <br />
                <text>
                  Coffret édition limitée sur le thème des 1001 nuits <br />
                  Packaging design for limited edition box on Arabian Nights
                  theme
                </text>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-inner lastImage">
          <div class="carousel-item active">
            <img
              class="w-101"
              src="https://res.cloudinary.com/talstanislas/image/upload/v1541038702/site-laurence-images/Guerlain/181026-GUERLAIN-2-300DPI.jpg"
              alt="First slide"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Guerlain;
