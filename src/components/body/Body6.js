import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Body6.css";

export default function Body6() {
  return (
    <Row className="row-main-body6">
      <Col xs={12} sm={12} md={12} lg={12} className="col-main-body6">
        <img src="./Body2-Logo/body2-logo4.png" className="img-body6" />
        <p className="title-body6">
          I had the pleasure of experiencing the next generation of card
          solutions with this incredible product. It's refreshing to see such
          innovation in the financial industry.
        </p>
        <img
          className="profile-img-body6"
          src="./Body6-Profile/profile-image.png"
        />
        <p className="profile-name-body6">Nick Babich</p>
        <p className="profile-job-body6">Lead Designer</p>
        <img
          src="./Body6-Profile/rating.png"
          className="profile-rating-body6"
        />
      </Col>
    </Row>
  );
}
