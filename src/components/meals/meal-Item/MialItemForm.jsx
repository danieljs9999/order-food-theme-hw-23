import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../UI/Button";
import { ReactComponent as PlysIcons } from "../../../assets/icons/plusAdd.svg";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../../store/basket/basketReducer";

function MialItemForm({ id, title, price }) {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(1);

  const amountChangeHandler = (event) => {
    setAmount(+event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const basketItem = {
      id,
      price,
      title,
      amount,
    };

    dispatch(addToBasket(basketItem));
  };

  return (
    <StyledForm onSubmit={submitHandler}>
      <IputContiner>
        <label htmlFor={id}>Amount</label>
        <input
          value={amount}
          onChange={amountChangeHandler}
          type="number"
          id={id}
          min={1}
          max={5}
        />
      </IputContiner>
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

const IputContiner = styled.div`
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
