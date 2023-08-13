import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Footer1.css";

export default function Footer1() {
  return (
    <Row className="row-main-footer1">
      <Col className="col-main-footer1" lg={10}>
        <p className="title-footer1">Mode UI</p>
        <p className="text-footer1">
          Mode UI is a comprehensive design system that empowers designers and
          developers to create cohesive and visually stunning user interfaces
          across various platforms and devices
        </p>
      </Col>
    </Row>
  );
}
