import styled from "styled-components";
import React, { useState } from "react";

const SyledLoadingDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;

const StyledLoadingSpinner = styled.div`
  align-self: center;
  width: 40px;
   height: 40px;
   display: grid;
   border-radius: 50%;
   -webkit-mask: radial-gradient(farthest-side,#0000 40%,#474bff 41%);
   background: linear-gradient(0deg ,rgba(71,75,255,0.5) 50%,rgba(71,75,255,1) 0) center/3.2px 100%,
        linear-gradient(90deg,rgba(71,75,255,0.25) 50%,rgba(71,75,255,0.75) 0) center/100% 3.2px;
   background-repeat: no-repeat;
   animation: spinner-d3o0rx 1s infinite steps(12);
  ::before,
  ::after {
    content: "";
    grid-area: 1/1;
    border-radius: 50%;
    background: inherit;
    opacity: 0.915;
    transform: rotate(30deg);
  }
  ::after {
    opacity: 0.83;
    transform: rotate(60deg);
  }
  @keyframes spinner-d3o0rx {
    100% {
      transform: rotate(1turn);
    }
  }
`;

export default function Loading() {
  return (
    <SyledLoadingDiv>
      <StyledLoadingSpinner />
    </SyledLoadingDiv>
  );
}
