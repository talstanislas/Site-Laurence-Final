import React from "react";
import "./Patisen.css";

class Silverenia extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="container">
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide firstRow1 "
          data-ride="carousel"
          data-interval="2500"
          data-pause="false"
        >
          <div class="carousel-inner firstRow ">
            <div class="carousel-item active">
              <img
                class="w-100"
                src="https://res.cloudinary.com/talstanislas/image/upload/v1541388936/site-laurence-images/Silverenia/181101-SILVERENIA-3-300DPI-A.jpg"
                alt="First slide"
              />
              <div className="overlay">
                <div className="campagneTitle2">SILVERENIA</div>
                <div className="campagneDescription2">
                  <text>
                    Shops conception & production by Denise Omer Design
                  </text>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img
                class=" w-100"
                src="https://res.cloudinary.com/talstanislas/image/upload/v1541653671/site-laurence-images/Silverenia/181101-SILVERENIA-1-300DPI-A.jpg"
                alt="Second slide"
              />
              <div className="overlay">
                <div className="campagneTitle2">SILVERENIA</div>
                <div className="campagneDescription2">
                  <text>
                    Shops conception & production by Denise Omer Design
                  </text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-inner ">
          <div class="carousel-item active">
            <img
              class="w-101"
              src="https://res.cloudinary.com/talstanislas/image/upload/v1541388936/site-laurence-images/Silverenia/181101-SILVERENIA-2-300DPI-A.jpg"
              alt="First slide"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Silverenia;
