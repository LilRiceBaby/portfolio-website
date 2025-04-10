import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/alien-logo2.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.png";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { HashLink } from 'react-router-hash-link';



export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
          <a href="#home">
          <img src={logo} alt="Logo" style={{ cursor: 'pointer' }} />
          </a>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/robin-su-aa7575186/"><img src={navIcon1} alt="https://www.linkedin.com/in/robin-su-aa7575186/" /></a>
              <a href="https://github.com/LilRiceBaby?tab=overview&from=2025-04-01&to=2025-04-03"><img src={navIcon2} alt="https://github.com/LilRiceBaby?tab=overview&from=2025-04-01&to=2025-04-03" /></a>
              <a href="https://www.instagram.com/lil_ether_/"><img src={navIcon3} alt="https://www.instagram.com/lil_ether_/" /></a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
