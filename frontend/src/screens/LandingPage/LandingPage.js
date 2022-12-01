import React, { useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import "./LandingStyle.css";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/esm/Row";

const LandingPage = () => {
  // useEffect(() => {
  //   const userInfo = localStorage.getItem("userInfo");
  //   if (userInfo) {
  //     history.push("/myposts");
  //   }
  // }, [history]);
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intr-text">
            <div>
              <h1 className="title">Bienvenue sur jvt 2.0</h1>
              <p className="subtitle">
                Lorem ipsum, dolor sit amet consectetur adipisicing
              </p>
            </div>
            <div className="buttonContainer">
              <a href="/login">
                <Button
                  size="lg"
                  className="landingbutton"
                  variant="outline-primary"
                >
                  Se connecter
                </Button>
              </a>
              <a href="/register">
                <Button
                  size="lg"
                  className="landingbutton"
                  variant="outline-primary"
                >
                  S'enregister
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
