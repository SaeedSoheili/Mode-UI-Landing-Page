import React from "react";
import "./Body1.css";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Body1() {
  return (
    <Row className="mainRowBody1">
      <Col lg={12}>
        <h2>Seamless experience</h2>
        <h1>
          Unleashing the Next <br /> Generation of Card <br />
          Solutions
        </h1>
        <h3>
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et <br /> dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud
        </h3>
        <Button className="button">
          Unlock your Card
          <ArrowForwardIcon className="arrowIcon" />
        </Button>
        <p>*No credit card required</p>
        <img src="./body1Background.png" alt="background-image" />
      </Col>
    </Row>
  );
}
