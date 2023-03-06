/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import styled from 'styled-components'
import { styled as MuiStyled } from '@mui/material/styles'
import { useDispatch } from 'react-redux'
import { TextField } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { addToBasket } from '../../../store/basket/basket.slise'
import Button from '../../UI/Button'

function MialItemForm({ id, title, price }) {
  const dispatch = useDispatch()
  const [amount, setAmount] = useState(1)

  const amountChangeHandler = (event) => {
    setAmount(+event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()

    const basketItem = {
      id,
      price,
      title,
      amount,
    }

    dispatch(addToBasket(basketItem))
  }

  return (
    <StyledForm>
      <IputContiner>
        <label htmlFor={id}>Amount</label>

        <StyledTextField
          type="number"
          value={amount}
          onChange={amountChangeHandler}
          id={id}
          max={5}
          InputLabelProps={{
            shrin: true,
          }}
          inputProps={{ min: 1, max: 5 }}
        />
      </IputContiner>
      <Button onClick={submitHandler}>
        <StyledIcon /> Add
      </Button>
    </StyledForm>
  )
}

export default MialItemForm

const StyledTextField = MuiStyled(TextField)(() => ({
  '& 	.MuiOutlinedInput-input': {
    boxSizing: 'border-box',
    width: '60px',
    fontWeight: '500',
    fontSize: '16px',
  },
}))

const StyledIcon = styled(AddIcon)`
  margin-right: 10px;
`

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
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
