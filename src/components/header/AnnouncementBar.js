import React from "react";
import { Col, Row } from "react-bootstrap";
import "./AnnouncementBar.css";

export default function AnnouncementBar() {
  return (
    <div>
      <Row className="justify-content-center mainRowAnnounce">
        <Col lg={10} className="announcementCol">
          <div className="badgeDiv">Announcement</div>
          <p className="announceText">
            We are happy to announce that we raise $2 Million in Seed Funding
          </p>
        </Col>
      </Row>
    </div>
  );
}
