import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Footer2.css";
import FooterNavbar from "./FooterNavBar";

export default function Footer2() {
  return (
    <Row className="row-main-footer2">
      <Col className="col-main-footer2" lg={10}>
        <FooterNavbar />
      </Col>
    </Row>
  );
}
