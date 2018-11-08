import React from "react";
import "./International-mill.css";

class InternationalMill extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="container ">
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide firstRow1 "
          data-ride="carousel"
          data-interval="3000"
          data-pause="false"
        >
          <div class="carousel-inner ">
            <div class="carousel-item active">
              <img
                class=" w-100"
                src="https://res.cloudinary.com/talstanislas/image/upload/w_0.4,c_scale/site-laurence-images/International-Mill/180921-IM-1-300DPI.jpg"
                alt="First slide"
              />
              <div className="overlay">
                <div className="campagneTitle2">INTERNATIONAL MILL</div>
                <div className="campagneDescription2">
                  <text>Conception packaging</text>
                  <br />
                  <br />
                  <text>Packaging Design</text>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img
                class=" w-100"
                src="https://res.cloudinary.com/talstanislas/image/upload/w_0.4,c_scale/site-laurence-images/International-Mill/180921-IM-2-300DPI.jpg"
                alt="Second slide"
              />
              <div className="overlay">
                <div className="campagneTitle2">INTERNATIONAL MILL</div>
                <div className="campagneDescription2">
                  <text>Conception packaging</text>
                  <br />
                  <br />
                  <text>Packaging Design</text>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img
                class=" w-100"
                src="https://res.cloudinary.com/talstanislas/image/upload/w_0.4,c_scale/site-laurence-images/International-Mill/180921-IM-3-300DPI.jpg"
                alt="Third slide"
              />
              <div className="overlay">
                <div className="campagneTitle2">INTERNATIONAL MILL</div>
                <div className="campagneDescription2">
                  <text>Conception packaging</text>
                  <br />
                  <br />
                  <text>Packaging Design</text>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide firstRow1 "
          data-ride="carousel"
          data-interval="3000"
        >
          <div class="carousel-inner ">
            <div class="carousel-item active">
              <img
                class=" w-101"
                src="https://res.cloudinary.com/talstanislas/image/upload/w_0.4,c_scale/site-laurence-images/International-Mill/180921-IM-4-300DPI.jpg"
                alt="First slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class=" w-101"
                src="https://res.cloudinary.com/talstanislas/image/upload/w_0.4,c_scale/site-laurence-images/International-Mill/180921-IM-5-300DPI.jpg"
                alt="Second slide"
              />
            </div>
          </div>
        </div>

        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide firstRow1 "
          data-ride="carousel"
          data-interval="3000"
        >
          <div class="carousel-inner ">
            <div class="carousel-item active">
              <img
                class=" w-101"
                src="https://res.cloudinary.com/talstanislas/image/upload/w_0.4,c_scale/site-laurence-images/International-Mill/180921-IM-6-300DPI.jpg"
                alt="First slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class=" w-101"
                src="https://res.cloudinary.com/talstanislas/image/upload/w_0.4,c_scale/site-laurence-images/International-Mill/180921-IM-7-300DPI.jpg"
                alt="Second slide"
              />
            </div>
          </div>
        </div>

        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide firstRow1 "
          data-ride="carousel"
          data-interval="3000"
        >
          <div class="carousel-inner lastImage ">
            <div class="carousel-item active">
              <img
                class=" w-101"
                src="https://res.cloudinary.com/talstanislas/image/upload/w_0.4,c_scale/site-laurence-images/International-Mill/180921-IM-8-300DPI.jpg"
                alt="First slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class=" w-101"
                src="https://res.cloudinary.com/talstanislas/image/upload/w_0.4,c_scale/site-laurence-images/International-Mill/180921-IM-9-300DPI.jpg"
                alt="Second slide"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InternationalMill;
