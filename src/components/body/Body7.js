import React from "react";
import "./Body7.css";
import { Col, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import HeadphonesIcon from "@mui/icons-material/Headphones";

export default function Body7() {
  return (
    <Row className="row-main-body7">
      <Col md={12} lg={12}>
        <p className="title-body7">
          Unlock Limitless Possibilities with Our New Card Solutions
        </p>
        <div className="main-div-body7">
          <Button className="button1-body7">
            Unlock your card
            <CreditCardIcon className="icon1-body7" />
          </Button>
          <Button className="button2-body7">
            Customer support <HeadphonesIcon className="icon2-body7" />
          </Button>
        </div>
      </Col>
    </Row>
  );
}
