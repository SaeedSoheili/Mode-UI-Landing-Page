import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import "./NavBar.css";
import LoginIcon from "@mui/icons-material/Login";
import NavBarMenus from "./NavBarMenus";

export default function NavBar() {
  let menuItems = [
    { name: "Card access", icon: true },
    { name: "Banking", icon: false },
    { name: "Processing", icon: false },
    { name: "About", icon: false },
    { name: "Carrier", icon: false },
    { name: "Contact", icon: false },
  ];

  return (
    <>
      <Row className="navBarRow">
        <Col lg={2} className="navbarLogo">
          Mode UI
        </Col>
        <Col lg={8} className="navBarItems">
          {menuItems.map((item) => (
            <NavBarMenus title={item.name} icon={item.icon} />
          ))}
        </Col>
        <Col lg={2}>
          <Button className="loginButton">
            Login
            <LoginIcon className="loginIcon"></LoginIcon>
          </Button>
        </Col>
      </Row>
    </>
  );
}
