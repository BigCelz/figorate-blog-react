import "./Footer.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../images/logo.png";
import Nav from "react-bootstrap/Nav";

function Footer() {
    return (
        <section className="footer">
            <Container>
                <a href="#" className="foot-logo-link">
                    <h2 className="footer-logo">
                        <img src={logo} alt="" className="img-logo" />
                        <span className="figorate">Figorate</span>
                    </h2>
                </a>

                <div className="nav-header">
                  <h6 className="nav-title">Access quick link </h6>
                </div>

                <Row>
                    <Col md={12}>
                        <div className="nav-row">
                            <Nav defaultActiveKey="/home" as="ul" className="nav-link-container">
                                <Nav.Item as="li">
                                    <Nav.Link href="/home" className="nav-link">Home</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link eventKey="link-1" className="nav-link">Marketplace</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link eventKey="link-2" className="nav-link">Blog</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link eventKey="link-3" className="nav-link">Contact Us</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link eventKey="link-4" className="nav-link">About Us</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </Col>
                </Row>

                <h6 className="privacy">Privacy Policy</h6>
                <hr className="mb-3 line" />

                <div className="copyright-container">
                    <Row>
                        <Col md={4}>
                            <small className="copyright">Copyright © 2016 - 2024 Your Company</small>
                        </Col>

                        <Col md={4}>
                            <p className="term">Term of Service </p>
                        </Col>

                        <Col md={4}>
                            <div className="social-icons">
                                <i className="fa-brands fa-facebook"></i>
                                <i className="fa-brands fa-x-twitter"></i>
                                <i className="fa-brands fa-instagram"></i>
                                <i className="fa-brands fa-linkedin"></i>
                            </div>
                        </Col>
                    </Row>

                    <hr className="mb-3 line" />
                </div>
            </Container>
        </section>
    );
}

export default Footer;