import React from "react";
import "./Body3.css";
import { Col, Row } from "react-bootstrap";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LanguageIcon from "@mui/icons-material/Language";
import KeyIcon from "@mui/icons-material/Keyboard";
import LockIcon from "@mui/icons-material/Lock";

let items = [
  {
    name: "Globally Accepted",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
    logo: "LanguageIcon",
  },
  {
    name: "Biometric Integrated",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
    logo: "KeyIcon",
  },
  {
    name: "Fully Secured",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
    logo: "LockIcon",
  },
];

export default function Body3() {
  return (
    <Row className="main-row-body3">
      <Col className="main-col-body3" lg={12}>
        <h2 className="title-body3">
          Elevating Card Programs with
          <br />
          Cutting-Edge Technology
        </h2>
        <p className="sub-title-body3">
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          <br />
          labore et dolore magna aliqua.
        </p>
        <p className="span-body3">
          Compare all Pro features
          <ArrowForwardIcon className="arrowIcon-body3" />
        </p>
        <div className="items-div-body3">
          {items.map((item, index) => {
            let IconComponent;
            if (item.logo === "LanguageIcon") {
              IconComponent = LanguageIcon;
            } else if (item.logo === "KeyIcon") {
              IconComponent = KeyIcon;
            } else if (item.logo === "LockIcon") {
              IconComponent = LockIcon;
            }

            return (
              <div key={index} className="item-body3">
                <div className="icon-div-body3">
                  <IconComponent className="icon-body3" />
                </div>
                <p className="item-name-body3">{item.name}</p>
                <p className="item-about-body3">{item.about}</p>
              </div>
            );
          })}
        </div>
      </Col>
    </Row>
  );
}
