import styled from "styled-components";
import { Form } from "react-bootstrap";

export const DefultButton = styled.button`
:disabled{
  opacity:0.6;
  &:hover{
    cursor: not-allowed;
  }
}
` 

export const StyledCreateButton = styled(DefultButton)`
  cursor: pointer;
  color: #ffffff;
  border: 1px solid var(--brand-primary-color);
  text-align: center;
  font-weight: 550;
  border-radius: 16px;
  background-color: var(--brand-primary-color);
  min-width: 100px;
  box-shadow: 0 4px 4px 2px #ebdff7;
  ${(props) => props.fit?'width: fit-content': 'width: 100%'};
  ${(props) => props.mid?'align-self: center': 'align-self: flex-start'};
  :hover{
    transform:scale(1.03);
  }
`;

export const StyledCancelButton = styled(DefultButton)`
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
    :hover {
      cursor: not-allowed;
    }
  }
`;

export const StyledLoginInput = styled.input`
  height: 32px;
  padding: 4px 8px;
  width: 100%;
  border: 1px solid #b0b0b0;
  box-shadow: 0 4px 4px 2px #efe7f5;
  border-radius: 16px;
  margin: 0 0 8px 0;
  :focus{
    outline: none;
    border:1px solid #BABAFF ;
}
  &:disabled {
    opacity: 0.4;
    :hover {
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
    :hover {
      cursor: not-allowed;
    }
  }
`;

export const StyledSelect = styled(Form.Select)`
  border: 1px solid #babaff;
  box-shadow: 0 4px 4px 2px #efe7f5;
  border-radius: 8px;
  margin-bottom: 8px;
  background-color: white;
  &:disabled {
    opacity: 0.4;
    :hover {
      cursor: not-allowed;
    }
  }
`;

export const StyledSmallSpan = styled.span`
  font-size: 14px;
  ${(props) => props.gray?'color: rgb(172, 172, 172)': 'color: #636363'};
  font-family: "Poppins";
  ${(props) => props.mid?'text-align: center;': 'text-align: flex-start;'};
`;

export const StyledLink = styled.a`
  font-size: 16px;
  text-decoration: none;
  color:#8B72D2;
  font-family: "Poppins";
  ${(props) => props.mid?'text-align: center;': 'text-align: flex-start;'};
  :hover{
    cursor:pointer;
  }
`;

export const StyledSpan = styled.span`
  font-size: 16px;
  ${(props) => props.gray?'color: rgb(172, 172, 172)': 'color: #636363'};
  font-family: "Poppins";
  ${(props) => props.mid?'text-align: center;': 'text-align: flex-start;'};
`;

export const StyledTitle = styled.span`
  font-size: 24px;
  ${(props) => props.gray?'color: rgb(172, 172, 172)': 'color: #636363'};
  font-family: "Poppins";
  ${(props) => props.mid?'text-align: center;': 'text-align: flex-start;'};
`;
