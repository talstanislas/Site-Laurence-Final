import React from "react";
import "./Patisen.css";

class Patisen extends React.Component {
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
              src="https://res.cloudinary.com/talstanislas/image/upload/v1541388787/site-laurence-images/Patisen/181101-PATISEN-0-300DPI-A.jpg"
              alt="First slide"
            />
            <div className="overlay">
              <div className="campagneTitle2">PATISEN</div>
              <div className="campagneDescription2">
                <text>Conception packaging & marques - continent africain</text>
                <br />
                <br />
                <text>Packaging design & branding - African continent</text>
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-inner ">
          <div class="carousel-item active">
            <img
              class="w-101"
              src="https://res.cloudinary.com/talstanislas/image/upload/v1541388786/site-laurence-images/Patisen/181101-PATISEN-3-300DPI-A.jpg"
              alt="First slide"
            />
          </div>
        </div>

        <div class="carousel-inner ">
          <div class="carousel-item active">
            <img
              class="w-101"
              src="https://res.cloudinary.com/talstanislas/image/upload/v1541653607/site-laurence-images/Patisen/181101-PATISEN-4-300DPI-A.jpg"
              alt="First slide"
            />
          </div>
        </div>

        <div class="carousel-inner lastImage">
          <div class="carousel-item active">
            <img
              class="w-101"
              src="https://res.cloudinary.com/talstanislas/image/upload/v1541388783/site-laurence-images/Patisen/181101-PATISEN-5-300DPI-A.jpg"
              alt="First slide"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Patisen;
