import React from "react";
import "./Patisen.css";

class Erie extends React.Component {
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
              src="https://res.cloudinary.com/talstanislas/image/upload/v1541038721/site-laurence-images/Erie-Europe/181026-ERIE-EUROPE-1-300DPI.jpg"
              alt="First slide"
            />
            <div className="overlay">
              <div className="campagneTitlePetit">ERIE EUROPE</div>
              <div className="campagneDescriptionPetit">
                <text>
                  Conception packaging marchés Afrique de l’Ouest & Afrique
                  centrale
                </text>
                <br />
                <br />
                <text>
                  Design packaging West African & central African market
                </text>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-inner lastImage ">
          <div class="carousel-item active">
            <img
              class="w-101"
              src="https://res.cloudinary.com/talstanislas/image/upload/v1541652853/site-laurence-images/Erie-Europe/180921-ERIE-EUROPE-2-300DPI.jpg"
              alt="First slide"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Erie;
