import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import styled from "styled-components";
import { styled as MuiStyled } from "@mui/system";

function BasketButton({ count, ...restProps }) {
  return (
    <>
      <Stack>
        <StyledButtonMui {...restProps}>
          <ShoppingCartOutlinedIcon />
          <StyledTitle>Your Cart</StyledTitle>
          <StyledCount id="counter"> {count || 0} </StyledCount>
        </StyledButtonMui>
      </Stack>
    </>
  );
}

export default BasketButton;

const StyledButtonMui = MuiStyled(Button)(() => ({
  "& ": {
    padding: "8px 32px",
    background: "#5a1f08",
    borderRadius: "30px",
    color: "white",
    fontWeight: "600",
    fontSize: "14px",
    border: "none",
    lineHeight: "24px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",

    ":hover": {
      background: "#722000",
    },
  },
}));

const StyledTitle = styled.span`
  margin-left: 12px;
  margin-right: 24px;
`;

const StyledCount = styled.span`
  background-color: #8a2b06;
  color: #ffffff;
  border-radius: 30px;
  padding: 4px 16px;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
`;
