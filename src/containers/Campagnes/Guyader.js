import React from "react";
import "./Patisen.css";

class Guyader extends React.Component {
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
              src="https://res.cloudinary.com/talstanislas/image/upload/v1541653386/site-laurence-images/Guyader/181026-GUYADER-1-300DPI.jpg"
              alt="First slide"
            />
            <div className="overlay">
              <div className="campagneTitlePetit">GUYADER</div>
              <div className="campagneDescriptionPetit">
                <text>Conception packaging marchés français & export</text>
                <br />
                <br />
                <text>Design packaging French & export markets</text>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-inner lastImage ">
          <div class="carousel-item active">
            <img
              class="w-101"
              src="https://res.cloudinary.com/talstanislas/image/upload/v1541653390/site-laurence-images/Guyader/181101-GUYADER-2-300DPI-A.jpg"
              alt="First slide"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Guyader;
