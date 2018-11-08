import React from "react";
import "./Campagne.css";

const Campagne = () => (
  <div className="container">
    <div className="firstRow">
      <img
        className="contactPicture"
        src={require("../img/180921-IM-2-300DPI.jpg")}
      />
    </div>
    <div className="secondRow">
      <img
        className="secondRowPic"
        src={require("../img/180921-IM-3-300DPI.jpg")}
      />
      <img
        className="secondRowPic"
        src={require("../img/180921-IM-4-300DPI.jpg")}
      />
    </div>
    <div className="thirdRow">
      <img
        className="thirdRowPic"
        src={require("../img/180921-IM-7-300DPI.jpg")}
      />
    </div>
  </div>
);

export default Campagne;
