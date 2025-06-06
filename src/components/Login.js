import styled from "styled-components";
import React, { useState } from "react";
import { api } from "../services/api";
import { saveUser } from "../util/auth";
import { useNavigate } from "react-router-dom";
import {
  StyledCreateButton,
  StyledLink,
  StyledLoginInput,
  StyledSmallSpan,
  StyledSpan,
  StyledTitle,
} from "./StyledComponents";
import { toast } from "react-toastify";

const StyledLoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  background: #fefefe;
  box-shadow: rgb(205 196 212) 4px 4px 6px 4px;
  border-radius: 16px;
  padding: 20px 40px;
  gap: 12px;
  margin: 0 20px;
  max-width: 380px;
`;

export default function Login({ change }) {
  const [data, setData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  let navigate = useNavigate();

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };
  const handleLogin = async () => {
    try {
      setIsLoading(true);
      const response = await api.post("auth/login", data);
      saveUser({ token: response.data.token });
      window.location.reload();
      navigate("/tasks");
    } catch (error) {
      toast.error(error.response.data.msg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <StyledLoginDiv>
      <StyledTitle mid>Welcome back to My Tasks !</StyledTitle>
      <StyledSpan mid gray>
        Login in your account
      </StyledSpan>
      <div>
        <StyledSmallSpan>Email</StyledSmallSpan>
        <StyledLoginInput
          disabled={isLoading}
          type="email"
          value={data.email}
          onKeyPress={handleKeyPress}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
      </div>
      <div>
        <StyledSmallSpan>Password</StyledSmallSpan>
        <StyledLoginInput
          disabled={isLoading}
          type="password"
          value={data.password}
          onKeyPress={handleKeyPress}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
      </div>
      <StyledCreateButton
        disabled={isLoading}
        fit
        mid
        onClick={() => handleLogin()}
      >
        Login
      </StyledCreateButton>
      <StyledSpan mid gray>
        Don't have account?
        <StyledLink onClick={() => change()}> Register!</StyledLink>
      </StyledSpan>
    </StyledLoginDiv>
  );
}
