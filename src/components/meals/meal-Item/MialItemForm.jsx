import React from "react";
import styled from "styled-components";
import Button from "../../UI/button/Button";
import { ReactComponent as PlysIcons } from "../../../assets/icons/plusAdd.svg";

function MialItemForm({ id }) {
  return (
    <StyledForm>
      <Continer>
        <label htmlFor={id}>Amount</label>
        <input min={1} max={5} type="number" id={id} defaultValue={1} />
      </Continer>
      <Button>
        <StyledIcon /> Add
      </Button>
    </StyledForm>
  );
}

export default MialItemForm;

const StyledIcon = styled(PlysIcons)`
  margin-right: 10px;
`;

const Continer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;

  label {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #222222;
    margin-right: 20px;
  }

  input {
    box-sizing: border-box;
    border: 1px solid #d6d6d6;
    border-radius: 6px;
    width: 60px;
    outline: none;
    padding: 4px 12px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #222222;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
