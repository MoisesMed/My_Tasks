import styled from "styled-components";
import React, { useState ,useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeBackground from "../assets/homeBackground.svg"
import { isAuthenticated } from "../util/auth";
import { useNavigate } from "react-router-dom";
import Login from "../styledComponents/Login";
import Register from "../styledComponents/Register";

const StyledModal = styled.div`
`

export default function Home() {
    const [isLogin, setIsLogin] = useState(true);
    let navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated()) {
            navigate('/tasks')
        }
    }, []);

    const changeIsLogin = () =>{
        setIsLogin(!isLogin)
    }

    return (
        <Container fluid>
            <Row>
                <Col xs={8}><img src={homeBackground} /></Col>
                <Col xs={4} className="align-self-center">
                    {isLogin?<Login change={changeIsLogin}/>:<Register change={changeIsLogin}/>}
                    </Col>
            </Row>
        </Container>
    );
}