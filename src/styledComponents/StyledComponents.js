import styled from "styled-components";
import { Form } from "react-bootstrap";

export const StyledCreateButton = styled.div`
  cursor: pointer;
  color: #ffffff;
  border: 1px solid var(--brand-primary-color);
  text-align: center;
  font-weight: 550;
  border-radius: 16px;
  background-color: var(--brand-primary-color);
  min-width: 100px;
`;

export const StyledCancelButton = styled.div`
  cursor: pointer;
  color: var(--brand-primary-color);
  border: 1px solid var(--brand-primary-color);
  text-align: center;
  font-weight: 550;
  border-radius: 16px;
  background-color: #ffffff;
  min-width: 100px;
`;

export const StyledInput = styled.input`
  height: 28px;
  padding: 2px 4px;
  width: 100%;
  border: 1px solid #babaff;
  box-shadow: 0 4px 4px 2px #efe7f5;
  border-radius: 8px;
  margin: 0 0 8px 0;
  &:disabled {
    opacity: 0.4;
    :hover{
      cursor: not-allowed;
    }
  }
`;

export const StyledTextarea = styled.textarea`
  min-height: 100px;
  padding: 2px 4px;
  width: 100%;
  border: 1px solid #babaff;
  box-shadow: 0 4px 4px 2px #efe7f5;
  border-radius: 8px;
  margin: 0 0 8px 0;
  &:disabled {
    opacity: 0.4;
    :hover{
      cursor: not-allowed;
    }
  }
`;

export const StyledSelect = styled(Form.Select)`
  border: 1px solid #babaff;
  box-shadow: 0 4px 4px 2px #efe7f5;
  border-radius: 8px;
  margin-bottom: 8px;
  background-color:white;
  &:disabled {
    opacity: 0.4;
    :hover{
      cursor: not-allowed;
    }
  }
`;

export const StyledSmallSpan = styled.span`
  font-size: 14px;
  color: #636363;
  font-family: "Poppins";
`;

export const StyledSpan = styled.span`
  font-size: 18px;
  color: #636363;
  font-family: "Poppins";
`;

export const StyledTitle = styled.span`
  font-size: 24px;
  color: #636363;
  font-family: "Poppins";
`;
