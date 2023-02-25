import { Stack } from "@mui/system";
import { styled as MuiStyled } from "@mui/system";
import React from "react";
import { Button as MuiButton } from "@mui/material";

function Button({ children, onClick, variants = "contained", ...rest }) {
  return (
    <>
      <Stack>
        <StyledButtonMui onClick={onClick} variants={variants} {...rest}>
          {children}
        </StyledButtonMui>
      </Stack>
    </>
  );
}

export default Button;

const getBackgroundColor = (props) => {
  return props.variants === "contained" ? "#5a1f08" : "#fff";
};

const getBorder = (props) => {
  return props.variants === "contained" ? "none" : "1px solid #8a2b06";
};

const getColor = (props) => {
  return props.variants === "contained" ? "#fff" : "#8a2b06";
};

const StyledButtonMui = MuiStyled(MuiButton)((variants) => ({
  "& ": {
    padding: "10px 32px",
    background: getBackgroundColor(variants),
    borderRadius: "30px",
    color: getColor(variants),
    fontWeight: "600",
    fontSize: "16px",
    border: getBorder(variants),
    lineHeight: "24px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",

    ":hover": {
      backgroundColor: "#7e2a0a",
      color: "white",
    },

    ":active": {
      backgroundColor: "#7e2a0a",
    },
  },
}));
