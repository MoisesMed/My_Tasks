import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeBackground from "../assets/homeBackground.svg";
import { isAuthenticated } from "../util/auth";
import { useNavigate } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";

const ColWithImage = styled.div`
  @media (max-width: 900px) {
    display: none;
  }
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: top;
  background-size: contain;
  width: 60%;
  background-image: url(${homeBackground});
  min-height: 100vh;
`;
const ColWithoutImage = styled.div`
  @media (max-width: 900px) {
    width: 100%;
  }
  justify-content: center;
  width: 40%;
  min-height: 100vh;
  display: flex;
  align-items: center;
`;
export default function Home() {
  const [isLogin, setIsLogin] = useState(true);
  let navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) {
      navigate("/tasks");
    }
  }, []);

  const changeIsLogin = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Container fluid>
      <Row>
        <ColWithImage />
        <ColWithoutImage>
          {isLogin ? (
            <Login change={changeIsLogin} />
          ) : (
            <Register change={changeIsLogin} />
          )}
        </ColWithoutImage>
      </Row>
    </Container>
  );
}
