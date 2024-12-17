import React from "react";
import img01 from "../../assets/img/images/about_img01.png";
import img02 from "../../assets/img/images/about_img02.png";
import { Link } from "react-router-dom";

const TradeUpTo = (props) => {
  return (
    <section id="about" className="about-area pt-130 pb-130">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="about-content wow fadeInRight" data-wow-delay=".2s">
              <div className="section-title mb-30">
                <h4 className="title">
                  70/30 Profit Slipt <span>100% Payout.</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradeUpTo;
