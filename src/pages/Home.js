import styled from "styled-components";
import React, { useState ,useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeBackground from "../assets/homeBackground.svg"
import {useHistory, useLocation} from "react-router-dom";
import { api } from "../services/api";
import { isAuthenticated, saveUser } from "../util/auth";
import { useNavigate } from "react-router-dom";

const StyledModal = styled.div`
`

export default function Home() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    let navigate = useNavigate();

    const loginMoises = { email: "br.moises@hotmail.com", password: "teste" };
    const loginLivia = { email: "liviamrodrigueslmr@gmail.com", password: "Limaria!" };

    const handleLogin = async (who) => {
        try {
            let data = who === "moises"?loginMoises:loginLivia;
            const response = await api.post('/auth/login', data);
            saveUser({ token: response.data.token });
            window.location.reload()
            navigate('/tasks')
        } catch (erro) {
            console.error(erro);
        }
    };

    useEffect(() => {
        if (isAuthenticated()) {
            navigate('/tasks')
        }
    }, []);

    return (
        <Container fluid>
            <Row>
                <Col xs={8}><img src={homeBackground} /></Col>
                <Col xs={4}><button onClick={() => handleLogin("moises")}>Logar Moisés</button> <button onClick={() => handleLogin("livia")}>Logar Lívia</button></Col>
            </Row>
        </Container>
    );
}