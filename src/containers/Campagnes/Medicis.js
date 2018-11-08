import React from "react";
import "./Patisen.css";

class Medicis extends React.Component {
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
              src="https://res.cloudinary.com/talstanislas/image/upload/v1541388830/site-laurence-images/Medicis/181030-MEDICIS-1-300DPI.jpg"
              alt="First slide"
            />
            <div className="overlay">
              <div className="campagneTitle2">CONFISERIES MEDICIS</div>

              <div className="campagneDescription3">
                <text>Conception packagin</text>
                <br />
                <br />
                <text>Packagin design</text>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-inner lastImage">
          <div class="carousel-item active">
            <img
              class="w-101"
              src="https://res.cloudinary.com/talstanislas/image/upload/v1541388830/site-laurence-images/Medicis/181030-MEDICIS-2-300DPI.jpg"
              alt="First slide"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Medicis;
