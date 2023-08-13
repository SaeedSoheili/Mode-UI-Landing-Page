import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Body2.css";

let logoList = [
  { src: "./Body2-Logo/body2-logo1.png" },
  { src: "./Body2-Logo/body2-logo2.png" },
  { src: "./Body2-Logo/body2-logo3.png" },
  { src: "./Body2-Logo/body2-logo4.png" },
  { src: "./Body2-Logo/body2-logo5.png" },
  { src: "./Body2-Logo/body2-logo6.png" },
  { src: "./Body2-Logo/body2-logo7.png" },
  { src: "./Body2-Logo/body2-logo8.png" },
];

export default function Body2() {
  return (
    <Row className="body2-mainRow">
      <Col xs={12} sm={12} md={12} lg={12} className="body2-mainCol">
        {logoList.map((logo) => (
          <img className="img-body2" src={logo.src} alt="Logo" />
        ))}
      </Col>
    </Row>
  );
}
