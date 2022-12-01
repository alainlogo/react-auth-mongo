import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <footer
      style={{
        with: "100%",
        position: "relative",
        bottom: "0",
        display: "flex",
        justifycContent: "center",
      }}
    >
      <Container>
        <Row>
          <Col className="text-center py-3">JTV 2.0</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
