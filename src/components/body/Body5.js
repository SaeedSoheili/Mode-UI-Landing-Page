import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Body5.css";

let items = [
  {
    title: "2 Million",
    sub: "Customers",
    about: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
  },
  {
    title: "1K",
    sub: "Downloads",
    about: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
  },
  {
    title: "$73 Million",
    sub: "Transaction",
    about: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
  },
  {
    title: "2.0",
    sub: "Latest Version",
    about: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
  },
];

export default function Body5() {
  return (
    <Row className="row-main-body5">
      <Col lg={12} className="col-main-body5">
        {items.map((item) => (
          <div className="item-div-body5">
            <p className="title-body5">{item.title}</p>
            <p className="sub-body5">{item.sub}</p>
            <p className="about-body5">{item.about}</p>
          </div>
        ))}
      </Col>
    </Row>
  );
}
