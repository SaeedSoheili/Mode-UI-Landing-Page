import React from "react";
import { Col, Row } from "react-bootstrap";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Body4.css";

export default function Body4() {
  return (
    <Row className="row-main-body4">
      <Col md={12} lg={12} className="col-main-body4">
        <h2 className="title-body4">
          Elevating Card Programs with
          <br />
          Cutting-Edge Technology
        </h2>
        <p className="sub-title-body4">
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          <br />
          labore et dolore magna aliqua.
        </p>
        <p className="span-body4">
          Compare all Pro features
          <ArrowForwardIcon className="arrowIcon-body4" />
        </p>
        <div className="main-div-body4">
          <img className="img-body4" src="./Body4-Images/body4-img1.png" />
          <img className="img-body4" src="./Body4-Images/body4-img2.png" />
        </div>
      </Col>
    </Row>
  );
}
