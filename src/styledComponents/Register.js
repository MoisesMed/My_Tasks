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
  box-shadow:rgb(205 196 212) 4px 4px 6px 4px;
  border-radius: 30px;
  padding: 20px 40px;
  gap: 12px;
  margin: 0 20px;
`;

export default function Register({change}) {
  const [data, setData] = useState({ name: "", email: "", password: "",confirmpassword:" " });
  const [isLoading, setIsLoading] = useState(false);
  let navigate = useNavigate();

  const handleRegister = async () => {
    try {
      setIsLoading(true);
      const response = await api.post("/auth/register", data);
      toast.success(response.data.msg);
      change()
    } catch (error) {
      toast.error(error.response.data.msg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <StyledLoginDiv>
      <StyledTitle mid>Welcome to My Tasks !</StyledTitle>
      <StyledSpan mid gray>
        Create your account
      </StyledSpan>
      <div>
        <StyledSmallSpan>Name</StyledSmallSpan>
        <StyledLoginInput
          type="name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
      </div>
      <div>
        <StyledSmallSpan>Email</StyledSmallSpan>
        <StyledLoginInput
          type="email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
      </div>
      <div>
        <StyledSmallSpan>Password</StyledSmallSpan>
        <StyledLoginInput
          type="password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
      </div>
      <div>
        <StyledSmallSpan>Confirm password</StyledSmallSpan>
        <StyledLoginInput
          type="password"
          value={data.confirmpassword}
          onChange={(e) =>  setData({ ...data, confirmpassword: e.target.value })}
        />
      </div>
      <StyledCreateButton fit mid onClick={() => handleRegister()}>
        Login
      </StyledCreateButton>
      <StyledSpan mid gray>
        Already have account?
        <StyledLink onClick={() => change()}> Login!</StyledLink>
      </StyledSpan>
    </StyledLoginDiv>
  );
}
