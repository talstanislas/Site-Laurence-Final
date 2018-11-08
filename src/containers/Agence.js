import React from "react";
import "./Agence.css";

class Agence extends React.Component {
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="container agencyPage">
        <div class="carousel-inner ">
          <div class="carousel-item active">
            <img
              class="w-101"
              src="https://res.cloudinary.com/talstanislas/image/upload/w_0.3,c_scale/site-laurence-images/International-Mill/180921-IM-1-300DPI.jpg"
              alt="First slide"
            />
          </div>
        </div>

        <div className="container second">
          <div className="text">
            <div>
              <text>
                Accenderat super his incitatum propositum ad nocendum aliqua
                mulier vilis, quae ad palatium ut poposcerat intromissa insidias
                ei latenter obtendi prodiderat a militibus obscurissimis. quam
                Constantina exultans ut in tuto iam locata mariti salute
                muneratam vehiculoque inpositam per regiae ianuas emisit in
                publicum, ut his inlecebris alios quoque ad indicanda proliceret
                paria vel maiora.
              </text>
            </div>
          </div>
          <img
            className="secondPic"
            src={require("../img/180921-IM-3-300DPI.jpg")}
          />
        </div>

        <div className="container second last">
          <img
            className="secondPic"
            src={require("../img/180921-IM-2-300DPI.jpg")}
          />
          <div className="text">
            <div>
              <text>
                Accenderat super his incitatum propositum ad nocendum aliqua
                mulier vilis, quae ad palatium ut poposcerat intromissa insidias
                ei latenter obtendi prodiderat a militibus obscurissimis. quam
                Constantina exultans ut in tuto iam locata mariti salute
                muneratam vehiculoque inpositam per regiae ianuas emisit in
                publicum, ut his inlecebris alios quoque ad indicanda proliceret
                paria vel maiora.
              </text>
            </div>
          </div>
        </div>

        <div className="container third">
          <img
            className="thirdPic"
            src={require("../img/180921-IM-5-300DPI.jpg")}
          />
          <div className="thirdText">
            <text>
              Accenderat super his incitatum propositum ad nocendum aliqua
              mulier vilis, quae ad palatium ut poposcerat intromissa insidias
              ei latenter obtendi prodiderat a militibus obscurissimis. quam
              Constantina exultans ut in tuto iam locata mariti salute muneratam
              vehiculoque inpositam per regiae ianuas emisit in publicum, ut his
              inlecebris alios quoque ad indicanda proliceret paria vel maiora.
            </text>
          </div>
        </div>
      </div>
    );
  }
}
export default Agence;
