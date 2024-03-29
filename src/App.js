import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import "./styles.css";
import React from "react";
import MainRoutes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  background-color: var(--brand-background-color);
`;

function App() {
  return (
    <Router>
      <StyledLayout>
        <MainRoutes />
      </StyledLayout>
      <ToastContainer autoClose={1500} />
    </Router>
  );
}

export default App;
