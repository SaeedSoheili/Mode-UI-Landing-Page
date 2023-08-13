import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Footer2.css";
import FooterNavbar from "./FooterNavBar";

export default function Footer2() {
  return (
    <Row className="row-main-footer2">
      <Col xs={12} sm={12} md={12} lg={12} className="col-main-footer2">
        <FooterNavbar />
      </Col>
    </Row>
  );
}
