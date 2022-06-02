import styled from "styled-components";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeBackground from "../assets/homeBackground.svg"
import {useHistory, useLocation} from "react-router-dom";
import { api } from "../services/api";
import { saveUser } from "../util/auth";
import { useNavigate } from "react-router-dom";

const StyledModal = styled.div`
`

export default function Home() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    let navigate = useNavigate();

    const handleLogin = async () => {
        const data = { email: "br.moises@hotmail.com", password: "teste" };
        try {
            const response = await api.post('/auth/login', data);
            saveUser({ token: response.data.token });
            navigate('/tasks')
        } catch (erro) {
            console.error(erro);
        }
    };

    return (
        <Container fluid>
            <Row>
                <Col xs={8}><img src={homeBackground} /></Col>
                <Col xs={4}><button onClick={() => handleLogin()}>Logar</button></Col>
            </Row>
        </Container>
    );
}