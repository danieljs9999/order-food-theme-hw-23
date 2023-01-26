import React from "react";
import styled from "styled-components";

function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

export default Button;

const StyledButton = styled.button`
  padding: 10px 32px;
  background: #5a1f08;
  border-radius: 30px;
  color: white;
  font-weight: 600;
  font-size: 16px;
  border: none;
  line-height: 24px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
