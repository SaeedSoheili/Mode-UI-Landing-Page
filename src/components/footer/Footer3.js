import React from "react";
import { Col, Row } from "react-bootstrap";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import "./Footer3.css";

let socials = [
  { name: "github", link: "#", icon: GitHubIcon },
  { name: "linkedin", link: "#", icon: LinkedInIcon },
  { name: "telegram", link: "#", icon: TelegramIcon },
];

export default function Footer3() {
  return (
    <Row className="row-main-footer3">
      <Col className="row-main-footer3">
        <div className="div-footer3">
          {socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <a key={index} href={social.link} className="social-icon-footer3">
                <Icon className="icon-footer3" />
              </a>
            );
          })}
        </div>
        <p className="text-footer3">© 2023 Mode UI Inc. All Rights Reserved.</p>
      </Col>
    </Row>
  );
}
