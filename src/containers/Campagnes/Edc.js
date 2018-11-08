import React from "react";
import "./Patisen.css";

class Edc extends React.Component {
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
          <div class="carousel-inner ">
            <div class="carousel-item active">
              <img
                class=" w-100"
                src="https://res.cloudinary.com/talstanislas/image/upload/w_0.4,c_scale/v1541038618/site-laurence-images/EDC/181003-EDC-M4M-1-300DPI.jpg"
                alt="First slide"
              />
              <div className="overlay">
                <div className="campagneTitle2">EUROPÉENE DE CONDIMENTS</div>
                <div className="campagneDescription2">
                  <text>
                    Adaptation du design packaging allemand au marché français
                  </text>
                  <br />
                  <br />
                  <text>
                    Adaptation of German packaging design to th French market
                  </text>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img
                class=" w-100"
                src="https://res.cloudinary.com/talstanislas/image/upload/w_0.4,c_scale/v1541038618/site-laurence-images/EDC/181003-EDC-M4M-2-300DPI.jpg"
                alt="Second slide"
              />
              <div className="overlay">
                <div className="campagneTitle2">EUROPÉENE DE CONDIMENTS</div>
                <div className="campagneDescription2">
                  <text>
                    Adaptation du design packaging allemand au marché français
                  </text>
                  <br />
                  <br />
                  <text>
                    Adaptation of German packaging design to th French market
                  </text>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img
                class=" w-100"
                src="https://res.cloudinary.com/talstanislas/image/upload/w_0.4,c_scale/v1541038618/site-laurence-images/EDC/181003-EDC-M4M-3-300DPI.jpg"
                alt="Third slide"
              />
              <div className="overlay">
                <div className="campagneTitle2">EUROPÉENE DE CONDIMENTS</div>
                <div className="campagneDescription2">
                  <text>
                    Adaptation du design packaging allemand au marché français
                  </text>
                  <br />
                  <br />
                  <text>
                    Adaptation of German packaging design to the French market
                  </text>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img
                class=" w-100"
                src="https://res.cloudinary.com/talstanislas/image/upload/w_0.4,c_scale/v1541038618/site-laurence-images/EDC/181003-EDC-M4M-4-300DPI.jpg"
                alt="Third slide"
              />
              <div className="overlay">
                <div className="campagneTitle2">EUROPÉENE DE CONDIMENTS</div>
                <div className="campagneDescription2">
                  <text>
                    Adaptation du design packaging allemand au marché français
                  </text>
                  <br />
                  <br />
                  <text>
                    Adaptation of German packaging design to th French market
                  </text>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide firstRow1 "
          data-ride="carousel"
          data-interval="2500"
          data-pause="false"
        >
          <div class="carousel-inner ">
            <div class="carousel-item active">
              <img
                class="w-101"
                src="https://res.cloudinary.com/talstanislas/image/upload/v1541653036/site-laurence-images/EDC/181003-EDC-TEMERAIRE-1-300DPI.jpg"
                alt="First slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="w-101"
                src="https://res.cloudinary.com/talstanislas/image/upload/v1541653030/site-laurence-images/EDC/181003-EDC-MOUT-CHEFS-1-300DPI.jpg"
                alt="Second slide"
              />
            </div>
          </div>
          <div class="carousel-inner lastImage ">
            <div class="carousel-item active">
              <img
                class="w-101"
                src="https://res.cloudinary.com/talstanislas/image/upload/v1541653037/site-laurence-images/EDC/181003-EDC-XDIVERS-300DPI.jpg"
                alt="First slide"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Edc;
