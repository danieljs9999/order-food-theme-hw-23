import React from "react";
import styled from "styled-components";
import BasketButton from "./BasketButton";

function Header() {
  return (
    <Conteiner>
      <Logo>React Meals</Logo>
      <BasketButton></BasketButton>
    </Conteiner>
  );
}

export default Header;

const Conteiner = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: #8a2b06;
  margin: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 120px;
  padding-right: 120px;
`;

const Logo = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 38px;
  line-height: 57px;
  color: #ffffff;
  margin: 0;
`;

// const button = styled.button`
//   font-family: "Poppins";
//   font-style: normal;
//   font-weight: 600;
//   font-size: 38px;
//   line-height: 57px;
//   color: #ffffff;
//   margin: 0;
// `;
